import { ResponseMsg, PagingResponseMsg } from './response-types';
import { NormalResponseOption, ErrorResponseOption } from './response-options';
import { errorMessages } from './errors';

export const ResponseUtils = {
 
  getErrorMessage(errorNo: number): string {
    let _msg = 'Unknown Error!';
    if (errorMessages && errorMessages.has(errorNo)) {
      _msg = errorMessages.get(errorNo);
    }
    return _msg;
  },
  /* normal response */
  normal<T>(option: NormalResponseOption<T>): ResponseMsg<T> | PagingResponseMsg<T> {
    const responseMsg: ResponseMsg<T> | PagingResponseMsg<T> = {
      status: 200,
      headers: Object.assign({}, option.header || {}),
      body: {
        code: 0,
        message: null,
        data: option.data
      }
    };
    if (option.totalCount >= 0) {
      (responseMsg as PagingResponseMsg<T>).body.totalCount = option.totalCount;
    }
    if (option.pageNo && option.pageSize && option.totalCount >= 0) {
      (responseMsg as PagingResponseMsg<T>).body.pageSize = option.pageSize;
      (responseMsg as PagingResponseMsg<T>).body.pageNo = option.pageNo;
      (responseMsg as PagingResponseMsg<T>).body.pageCount = Math.ceil(option.totalCount / option.pageSize);
    }
    return responseMsg;
  },

  /* error response */
  error<T>(option: ErrorResponseOption): ResponseMsg<T> {
    const responseMsg: ResponseMsg<T> = {
      status: 200,
      headers: Object.assign({}, option.header || {}),
      body: {
        code: option.error_no,
        message: option.error_message ? option.error_message : ResponseUtils.getErrorMessage(option.error_no),
        data: null
      }
    };
    return responseMsg;
  },

  /**
   * 判断是否为自定义接口错误响应
   */
  isError(errorMsg: string) {
    return /{"code":[^0]\d+?,"message":".*","data":null}/.test(errorMsg);
  }
};
