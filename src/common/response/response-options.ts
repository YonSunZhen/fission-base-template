
export interface NormalResponseOption<T> {
  data: T;
  header?: Record<string, any>;
  pageNo?: number;
  pageSize?: number;
  totalCount?: number;
}

export interface ErrorResponseOption {
  header?: Record<string, any>;
  error_no: number;
  error_message?: string;
}

export interface BatchResponseOption<T> {
  succeedData: Array<T>;
  failedData: Array<T>;
  totalCount?: number;
  repeatCount?: number;
}