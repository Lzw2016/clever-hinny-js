import { encodeDecodeUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const hex = "89ac8acc41ab3bc2c56c4f89c5c1a23a567a"
    log.info("isHexCode     -> {}", encodeDecodeUtils.isHexCode(hex));
    const data = encodeDecodeUtils.decodeHex(hex);
    log.info("decodeHex     -> {}", [data]);
    log.info("encodeHex     -> {}", encodeDecodeUtils.encodeHex(data));
    log.info("encodeBase62  -> {}", encodeDecodeUtils.encodeBase62(data));
    log.info("encodeBase64  -> {}", encodeDecodeUtils.encodeBase64(data));

}

export {
    t01,
}