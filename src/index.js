'use strict';
const log4js = require('log4js');
const mkdirp = require('mkdirp');
const os = require('os');
const { resolve, isAbsolute } = require('path');

const ENV_PUB = 'pub';        // 线上
const ENV_QA = 'qa';          // qa测试
const ENV_PROFILE = 'profile';// 开发联调
const ENV_DEV = 'dev';        // 本地开发
const ENV_QUEUE = [ENV_PUB, ENV_QA, ENV_PROFILE, ENV_DEV];

const PROJECT_ROOT_LOG_PATH = resolve(__dirname, '../../../../logs');

let configured = false;
let accessLogger;
let errorLogger;

const config = {
  // 日志路径
  logDir: '/opt/logs/nodejs',
  // [optional] windows 下的日志路径，一般用于开发环境,默认放在node_modules目录相同的目录下:
  // node_modules/easy-logger-node/src/index.js
  winLogDir: PROJECT_ROOT_LOG_PATH,
  // log4js的日志格式
  pattern: '[%z][%d{ISO8601_WITH_TZ_OFFSET}][%-5p] %m',
  // 生产环境和开发环境的日志等级
  logLevel: ['INFO'/* pub */, 'DEBUG'],
  envs: ENV_QUEUE, /* ,
    pm2:{
        instanceId: 0
    } */
};

function init() {
  let {
    logDir, winLogDir, pattern, logLevel,
  } = config;
  const env = process.env.NODE_ENV;
  const isDevEnv = env === ENV_DEV;
  const envIndex = ENV_QUEUE.indexOf(process.env.NODE_ENV);
  if (envIndex === -1) {
    throw new Error(`process.env.NODE_ENV = ${env} is not a valid env string, env must be one of [${ENV_PUB},${ENV_QA},${ENV_PROFILE},${ENV_DEV}]`);
  }

  const isWin = os.platform() === 'win32';
  const level = typeof logLevel === 'string' ? logLevel : logLevel[Math.min(envIndex, logLevel.length - 1)];

  if (isWin) {
    logDir = isAbsolute(winLogDir) ? winLogDir : resolve(__dirname,  '../../../../', winLogDir);
  } else if (isDevEnv) {
    // unix操作系统，本地开发环境日志打到项目根目录下
    logDir = PROJECT_ROOT_LOG_PATH;
  }

  console.log('日志输出路径为:', logDir);
  // 确保日志目录有读写权限
  mkdirp.sync(logDir, parseInt('0777', 8));
  mkdirp.sync(resolve(logDir, 'monitor'), parseInt('0777', 8));
  log4js.configure({
    appenders: [
      {
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: pattern,
        },
      },
      {
        type: 'dateFile',
        filename: `${logDir}/access.log`,
        usefsync: true,
        category: 'access',
        layout: {
          type: 'pattern',
          pattern: pattern,
        },
        pattern: '-yyyy-MM-dd.log',
      },
      {
        type: 'dateFile',
        filename: `${logDir}/monitor/error.log`,
        usefsync: true,
        category: 'error',
        layout: {
          type: 'pattern',
          pattern: pattern,
        },
        pattern: '-yyyy-MM-dd.log',
      }, // 2016-04-15T19:01:57+0800 ERROR xxxmsg
    ],
    levels: {
      access: level,
      error: 'ERROR',
    },
  });
  // 2.x版本的配置
  // log4js.configure({
  //     appenders:{
  //         console: {
  //             type: 'console',
  //             layout: {
  //                 type: 'pattern',
  //                 pattern: pattern
  //             }
  //         },
  //         access: {
  //             type: `file`,
  //             filename: `${logDir}/access.log`,
  //             usefsync: true,
  //             layout: {
  //                 type: 'pattern',
  //                 pattern: pattern
  //             }
  //         },
  //         error: {
  //             type: `file`,
  //             filename: `${logDir}/monitor/error.log`,
  //             usefsync: true,
  //             layout: {
  //                 type: 'pattern',
  //                 pattern: pattern
  //             }
  //         }
  //     },
  //     categories: {
  //         default: {
  //             appenders: ['console'],
  //             level
  //         },
  //         access: {
  //             appenders: ['console', 'access'],
  //             level
  //         },
  //         error: {
  //             appenders: ['console', 'error'],
  //             level
  //         }
  //     },
  //     pm2: true,
  //     pm2InstanceVar: pm2.instanceId
  // });

  accessLogger = log4js.getLogger('access');
  errorLogger = log4js.getLogger('error');
}

function getLogger(tag) {
  if (!configured) {
    throw new Error('easy-logger-node need be configured first! see:https://github.com/zhangkun-Jser/easy-logger-node.git');
  }

  const wrappedTag = `[${tag}]`;

  return {
    trace: (...args) => accessLogger.trace(wrappedTag, ...args),
    debug: (...args) => accessLogger.debug(wrappedTag, ...args),
    info: (...args) => accessLogger.info(wrappedTag, ...args),
    warn: (...args) => accessLogger.warn(wrappedTag, ...args),
    error: (...args) => errorLogger.error(wrappedTag, ...args),
    fatal: (...args) => errorLogger.fatal(wrappedTag, ...args),
  };
}

function configure(options) {
  if (options.envs) {
    console.warn('env属性即将在下一个版本中废弃，请勿使用!若要针对不同环境输出不同的日志等级，请直接使用logLevel的数组形式');
  }
  Object.assign(config, options || {});
  init();
  configured = true;
}

module.exports = { getLogger, configure };
