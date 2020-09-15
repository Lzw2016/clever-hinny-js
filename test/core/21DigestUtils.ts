import { digestUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const File = Java.type("java.io.File");
    log.info("generateSalt              --------------->{}", [digestUtils.generateSalt(20)]);
    log.info("hmacSha1                  --------------->{}", [digestUtils.hmacSha1([1, 2, 3, 4], [1, 2, 3, 4])]);
    log.info("isHmacSha1Valid           --------------->{}", [digestUtils.isHmacSha1Valid([3, 8], [1, 2, 3, 4], [1, 2, 3, 4])]);
    log.info("generateHmacSha1Key       --------------->{}", [digestUtils.generateHmacSha1Key()]);
    log.info("sha1                      --------------->{}", [digestUtils.sha1([1, 2, 3, 4])]);
    log.info("sha1                      --------------->{}", [digestUtils.sha1([1, 2, 3, 4], [1, 2, 3, 4])]);
    log.info("sha1                      --------------->{}", [digestUtils.sha1([1, 2, 3, 4], [1, 2, 3, 4], 20)]);
    log.info("sha1                      --------------->{}", [digestUtils.sha1(Java.type("org.apache.commons.io.FileUtils").openInputStream(new File("C:\\Windows\\System32\\drivers\\etc\\hosts")))]);
    log.info("md5                       --------------->{}", [digestUtils.md5([1, 2, 3, 4])]);
    log.info("md5                       --------------->{}", [digestUtils.md5([1, 2, 3, 4], [1, 2, 3, 4])]);
    log.info("md5                       --------------->{}", [digestUtils.md5([1, 2, 3, 4], [1, 2, 3, 4], 20)]);
    log.info("md5                       --------------->{}", [digestUtils.md5(Java.type("org.apache.commons.io.FileUtils").openInputStream(new File("C:\\Windows\\System32\\drivers\\etc\\hosts")))]);
}

export {
    t01,
}