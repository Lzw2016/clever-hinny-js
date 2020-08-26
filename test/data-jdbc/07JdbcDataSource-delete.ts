// JdbcDataSource 更新操作
import { jdbcDatabase } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(module.filename);
const jdbc = jdbcDatabase.getDefault();

const t01 = function () {
    const count_1 = jdbc.deleteTable("tb_order_main", {order_id: '1149885468607422466'}, false);
    log.info("count_1 -> {}", count_1);

    const count_2 = jdbc.deleteTable("tb_order_main", {orderId: '1149885468607422466'}, true);
    log.info("count_2 -> {}", count_2);
}

export {
    t01,
}
