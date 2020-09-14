const log = LoggerFactory.getLogger(__filename);
import { jdbcDatabase } from "@hinny/data-jdbc";

interface TbOrderMain {
    orderId: JInt;
    userAgentId: JInt;
    storeNo: JString;
    totalPrice: JBigDecimal;
    createAt: JSqlTimestamp;
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
        const sqlTimestamp = Interop.fromJMap<TbOrderMain>(resList.get(1)).createAt;
        const sqlTimestamp2 = Interop.fromJMap<TbOrderMain>(resList.get(2)).createAt;
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