const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const list = Interop.asJList("大家撒旦吉萨", "1556", "水电费√d", "158", "159", "160");
    const iterator = list.iterator();
    while (iterator.hasNext()) {
        log.info("next ======>{}", iterator.next());
    }
    log.info("list                 ======>{}", [list]);
    log.info("size                 ======>{}", list.size());
    log.info("toArray              ======>{}", [list.toArray()]);
    log.info("set                  ======>{},>>>>{}", list.set(0, "888"), [list]);
    log.info("subList              ======>{}", [list.subList(0, 1)]);
    log.info("contains             ======>{}", list.contains("1556"));
    log.info("get                  ======>{}", list.get(0));
    log.info("indexOf              ======>{}", list.indexOf("1556"));
    log.info("lastIndexOf          ======>{}", list.lastIndexOf("1556"));
    log.info("isEmpty              ======>{}", list.isEmpty());

    const collection = Interop.asJList("1556", "水电费√d");
    log.info("containsAll          ======>{}", list.containsAll(collection));
    log.info("retainAll            ======>{}", list.retainAll(collection));
    log.info("removeAll            ======>{}", list.removeAll(collection));
    log.info("addAll               ======>{}", list.addAll(collection));
    log.info("addAll               ======>{}", list.addAll(1, collection));
    log.info("list                 ======>{}", [list]);
    log.info("remove               ======>{}", list.remove(1));
    log.info("remove               ======>{}", list.remove("1556"));
    log.info("list                 ======>{}", [list]);
    log.info("add                  ======>{}", list.add(1, "123"));
    log.info("add                  ======>{}", list.add("ewqdwqdqdq"));
    log.info("list                 ======>{}", [list]);
    const listIterator2 = list.listIterator(1);
    while (listIterator2.hasNext()) {
        log.info("listIterator2 ======>{}", listIterator2.next());
    }
    const listIterator = list.listIterator();
    while (listIterator.hasNext()) {
        log.info("listIterator ======>{}", listIterator.next());
    }
}

export {
    t01,
}