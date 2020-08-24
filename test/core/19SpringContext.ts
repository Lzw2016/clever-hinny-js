import {springContext} from '@hinny/core';

const logger = LoggerFactory.getLogger(__filename);

const t1 = function () {
    //fixme  IllegalArgumentException
    logger.info("getBean              --------------->{}", springContext.getBean("scriptObject"));
}

export {
    t1
};