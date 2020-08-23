import {jsonUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const a = {
        aaa: "111",
        bbb: "222",
        ccc: 333,
        ddd: "444",
        eee: 555,
    }
    log.info("toJson                  --------------->{}", jsonUtils.toJson(a));
    log.info("toJsonP                 --------------->{}", jsonUtils.toJsonP("jsonp", a));
    log.info("toMap                   --------------->{}", jsonUtils.toMap(jsonUtils.toJson(a)));
    log.info("update                  --------------->{}", jsonUtils.update(
        "{a:1,b:2}", a));
    log.info("a                       --------------->{}", a);
    log.info("xmlToJson               --------------->{}", jsonUtils.xmlToJson(
        "<apps>\n" +
        "    <app>\n" +
        "        <id>1</id>\n" +
        "        <name>Google Maps</name>\n" +
        "        <virsion>1.0</virsion>\n" +
        "    </app>\n" +
        "    <app>\n" +
        "        <id>2</id>\n" +
        "        <name>Chrome</name>\n" +
        "        <version>2.1</version>\n" +
        "    </app>\n" +
        "    <app>\n" +
        "        <id>3</id>\n" +
        "        <name>Google Play</name>\n" +
        "        <version>2.3</version>\n" +
        "    </app>\n" +
        "</apps>"
    ));
    log.info("jsonToXml               --------------->{}", jsonUtils.jsonToXml(jsonUtils.xmlToJson(
        "<apps>\n" +
        "    <app>\n" +
        "        <id>1</id>\n" +
        "        <name>Google Maps</name>\n" +
        "        <virsion>1.0</virsion>\n" +
        "    </app>\n" +
        "    <app>\n" +
        "        <id>2</id>\n" +
        "        <name>Chrome</name>\n" +
        "        <version>2.1</version>\n" +
        "    </app>\n" +
        "    <app>\n" +
        "        <id>3</id>\n" +
        "        <name>Google Play</name>\n" +
        "        <version>2.3</version>\n" +
        "    </app>\n" +
        "</apps>"
    )));
}

export {
    t01,
}