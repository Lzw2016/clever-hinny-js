import { AnalysisContext, CellExtraTypeEnum, ExcelDataType, ExcelRow, excelUtils } from '@hinny/core';

const log = LoggerFactory.getLogger(__filename);

interface Entity {
    aaa: JString,
    bbb: JString,
    ccc: JString,
    ddd: JInt,
    eee: JLong,
    fff: JBigDecimal,
}

const File = Java.type("java.io.File");
const t01 = function () {
    const res = excelUtils.read<Entity>({
        filename: "药店积分商品统计20200813141849.xlsx",
        inputStream: Java.type("org.apache.commons.io.FileUtils").openInputStream(new File("C:\\Users\\lizw\\Downloads\\药店积分商品统计20200813141849.xlsx")),
        columns: {
            aaa: {
                dataType: ExcelDataType.JString,
                column: ["序号"],
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
                dataType: ExcelDataType.JInteger,
                column: "积分商品总数量",
            },
            eee: {
                dataType: ExcelDataType.JLong,
                column: "上架积分商品数",
            },
            fff: {
                dataType: ExcelDataType.JBigDecimal,
                column: "下架积分商品数",
            },
        },
    });
    log.info("res -> {}", res.getFirstExcelData());
}

const t02 = function () {
    const res = excelUtils.read<Entity>({
        filename: "药店积分商品统计20200813141849.xlsx",
        inputStream: Java.type("org.apache.commons.io.FileUtils").openInputStream(new File("C:\\Users\\lizw\\Downloads\\药店积分商品统计20200813141849.xlsx")),
        columns: {
            aaa: {
                dataType: ExcelDataType.JString,
                column: ["第一", "序号"],
            },
            bbb: {
                dataType: ExcelDataType.JString,
                column: ["第一", "药店ID"],
            },
            ccc: {
                dataType: ExcelDataType.JString,
                column: ["第一", "药店名称"],
            },
            ddd: {
                dataType: ExcelDataType.JInteger,
                column: ["第二", "积分商品总数量"],
            },
            eee: {
                dataType: ExcelDataType.JLong,
                column: ["第二", "上架积分商品数"],
            },
            fff: {
                dataType: ExcelDataType.JBigDecimal,
                column: ["第二", "下架积分商品数"],
            },
            ggg: {
                dataType: ExcelDataType.JString,
                column: ["第三", "其他"],
            }
        },
        headRowNumber: 1,
        extraRead: [CellExtraTypeEnum.COMMENT, CellExtraTypeEnum.MERGE],
        excelRowReader: {
            readRow(data: Entity, excelRow: ExcelRow<Entity>, context: AnalysisContext) {
                log.info("#[{}]当前数据 -> {}", excelRow.getExcelRowNum(), data);
            },

            readEnd(context: AnalysisContext) {
                log.info("Excel读取完成");
            }
        }
    });
    log.info("res -> {}", res.getFirstExcelData());
}

const t03 = function () {
    const reader = excelUtils.createReader<Entity>({
        filename: "药店积分商品统计20200813141849.xlsx",
        inputStream: Java.type("org.apache.commons.io.FileUtils").openInputStream(new File("C:\\Users\\lizw\\Downloads\\药店积分商品统计20200813141849.xlsx")),
        columns: {
            aaa: {
                dataType: ExcelDataType.JString,
                column: ["第一", "序号"],
            },
            bbb: {
                dataType: ExcelDataType.JString,
                column: ["第一", "药店ID"],
            },
            ccc: {
                dataType: ExcelDataType.JString,
                column: ["第一", "药店名称"],
            },
            ddd: {
                dataType: ExcelDataType.JInteger,
                column: ["第二", "积分商品总数量"],
            },
            eee: {
                dataType: ExcelDataType.JLong,
                column: ["第二", "上架积分商品数"],
            },
            fff: {
                dataType: ExcelDataType.JBigDecimal,
                column: ["第二", "下架积分商品数"],
            },
        },
    });
    reader.read().headRowNumber(1);
    reader.read().autoCloseStream(true);
    reader.read().sheet(0).doRead();
    log.info("res -> {}", reader.getFirstExcelData());
}

export {
    t01,
    t02,
    t03,
}