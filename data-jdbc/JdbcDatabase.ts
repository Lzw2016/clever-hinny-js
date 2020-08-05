/**
 * SQL参数类型
 */
export type SqlParamType = JChar | JString | JInt | JLong | JDouble | JBigDecimal | JBoolean | JDate | Date | number | string | boolean | null;

/**
 * SQL参数Map
 */
export interface SqlParamMap {
    [name: string]: SqlParamType;
}

/**
 * 数据库字段值类型
 */
export type SqlFieldType = JChar | JString | JInt | JLong | JDouble | JBigDecimal | JBoolean | JDate | JSqlDate | JSqlTime | JSqlTimestamp;

/**
 * 通用数据库实体类型
 */
export interface AnyEntity extends JMap<string, SqlFieldType> {
    [name: string]: SqlFieldType;
}

export interface BatchData<T = AnyEntity> {
    /**
     * 列名称集合
     */
    getColumnNames(): JList<string>;

    /**
     * 列类型集合
     */
    getColumnTypes(): JList<JInt>;

    /**
     * 列宽(列数)
     */
    getColumnCount(): JInt;

    /**
     * 当前批次数
     */
    getRowDataList(): JList<T>;

    /**
     * 当前读取的行数
     */
    getRowCount(): JInt;

    /**
     * 返回当前批次数据量
     */
    getBatchCount(): JInt;
}

export interface RowData<T = AnyEntity> {
    /**
     * 列名称集合
     */
    getColumnNames(): JList<string>;

    /**
     * 列类型集合
     */
    getColumnTypes(): JList<JInt>;

    /**
     * 列宽(列数)
     */
    getColumnCount(): JInt;

    /**
     * 当前行数据
     */
    getRowData(): T;

    /**
     * 当前读取的行数
     */
    getRowCount(): JInt;
}

/**
 * 游标读取数据回调函数(批量读取)
 */
export interface BatchQueryCallback<T = AnyEntity> {
    (batchData: BatchData<T>): void;
}

/**
 * 游标读取数据回调函数
 */
export interface QueryCallback<T = AnyEntity> {
    (batchData: RowData<T>): void;
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

/**
 * 查询排序参数
 */
export interface QueryBySort {
    /**
     * 排序字段(单字段排序-低优先级)
     */
    orderField?: string;
    /**
     * 排序类型ASC DESC(单字段排序-低优先级)
     */
    sort?: SortType;

    /**
     * 排序字段集合(多字段排序-高优先级)
     */
    orderFields?: Array<string>;
    /**
     * 排序类型 ASC DESC(多字段排序-高优先级)
     */
    sorts?: Array<SortType>;

    /**
     * 排序字段 映射Map
     */
    fieldsMapping: { [name: string]: string };
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
}

export interface OrderItem {
    /**
     * 需要进行排序的字段
     */
    getColumn(): string;

    /**
     * 是否正序排列，默认 true
     */
    isAsc(): JBoolean;
}

/**
 * 分页查询返回值
 */
export interface IPage<T = AnyEntity> {
    /**
     * 当前页，默认 1
     */
    getCurrent(): JLong;

    /**
     * 获取排序信息，排序的字段和正反序
     */
    orders(): JList<OrderItem>;

    /**
     * 当前分页总页数
     */
    getPages(): JLong;

    /**
     * 分页记录列表
     */
    getRecords(): JList<T>;

    /**
     * 进行 count 查询 【 默认: true 】
     */
    isSearchCount(): JBoolean;

    /**
     * 当前分页总页数
     */
    getSize(): JLong;

    /**
     * 当前满足条件总行数
     */
    getTotal(): JLong;
}

export interface KeyHolder {
    /**
     * 所有自动生成的key
     */
    getKeysList(): JList<JMap<string, SqlFieldType>>;

    /**
     * 当keysList只有一个元素时，才有这个值，值就是那个元素
     */
    getKeys(): JMap<string, SqlFieldType>;

    /**
     * 当keys只有一个元素时，才有这个值，值就是那个元素的value <br />
     * 一般是自增长主键值
     */
    getKey(): any;
}

/**
 * sql insert 返回值
 */
export interface InsertResult {
    /**
     * 新增数据量
     */
    getInsertCount(): JInt;

    /**
     * Insert时，数据库自动生成的key
     */
    getKeyHolder(): KeyHolder;

