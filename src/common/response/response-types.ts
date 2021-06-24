// 正常响应格式
export type Header = any;

export interface ResponseMsg<T> {
  status: 200,
  headers: Header,
  body: ResponseBody<T>
}

export interface ResponseBody<T> {
  code: number;
  message: string;
  data: T;
}

export interface PagingResponseMsg<T> {
  status: 200,
  headers: Header,
  body: PagingResponseBody<T>
}

export interface PagingResponseBody<T> {
  code: number;
  message: string;
  data: T;
  totalCount?: number; // 数据总条数
  pageNo?: number; // 当前页码
  pageSize?: number; // 页大小
  pageCount?: number; // 总页数
}


// export interface BatchResponseBody<T> {
//   succeed: Array<T>;
//   failed: Array<T>;
// }

// // 批量处理类型的接口的响应格式
// export interface BatchResponseMsg<T> {
//   code: number;
//   message: string;
//   data: BatchResponseBody<T>;
//   totalCount: number; // 总条数
//   repeatCount: number; // 重复条数
//   succeedCount: number; // 成功数
//   failedCount: number; // 失败数
// }
