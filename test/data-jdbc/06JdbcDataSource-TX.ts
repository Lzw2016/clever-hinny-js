// JdbcDatabase 事务操作
import { AnyEntity, jdbcDatabase, Propagation } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(module.filename);
const jdbc = jdbcDatabase.getDefault();

interface TbOrderMain extends AnyEntity {
    order_id: JInt;
    user_agent_id: JInt;
    store_no: JString;
    total_price: JBigDecimal;
}

const t01 = function () {
    const sql = "select * from tb_order_main where order_id = :order_id";
    const data = jdbc.queryMap(sql, {order_id: Interop.asJLong("1")})
    log.info("res ==> {}", data)

    const res = jdbc.beginTX(() => {
        const data_1 = Interop.fromJMap<TbOrderMain>(data);
        data_1.total_price = Interop.asJBigDecimal("66.66");

        const count = jdbc.updateTable(
            "tb_order_main",
            {total_price: data_1.total_price},
            {order_id: Interop.asJLong("1")}
        );
        log.info("count --> {}", count);
        return jdbc.queryMap<TbOrderMain>(sql, {order_id: Interop.asJLong("1")})
    }, Propagation.REQUIRED);

    log.info("res ==> {}", res)
    log.info("res ==> {}", jdbc.queryMap(sql, {order_id: Interop.asJLong("1")}))
}
export {
    t01
}