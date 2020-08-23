import {iDGenerateUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    log.info("uuid                  --------------->{}", iDGenerateUtils.uuid());
    log.info("uuidNotSplit          --------------->{}", iDGenerateUtils.uuidNotSplit());
    log.info("shortUuid             --------------->{}", iDGenerateUtils.shortUuid());
    log.info("objectId              --------------->{}", iDGenerateUtils.objectId());
    log.info("snowFlakeId           --------------->{}", iDGenerateUtils.snowFlakeId());
}

export {
    t01,
}