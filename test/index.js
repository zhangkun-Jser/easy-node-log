const http = require('http');
const {getLogger, configure} = require('../src/index');
const path = require('path');
configure({
        winLogDir: path.resolve(__dirname, 'logs'),
        logLevel: ['WARN', 'ERROR', 'INFO', 'DEBUG'],
        envs: []
});

const {trace, debug, info, warn,error,fatal} = getLogger('app/entry');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    console.log('---------------')
    trace(`request incomming`);
    info(`request incomming`);
    warn(`request incomming`);
    error(`request incomming`);
    fatal(`request incomming`);
    debug(`request incomming`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello @bizfe/biz-logger\n');
  });
  
server.listen(port, hostname, () => {
    trace(`Server running at http://${hostname}:${port}/`);
    debug(`Server running at http://${hostname}:${port}/`);
    error(`Server running at http://${hostname}:${port}/`);
   
});