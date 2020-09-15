import { cryptoUtils, encodeDecodeUtils, stringUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const input = stringUtils.getByteFromString("李志伟123");
    const key = cryptoUtils.generateAesKey();
    const iv = cryptoUtils.generateIV();
    // 加密
    const data = cryptoUtils.aesEncrypt(input, key, iv);
    const dataStr = encodeDecodeUtils.encodeHex(data);
    log.info("加密 ---> {}", dataStr);
    // 解密
    const str = cryptoUtils.aesDecrypt(encodeDecodeUtils.decodeHex(dataStr), key, iv);
    log.info("解密 ---> {}", str);
}

export {
    t01,
}