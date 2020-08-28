import { JdbcDataSource } from "./JdbcDataSource";
import { JdbcInfo } from "./JdbcInfo";
import { JdbcDataSourceStatus } from "./JdbcDataSourceStatus";

export interface JdbcConfig {
    /** 数据库驱动名称: com.mysql.cj.jdbc.Driver */
    driverClassName: JString;
    /** 数据库链接url: jdbc:mysql://host:3306/db-name */
    jdbcUrl: JString;
    /** 用户名 */
    username: JString;
    /** 密码 */
    password: JString;
    /** 是否自动提交 */
    autoCommit?: JBoolean;
    /** 是否只读 */
    readOnly?: JBoolean;
    /** 连接池最大大小 */
    maxPoolSize?: JInt;
    /** 最小空闲连接数 */
    minIdle?: JInt;
    /** 连接最大存活时间(毫秒) */
    maxLifetimeMs?: JInt;
    /** 连接超时时间(毫秒) */
    connectionTimeoutMs?: JInt;
    /** 允许连接在池中处于空闲状态的最长时间(毫秒) 。值为0表示从不从池中删除空闲连接 */
    idleTimeoutMs?: JInt;
    /** 测试连接可用的SQL语句 */
    connectionTestQuery?: JString;
    /** 数据源连接属性 */
    dataSourceProperties?: JMap<JString, JString | JDouble | JBoolean>;
}

/**
 * JDBC数据库管理器
 */
export interface JdbcDatabase extends JObject {
    /**
     * 获取默认数据源
     */
    getDefault(): JdbcDataSource;

    /**
     * 获取默认数据源名称
     */
    getDefaultName(): JString;

    /**
     * 根据名称获取数据源
     *
     * @param name 数据源名称
     */
    getDataSource(name: JString): JdbcDataSource | null;

    /**
     * 判断数据源是否存在
     *
     * @param name 数据源名称
     */
    hasDataSource(name: JString): JBoolean;

    /**
     * 添加数据源
     *
     * @param name       数据源名称
     * @param jdbcConfig 数据源配置
     */
    add(name: JString, jdbcConfig: JdbcConfig): JdbcDataSource;

    /**
     * 删除数据源
     *
     * @param name 数据源名称
     */
    del(name: JString): JBoolean;

    /**
     * 获取所有数据源名称
     */
    allNames(): JSet<JString>;

    /**
     * 获取数据源信息
     *
     * @param name 数据源名称
     */
    getInfo(name: JString): JdbcInfo

    /**
     * 获取所有数据源信息
     */
    allInfos(): JMap<JString, JdbcInfo>;

    /**
     * 获取数据源信息
     * @param name 数据源名称
     */
    getStatus(name: JString): JdbcDataSourceStatus;

    /**
     * 获取数据源状态
     */
    allStatus(): JMap<JString, JdbcDataSourceStatus>;
}

/**
 * JDBC数据源管理对象
 */
const jdbcDatabase: JdbcDatabase = Java.type('org.clever.hinny.graal.data.jdbc.JdbcDatabase').Instance;

export {
    jdbcDatabase,
}