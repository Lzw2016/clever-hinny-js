const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const a = Interop.asJBigDecimal("51456413.45644").toBigInteger()
    const b = Interop.asJBigDecimal("41456413.45644").toBigInteger()
    log.info("abs(a)                 ======>{}", a.abs());
    log.info("add(a)                 ======>{}", a.add(b));
    log.info("divide(a)              ======>{}", a.divide(Interop.asJBigDecimal("10").toBigInteger()));
    log.info("divideAndRemainder(a)  ======>{}", [a.divideAndRemainder(b)]);
    log.info("doubleValue(a)         ======>{}", a.doubleValue());
    log.info("floatValue(a)          ======>{}", a.floatValue());
    log.info("intValue(a)            ======>{}", a.intValue());
    log.info("longValue(a)           ======>{}", a.longValue());
    log.info("max(a)                 ======>{}", a.max(b));
    log.info("min(a)                 ======>{}", a.min(b));
    log.info("shiftLeft(a)           ======>{}", a.shiftLeft(1));
    log.info("shiftRight(a)          ======>{}", a.shiftRight(1));
    log.info("multiply(a)            ======>{}", a.multiply(b));
    log.info("negate(a)              ======>{}", a.negate());
    log.info("not(a)                 ======>{}", a.not());
    // log.info("pow(a)                 ======>{}", a.pow());
    log.info("toByteArray(a)         ======>{}", [a.toByteArray()]);
    //fixme     xor(val: BigInteger): JString;返回值很诡异 自行测试几次就懂了
    log.info("xor(a)                 ======>{}", a.xor(Interop.asJBigDecimal("-100").toBigInteger()));

}

export {
    t01,
}
