import {dateUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    log.info("currentTimeMillis          --------------->{}", dateUtils.currentTimeMillis());
    log.info("now                        --------------->{}", dateUtils.now());
    log.info("getCurrentDate(string)     --------------->{}", dateUtils.getCurrentDate("2020-08-22 10:20:30"));
    log.info("getCurrentDate             --------------->{}", dateUtils.getCurrentDate());
    log.info("getCurrentTime             --------------->{}", dateUtils.getCurrentTime());
    log.info("getCurrentDateTime         --------------->{}", dateUtils.getCurrentDateTime());
    log.info("getYear                    --------------->{}", dateUtils.getYear());
    log.info("getMonth                   --------------->{}", dateUtils.getMonth());
    log.info("getDay                     --------------->{}", dateUtils.getDay());
    log.info("getWeek                    --------------->{}", dateUtils.getWeek());
    log.info("getDate                    --------------->{}", dateUtils.getDate(dateUtils.currentTimeMillis(),"yyyy-MM-dd hh:mm:ss"));
    log.info("getDate                    --------------->{}", dateUtils.getDate(dateUtils.currentTimeMillis()));
    log.info("parseDate                  --------------->{}", dateUtils.parseDate(dateUtils.currentTimeMillis()));
}

export {
    t01,
}