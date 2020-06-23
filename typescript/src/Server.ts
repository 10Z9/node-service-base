import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as spdy from 'spdy';

import PlugableServer, { VerbFunc } from './PlugServer';

export interface ServerConfig {
  port: number;
  enableTLS: boolean;
  key?: string;
  cert?: string;
  ca?: string;
}

class Server implements PlugableServer {
  app: express.Express

  constructor(httpLogger: express.RequestHandler) {
    this.app = express();

    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(httpLogger);
  }

  start(config: ServerConfig): Promise<void> {
    return new Promise((resolve) => {
      if (config.enableTLS) {
        const secureOptions = { key: config.key, cert: config.cert, ca: config.ca };
        const server = spdy.createServer(secureOptions, this.app);
        server.listen(config.port, resolve);
      } else {
        const server = http.createServer(this.app);
        server.listen(config.port, resolve);
      }
    });
  }
  
  use: VerbFunc = (...params) => { this.app.use(...params) };
  get: VerbFunc = (...params) => { this.app.get(...params) };
  post: VerbFunc = (...params) => { this.app.post(...params) };
  patch: VerbFunc = (...params) => { this.app.patch(...params) };
  delete: VerbFunc = (...params) => { this.app.delete(...params) };
}

export default Server;