    /**
     * 当更新数据只有一个自动生成的key时，才会有这个字段，其值就是自动生成的key的值<br />
     * 一般是自增长主键值
     */
    getKeyHolderValue(): any;
}

/**
 * 事务状态
 */
export interface TransactionStatus {
    /**
     * 将底层会话刷新到数据存储（如果适用）
     */
    flush(): void;

    /**
     * 此事务是否在内部携带保存点，即是否已基于保存点创建为嵌套事务
     */
    hasSavepoint(): JBoolean;

    /**
     * 此事务是否已完成，即是否已提交或回滚
     */
    isCompleted(): JBoolean;

    /**
     * 当前事务是否为新事务；否则将参与现有事务，或者可能不会首先在实际事务中运行
     */
    isNewTransaction(): JBoolean;

    /**
     * 事务是否已标记为仅回滚（由应用程序或事务基础结构标记）
     */
    isRollbackOnly(): JBoolean;

    /**
     * 仅设置事务回滚。这将指示事务管理器事务的唯一可能结果可能是回滚，作为引发异常的替代方法，后者将反过来触发回滚
     */
    setRollbackOnly(): void;
}

/**
 * 事务内操作回调函数
 */
export interface ActionInTX<T = any> {
    (status: TransactionStatus): T;
}

/**
 * 事务隔离级别
 */
export enum IsolationLevel {
    /**
     * 使用底层数据存储的默认隔离级别
     */
    DEFAULT = -1,
    /**
     * 未提交读<br />
     * 可能发生脏读、不可重复读和幻象读
     */
    READ_UNCOMMITTED = 1,
    /**
     * 提交读<br />
     * 可能发生不可重复读和幻象读
     */
    READ_COMMITTED = 2,
    /**
     * 可重读读<br />
     * 可能发生虚读
     */
    REPEATABLE_READ = 4,
    /**
     * 串行化
     */
    SERIALIZABLE = 8
}

/**
 * 事务传递特性
 */
export enum Propagation {
    /**
     * 如果当前没有事务，就新建一个事务，如果已经存在一个事务中，加入到这个事务中。这是最常见的选择
     */
    REQUIRED = 0,
    /**
     * 支持当前事务，如果当前没有事务，就以非事务方式执行
     */
    SUPPORTS = 1,
    /**
     * 使用当前的事务，如果当前没有事务，就抛出异常
     */
    MANDATORY = 2,
    /**
     * 新建事务，如果当前存在事务，把当前事务挂起
     */
    REQUIRES_NEW = 3,
    /**
     * 以非事务方式执行操作，如果当前存在事务，就把当前事务挂起
     */
    NOT_SUPPORTED = 4,
    /**
     * 以非事务方式执行，如果当前存在事务，则抛出异常
     */
    NEVER = 5,
    /**
     * 如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与PROPAGATION_REQUIRED类 似的操作
     */
    NESTED = 6
}

/**
 * JDBC数据库操作对象
 */
export interface JdbcDataSource {
    /**
     * 获取数据库类型
     */
    getDbType(): DbType;

    /**
     * 当前数据源是否关闭
     */
    isClosed(): boolean;

    /**
     * 关闭当前数据源
     */
    close(): void;

    // --------------------------------------------------------------------------------------------
    // Query 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 查询一条数据，返回一个Map
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryMap<T = AnyEntity>(sql: string, paramMap: SqlParamMap): T;

    /**
     * 查询一条数据，返回一个Map
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryMap<T = AnyEntity>(sql: string): T;

    /**
     * 查询多条数据，返回一个Map数组
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryList<T = AnyEntity>(sql: string, paramMap: SqlParamMap): JList<T>;

    /**
     * 查询多条数据，返回一个Map数组
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryList<T = AnyEntity>(sql: string): JList<T>;

    /**
     * 查询返回一个 String
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryString(sql: string, paramMap: SqlParamMap): string;

    /**
     * 查询返回一个 String
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryString(sql: string): string;

    /**
     * 查询返回一个 Long
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryLong(sql: string, paramMap: SqlParamMap): JLong;

    /**
     * 查询返回一个 Long
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryLong(sql: string): JLong;

    /**
     * 查询返回一个 Double
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryDouble(sql: string, paramMap: SqlParamMap): JDouble;

    /**
     * 查询返回一个 Double
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryDouble(sql: string): JDouble;

    /**
     * 查询返回一个 BigDecimal
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryBigDecimal(sql: string, paramMap: SqlParamMap): JBigDecimal;

    /**
     * 查询返回一个 BigDecimal
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryBigDecimal(sql: string): JBigDecimal

    /**
     * 查询返回一个 Boolean
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryBoolean(sql: string, paramMap: SqlParamMap): JBoolean;

    /**
     * 查询返回一个 Boolean
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryBoolean(sql: string): JBoolean;

    /**
     * 查询返回一个 Date
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryDate(sql: string, paramMap: SqlParamMap): JDate;

    /**
     * 查询返回一个 Date
     *
     * @param sql sql脚本，参数格式[:param]
     */
    queryDate(sql: string): JDate;

