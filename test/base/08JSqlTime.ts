const log = LoggerFactory.getLogger(__filename);
import { AnyEntity, jdbcDatabase } from "@hinny/data-jdbc";

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
        const sql = "select sql_time,date,year from test limit 5"
        const list = jdbc.queryList(sql);

        const date = Interop.toJDate(Interop.fromJMap<Test>(list.get(1)).sql_time);
        const date2 = Interop.toJDate(Interop.fromJMap<Test>(list.get(2)).sql_time);
        log.info("date       -> {}", date);
        log.info("date2      -> {}", date2);
        log.info("after      -> {}", date.after(date2));
        log.info("before     -> {}", date.before(date2));
        log.info("getTime    -> {}", date.getTime());
        log.info("getYear    -> {}", date.getYear() + 1900);
        log.info("getMonth   -> {}", date.getMonth());
        log.info("getDate    -> {}", date.getDate());
        log.info("getHours   -> {}", date.getHours());
        log.info("getMinutes -> {}", date.getMinutes());
        log.info("getSeconds -> {}", date.getSeconds());
        log.info("getDay     -> {}", date.getDay());
        log.info("compareTo  -> {}", date.compareTo(date2));
        log.info("================================================================================");


        const time = Interop.fromJMap<Test>(list.get(1)).sql_time;
        const time2 = Interop.fromJMap<Test>(list.get(2)).sql_time;
        //fixme  JSqlTime 输出是否应主动截取yyyy-MM-dd 只展示time值
        // 现在显示的:'1970-01-01T13:26:33.000Z'  是否应换为--->  '13:26:33.000Z'
        log.info("time               -> {}", time);
        log.info("time2              -> {}", time2);
        log.info("after              -> {}", time.after(time2));
        log.info("before             -> {}", time.before(time2));
        log.info("compareTo          -> {}", time.compareTo(time2));
        log.info("getTime            -> {}", time.getTime());
        log.info("getHours           -> {}", time.getHours());
        log.info("getMinutes         -> {}", time.getMinutes());
        log.info("getSeconds         -> {}", time.getSeconds());
        //fixme  JSqlTime没有以下时间值  应取消以下接口
        log.info("getDate            -> {}", time.getDate());
        log.info("toString           -> {}", time.toString());
        log.info("getYear            -> {}", time.getYear());
        log.info("getMonth           -> {}", time.getMonth());
        log.info("getDay             -> {}", time.getDay());

    }

}

export {
    t01,
}