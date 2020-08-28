export enum DbType {
    MYSQL = "mysql",
    MARIADB = "mariadb",
    ORACLE = "oracle",
    DB2 = "db2",
    H2 = "h2",
    HSQL = "hsql",
    SQLITE = "sqlite",
    POSTGRE_SQL = "postgresql",
    SQL_SERVER2005 = "sqlserver2005",
    SQL_SERVER = "sqlserver",
    DM = "dm",
    OTHER = "other",
}

/**
 * 排序类型
 */
export enum SortType {
    /**
     * 由小到大排序
     */
    ASC = "ASC",
    /**
     * 由大到小排序
     */
    DESC = "DESC",
}
