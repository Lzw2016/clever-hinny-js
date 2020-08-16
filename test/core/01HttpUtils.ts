import { HttpMethod, httpUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

//
// {
//     "success": true,
//     "msg": "",
//     "data": {
//     "prodNameList": [
//         "手动轮椅车(格纹)",
//         "手动轮椅车",
//         "手动轮椅车(电镀硬座带座便)",
//         "手动轮椅车(铝合金)",
//         "手动轮椅车(铝合金舒适版)",
//         "钢管手动轮椅车(喷塑硬座)",
//         "手动轮椅车(钢管)",
//         "手动轮椅车(电镀高靠背全躺座便版)",
//         "手动轮椅车(硬座)",
//         "手动轮椅车(电镀高靠背软座)"
//     ]
// },
//     "ext": null
// }

const t01 = function () {
    const url = "http://www.jk.com/search/merchandise";
    const res = httpUtils.getStr(url, {keyWord: "轮椅"});
    log.info("res  -> {}", res);

    const res2 = httpUtils.getMap(url, {keyWord: "体温计"});
    log.info("res2 -> {}", res2.getClass());
}

const t02 = function () {
    const url = "http://www.jk.com/search/merchandise";
    const res = httpUtils.execRequest(HttpMethod.GET, url, null, {keyWord: "体温计"}, {});
    log.info("getStatus         -> {}", res.getStatus());
    log.info("getStatusMessage  -> {}", res.getStatusMessage());
    log.info("getBody           -> {}", res.getBody());
    log.info("getHeaders        -> {}", res.getHeaders());
    log.info("isRedirect        -> {}", res.isRedirect());
    log.info("isSuccessful      -> {}", res.isSuccessful());
    log.info("getHeaderNames    -> {}", res.getHeaderNames());
    log.info("getBodyMap        -> {}", res.getBodyMap());
    log.info("getBodyMap        -> {}", res.getFirstHeader("set-cookie"));
}

export {
    t01,
    t02,
}