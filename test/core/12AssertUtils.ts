import {assertUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    log.info("isTrue         -> {}", assertUtils.isTrue(true, "false -->异常msg"));
    log.info("isFalse        -> {}", assertUtils.isFalse(false, "true --->异常msg"));
    log.info("isNull         -> {}", assertUtils.isNull((null as any), "不是null----->异常msg"));
    log.info("notNull        -> {}", assertUtils.notNull(log, "null----->异常msg"));
    log.info("hasLength      -> {}", assertUtils.hasLength("广泛广泛", "null or ''----->异常msg"));
    log.info("hasText        -> {}", assertUtils.hasText("额为全额全额", "null or ''----->异常msg"));
    log.info("doesNotContain -> {}", assertUtils.doesNotContain("11111111111", "2", "text包含 sub ---------------->异常msg"));
    log.info("notEmpty       -> {}", assertUtils.notEmpty([1], "length==0 or null---->异常msg"));
    log.info("noNullElements -> {}", assertUtils.noNullElements(null as any, "数组中有null ----->异常msg,这个数据是null不会抛异常"));
}

export {
    t01,
}