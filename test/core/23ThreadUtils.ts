import {threadUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    // log.info("track     --------------->{}", threadUtils.track(Java.type("java.lang.Thread").currentThread()));
    log.info("track     --------------->{}", threadUtils.track());
    // log.info("printTrack--------------->{}", threadUtils.printTrack(Java.type("java.lang.Thread").currentThread()));
    log.info("sleep     --------------->{}", threadUtils.sleep(10000));
    log.info("printTrack--------------->{}", threadUtils.printTrack());
}

export {
    t01,
}