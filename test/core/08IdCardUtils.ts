import { idCardUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const res_1 = idCardUtils.validateCard("11010119900307475X");
    const res_2 = idCardUtils.validateCard("11010119900307476X");
    log.info("res_1 -> {}", res_1);
    log.info("res_2 -> {}", res_2);
}

export {
    t01,
}