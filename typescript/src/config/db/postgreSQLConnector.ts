import { createConnection } from 'typeorm';
import { join } from 'path';

import DBConnector from './DBConnector';

const connector: DBConnector = {
  async connect(config) {
    const entityPath = join(__dirname, '../../models/*.ts');

    await createConnection({
      type: 'postgres',
      url: config.url,
      entities: [entityPath],
      synchronize: true,
    });
  },
  close() {
    return new Promise(resolve => resolve());
  },
};

export default connector;
