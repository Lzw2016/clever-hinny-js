const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    log.info("# asJByte         -> {}", JObject.asJByte(1));
    log.info("# asJShort        -> {}", JObject.asJShort(123));
    log.info("# asJInt          -> {}", JObject.asJInt(123456));
    log.info("# asJLong         -> {}", JObject.asJLong(1234567890));
    log.info("# asJDouble       -> {}", JObject.asJDouble(123456.789));
    log.info("# asJBoolean      -> {}", JObject.asJBoolean(false));
    log.info("# asJChar         -> {}", JObject.asJChar('a'));
    log.info("# asJString       -> {}", JObject.asJString('abc123456'));
    log.info("# asJDate         -> {}", JObject.asJDate('2020-07-31 22:02:12'));
    log.info("# asJBigDecimal   -> {}", JObject.asJBigDecimal('1354741344987654323456765434567564564568989.564948989745189789454894894864'));
}

const t02 = function () {
    log.info("# asJByte         -> {}", JObject.asJByte("1"));
    log.info("# asJShort        -> {}", JObject.asJShort("123"));
    log.info("# asJInt          -> {}", JObject.asJInt("123456"));
    log.info("# asJLong         -> {}", JObject.asJLong("1234567890"));
    log.info("# asJDouble       -> {}", JObject.asJDouble("123456.789"));
    log.info("# asJBoolean      -> {}", JObject.asJBoolean("false"));
    log.info("# asJChar         -> {}", JObject.asJChar('a'));
    log.info("# asJString       -> {}", JObject.asJString('abc123456'));
    log.info("# asJDate         -> {}", JObject.asJDate(new Date()));
    log.info("# asJDate         -> {}", JObject.asJDate(new Date().getTime()));
    log.info("# asJBigDecimal   -> {}", JObject.asJBigDecimal('1354741344987654323456765434567564564568989.564948989745189789454894894864'));
}

const t03 = function () {
    log.info("# asJList         -> {}", JObject.asJList("111", "222", "333"));
    log.info("# asJList         -> {}", JObject.asJList(["111", "222", "333"]));
    log.info("# asJList         -> {}", JObject.asJList([111, 222, 333]));
    log.info("# asJSet          -> {}", JObject.asJSet("111", "222", "333"));
    log.info("# asJSet          -> {}", JObject.asJSet(["111", "222", "333"]));
    log.info("# asJSet          -> {}", JObject.asJSet([111, 222, 333]));
    log.info("# asJMap          -> {}", JObject.asJMap({
        a: "aaa", b: 123, c: false, d: 12.87, fuc: function (a: number, b: number) {
            return a + b;
        }
    }));
    log.info("# asJMap          -> {}", JObject.asJMap([111, 222, 333]));
}

const t04 = function () {
    const list = JObject.asJList("111", "222", "333") as any as string[];
    log.info(" -> {}", list.map(value => `${value}|AAA`)); // 调用失败，没有map函数

    // const array = ["111", "222", "333"];
    // console.info(" -> ", array.map(value => `${value}|AAA`));
}

export {
    t01,
    t02,
    t03,
    t04,
}