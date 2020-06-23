import createLogger from './winston';
import createHTTPLogger from './morgan';
import { Logger } from '../../repositories/interfaces/Logger';

export {
  Logger,
  createLogger,
  createHTTPLogger,
};
