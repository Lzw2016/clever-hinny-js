import { HanyuPinyinCaseType, HanyuPinyinToneType, HanyuPinyinVCharType, pinyinUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const py = pinyinUtils.toAllPinYin("还");
    log.info("py    -> {}", [py]);
    const pyStr = pinyinUtils.getStringPinYin("我是一个中国人!", " ");
    log.info("pyStr -> {}", pyStr);
    const format = pinyinUtils.getFormat(HanyuPinyinCaseType.UPPERCASE, HanyuPinyinToneType.WITH_TONE_NUMBER, HanyuPinyinVCharType.WITH_U_AND_COLON);
    const py_2 = pinyinUtils.toAllPinYin("还", format);
    log.info("py_2  -> {}", [py_2]);
}

export {
    t01,
}