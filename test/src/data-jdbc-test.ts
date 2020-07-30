import { jdbcDatabase } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger("/test/src/data-jdbc-test.ts");

// console.log("jdbcDatabase -> ", jdbcDatabase.getClass());
const jdbc = jdbcDatabase.getDefault();


const t01 = function () {
    const resList = jdbc.queryList("select * from `clever-template`.tb_order_main limit 3");
    log.info("resList -> {}", JSON.stringify(resList));
    console.log("resList -> ", resList[1]);
    // console.log("order_id -> ", resList[0].get("order_id"));
}

export {
    t01,
}

// exports.t01 = t01;