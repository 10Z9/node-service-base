import profiler = require('@google-cloud/profiler');
import 'reflect-metadata';

import { dbConnector, config, logger, httpLogger } from './config';
import Server from './Server';
import AccountController from './controllers/AccountController';

async function main(): Promise<void> {
  logger.info(`start @${config.serviceName}`);

  await dbConnector.connect(config.database);
  logger.info('connect to database success');

  const server = new Server(httpLogger);
  await server.start(config.server);
  logger.info(`server is running on port ${config.server.port}. TLS ${config.server.enableTLS ? 'enable' : 'disable'}`);

  const accountController = new AccountController(logger);
  accountController.connectServer(server);
}

function runStackProfiler(): void {
  if (config.stackProfiler.enable) {
    logger.info('stack profiler is running');
    const { serviceNameWithEnv, version } = config;
  
    profiler.start({
      serviceContext: {
        service: serviceNameWithEnv,
        version,
      },
      logLevel: 3,
    });
  } else {
    logger.info('stack profiler is not running');
  }
}

function printInformation(): void {
  logger.debug(`config: ${JSON.stringify(config)}`);
}

main()
  .then(runStackProfiler)
  .then(printInformation);

process.on('SIGINT', async () => {
  logger.info(`exit @${config.serviceName}`);
  await dbConnector.close();
  process.exit(0);
});
