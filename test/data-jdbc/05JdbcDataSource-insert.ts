// JdbcDatabase 新增操作
import {AnyEntity, InsertResult, jdbcDatabase, Propagation} from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(module.filename);

const t01 = function () {
    const jdbc = jdbcDatabase.getDefault();
    const res = jdbc.beginTX<JList<InsertResult>>(() => {
        return jdbc.insertTables(
            "test",
            [
                {name: Interop.asJString("猪1"), age: Interop.asJInt(11)},
                {name: Interop.asJString("猪2"), age: Interop.asJInt(12)},
                {name: Interop.asJString("猪3"), age: Interop.asJInt(13)},
                {name: Interop.asJString("猪4"), age: Interop.asJInt(14)},
            ]
        )
    }, Propagation.REQUIRED);
    log.info("res   --> {}", res);
}

interface CompanyCertificateDic extends AnyEntity {
    id: JInt;
    parent_id: JInt;
    name: JString;
    create_time: JDate;
    update_time: JDate;
    del_flag: JString;
}

const t02 = function () {
    let jdbc_2 = jdbcDatabase.add("jdbc_2", {
        driverClassName: 'com.mysql.cj.jdbc.Driver',
        jdbcUrl: 'jdbc:mysql://111.229.118.217:3306/snj_sjpt',
        username: 'root',
        password: '83eF7neajSJTc2Qj',
        isReadOnly: false,
    });
    log.info("jdbcDataSource -> {}", jdbc_2);
    const jdbc = jdbcDatabase.getDataSource("jdbc_2");
    if (jdbc != null) {
        // var dic = jdbc.queryList("select * from company_certificate_dic where parent_id in (2,3) and del_flag = '0' order by id asc")
        // log.info("dic -> {}", [dic]);
        const sql = `select * from company_certificate_dic where parent_id in (${[2, 3].join(',')}) and del_flag = '0'`;
        const list = jdbc.queryList(sql);

        for (let i = 0; i < list.size(); i++) {
            const parentId = Interop.fromJMap<CompanyCertificateDic>(list[i]).parent_id
            const id = Interop.fromJMap<CompanyCertificateDic>(list[i]).id
            if (parentId === 2) {
                const count = jdbc.beginTX(() => {
                    return jdbc.insertTables(
                        "company_certificate_dic",
                        [
                            {name: Interop.asJString("特级"), parent_id: Interop.asJInt(id)},
                            {name: Interop.asJString("一级"), parent_id: Interop.asJInt(id)},
                            {name: Interop.asJString("二级"), parent_id: Interop.asJInt(id)},
                            {name: Interop.asJString("三级"), parent_id: Interop.asJInt(id)}
                        ]
                    );
                }, Propagation.NEVER);
                log.info("parentId===2   =====>{}", count)
            }
            if (parentId === 3) {
                const count = jdbc.beginTX(() => {
                    return jdbc.insertTables(
                        "company_certificate_dic",
                        [
                            {name: Interop.asJString("一级"), parent_id: Interop.asJInt(id)},
                            {name: Interop.asJString("二级"), parent_id: Interop.asJInt(id)},
                            {name: Interop.asJString("三级"), parent_id: Interop.asJInt(id)}
                        ]
                    );
                }, Propagation.NEVER);
                log.info("parentId===3   =====>{}", count)
            }
        }
    }
}


export {
    t01,
    t02,
}