const log = LoggerFactory.getLogger(__filename);
import {AnyEntity, jdbcDatabase} from "@hinny/data-jdbc";

interface Test extends AnyEntity {
    sql_time: JSqlTime;
    date: JSqlDate;
    year: JSqlDate;
}

const t01 = function () {
    let jdbc_2 = jdbcDatabase.add("jdbc_2", {
        driverClassName: 'com.mysql.cj.jdbc.Driver',
        jdbcUrl: 'jdbc:mysql://mysql.msvc.top:3306/clever-template',
        username: 'clever-template',
        password: 'lizhiwei1993',
        readOnly: true,
    });
    log.info("jdbcDataSource -> {}", jdbc_2);
    const jdbc = jdbcDatabase.getDataSource("jdbc_2");
    if (jdbc != null) {
        const sql = "select sql_time,date,year from test limit 2"
        const list = jdbc.queryList(sql);
        log.info("date               -> {}", [list]);

        //fixme JSqlDate(java.sql.Date) 无法使用
        const date = Interop.toJDate(Interop.fromJMap<Test>(list[1]).date);
        const date2 = Interop.toJDate(Interop.fromJMap<Test>(list[2]).date);
        log.info("date               -> {}", date);
        log.info("date2              -> {}", date);
        log.info("after              -> {}", date.after(date2));
        log.info("before             -> {}", date.before(date2));
        log.info("compareTo          -> {}", date.compareTo(date2));
        log.info("getTime            -> {}", date.getTime());
        log.info("getHours           -> {}", date.getHours());
        log.info("getMinutes         -> {}", date.getMinutes());
        log.info("getSeconds         -> {}", date.getSeconds());
        log.info("getDate            -> {}", date.getDate());
        log.info("toString           -> {}", date.toString());
        log.info("getYear            -> {}", date.getYear());
        log.info("getMonth           -> {}", date.getMonth());
        log.info("getDay             -> {}", date.getDay());

        const year = Interop.toJDate(Interop.fromJMap<Test>(list[1]).year);
        const year2 = Interop.toJDate(Interop.fromJMap<Test>(list[2]).year);
        log.info("year               -> {}", year);
        log.info("year2              -> {}", year2);
        log.info("after              -> {}", year.after(year2));
        log.info("before             -> {}", year.before(year2));
        log.info("compareTo          -> {}", year.compareTo(year2));
        log.info("getTime            -> {}", year.getTime());
        log.info("getHours           -> {}", year.getHours());
        log.info("getMinutes         -> {}", year.getMinutes());
        log.info("getSeconds         -> {}", year.getSeconds());
        log.info("getDate            -> {}", year.getDate());
        log.info("toString           -> {}", year.toString());
        log.info("getYear            -> {}", year.getYear());
        log.info("getMonth           -> {}", year.getMonth());
        log.info("getDay             -> {}", year.getDay());

    }
}

export {
    t01,
}