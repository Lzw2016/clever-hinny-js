const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const set = Interop.asJSet("大家撒旦吉萨", "1556", "水电费√d", "1556");
    const iterator = set.iterator();
    while (iterator.hasNext()) {
        log.info("next ======>{}", iterator.next());
    }
    log.info("set                  ======>{}", [set]);
    log.info("size                 ======>{}", set.size());
    log.info("toArray              ======>{}", [set.toArray()]);
    log.info("contains             ======>{}", set.contains("1556"));
    log.info("isEmpty              ======>{}", set.isEmpty());
    log.info("remove               ======>{}", set.remove(1));
    log.info("remove               ======>{}", set.remove("1556"));
    log.info("set                  ======>{}", [set]);
    log.info("add                  ======>{}", set.add("ewqdwqdqdq"));
    log.info("set                  ======>{}", [set]);

    const collection = Interop.asJList("415613", "水电费√d");
    log.info("containsAll          ======>{}", set.containsAll(collection));
    log.info("retainAll            ======>{}", set.retainAll(collection));
    log.info("set                  ======>{}", [set]);
    log.info("removeAll            ======>{}", set.removeAll(collection));
    log.info("set                  ======>{}", [set]);
    log.info("addAll               ======>{}", set.addAll(collection));
    log.info("set                  ======>{}", [set]);
}

export {
    t01,
}