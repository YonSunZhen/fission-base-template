import * as shell from 'shelljs';
import { FISSION_CLI, PKG_CONFIG, FnType } from './config';

export async function createFn(fn: FnType) {
  const _promiseArr = [];
  for(const key in fn) {
    let _fnConf;
    const item = fn[key];
    if(item.executortype === 'newdeploy') {
      _fnConf = FISSION_CLI + `fn create --name=${item.name}  --executortype=newdeploy --minscale=1 --maxscale=10 --configmap=devminus-shared-mariadb --env=${PKG_CONFIG.env} --entrypoint=${item.entrypoint} --pkgname=${PKG_CONFIG.name} --spec`;
    } else {
      _fnConf = FISSION_CLI + `fn create --name=${item.name}  --configmap=devminus-shared-mariadb --env=${PKG_CONFIG.env} --entrypoint=${item.entrypoint} --pkgname=${PKG_CONFIG.name} --spec`;
    }
    const _promise = new Promise((res, rej) => {
      shell.exec(_fnConf, function (code, stdout, stderr) {
        if (code === 0) {
          res(stdout);
        } else {
          rej(stderr);
        }
      });
    });
    _promiseArr.push(_promise);
  }
  return Promise.all(_promiseArr);
}