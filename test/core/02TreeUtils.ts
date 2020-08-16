import { LongTreeNode, RootTreeNode, StringTreeNode, treeUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

const t01 = function () {
    log.info("rootLevelString   -> {}", treeUtils.rootLevelString(3));
    log.info("isLevelString     -> {}", treeUtils.isLevelString("00200A"));
    log.info("isLevelString     -> {}", treeUtils.isLevelString("00200X"));
    let str = treeUtils.nextLevelString(3, "00200A");
    for (let i = 0; i < 10; i++) {
        log.info("nextLevelString   -> {}", str);
        str = treeUtils.nextLevelString(3, str);
    }
}

interface TreeNodeA extends StringTreeNode {
    d1: JString;
    d2: JBoolean;
}

const t02 = function () {
    const n_00: TreeNodeA = {id: "00", parentId: RootTreeNode.StringParentId, d1: "a01", d2: false};
    const n_01: TreeNodeA = {id: "01", parentId: RootTreeNode.StringParentId, d1: "a02", d2: true};
    const n_0001: TreeNodeA = {id: "0001", parentId: "00", d1: "a03", d2: true};
    const n_0002: TreeNodeA = {id: "0002", parentId: "00", d1: "a04", d2: true};
    const tree = treeUtils.buildStringTree(Interop.asJList(n_00, n_01, n_0001, n_0002));
    log.info("tree -> {}", tree);
}

interface TreeNodeB extends LongTreeNode {
    d1: JString;
    d2: JBoolean;
}

const t03 = function () {
    const n_00: TreeNodeB = {id: 1, parentId: RootTreeNode.LongParentId, d1: "a01", d2: false};
    const n_01: TreeNodeB = {id: 2, parentId: RootTreeNode.LongParentId, d1: "a02", d2: true};
    const n_0001: TreeNodeB = {id: 3, parentId: 1, d1: "a03", d2: true};
    const n_0002: TreeNodeB = {id: 4, parentId: 1, d1: "a04", d2: true};
    const tree = treeUtils.buildLongTree(Interop.asJList(n_00, n_01, n_0001, n_0002));
    log.info("tree -> {}", tree);
    log.info("tree -> {}", tree.get(0).getId());
    log.info("tree -> {}", tree.get(0).getAttributes());
}

export {
    t01,
    t02,
    t03,
}