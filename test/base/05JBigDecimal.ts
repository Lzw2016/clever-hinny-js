const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const a = Interop.asJBigDecimal("15.8541");
    const classA = a.getClass();
    const b = Interop.asJBigDecimal("15.7541");
    log.info("BigDecimal(a)          ======>{}", a);
    log.info("BigDecimal(b)          ======>{}", b);
    log.info("compareTo(a - b)       ======>{}", a.compareTo(b));
    log.info("hashCode(a)            ======>{}", a.hashCode());
    log.info("toString(a)            ======>{}", a.toString());
    log.info("getClass(a)            ======>{}", a.getClass());
    log.info("getCanonicalName(a)    ======>{}", classA.getCanonicalName());
    log.info("getName(a)             ======>{}", classA.getName());
    log.info("getSimpleName(a)       ======>{}", classA.getSimpleName());
    log.info("getTypeName(a)         ======>{}", classA.getTypeName());
    log.info("isAnnotation(a)        ======>{}", classA.isAnnotation());
    log.info("isArray(a)             ======>{}", classA.isArray());
    log.info("isEnum(a)              ======>{}", classA.isEnum());
    log.info("isInstance(a)          ======>{}", classA.isInstance(a));
    log.info("isInterface(a)         ======>{}", classA.isInterface());
    log.info("isLocalClass(a)        ======>{}", classA.isLocalClass());
    log.info("isMemberClass(a)       ======>{}", classA.isMemberClass());
    log.info("isPrimitive(a)         ======>{}", classA.isPrimitive());
    log.info("isSynthetic(a)         ======>{}", classA.isSynthetic());


    log.info("abs(a)                 ======>{}", a.abs());
    log.info("add(a)                 ======>{}", a.add(b));
    log.info("divide(a)              ======>{}", a.divide(Interop.asJBigDecimal("10")));
    log.info("divideAndRemainder(a)  ======>{}", [a.divideAndRemainder(b)]);
    log.info("divideToIntegralValue(a)======>{}", a.divideToIntegralValue(b));
    log.info("doubleValue(a)         ======>{}", a.doubleValue());
    log.info("floatValue(a)          ======>{}", a.floatValue());
    log.info("intValue(a)            ======>{}", a.intValue());
    log.info("longValue(a)           ======>{}", a.longValue());
    log.info("max(a)                 ======>{}", a.max(b));
    log.info("min(a)                 ======>{}", a.min(b));
    log.info("movePointLeft(a)       ======>{}", a.movePointLeft(1));
    log.info("movePointRight(a)      ======>{}", a.movePointRight(1));
    log.info("multiply(a)            ======>{}", a.multiply(b));
    log.info("negate(a)              ======>{}", a.negate());
    log.info("plus(a)                ======>{}", a.plus());
    log.info("pow(a)                 ======>{}", a.pow(2));

    log.info("intValueExact          ======>{}", Interop.asJBigDecimal("111").intValueExact());
    log.info("precision(精度)        ======>{}", Interop.asJBigDecimal("111.12161").precision());
    log.info("scale(标度)            ======>{}", Interop.asJBigDecimal("111.12161").scale());
    log.info("setScale(标度为指定值) ======>{}", Interop.asJBigDecimal("111.12161").setScale(9));
    log.info("signum                 ======>{}", Interop.asJBigDecimal("-111.12161").signum());
    log.info("toEngineeringString    ======>{}", Interop.asJBigDecimal("-111.12161").toEngineeringString());
    log.info("stripTrailingZeros    ======>{}", Interop.asJBigDecimal("-111.1216100000").stripTrailingZeros());

    log.info("longValueExact         ======>{}", Interop.asJBigDecimal("111").longValueExact());

    log.info("shortValueExact        ======>{}", Interop.asJBigDecimal("111.0").shortValueExact());
    log.info("shortValue             ======>{}", Interop.asJBigDecimal("111.2").shortValue());

    log.info("toBigIntegerExact      ======>{}", Interop.asJBigDecimal("111").toBigIntegerExact());
    log.info("toBigInteger           ======>{}", Interop.asJBigDecimal("111.56161").toBigInteger());
    log.info("unscaledValue          ======>{}", Interop.asJBigDecimal("111.1516").unscaledValue());
}

export {
    t01,
}