    /**
     * SQL Count(获取一个SQL返回的数据总量)
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    queryCount(sql: string, paramMap: SqlParamMap): JLong;

    /**
     * 查询多条数据(大量数据)，使用游标读取
     *
     * @param sql       sql脚本，参数格式[:param]
     * @param paramMap  参数(可选)，参数格式[:param]
     * @param batchSize 一个批次的数据量
     * @param consumer  游标批次读取数据消费者
     */
    query<T = AnyEntity>(sql: string, paramMap: SqlParamMap, batchSize: JInt, consumer: BatchQueryCallback<T>): void;

    /**
     * 查询多条数据(大量数据)，使用游标读取
     *
     * @param sql       sql脚本，参数格式[:param]
     * @param batchSize 一个批次的数据量
     * @param consumer  游标批次读取数据消费者
     */
    query<T = AnyEntity>(sql: string, batchSize: JInt, consumer: BatchQueryCallback<T>): void

    /**
     * 查询多条数据(大量数据)，使用游标读取
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     * @param consumer 游标读取数据消费者
     */
    query<T = AnyEntity>(sql: string, paramMap: SqlParamMap, consumer: QueryCallback<T>): void;

    /**
     * 查询多条数据(大量数据)，使用游标读取
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param consumer 游标读取数据消费者
     */
    query<T = AnyEntity>(sql: string, consumer: QueryCallback<T>): void;

    /**
     * 排序查询
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param sort     排序配置
     * @param paramMap 参数，参数格式[:param]
     */
    queryBySort<T = AnyEntity>(sql: string, sort: QueryBySort, paramMap: SqlParamMap): JList<T>

    /**
     * 排序查询
     *
     * @param sql  sql脚本，参数格式[:param]
     * @param sort 排序配置
     */
    queryBySort<T = AnyEntity>(sql: string, sort: QueryBySort): JList<T>;

    /**
     * 分页查询(支持排序)，返回分页对象
     *
     * @param sql        sql脚本，参数格式[:param]
     * @param pagination 分页配置(支持排序)
     * @param paramMap   参数，参数格式[:param]
     * @param countQuery 是否要执行count查询(可选)
     */
    queryByPage<T = AnyEntity>(sql: string, pagination: QueryByPage, paramMap: SqlParamMap, countQuery: JBoolean): IPage<T>;

    /**
     * 分页查询(支持排序)，返回分页对象
     *
     * @param sql        sql脚本，参数格式[:param]
     * @param pagination 分页配置(支持排序)
     * @param countQuery 是否要执行count查询(可选)
     */
    queryByPage<T = AnyEntity>(sql: string, pagination: QueryByPage, countQuery: JBoolean): IPage<T>;

    /**
     * 分页查询(支持排序)，返回分页对象
     *
     * @param sql        sql脚本，参数格式[:param]
     * @param pagination 分页配置(支持排序)
     */
    queryByPage<T = AnyEntity>(sql: string, pagination: QueryByPage): IPage<T>;

    // --------------------------------------------------------------------------------------------
    // Update 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 执行更新SQL，返回更新影响数据量
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    update(sql: string, paramMap: SqlParamMap): JInt;

    /**
     * 执行更新SQL，返回更新影响数据量
     *
     * @param sql sql脚本，参数格式[:param]
     */
    update(sql: string): JInt;

    /**
     * 更新数据库表数据
     *
     * @param tableName         表名称
     * @param fields            更新字段值
     * @param whereMap          更新条件字段(只支持=，and条件)
     * @param camelToUnderscore 字段驼峰转下划线(可选)
     */
    updateTable(tableName: string, fields: SqlParamMap, whereMap: SqlParamMap, camelToUnderscore: JBoolean): JInt;

