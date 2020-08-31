import { AnalysisContext, BuiltinFormats, CellExtraTypeEnum, ExcelDataType, ExcelRow, excelUtils, IndexedColors, RoundingMode, WriteDirectionEnum } from '@hinny/core';
import { jdbcDatabase } from "@hinny/data-jdbc";

const log = LoggerFactory.getLogger(__filename);
const jdbc = jdbcDatabase.getDefault();

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
        // excelType: ExcelTypeEnum.XLS,
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
                contentLoopMerge: {
                    eachRow: 1,
                    columnExtend: 2,
                }
            },
            eee: {
                column: ["第二", "上架积分商品数"],
                columnWidth: 20,
            },
            fff: {
                column: ["第二", "下架积分商品数"],
                columnWidth: 20,
                contentFontStyle: {
                    color: IndexedColors.RED,
                },
                contentStyle: {
                    dataFormat: BuiltinFormats.Fmt_8,
                }
            },
        },
        styleConfig: {
            contentFontStyle: {
                color: IndexedColors.BLUE,
            }
        }
    }, listData);
}

const t05 = function () {
    const listData: JList<Entity> = Interop.asJList<Entity>(
        {aaa: "a1", bbb: "b1", ccc: "c1", ddd: 1, eee: 111, fff: Interop.asJBigDecimal("111.111")},
        {aaa: "a2", bbb: "b2", ccc: "c2", ddd: 2, eee: 222, fff: Interop.asJBigDecimal("222.222")},
        {aaa: "a3", bbb: "b3", ccc: "c3", ddd: 3, eee: 333, fff: Interop.asJBigDecimal("333.333")},
        {aaa: "a4", bbb: "b4", ccc: "c4", ddd: 4, eee: 444, fff: Interop.asJBigDecimal("666888.999")},
    );
    const excelWriter = excelUtils.createWriter<Entity>({
        fileName: "C:\\Users\\lizw\\Downloads\\药店积分商品统计20200813141850.xlsx",
        // excelType: ExcelTypeEnum.XLS,
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
            },
            eee: {
                column: ["第二", "上架积分商品数"],
                columnWidth: 20,
            },
            fff: {
                column: ["第二", "下架积分商品数"],
                columnWidth: 20,
                contentFontStyle: {
                    color: IndexedColors.RED,
                },
                contentStyle: {
                    dataFormat: BuiltinFormats.Fmt_8,
                }
            },
        },
        styleConfig: {
            contentFontStyle: {
                color: IndexedColors.BLUE,
            }
        },
    });
    for (let i = 0; i < 100; i++) {
        excelWriter.write(listData);
    }
    excelWriter.finish();
}

const t06 = function () {
    const excelWriter = excelUtils.createWriter({
        fileName: "C:\\Users\\lizw\\Downloads\\模板数据填充.xlsx",
        sheetNo: 0,
        template: "C:\\Users\\lizw\\Downloads\\模板文件.xlsx",
    });

    excelWriter.fill({
        name: "李志伟",
        age: "18",
    });
    // 列表填充只能用一次
    // excelWriter.fill(
    //     Interop.asJList({name: "张三", money: 9.6}, {name: "李四", money: 15.6}, {name: "王五", money: 12.3}),
    //     {
    //         direction: WriteDirectionEnum.HORIZONTAL
    //     },
    // );
    excelWriter.fill(
        Interop.asJList({course: "语文", score: 61}, {course: "数学", score: 100}, {course: "英语", score: 38}),
        {
            direction: WriteDirectionEnum.VERTICAL
        },
    );
    excelWriter.finish();
}

interface ExcelEntity {
    /** 店铺编号 */
    store_no: JString;
    /** 店铺商品编码 */
    store_prod_no: JString;
    /** 订单编码 */
    order_code: JString;
    /** ERP编码 */
    erp_no: JString;
    /** 商品名称 */
    prod_name: JString;
    /** 规格 */
    prod_specification: JString;
    /** 单位 */
    package_unit: JString;
    /** 厂家 */
    manufacture: JString;
    /** 购买数量 */
    merchandise_number: JBigDecimal;
    /** 出库数量 */
    out_number: JBigDecimal;
    /** 不出库数量 */
    no_out_number: JBigDecimal;
    /** 会员价 */
    member_price: JBigDecimal;
    // /** 创建时间 */
    // create_at: JDate;
}

const t07 = function () {
    const listData = jdbc.queryList(
        "select * from tb_order_detail_distinct limit :limit",
        {limit: Interop.asJInt(5)},
    );
    excelUtils.write<ExcelEntity>(
        {
            fileName: "C:\\Users\\lizw\\Downloads\\数据导出.xlsx",
            // autoCloseStream: false,
            sheetName: "订单明细",
            columns: {
                store_no: {column: ["店铺信息", "店铺编号"], columnWidth: 22},
                store_prod_no: {column: ["店铺信息", "店铺商品编码"], columnWidth: 26},
                order_code: {column: ["店铺信息", "订单编码"], columnWidth: 20},
                erp_no: {column: ["商品信息", "ERP编码"], columnWidth: 16},
                prod_name: {column: ["商品信息", "商品名称"], columnWidth: 30},
                prod_specification: {column: ["商品信息", "规格"], columnWidth: 16},
                package_unit: {column: ["商品信息", "单位"], columnWidth: 10},
                manufacture: {column: ["商品信息", "厂家"], columnWidth: 60},
                merchandise_number: {column: ["购买信息", "购买数量"], columnWidth: 12},
                out_number: {column: ["购买信息", "出库数量"], columnWidth: 12},
                no_out_number: {column: ["购买信息", "不出库数量"], columnWidth: 16},
                member_price: {
                    column: ["购买信息", "会员价"],
                    columnWidth: 12,
                    // contentFontStyle: {color: IndexedColors.RED,},
                    contentStyle: {dataFormat: BuiltinFormats.Fmt_8,},
                },
                // create_at: {column: ["购买信息", "下单时间"], columnWidth: 20},
            },
            styleConfig: {
                // contentFontStyle: {
                //     color: IndexedColors.BLUE,
                // },
                // headStyle: {
                //     locked: true,
                // },
            }
        },
        listData
    );
}

export {
    t01,
    t02,
    t03,
    t04,
    t05,
    t06,
    t07,
}