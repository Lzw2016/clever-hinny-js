import { AnyEntity, jdbcDatabase } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(module.filename);

interface Entity extends AnyEntity {
    order_id: JInt;
    user_agent_id: JInt;
    store_no: JString;
    total_price: JBigDecimal;

    // order_id: 1, user_agent_id: 1, site_id: 2, store_id: 3, store_no: "4", cust_id: 5,
}

const jdbc = jdbcDatabase.getDefault();

const t01 = function () {
    log.info("DbType -> {}", jdbc.getDbType());
    const resList = jdbc.queryList<Entity>("select * from `clever-template`.tb_order_main limit 3");
    log.info("resList                           -> {}", resList);
    log.info("[resList]                         -> {}", [resList]);
    log.info("resList[0]                        -> {}", resList[0]);
    log.info("fromJMap(resList[1])              -> {}", Interop.fromJMap(resList[1]));
    log.info("resList[1].order_id               -> {}", resList[1].order_id);
    log.info("fromJMap(resList[1]).order_id     -> {}", Interop.fromJMap(resList[1]).order_id);
    log.info("fromJMap(resList[1]).total_price  -> {}", Interop.fromJMap(resList[1]).total_price);
    log.info("undefined                         -> {}", undefined);

    // log.info("total_price       -> {}", Interop.fromJMap({}));
    // log.info("order_id          -> {}", resList[1].get("order_id"));
}


export {
    t01,
}
