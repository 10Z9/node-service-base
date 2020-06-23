import dbConnector from './db';
import { createLogger, createHTTPLogger, Logger } from './logger';
import configs from './configs';
import envConfigs from './envConfigs';

const config = { ...configs, ...envConfigs };
const { serviceName, nodeENV, logLevel } = config;

const logger = createLogger({ serviceName, nodeENV, logLevel });
const httpLogger = createHTTPLogger(logger);

export {
  dbConnector,
  logger,
  httpLogger,
  config,
  Logger,
};
