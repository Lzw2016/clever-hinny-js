// JdbcDatabase 新增操作
import {InsertResult, jdbcDatabase, Propagation} from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(module.filename);

const jdbc = jdbcDatabase.getDefault();

const t01 = function () {
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
    }, Propagation.REQUIRED, -1);
    log.info("res   --> {}", res);
}

export {
    t01
}