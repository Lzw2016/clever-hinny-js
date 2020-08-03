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


const t02 = function () {
    const sql = `
select * from \`clever-template\`.tb_order_main
    where site_id=:site_id 
        and total_price>:total_price 
        and create_at>:create_at
limit 3
    `;
    const resList = jdbc.queryList<Entity>(sql, {
        site_id: '1111111112',
        total_price: 0.01000,
        // create_at: JObject.asJDate('2019-07-12 20:02:45'),
        create_at: new Date(2019, 7, 12, 20, 2, 45),
    });
    log.info("[resList]                         -> {}", [resList]);
}

const t03 = function () {
    const sql = "select * from `clever-template`.tb_order_main limit 87";
    jdbc.query<Entity>(sql, 10, batchData => {
        log.info("batchData -> BatchCount={} | order_id={}", batchData.getBatchCount(), Interop.fromJMap(batchData.getRowDataList()[0]).order_id)
    });

    const sql2 = "select * from `clever-template`.tb_order_main limit :limit";
    jdbc.query<Entity>(sql2, {limit: 66}, rowData => {
        log.info("batchData -> BatchCount={} | order_id={}", rowData.getRowCount(), Interop.fromJMap(rowData.getRowData()).order_id)
    });
}

const t04 = function () {
    const sql = "select * from `clever-template`.tb_order_main";
    const page = jdbc.queryByPage(sql, {pageSize: 3}, {}, true);
    log.info("page              --> {}", page);
    log.info("page.getRecords() --> {}", page.getRecords());
}

export {
    t01,
    t02,
    t03,
    t04,
}
