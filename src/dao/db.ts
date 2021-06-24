
import Knex from 'knex';
import { readFileSync } from 'fs';
import config from '@config';

const _db_host = readFileSync(config.db.host);
const _db_port = readFileSync(config.db.port);
const _db_username = readFileSync(config.db.username);
const _db_password = readFileSync(config.db.password);


export const db_conn = {
  'host': _db_host.toString(),
  'port': _db_port.toString(),
  'user': _db_username.toString(),
  'password': _db_password.toString(),
  'database': 'database'
};

export const db = Knex({
  debug: false,
  client: 'mysql',
  connection: db_conn,
  pool: { min: 0, max: 10 },
  acquireConnectionTimeout: 100000
});

