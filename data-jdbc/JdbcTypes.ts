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