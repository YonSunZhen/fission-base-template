import * as index from './controller';
import { Context } from '@common/utils';

export async function test(ctx?: Context) {
  return await index.test(ctx);
}