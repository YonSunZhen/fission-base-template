import URL from 'url';
import * as multiparty from 'multiparty';

export * from './param-helper';
export * from './db-helper';
export * from './day-helper';

export interface Context {
  request?: {
    body?: any;
    url?: string;
    headers?: any;
    method?: string;
  },
  response?: {
  }
}

export function strToNumber(str) {
  if (Object.prototype.toString.call(str) === '[object Number]') {
    return str;
  }
  const strNum = parseInt(str);
  if (isNaN(strNum)) {
    return null;
  }
  return strNum;
}

export function getQueryFromUrl(url: string) {
  const url_parts = URL.parse(url, true);
  const query = url_parts.query; 
  return query as any;
}

export function genPathKey(str: string) {
  return `x-fission-params-${str}`;
}

export function getFilesFromRequest(req: any): Promise<{field: any, file: any}> {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form();
      form.parse(req, function(err,field,file) {
        if(err) {
          reject(err);
        }
        resolve({
          field: field,
          file: file
        });
      });
  });
}

/**
 * 生成指定区间的随机整数
 * 比如生成[0,100]的闭区间随机整数，randomN(0,100)
 */
export function randomN(n, m) {
  const random = Math.floor(Math.random() * (m - n + 1) + n);
  return random;
}
