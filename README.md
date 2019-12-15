# easy-logger-node
node.js端的通用日志组件，基于log4js封装，提供默认、通用的日志输出配置，使用简单，上手方便。。

[![NPM](https://nodei.co/npm/auto-form-create.png)](https://nodei.co/npm/auto-form-create/)

## 使用方法
### 安装
```sh
npm i easy-logger-node -S
```

### 使用
```javascript
const {getLogger, configure} = require('easy-logger-node');

//对日志路径和格式及输出等级进行配置。使用前，必须先调用configure方法，可以不传任何参数，这样会使用默认配置
configure({
    logDir: '/opt/logs/koala'
});

const {trace, debug, info, warn, error, fatal} = getLogger('app/entry');

debug('hello world');
//[49040][2018-02-28T14:29:31.489+0800][DEBUG ] [app/entry] hello world

```

### 配置
1. `logDir`: linux日志文件输出路径，linux机器默认路径为`/opt/logs/nodejs`
2. `winlogDir`: windows开发机器（根据操作系统是否为windows来判断）默认日志路径，默认为node_modules同级目录，可以指定相对路径和绝对路径来覆盖默认的日志路径。
    - 相对路径相对于node_modules目录。比如`./logs/` 为node_modules目录
    - 绝对路径。根据[path.isAbsolute](https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_isabsolute_path)来判断是否为绝对路径
3. `pattern`: 日志的格式，为log4js的默认参数。参见[log4js](https://log4js-node.github.io/log4js-node/layouts.html)文档。默认为：`[%z][%d{ISO8601_WITH_TZ_OFFSET}][%-5p] %m`
4. logLevel： 日志输出等级。支持字符串和数组
    - 字符串：可以为`TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`, `FATAL`中的任意一个。一旦指定则不区分环境，统一使用该日志级别
    - 数组：必须包含至少二个元素，最多四个元素。分别对应生产、测试、联调、开发本地四个环境的日志输出等级。当数组元素小于4个时，代表最后面的环境使用数组最后一个日志等级。默认值为：
        ```javascript
        ['INFO'/*生产环境*/, 'DEBUG' /*非生产环境*/]
        ```

5. envs: [即将废弃,不建议使用] 环境的标识名。默认为`['pub', 'qa', 'profile', 'dev']`。
6. pm2: pm2的相关配置，支持instanceId属性，与pm2.json的配置对应

### 特性
1. trace、debug、info、warn四个方法的日志会默认输出到access.log中。error、fatal会输出到error.log中

2. 默认日志规范
    - 访问日志：/opt/logs/serviceId/access.log
    - 错误日志：/opt/logs/serviceId/monitor/error.log


## changelog
### v1.2.0 
- 支持四种环境：pub、qa、profile、dev分别设置日志等级
- unix操作系统下，dev环境的日志输出路径设置为项目的根目录，其他环境使用logDir
- 重构代码，符合ESLINT规范
- 废弃envs配置属性
