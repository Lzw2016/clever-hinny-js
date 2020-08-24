import {cryptoUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    //fixme 没玩明白
    log.info("generateIV                  --------------->{}", cryptoUtils.generateIV());
    log.info("generateIV(20)              --------------->{}", cryptoUtils.generateIV(20));
    log.info("aes                         --------------->{}", cryptoUtils.aes([Interop.asJByte(123)], [Interop.asJByte(100)], 1));
    log.info("aesEncrypt                  --------------->{}", cryptoUtils.aesEncrypt([1, 2, 3], [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1]));
    log.info("aesDecrypt                  --------------->{}", cryptoUtils.aesDecrypt([105], [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1]));
    log.info("aesEncrypt                  --------------->{}", cryptoUtils.aesEncrypt([1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1]));
    log.info("aesDecrypt                  --------------->{}", cryptoUtils.aesDecrypt([1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1]));
    log.info("generateAesKey              --------------->{}", cryptoUtils.generateAesKey(128));
    log.info("generateAesKey              --------------->{}", cryptoUtils.generateAesKey());
}

export {
    t01,
}