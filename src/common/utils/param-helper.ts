/**
 * 检查参数是否错误或者为空
 */
function checkParamsIsNullOrError(params: Array<any>): boolean {
  for (const param of params) {
    if (param === '' || param === undefined || param === null || param === []) {
      return true;
    }
    if (Array.isArray(param) && param.length === 0) { return true; }
    if (Object.prototype.toString.call(param) === '[object Object]' && Object.keys(param).length === 0) { return true; }
  }
  return false;
}

/**
 * 检查对象是否错误或者所有value值都为空
 */
 function checkObjIsAllNull(obj) {
  // eslint-disable-next-line no-prototype-builtins
  if (!Object.prototype.isPrototypeOf(obj)) { return true; }
  let flat = true;
  for (const key in obj) {
    if (obj[key]) {
      flat = false;
      break;
    }
  }
  return flat;
}


export const paramHelper = {
  checkParamsIsNullOrError,
  checkObjIsAllNull
};