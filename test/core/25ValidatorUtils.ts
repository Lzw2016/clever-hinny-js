import { ValidatorRule, validatorUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

interface Entity01 {
    str: JString;
    bool: JBoolean;
    num: JLong;
}

const rule0101: ValidatorRule<Entity01> = {
    str: {length: {min: 10, max: 20}},
    bool: {notNull: true, equals: true},
    num: {range: {min: 0, max: 666}},
};

const t01 = function () {
    const data01: Entity01 = {
        str: "aaa",
        bool: <any>null,
        num: 123,
    }
    const res = validatorUtils.valid(data01, rule0101, true);
    log.info("hasError  -> {}", res.hasError());
    log.info("getErrors -> {}", [res.getErrors()]);
    // validatorUtils.validated(data01, rule0101, true);
}

const t02 = function () {
    const data01: Entity01 = {
        str: "aaa",
        bool: true,
        num: 667,
    }
    validatorUtils.validated(data01, rule0101);
}

export {
    t01,
    t02,
}