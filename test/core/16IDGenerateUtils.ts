import {idGenerateUtils} from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    log.info("uuid                  --------------->{}", idGenerateUtils.uuid());
    log.info("uuidNotSplit          --------------->{}", idGenerateUtils.uuidNotSplit());
    log.info("shortUuid             --------------->{}", idGenerateUtils.shortUuid());
    log.info("objectId              --------------->{}", idGenerateUtils.objectId());
    log.info("snowFlakeId           --------------->{}", idGenerateUtils.snowFlakeId());
}

export {
    t01,
}