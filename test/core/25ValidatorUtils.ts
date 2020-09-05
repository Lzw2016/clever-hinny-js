import { ValidatorRule, validatorUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

interface Entity01 {
    str: JString;
    bool: JBoolean;
    num: JLong;
}

const rule0101: ValidatorRule<Entity01> = {
    str: {
        length: {
            min: 10,
            max: 20,
        },
    },
    bool: {notNull: true, equals: true},
    num: {range: {min: 0, max: 666}},
};

const t01 = function () {
    const data01: Entity01 = {
        str: "aaa",
        bool: <any>null,
        num: 123,
    }
    const res = validatorUtils.valid(data01, rule0101);
    log.info("hasError  -> {}", res.hasError());
    log.info("getErrors -> {}", [res.getErrors()]);
}

export {
    t01,
}