import { AnalysisContext, BuiltinFormats, CellExtraTypeEnum, ExcelDataType, ExcelRow, excelUtils, IndexedColors, RoundingMode } from '@hinny/core';

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
                dataType: ExcelDataType.JString,
                column: ["第二", "下架积分商品数"],
                numberFormat: "###,##0.000000",
                roundingMode: RoundingMode.HALF_UP,
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

const t04 = function () {
    const listData: JList<Entity> = Interop.asJList<Entity>(
        {aaa: "a1", bbb: "b1", ccc: "c1", ddd: 1, eee: 111, fff: Interop.asJBigDecimal("111.111")},
        {aaa: "a2", bbb: "b2", ccc: "c2", ddd: 2, eee: 222, fff: Interop.asJBigDecimal("222.222")},
        {aaa: "a3", bbb: "b3", ccc: "c3", ddd: 3, eee: 333, fff: Interop.asJBigDecimal("333.333")},
        {aaa: "a4", bbb: "b4", ccc: "c4", ddd: 4, eee: 444, fff: Interop.asJBigDecimal("666888.999")},
    );
    excelUtils.write<Entity>({
        fileName: "C:\\Users\\lizw\\Downloads\\药店积分商品统计20200813141850.xlsx",
        sheetName: "测试数据",
        columns: {
            aaa: {
                column: ["第一", "序号"],
                columnWidth: 10,
            },
            bbb: {
                column: ["第一", "药店ID"],
                columnWidth: 12,
            },
            ccc: {
                column: ["第一", "药店名称"],
                columnWidth: 20,
            },
            ddd: {
                column: ["第二", "积分商品总数量"],
                columnWidth: 20,
                // eachRow: 1,
                // columnExtend: 2,
            },
            eee: {
                column: ["第二", "上架积分商品数"],
                columnWidth: 20,
            },
            fff: {
                column: ["第二", "下架积分商品数"],
                columnWidth: 20,
                color: IndexedColors.RED,
                dataFormat: BuiltinFormats.Fmt_5,
            },
        },
        styleConfig: {
            color: IndexedColors.BLUE,
        }
    }, listData);
}

export {
    t01,
    t02,
    t03,
    t04,
}