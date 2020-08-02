import { AnyEntity, jdbcDatabase } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(module.filename);

interface Entity extends AnyEntity {
    order_id: JInt;
    user_agent_id: JInt;
    store_no: JString;
    total_price: JBigDecimal;

    // order_id: 1, user_agent_id: 1, site_id: 2, store_id: 3, store_no: "4", cust_id: 5,
}

// console.log("jdbcDatabase -> ", jdbcDatabase.getClass());
const jdbc = jdbcDatabase.getDefault();

const t01 = function () {
    log.info("DbType -> {}", jdbc.getDbType());
    const resList = jdbc.queryList<Entity>("select * from `clever-template`.tb_order_main limit 3");
    log.info("resList           -> {}", resList);
    log.info("resList           -> {}", resList[0]);
    log.info("fromJMap          -> {}", Interop.fromJMap(resList[1]));
    log.info("order_id          -> {}", Interop.fromJMap(resList[1]).order_id);
    log.info("total_price       -> {}", Interop.fromJMap(resList[1]).total_price);

    // log.info("map               -> {}", Interop.fromJList(resList)[0]);
    // log.info("total_price       -> {}", Interop.fromJMap({}));
    // log.info("order_id          -> {}", resList[1].get("order_id"));
    // log.info("undefined         -> {}", undefined);

}


export {
    t01,
}

// exports.t01 = t01;
