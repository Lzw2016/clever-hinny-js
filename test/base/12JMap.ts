const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const map = Interop.asJMap({
        a: 1,
        b: "2",
        c: "3",
        d: 4,
        e: 5,
        f: 6,
    });
    log.info("entrySet             ======>{}", [map.entrySet()]);
    log.info("keySet               ======>{}", [map.keySet()]);
    log.info("map                  ======>{}", [map]);
    log.info("containsKey          ======>{}", map.containsKey("a"));
    //fixme containsValue 对比结果好像不对
    log.info("containsValue        ======>{}", map.containsValue("3"));
    log.info("size                 ======>{}", map.size());
    log.info("get                  ======>{}", map.get("a"));
    map.put("g",898)
    log.info("map                  ======>{}", [map]);
    log.info("isEmpty              ======>{}", map.isEmpty());
    log.info("remove               ======>{}", map.remove(1));
    log.info("remove               ======>{}", map.remove("a"));
    log.info("map                  ======>{}", [map]);
    map.clear()
    log.info("map                  ======>{}", [map]);

}

export {
    t01,
}