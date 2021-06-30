import * as shell from 'shelljs';
import { FISSION_CLI, TimerInfo } from './config';

export async function createTimer(timer: TimerInfo[]) {
  const _promiseArr = [];
  for(const item of timer) {
    const _timerConf = FISSION_CLI + `timer create --name=${item.name} --function=${item.functionName} --cron="${item.cron}" --spec`;
    const _promise = new Promise((res, rej) => {
      shell.exec(_timerConf, function (code, stdout, stderr) {
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