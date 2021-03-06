import { jdbcDatabase, jdbcDatabaseManage } from "@hinny/data-jdbc";

const logger = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const jdbcDataSource = jdbcDatabase.getDefault();
    logger.info("jdbcDataSource -> {}", jdbcDataSource.getClass());
    const defaultName = jdbcDatabase.getDefaultName();
    logger.info("defaultName    -> {}", defaultName);
    let jdbc_2 = jdbcDatabase.getDataSource("jdbc_2");
    logger.info("jdbcDataSource -> {}", jdbc_2);
    let has_jdbc_2 = jdbcDatabase.hasDataSource("jdbc_2");
    logger.info("hasDataSource  -> {}", has_jdbc_2);
    jdbc_2 = jdbcDatabaseManage.add("jdbc_2", {
        driverClassName: 'com.mysql.cj.jdbc.Driver',
        jdbcUrl: 'jdbc:mysql://mysql.msvc.top:3306/clever-template',
        username: 'clever-template',
        password: 'lizhiwei1993',
        readOnly: true,
    });
    logger.info("jdbcDataSource -> {}", jdbc_2);
    has_jdbc_2 = jdbcDatabase.hasDataSource("jdbc_2");
    logger.info("hasDataSource  -> {}", has_jdbc_2);
    logger.info("allNames       -> {}", jdbcDatabase.allNames());
    logger.info("getInfo        -> {}", jdbcDatabase.getInfo("jdbc_2"));
}

const t02 = function () {
    let info = jdbcDatabase.getInfo("Default");
    logger.info("getInfo     -> {}", info);
    let status = jdbcDatabase.getStatus("Default");
    logger.info("getStatus   -> {}", status);

    logger.info("allInfos    -> {}", jdbcDatabase.allInfos());
    logger.info("allStatus   -> {}", jdbcDatabase.allStatus());

    const jdbcDataSource = jdbcDatabase.getDefault();
    info = jdbcDataSource.getInfo();
    logger.info("getInfo     -> {}", info);
    logger.info("info.dbType -> {}", info.getDbType());
    status = jdbcDataSource.getStatus();
    logger.info("getStatus   -> {}", status);
    logger.info("status      -> {}/{}", status.getTotalConnections(), status.getActiveConnections());
}

export {
    t01,
    t02,
}