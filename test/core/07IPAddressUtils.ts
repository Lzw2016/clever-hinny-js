import { ipAddressUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const ipSet = ipAddressUtils.getInet4Address();
    log.info("ipSet -> {}", ipSet);
}

export {
    t01,
}