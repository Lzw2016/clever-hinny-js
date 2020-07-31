const log = LoggerFactory.getLogger("01jobject.ts")

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
    log.info("# asJBigDecimal   -> {}", JObject.asJBigDecimal('1354741564564568989.564948989745189789454894894864'));
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
    log.info("# asJDate         -> {}", JObject.asJDate('2020-07-31 22:02:12'));
    log.info("# asJBigDecimal   -> {}", JObject.asJBigDecimal('1354741564564568989.564948989745189789454894894864'));
}

export {
    t01,
    t02,
}