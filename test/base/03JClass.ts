const logger = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const list = Interop.asJList<string>("a111", "a222");
    logger.info("list -> {}", [list]);
    const clazz = list.getClass();
    logger.info("clazz.getCanonicalName  -> {}", clazz.getCanonicalName());
    logger.info("clazz.getName           -> {}", clazz.getName());
    logger.info("clazz.getSimpleName     -> {}", clazz.getSimpleName());
    logger.info("clazz.getTypeName       -> {}", clazz.getTypeName());
    logger.info("clazz.isAnnotation      -> {}", clazz.isAnnotation());
    logger.info("clazz.isArray           -> {}", clazz.isArray());
    logger.info("clazz.isEnum            -> {}", clazz.isEnum());
    logger.info("clazz.isInterface       -> {}", clazz.isInterface());
    logger.info("clazz.isLocalClass      -> {}", clazz.isLocalClass());
    logger.info("clazz.isMemberClass     -> {}", clazz.isMemberClass());
    logger.info("clazz.isPrimitive       -> {}", clazz.isPrimitive());
    logger.info("clazz.isSynthetic       -> {}", clazz.isSynthetic());
}

export {
    t01,
}