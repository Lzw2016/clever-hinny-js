const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    const list = Interop.asJList("大家撒旦吉萨", "1556", "水电费√d");
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
    //fixme 以下方法均不支持
    log.info("remove               ======>{}", list.remove(1));
    log.info("remove               ======>{}", list.remove("1156"));
    log.info("list                 ======>{}", [list]);
    log.info("add                  ======>{}", list.add(1, "123"));
    log.info("add                  ======>{}", list.add("ewqdwqdqdq"));
    const listIterator2 = list.listIterator(1);
    while (listIterator2.hasNext()) {
        log.info("listIterator2 ======>{}", listIterator2.next());
    }
    const listIterator = list.ListIterator();
    while (listIterator.hasNext()) {
        log.info("listIterator ======>{}", listIterator.next());
    }
}

export {
    t01,
}