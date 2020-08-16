import { dataSizeUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const res = dataSizeUtils.getHumanReadableSize(16859561);
    log.info("res -> {}", res);
}

export {
    t01,
}