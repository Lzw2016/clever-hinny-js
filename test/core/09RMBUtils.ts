import { rmbUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const res = rmbUtils.digitUppercase(Interop.asJDouble("167545.36"))
    log.info("res -> {}", res);
}

export {
    t01,
}