import * as shell from 'shelljs';
import { FN_CONFIG, TIMER_CONFIG, FISSION_CLI, PKG_CONFIG } from './config';
import { createPkg } from './pkg-helper';
import { createFn } from './fn-helper';
import { createTimer } from './timer-helper';

const SPEC_INIT: { name: string } = { name: 'sync-plm' };

async function _init() {
  return new Promise((res, rej) => {
    const _gulp = 'gulp';
    const _specInit = FISSION_CLI + `spec init --name=${SPEC_INIT.name}`;
    shell.exec(`${_gulp} && ${_specInit}`, function (code, stdout, stderr) {
      if (code === 0) {
        res(stdout);
      } else {
        rej(stderr);
      }
    });
  });
}

async function _apply() {
  return new Promise((res, rej) => {
    const _gulp = 'gulp';
    const _specInit = FISSION_CLI + 'spec apply';
    shell.exec(`${_gulp} && ${_specInit}`, function (code, stdout, stderr) {
      if (code === 0) {
        res(stdout);
      } else {
        rej(stderr);
      }
    });
  });
}


(async () => {
  try {
    console.error('start');
    await _init();
    await createPkg(PKG_CONFIG);
    await createFn(FN_CONFIG);
    await createTimer(TIMER_CONFIG);
    await _apply();
    console.error('finished');

  } catch (error) {
    console.error(error);
  }

})();
