const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const map = Interop.asJMap({
        a: Interop.asJInt(1),
        b: Interop.asJInt(2),
    });
    log.info("entrySet             ======>{}", [map.entrySet()]);
    log.info("keySet               ======>{}", [map.keySet()]);
    log.info("map                  ======>{}", [map]);
    log.info("values               ======>{}", [map.values()]);
    log.info("containsKey          ======>{}", map.containsKey("a"));
    log.info("containsValue        ======>{}", map.containsValue(Interop.asJInt(1)));
    log.info("size                 ======>{}", map.size());
    log.info("get                  ======>{}", map.get("a"));
    map.put("g", 898)
    map.put("p", "898")
    const map2 = Interop.asJMap({
        h: Interop.asJInt(111),
        hh: Interop.asJInt(2222),
    });
    map.putAll(map2)
    map.put("putNum", 123);
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