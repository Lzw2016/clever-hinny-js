import { InsertResult, jdbcDatabase, Propagation, SortType } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(module.filename);

interface Entity {
    orderId: JInt;
    userAgentId: JInt;
    storeNo: JString;
    totalPrice: JBigDecimal;
    // order_id: 1, user_agent_id: 1, site_id: 2, store_id: 3, store_no: "4", cust_id: 5,
}

const jdbc = jdbcDatabase.getDefault();

const t01 = function () {
    log.info("DbType -> {}", jdbc.getDbType());
    const resList = jdbc.queryList("select * from tb_order_main limit 3");
    log.info("resList                           -> {}", resList);
    log.info("[resList]                         -> {}", [resList]);
    log.info("resList[0]                        -> {}", resList.get(0));
    // log.info("resList[0]                        -> {}", resList[0]);
    log.info("fromJMap(resList[1])              -> {}", Interop.fromJMap(resList.get(1)));
    log.info("fromJMap(resList[1]).order_id     -> {}", Interop.fromJMap<Entity>(resList.get(1)).orderId);
    log.info("fromJMap(resList[1]).total_price  -> {}", Interop.fromJMap<Entity>(resList.get(1)).totalPrice);
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
        // create_at: Interop.asJDate('2019-07-12 20:02:45'),
        create_at: new Date(2019, 7, 12, 20, 2, 45),
    });
    log.info("[resList]                         -> {}", [resList]);
}
const t03 = function () {
    const sql = "select * from tb_order_main limit 87";
    jdbc.query(sql, 10, batchData => {
        log.info("batchData -> BatchCount={} | order_id={}", batchData.getBatchCount(), Interop.fromJMap<Entity>(batchData.getRowDataList().get(0)).orderId)
    });

    const sql2 = "select * from tb_order_main limit :limit";
    jdbc.query(sql2, {limit: 66}, rowData => {
        log.info("batchData -> BatchCount={} | order_id={}", rowData.getRowCount(), Interop.fromJMap<Entity>(rowData.getRowData()).orderId)
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
            fieldsMapping: {updateAt: "update_at"},
            aaa: 'aaa',
        },
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
    const list_1 = jdbc.queryBySort(
        sql,
        {
            sort: SortType.DESC,
            orderField: "updateAt",
            fieldsMapping: {updateAt: "update_at"},
        },
        {
            site_id: "1111111112",
            total_price: Interop.asJBigDecimal("0.01000"),
            create_at: Interop.asJDate("2020-06-01 16:15:45"),
        },
    );
    log.info("list_1 --> {}", list_1);

    const list_2 = jdbc.queryBySort(
        sql,
        {
            fieldsMapping: {updateAt: "update_at", realPayPrice: "real_pay_price"},
            orderFields: ["updateAt", "realPayPrice"],
            sorts: [SortType.DESC, SortType.ASC],
        },
        {
            site_id: "1111111112",
            total_price: Interop.asJBigDecimal("0.01000"),
            create_at: Interop.asJDate("2020-06-01 16:15:45"),
        },
    );
    // console.log("--> {}", list_2[0].sss);
    log.info("list_2 --> {}", [list_2]);
    log.info("list_2 --> {}", Interop.fromJMap<Entity>(list_2.get(0)).orderId);
}
const t06 = function () {
    const sql = "select * from tb_order_main where order_id = :order_id";
    const data = jdbc.queryMap(sql, {order_id: Interop.asJLong("1149635824560267265")})
    const data_1 = Interop.fromJMap<Entity>(data);
    data_1.totalPrice = Interop.asJBigDecimal("100.123");
    const count = jdbc.updateTable(
        "tb_order_main",
        {total_price: data_1.totalPrice},
        {order_id: Interop.asJLong("1149635824560267265")}
    );
    log.info("count --> {}", count);
    const data_2 = jdbc.queryMap<Entity>(sql, {order_id: Interop.asJLong("1149635824560267265")})
    log.info("data  --> {}", data_2);
}
const t07 = function () {
    const res = jdbc.beginTX(() => {
        const sql = "select * from tb_order_main where order_id = :order_id";
        const data = jdbc.queryMap(sql, {order_id: Interop.asJLong("1149635824560267265")})
        const data_1 = Interop.fromJMap<Entity>(data);
        data_1.totalPrice = Interop.asJBigDecimal("361.905");
        const count = jdbc.updateTable(
            "tb_order_main",
            {total_price: data_1.totalPrice},
            {order_id: Interop.asJLong("1149635824560267265")}
        );
        log.info("count --> {}", count);
        return jdbc.queryMap<Entity>(sql, {order_id: Interop.asJLong("1149635824560267265")})
    }, Propagation.REQUIRED);
    log.info("res   --> {}", res);
}
const t08 = function () {
    const sql = "update tb_order_main set total_price=:total_price where order_id=:order_id";
    const countArr = jdbc.batchUpdate(
        sql,
        [
            {total_price: Interop.asJBigDecimal("1.11111"), order_id: Interop.asJLong("1")},
            {total_price: Interop.asJBigDecimal("2.22222"), order_id: Interop.asJLong("2")},
            {total_price: Interop.asJBigDecimal("3.3333"), order_id: Interop.asJLong("1149635824560267265")},
        ],
    );
    log.info("countArr --> {}", [countArr]);
}
const t09 = function () {
    const res = jdbc.beginTX<Array<JInt>>(() => {
        const sql = "update tb_order_main set total_price=:total_price where order_id=:order_id";
        return jdbc.batchUpdate(
            sql,
            [
                {total_price: Interop.asJBigDecimal("1.11111"), order_id: Interop.asJLong("1")},
                {total_price: Interop.asJBigDecimal("2.22222"), order_id: Interop.asJLong("2")},
                {total_price: Interop.asJBigDecimal("3.3333"), order_id: Interop.asJLong("1149635824560267265")},
            ]
        )
    }, Propagation.REQUIRED);
    log.info("res   --> {}", res);
}
const t10 = function () {
    const res = jdbc.beginTX<InsertResult>(() => {
        const sql = "insert into test (name, age) VALUES (:name, :age)";
        return jdbc.insert(
            sql,
            {name: Interop.asJString("曾萤2"), age: Interop.asJInt(233)},
        )
    }, Propagation.REQUIRED);
    log.info("res   --> {}", res);
}
const t11 = function () {
    const res = jdbc.beginTX<InsertResult>(() => {
        const sql = "insert into test (name, age) VALUES ('朱妮', 18)";
        return jdbc.insert(
            sql,
        )
    }, Propagation.REQUIRED);
    log.info("res   --> {}", res);
}
const t12 = function () {
    const res = jdbc.beginTX<InsertResult>(() => {
        return jdbc.insertTable(
            "test",
            {
                name: Interop.asJString("小朱妮"),
                age: Interop.asJInt(22)
            }
        )
    }, Propagation.REQUIRED);
    log.info("res   --> {}", res);
}
const t13 = function () {
    const res = jdbc.beginTX<JList<InsertResult>>(() => {
        return jdbc.insertTables(
            "test",
            [
                {name: Interop.asJString("小朱妮1"), age: Interop.asJInt(11)},
                {name: Interop.asJString("小朱妮2"), age: Interop.asJInt(12)},
                {name: Interop.asJString("小朱妮3"), age: Interop.asJInt(13)},
                {name: Interop.asJString("小朱妮4"), age: Interop.asJInt(14)},
            ]
        )
    }, Propagation.REQUIRED);
    log.info("res   --> {}", res);
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
    t09,
    t10,
    t11,
    t12,
    t13
}