    /**
     * 更新数据库表数据
     *
     * @param tableName 表名称
     * @param fields    更新字段值
     * @param whereMap  更新条件字段(只支持=，and条件)
     */
    updateTable(tableName: string, fields: SqlParamMap, whereMap: SqlParamMap): JInt;

    /**
     * 更新数据库表数据
     *
     * @param tableName         表名称
     * @param fields            更新字段值
     * @param where             自定义where条件(不用写where关键字)
     * @param camelToUnderscore 字段驼峰转下划线(可选)
     */
    updateTable(tableName: string, fields: SqlParamMap, where: string, camelToUnderscore: JBoolean): JInt;

    /**
     * 更新数据库表数据
     *
     * @param tableName 表名称
     * @param fields    更新字段值
     * @param where     自定义where条件(不用写where关键字)
     */
    updateTable(tableName: string, fields: SqlParamMap, where: string): JInt;

    /**
     * 批量执行更新SQL，返回更新影响数据量
     *
     * @param sql          sql脚本，参数格式[:param]
     * @param paramMapList 参数数组，参数格式[:param]
     */
    batchUpdate(sql: string, paramMapList: Array<SqlParamMap>): Array<JInt>;

    // --------------------------------------------------------------------------------------------
    // Insert 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 执行insert SQL，返回数据库自增主键值和新增数据量
     *
     * @param sql      sql脚本，参数格式[:param]
     * @param paramMap 参数(可选)，参数格式[:param]
     */
    insert(sql: string, paramMap: SqlParamMap): InsertResult;

    /**
     * 执行insert SQL，返回数据库自增主键值和新增数据量
     *
     * @param sql sql脚本，参数格式[:param]
     */
    insert(sql: string): InsertResult;

    /**
     * 数据插入到表
     *
     * @param tableName         表名称
     * @param fields            字段名
     * @param camelToUnderscore 字段驼峰转下划线(可选)
     */
    insertTable(tableName: string, fields: SqlParamMap, camelToUnderscore: JBoolean): InsertResult;

    /**
     * 数据插入到表
     *
     * @param tableName 表名称
     * @param fields    字段名
     */
    insertTable(tableName: string, fields: SqlParamMap): InsertResult;

    /**
     * 数据插入到表
     *
     * @param tableName         表名称
     * @param fieldsList        字段名集合
     * @param camelToUnderscore 字段驼峰转下划线(可选)
     */
    insertTables(tableName: string, fieldsList: JList<SqlParamMap>, camelToUnderscore: JBoolean): JList<InsertResult>;

    /**
     * 数据插入到表
     *
     * @param tableName  表名称
     * @param fieldsList 字段名集合
     */
    insertTables(tableName: string, fieldsList: JList<SqlParamMap>): JList<InsertResult>;

    // --------------------------------------------------------------------------------------------
    //  事务操作
    // --------------------------------------------------------------------------------------------

    /**
     * 在事务内支持操作
     *
     * @param action              事务内数据库操作
     * @param propagationBehavior 设置事务传递性
     * @param timeout             设置事务超时时间，-1表示不超时(单位：秒)
     * @param isolationLevel      设置事务隔离级别
     * @param readOnly            设置事务是否只读
     */
    beginTX<T = any>(action: ActionInTX<T>, propagationBehavior: Propagation, timeout: JInt, isolationLevel: IsolationLevel, readOnly: JBoolean): T;

    /**
     * 在事务内支持操作
     *
     * @param action              事务内数据库操作
     * @param propagationBehavior 设置事务传递性
     * @param timeout             设置事务超时时间(单位：秒)
     * @param isolationLevel      设置事务隔离级别
     */
    beginTX<T = any>(action: ActionInTX<T>, propagationBehavior: Propagation, timeout: JInt, isolationLevel: IsolationLevel): T;

    /**
     * 在事务内支持操作
     *
     * @param action              事务内数据库操作
     * @param propagationBehavior 设置事务传递性
     * @param timeout             设置事务超时时间(单位：秒)
     */
    beginTX<T = any>(action: ActionInTX<T>, propagationBehavior: Propagation, timeout: JInt): T;

    /**
     * 在事务内支持操作
     *
     * @param action              事务内数据库操作
     * @param propagationBehavior 设置事务传递性
     */
    beginTX<T = any>(action: ActionInTX<T>, propagationBehavior: Propagation): T;

