import { imageValidateUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const code = imageValidateUtils.getRandString(4);
    log.info("code -> {}", code);
    const byteArr = imageValidateUtils.createImage();
    log.info("byteArr -> {}", [byteArr]);
}

export {
    t01,
}