import { AnyEntity, jdbcDatabase, Propagation, SortType } from "@hinny/data-jdbc";

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
    const resList = jdbc.queryList<Entity>("select * from tb_order_main limit 3");
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
    const sql = "select * from tb_order_main limit 87";
    jdbc.query<Entity>(sql, 10, batchData => {
        log.info("batchData -> BatchCount={} | order_id={}", batchData.getBatchCount(), Interop.fromJMap(batchData.getRowDataList()[0]).order_id)
    });

    const sql2 = "select * from tb_order_main limit :limit";
    jdbc.query<Entity>(sql2, {limit: 66}, rowData => {
        log.info("batchData -> BatchCount={} | order_id={}", rowData.getRowCount(), Interop.fromJMap(rowData.getRowData()).order_id)
    });
}

const t04 = function () {
    const sql = "select * from tb_order_main";
    const page = jdbc.queryByPage(
        sql,
        {
            pageSize: 3,
            pageNo: 123,
            sort: SortType.DESC,
            orderField: "updateAt",
            fieldsMapping: {updateAt: "update_at"}
        },
        {},
        true
    );
    log.info("page              --> {}", page);
    log.info("page.getRecords() --> {}", page.getRecords());
}

const t05 = function () {
    const sql = `
    select * from tb_order_main
    where site_id = :site_id 
    and total_price > :total_price 
    and create_at > :create_at
    `;
    const list_1 = jdbc.queryBySort<Entity>(
        sql,
        {
            sort: SortType.DESC,
            orderField: "updateAt",
            fieldsMapping: {updateAt: "update_at"},
        },
        {
            site_id: "1111111112",
            total_price: JObject.asJBigDecimal("0.01000"),
            create_at: JObject.asJDate("2020-06-01 16:15:45"),
        },
    );
    log.info("list_1 --> {}", list_1);

    const list_2 = jdbc.queryBySort<Entity>(
        sql,
        {
            fieldsMapping: {updateAt: "update_at", realPayPrice: "real_pay_price"},
            orderFields: ["updateAt", "realPayPrice"],
            sorts: [SortType.DESC, SortType.ASC],
        },
        {
            site_id: "1111111112",
            total_price: JObject.asJBigDecimal("0.01000"),
            create_at: JObject.asJDate("2020-06-01 16:15:45"),
        },
    );
    log.info("list_2 --> {}", [list_2]);
    log.info("list_2 --> {}", list_2[0].order_id);
}

const t06 = function () {
    const sql = "select * from tb_order_main where order_id = :order_id";
    let data = jdbc.queryMap<Entity>(sql, {order_id: JObject.asJLong("1149635824560267265")})
    data = Interop.fromJMap(data);
    data.total_price = JObject.asJBigDecimal("100.123");
    const count = jdbc.updateTable("tb_order_main", {total_price: data.total_price}, {order_id: JObject.asJLong("1149635824560267265")});
    log.info("count --> {}", count);
    data = jdbc.queryMap<Entity>(sql, {order_id: JObject.asJLong("1149635824560267265")})
    log.info("data  --> {}", data);
}

const t07 = function () {
    const res = jdbc.beginTX<Entity>(() => {
        const sql = "select * from tb_order_main where order_id = :order_id";
        let data = jdbc.queryMap<Entity>(sql, {order_id: JObject.asJLong("1149635824560267265")})
        data = Interop.fromJMap(data);
        data.total_price = JObject.asJBigDecimal("500.123");
        const count = jdbc.updateTable("tb_order_main", {total_price: data.total_price}, {order_id: JObject.asJLong("1149635824560267265")});
        log.info("count --> {}", count);
        data = jdbc.queryMap<Entity>(sql, {order_id: JObject.asJLong("1149635824560267265")})
        return data
    }, Propagation.REQUIRED, -1);
    log.info("res   --> {}", res);
}

const t08 = function () {
    const sql = "update tb_order_main set total_price=:total_price where order_id=:order_id";
    const countArr = jdbc.batchUpdate(
        sql,
        [
            {total_price: JObject.asJBigDecimal("1.11111"), order_id: JObject.asJLong("1")},
            {total_price: JObject.asJBigDecimal("2.22222"), order_id: JObject.asJLong("2")},
            {total_price: JObject.asJBigDecimal("3.3333"), order_id: JObject.asJLong("1149635824560267265")},
        ],
    );
    log.info("countArr --> {}", [countArr]);
}

export {
    t01,
    t02,
    t03,
    t04,
    t05,
    t06,
    t07,
    t08,
}
