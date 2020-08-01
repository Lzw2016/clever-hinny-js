import {AnyEntity, jdbcDatabase} from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(__filename);

interface Entity extends AnyEntity {
    order_id: JInt;
    user_agent_id: JInt;
    store_no: JString;
    total_price: JBigDecimal;

    // order_id: 1, user_agent_id: 1, site_id: 2, store_id: 3, store_no: "4", cust_id: 5,
}

// console.log("jdbcDatabase -> ", jdbcDatabase.getClass());
const jdbc = jdbcDatabase.getDefault<Entity>();

const t01 = function () {
    log.info("DbType -> {}", jdbc.getDbType());
    const resList = jdbc.queryList("select * from `clever-template`.tb_order_main limit 3");
    // log.info("resList -> {}", [resList]);
    // log.info("order_id -> {}", resList[1].get("order_id"));
    log.info("order_id -> {}", resList[1].total_price);
    // const b = resList[1].b;
    // const d = resList[1].d;
    // console.log("### -> ", b, d);
}

export {
    t01,
}

// exports.t01 = t01;
