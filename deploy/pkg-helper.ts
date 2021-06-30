import * as shell from 'shelljs';
import { FISSION_CLI, PkgInfo } from './config';

export async function createPkg(pkg: PkgInfo) {
  return new Promise((res, rej) => {
    const _pkgConfig = FISSION_CLI + `pkg create --env=${pkg.env} --src=${pkg.src} --name=${pkg.name} --spec`;
    shell.exec(_pkgConfig, function (code, stdout, stderr) {
      if (code === 0) {
        res(stdout);
      } else {
        rej(stderr);
      }
    });
  });
}