import { BarcodeFormat, zxingUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const data = zxingUtils.createImage("123", BarcodeFormat.AZTEC, 60, 30);
    log.info("data -> {}", [data]);
    const code = zxingUtils.readerImage(data);
    log.info("code -> {}", code);
}

export {
    t01,
}