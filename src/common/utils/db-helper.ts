/**
 * model: 精确查询
 * modelLike: 对 model 进行 andWhere 模糊查询
 * modelOrLike: 对 model 进行 orWhere 模糊查询
 * modelIn: 对 model 进行 whereIn 查询
 */
export interface DaoType<Model = any> {
  pageNo?: number;
  pageSize?: number;
  model?: Model;
  modelLike?: DaoModelLike<Model>;
  modelOrLike?: DaoModelOrLike<Model>;
  modelIn?: DaoModelIn<Model>;
}
export type DaoModelLike<Model = any> = {
  [P in keyof Model]?: Model[P];
}
export type DaoModelOrLike<Model = any> = {
  [P in keyof Model]?: Model[P];
}
export type DaoModelIn<Model = any> = {
  [P in keyof Model]?: Array<Model[P]>;
}

export function DataOptions<T>(options: T): T {
  if (!options) {
    return {} as T;
  }
  options = { ...options };
  for (const key in options) {
    if (options[key] === undefined) {
      delete options[key];
    }
  }
  return options;
}

export function DataOptionsNewKey<T>(options: T, tableName: string): T {
  if (!options) {
    return {} as T;
  }
  options = { ...options };
  for (const key in options) {
    if (options[key] !== undefined) {
      const newKey = `${tableName}.${key}`;
      options[newKey] = options[key];
    }
    delete options[key];
  }
  return options;
}