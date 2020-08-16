import { threadUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const res = threadUtils.track();
    log.info("res -> {}", res);
}

export {
    t01,
}