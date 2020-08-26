import { jdbcDatabase } from "@hinny/data-jdbc";
// JdbcDataSource 查询操作

const log = LoggerFactory.getLogger(module.filename);

const jdbc = jdbcDatabase.getDefault();
const t01 = function () {
    const sql = "select age from test where id = 1";
    log.info("String   --> {}", jdbc.queryString(sql));
    log.info("Double   --> {}", jdbc.queryDouble(sql));
    log.info("BigDecimal   --> {}", jdbc.queryBigDecimal(sql));
    const sql2 = "select name from test where id = 2";
    log.info("Boolean   --> {}", jdbc.queryBoolean(sql2));
    const date = "select create_at from tb_order_main where order_id = 1";
    log.info("Date   --> {}", jdbc.queryDate(date));
    log.info("Count   --> {}", jdbc.queryCount("select * from test", {}));
}

const t02 = function () {
    const sql = "select order_id,user_agent_id,site_id from tb_order_main limit 3";
    const sql2 = "select order_id,user_agent_id,site_id from tb_order_main where order_id = :order_id";
    log.info("[res]      --> {}", [jdbc.queryList(sql)]);
    log.info("[list]      --> {}", [jdbc.queryList(sql2, {order_id: Interop.asJLong("1")})]);
    log.info("res   --> {}", jdbc.queryMap("select order_id,user_agent_id,site_id from tb_order_main where order_id = 1"));
    log.info("res2   --> {}", jdbc.queryMap(sql2, {order_id: Interop.asJLong("1")}));
}

const t03 = function () {
    log.info("String   --> {}", jdbc.queryString("select age from test  where id = :id",
        {id: Interop.asJInt("1")}));

    log.info("Double   --> {}", jdbc.queryDouble("select age from test  where id = :id",
        {id: Interop.asJInt("1")}));

    log.info("BigDecimal   --> {}", jdbc.queryBigDecimal("select age from test  where id = :id",
        {id: Interop.asJInt("1")}));

    log.info("Boolean   --> {}", jdbc.queryBoolean("select name from test where id = :id",
        {id: Interop.asJInt("2")}));

    log.info("Date   --> {}", jdbc.queryDate("select create_at from tb_order_main where order_id = :order_id",
        {order_id: Interop.asJInt("1")}));

    log.info("Count   --> {}", jdbc.queryCount("select * from test where age = :age",
        {age: Interop.asJInt("11")}));
}

const t04 = function () {
    const res_1 = jdbc.queryTableMap("tb_order_main", {order_id: '1149655027983998977'}, false);
    log.info("res_1 -> {}", res_1);

    const res_2 = jdbc.queryTableList("tb_order_main", {linkTel: '16600000001'}, true);
    log.info("res_2 -> {}", res_2.size());
}

export {
    t01,
    t02,
    t03,
    t04,
}
