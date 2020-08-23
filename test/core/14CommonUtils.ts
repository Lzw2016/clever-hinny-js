import {commonUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    log.info("currentTimeMillis --------------->{}", commonUtils.currentTimeMillis());
    log.info("now               --------------->{}", commonUtils.now());
    log.info("sleep             --------------->{}", commonUtils.sleep(3000));
    log.info("hashCode          --------------->{}", commonUtils.hashCode(log));
    log.info("equals            --------------->{}", commonUtils.equals(log, log));
    log.info("same              --------------->{}", commonUtils.same(log, log));
}

export {
    t01,
}