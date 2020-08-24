import {xmlUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const a = Interop.asJDate("2020-08-24 14:48:30")
    const xml = `
        <string>161561313</string>
    `;
    log.info("toXml                  --------------->{}", xmlUtils.toXml(a as any));
    log.info("fromXml                --------------->{}", xmlUtils.fromXml("<string>11111</string>"));
    log.info("update                 --------------->{}", xmlUtils.update(xml, a as any));
    log.info("update                 --------------->{}", a);
    log.info("xmlToJson              --------------->{}", xmlUtils.xmlToJson(xml));
    log.info("jsonToXml              --------------->{}", xmlUtils.jsonToXml(xmlUtils.xmlToJson(xml)));
}

export {
    t01,
}