    /**
     * 在事务内支持操作
     *
     * @param action 事务内数据库操作
     */
    beginTX<T = any>(action: ActionInTX<T>): T;

    /**
     * 在事务内支持操作
     *
     * @param action              事务内数据库操作
     * @param propagationBehavior 设置事务传递性
     * @param timeout             设置事务超时时间，-1表示不超时(单位：秒)
     * @param isolationLevel      设置事务隔离级别
     */
    beginReadOnlyTX<T = any>(action: ActionInTX<T>, propagationBehavior: Propagation, timeout: JInt, isolationLevel: IsolationLevel): T;

    /**
     * 在事务内支持操作
     *
     * @param action              事务内数据库操作
     * @param propagationBehavior 设置事务传递性
     * @param timeout             设置事务超时时间，-1表示不超时(单位：秒)
     */
    beginReadOnlyTX<T = any>(action: ActionInTX<T>, propagationBehavior: Propagation, timeout: JInt): T;

    /**
     * 在事务内支持操作
     *
     * @param action              事务内数据库操作
     * @param propagationBehavior 设置事务传递性
     */
    beginReadOnlyTX<T = any>(action: ActionInTX<T>, propagationBehavior: Propagation): T;

    /**
     * 在事务内支持操作
     *
     * @param action 事务内数据库操作
     */
    beginReadOnlyTX<T = any>(action: ActionInTX<T>): T;
}

/**
 * JDBC数据库管理器
 */
export interface JdbcDatabase {
    /**
     * 获取默认数据源
     */
    getDefault(): JdbcDataSource;

    /**
     * 获取默认数据源名称
     */
    getDefaultName(): string;

    /**
     * 根据名称获取数据源
     *
     * @param name 数据源名称
     */
    getDataSource(name: string): JdbcDataSource | null;

    /**
     * 判断数据源是否存在
     *
     * @param name 数据源名称
     */
    hasDataSource(name: string): boolean;

    /**
     * 添加数据源
     *
     * @param name       数据源名称
     * @param jdbcConfig 数据源配置
     */
    add(name: string, jdbcConfig: JdbcConfig): JdbcDataSource;

    /**
     * 删除数据源
     *
     * @param name 数据源名称
     */
    del(name: string): boolean;

    /**
     * 获取所有数据源名称
     */
    allNames(): JSet<string>;

    /**
     * 获取数据源信息
     *
     * @param name 数据源名称
     */
    getInfo(name: string): JdbcInfo

    /**
     * 获取所有数据源信息
     */
    allInfos(): JMap<string, JdbcInfo>;
}

export interface JdbcConfig {
    /** 数据库驱动名称: com.mysql.cj.jdbc.Driver */
    driverClassName: string;
    /** 数据库链接url: jdbc:mysql://host:3306/db-name */
    jdbcUrl: string;
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 是否自动提交 */
    isAutoCommit?: boolean;
    /** 是否只读 */
    isReadOnly?: boolean;
    /** 连接池最大大小 */
    maxPoolSize?: number;
    /** 最小空闲连接数 */
    minIdle?: number;
    /** 连接最大存活时间(毫秒) */
    maxLifetimeMs?: number;
    /** 连接超时时间(毫秒) */
    connectionTimeoutMs?: number;
    /** 允许连接在池中处于空闲状态的最长时间(毫秒) 。值为0表示从不从池中删除空闲连接 */
    idleTimeoutMs?: number;
    /** 测试连接可用的SQL语句 */
    connectionTestQuery?: string;
    /** 数据源连接属性 */
    dataSourceProperties?: JMap<string, string | number | boolean>;
}

export interface JdbcInfo {
    /** 数据库驱动名称: com.mysql.cj.jdbc.Driver */
    readonly driverClassName: string;
    /** 数据库链接url: jdbc:mysql://host:3306/db-name */
    readonly jdbcUrl: string;
    /** 是否自动提交 */
    readonly isAutoCommit: boolean;
    /** 是否只读 */
    readonly isReadOnly: boolean;
    /** 数据库类型 */
    readonly dbType: DbType;
}

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
 * JDBC数据源管理对象
 */
const jdbcDatabase: JdbcDatabase = Java.type('org.clever.hinny.graal.data.jdbc.JdbcDatabase').Instance;

export {
    jdbcDatabase,
}