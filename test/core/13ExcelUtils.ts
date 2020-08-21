import { ExcelDataType, excelUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

interface Entity {
    aaa: JString,
    bbb: JString,
    ccc: JString,
    ddd: JString,
    eee: JString,
    fff: JString,
}

const File = Java.type("java.io.File");
const t01 = function () {
    const res = excelUtils.read<Entity>({
        filename: "药店积分商品统计20200813141849.xlsx",
        inputStream: Java.type("org.apache.commons.io.FileUtils").openInputStream(new File("C:\\Users\\lizw\\Downloads\\药店积分商品统计20200813141849.xlsx")),
        columns: {
            aaa: {
                dataType: ExcelDataType.JString,
                column: "序号",
            },
            bbb: {
                dataType: ExcelDataType.JString,
                column: "药店ID",
            },
            ccc: {
                dataType: ExcelDataType.JString,
                column: "药店名称",
            },
            ddd: {
                dataType: ExcelDataType.JString,
                column: "积分商品总数量",
            },
            eee: {
                dataType: ExcelDataType.JString,
                column: "上架积分商品数",
            },
            fff: {
                dataType: ExcelDataType.JString,
                column: "下架积分商品数",
            },
        },
    });
    log.info("res -> {}", res);
}

export {
    t01,
}