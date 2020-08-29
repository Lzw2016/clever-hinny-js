// import { commonUtils } from "@hinny/core";
import { jdbcDatabase } from "@hinny/data-jdbc";
import { HttpHandle, HttpMethod, HttpRouter } from "@hinny/mvc";

const log = LoggerFactory.getLogger(__filename);
const jdbc = jdbcDatabase.getDefault();

const t01: HttpHandle = ctx => {
    const {request} = ctx;
    log.info("getHeaderNames --> {}", request.getHeaderNames());
    return jdbc.queryList("select * from tb_order_main limit 16");
}

const t02: HttpRouter = {
    method: HttpMethod.POST,

    handle: ctx => {
        log.info("getHeaderNames -->");
        return ctx.request.getHeaderNames();
    },

    get: ctx => {
        log.info("getParameterNames -->");
        return ctx.request.getParameterNames();
    },
};

export {
    t01,
    t02,
}
