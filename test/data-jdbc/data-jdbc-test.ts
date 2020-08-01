import {AnyEntity, jdbcDatabase} from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(__filename);

interface Entity extends AnyEntity {
    order_id: JString;
}

// console.log("jdbcDatabase -> ", jdbcDatabase.getClass());
const jdbc = jdbcDatabase.getDefault<Entity>();

const t01 = function () {
    log.info("DbType -> {}", jdbc.getDbType());
    const resList = jdbc.queryList("select * from `clever-template`.tb_order_main limit 3");
    log.info("resList -> {}", resList);
    // @ts-ignore
    log.info("order_id -> {}", resList[1].get("order_id"));
    // log.info("order_id -> {}", resList[1].order_id);
    // const b = resList[1].b;
    // const d = resList[1].d;
    // console.log("### -> ", b, d);
}

export {
    t01,
}

// exports.t01 = t01;
