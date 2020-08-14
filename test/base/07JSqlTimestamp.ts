const log = LoggerFactory.getLogger(__filename);
import {AnyEntity, jdbcDatabase} from "@hinny/data-jdbc";

interface TbOrderMain extends AnyEntity {
    order_id: JInt;
    user_agent_id: JInt;
    store_no: JString;
    total_price: JBigDecimal;
    create_at: JSqlTimestamp;
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
        const sql = "select order_id,user_agent_id,store_no,total_price,create_at from tb_order_main limit 5"
        const resList = jdbc.queryList(sql);
        const sqlTimestamp = Interop.fromJMap<TbOrderMain>(resList[1]).create_at;
        const sqlTimestamp2 = Interop.fromJMap<TbOrderMain>(resList[2]).create_at;
        log.info("sqlTimestamp               -> {}", sqlTimestamp);
        log.info("sqlTimestamp2              -> {}", sqlTimestamp2);
        log.info("after                      -> {}", sqlTimestamp.after(sqlTimestamp2));
        log.info("before                     -> {}", sqlTimestamp.before(sqlTimestamp2));
        log.info("compareTo                  -> {}", sqlTimestamp.compareTo(sqlTimestamp2));
        log.info("getNanos                   -> {}", sqlTimestamp.getNanos());
        log.info("toString                   -> {}", sqlTimestamp.toString());
    }

}

export {
    t01,
}