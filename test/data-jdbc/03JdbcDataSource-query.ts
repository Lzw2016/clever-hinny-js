import {jdbcDatabase} from "@hinny/data-jdbc";
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
    const sql = "select * from tb_order_main where order_id = 1";
    log.info("res   --> {}", jdbc.queryMap(sql));
}

export {
    t01,
    t02,
}
