import * as index from '../../src/index';

export interface FnType {
  test: FnInfo;
}

interface FnInfo {
  name: string; 
  entrypoint: string;
  executortype: 'newdeploy' | 'poolmgr';
}


function getFnName(fn: () => any) {
  return 'index.' + fn.name;
}

export const FN_CONFIG: FnType = {
  test: {
    name: 'test',
    entrypoint: getFnName(index.test),
    executortype: 'poolmgr'
  }
};