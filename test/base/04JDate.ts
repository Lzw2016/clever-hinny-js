const logger = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const jDate_1 = Interop.asJDate("2020-08-09 14:29:02.666");
    const jDate_2 = Interop.asJDate(new Date(2020, 7, 9, 14, 29, 2, 888));

    logger.info("after      -> {}", jDate_1.after(jDate_2));
    logger.info("before     -> {}", jDate_1.before(jDate_2));
    logger.info("getTime    -> {}", jDate_1.getTime());
    logger.info("getYear    -> {}", jDate_1.getYear() + 1900);
    logger.info("getMonth   -> {}", jDate_1.getMonth());
    logger.info("getDate    -> {}", jDate_1.getDate());
    logger.info("getHours   -> {}", jDate_1.getHours());
    logger.info("getMinutes -> {}", jDate_1.getMinutes());
    logger.info("getSeconds -> {}", jDate_1.getSeconds());
    logger.info("getDay     -> {}", jDate_1.getDay());
    logger.info("compareTo  -> {}", jDate_1.compareTo(jDate_2));

    const jDate_3 = Interop.asJDate(new Date(2020, 7, 9, 14, 29, 2, 666));
    logger.info("toString   -> {}", jDate_1.toString());
    logger.info("toString   -> {}", jDate_2.toString());
    logger.info("toString   -> {}", jDate_3.toString());
    logger.info("===        -> {}", jDate_1 === jDate_3);
    logger.info("equals     -> {}", jDate_1.equals(jDate_3));
    logger.info("equals     -> {}", jDate_1.equals(jDate_2));
}

export {
    t01,
}
