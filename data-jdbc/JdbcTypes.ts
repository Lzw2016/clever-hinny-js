import { SortType } from "./JdbcEnum";

/**
 * SQL参数类型
 */
export type SqlParamType = JChar | JString | JInt | JLong | JFloat | JDouble | JBigDecimal | JBoolean | JDate | Date | number | string | boolean | null;

/**
 * SQL参数Map
 */
export interface SqlParamMap {
    [name: string]: SqlParamType;
}

/**
 * 数据库字段值类型
 */
export type SqlFieldType = JChar | JString | JInt | JLong | JFloat | JDouble | JBigDecimal | JBoolean | JDate | JSqlDate | JSqlTime | JSqlTimestamp;

/**
 * 通用数据库实体类型
 */
export interface AnyEntity {
    [key: string]: SqlFieldType;
}

/**
 * 数据库数据行
 */
export type DataRowMap = JMap<JString, SqlFieldType>;


/**
 * 查询排序参数
 */
export interface QueryBySort {
    /**
     * 排序字段(单字段排序-低优先级)
     */
    orderField?: JString;
    /**
     * 排序类型ASC DESC(单字段排序-低优先级)
     */
    sort?: SortType;

    /**
     * 排序字段集合(多字段排序-高优先级)
     */
    orderFields?: Array<JString>;
    /**
     * 排序类型 ASC DESC(多字段排序-高优先级)
     */
    sorts?: Array<SortType>;

    /**
     * 排序字段 映射Map
     */
    fieldsMapping: { [name: string]: JString };
}

/**
 * 查询分页参数
 */
export interface QueryByPage extends Partial<QueryBySort> {
    /**
     * 每页的数据量(1 <= pageSize <= 100)
     */
    pageSize?: JInt;
    /**
     * 当前页面的页码数(pageNo >= 1)
     */
    pageNo?: JInt;
    /**
     * 是否进行 count 查询
     */
    isSearchCount?: JBoolean;

    // /** 查询参数 */
    // [name: string]: SqlParamType;
}