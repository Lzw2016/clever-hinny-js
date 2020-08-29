// import { commonUtils } from "@hinny/core";
import { jdbcDatabase } from "@hinny/data-jdbc";
import { HttpHandle } from "@hinny/mvc";

const log = LoggerFactory.getLogger(__filename);
const jdbc = jdbcDatabase.getDefault();

const t01: HttpHandle = ctx => {
    const {request} = ctx;
    log.info("-------------------> {}", request.getHeaderNames());
    return jdbc.queryList("select * from tb_order_main limit 16");
}

export {
    t01,
}