// JdbcDataSource 更新操作
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
    const res = jdbc.beginTX(() => {
        const data = jdbc.queryMap(sql, {order_id: Interop.asJLong("1")})
        log.info("data   --> {}", data);
        const data_1 = Interop.fromJMap<TbOrderMain>(data);
        data_1.total_price = Interop.asJBigDecimal("36.111");

        const count = jdbc.updateTable(
            "tb_order_main",
            {total_price: data_1.total_price},
            {order_id: Interop.asJLong("1")}
        );
        log.info("count --> {}", count);
        return jdbc.queryMap<TbOrderMain>(sql, {order_id: Interop.asJLong("1")})
    }, Propagation.REQUIRED);

    log.info("res   --> {}", res);
    log.info("data   --> {}", jdbc.queryMap(sql, {order_id: Interop.asJLong("1")}));
}


const t02 = function () {
    const res = jdbc.beginTX<Array<JInt>>(() => {
        const sql = "update tb_order_main set total_price=:total_price where order_id=:order_id";
        return jdbc.batchUpdate(
            sql,
            [
                {total_price: Interop.asJBigDecimal("1.11111"), order_id: Interop.asJLong("1")},
                {total_price: Interop.asJBigDecimal("2.22222"), order_id: Interop.asJLong("2")},
                {total_price: Interop.asJBigDecimal("3.3333"), order_id: Interop.asJLong("1149635824560267265")},
            ]
        )
    });
    log.info("res   --> {}", res);
}

export {
    t01,
    t02
}