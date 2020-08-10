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


    log.info("isSynthetic(a)         ======>{}", a.abs());
    log.info("isSynthetic(a)         ======>{}", a.add(b));
    log.info("isSynthetic(a)         ======>{}", a.divide(b));
    log.info("isSynthetic(a)         ======>{}", a.divideAndRemainder(b));
    log.info("isSynthetic(a)         ======>{}", a.divideToIntegralValue(b));
    log.info("isSynthetic(a)         ======>{}", a.doubleValue());
    log.info("isSynthetic(a)         ======>{}", a.floatValue());
    log.info("isSynthetic(a)         ======>{}", a.intValue());
    log.info("isSynthetic(a)         ======>{}", a.intValueExact());
    log.info("isSynthetic(a)         ======>{}", a.longValue());
    log.info("isSynthetic(a)         ======>{}", a.max(b));
    log.info("isSynthetic(a)         ======>{}", a.min(b));
    log.info("isSynthetic(a)         ======>{}", a.movePointLeft(1));
    log.info("isSynthetic(a)         ======>{}", a.movePointRight(1));
    log.info("isSynthetic(a)         ======>{}", a.multiply(b));
    log.info("isSynthetic(a)         ======>{}", a.negate());
    log.info("isSynthetic(a)         ======>{}", a.plus());
    log.info("isSynthetic(a)         ======>{}", a.pow(5));
}

export {
    t01,
}
