const logger = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const jDate_1 = Interop.asJDate("2020-08-09 10:29:17");
    const jDate_2 = Interop.asJDate("2020-08-09 10:29:17");
    logger.info("jDate_1.hashCode     -> {}", jDate_1.hashCode());
    logger.info("jDate_2.hashCode     -> {}", jDate_2.hashCode());
    logger.info("jDate_1.toString     -> {}", jDate_1.toString());
    logger.info("jDate_1.getClass     -> {}", jDate_1.getClass());
    logger.info("jDate_1.equals       -> {}", jDate_1.equals(jDate_2));
    const jDate_3 = Interop.asJDate("2020-08-09 10:29:18");
    logger.info("jDate_1.equals       -> {}", jDate_1.equals(jDate_3));
    logger.info("jDate_1.equals       -> {}", jDate_1.equals("2020-08-09 10:29:18"));
}

const t02 = function () {
    const jDate_1 = Interop.asJDate("2020-08-09 10:29:17");
    logger.info("getClass.getCanonicalName  -> {}", jDate_1.getClass().getCanonicalName());
    logger.info("getClass.getName           -> {}", jDate_1.getClass().getName());
    logger.info("getClass.getSimpleName     -> {}", jDate_1.getClass().getSimpleName());
    logger.info("getClass.getTypeName       -> {}", jDate_1.getClass().getTypeName());
    logger.info("getClass.isAnnotation      -> {}", jDate_1.getClass().isAnnotation());
    logger.info("getClass.isArray           -> {}", jDate_1.getClass().isArray());
    logger.info("getClass.isEnum            -> {}", jDate_1.getClass().isEnum());
    logger.info("getClass.isInterface       -> {}", jDate_1.getClass().isInterface());
    logger.info("getClass.isLocalClass      -> {}", jDate_1.getClass().isLocalClass());
    logger.info("getClass.isMemberClass     -> {}", jDate_1.getClass().isMemberClass());
    logger.info("getClass.isPrimitive       -> {}", jDate_1.getClass().isPrimitive());
    logger.info("getClass.isSynthetic       -> {}", jDate_1.getClass().isSynthetic());
}

export {
    t01,
    t02,
}