import { AnyEntity, jdbcDatabase } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger("/test/src/data-jdbc-test.ts");

interface Entity extends AnyEntity {
    order_id: JString;
}

// console.log("jdbcDatabase -> ", jdbcDatabase.getClass());
const jdbc = jdbcDatabase.getDefault<Entity>();

const t01 = function () {
    const resList = jdbc.queryList("select * from `clever-template`.tb_order_main limit 3");
    log.info("resList -> {}", resList);
    console.log("resList -> ", resList[1]);
    // @ts-ignore
    console.log("order_id -> ", resList[1].get("order_id"));
    console.log("order_id -> ", resList[1].order_id);
    // const b = resList[1].b;
    // const d = resList[1].d;
    // console.log("### -> ", b, d);
}


export {
    t01,
}

// exports.t01 = t01;