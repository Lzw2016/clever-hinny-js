// import { commonUtils } from "@hinny/core";
import { jdbcDatabase, mybatisJdbcDatabase, QueryByPage } from "@hinny/data-jdbc";
import { HttpHandle, HttpMethod, HttpRouter } from "@hinny/mvc";
import { BuiltinFormats, excelUtils, IndexedColors } from "@hinny/core";

const log = LoggerFactory.getLogger(__filename);
const jdbc = jdbcDatabase.getDefault();

export const t01: HttpHandle = ctx => {
    const {request} = ctx;
    log.info("getHeaderNames --> {}", request.getHeaderNames());
    return jdbc.queryList("select * from tb_order_main limit 16");
}

export const t02: HttpRouter = {
    method: HttpMethod.POST,

    handle: ctx => {
        log.info("getHeaderNames -->");
        return ctx.request.getHeaderNames();
    },

    get: ctx => {
        log.info("getParameterNames --> {}", ctx.request.getParameterNames());
        const queryByPage: QueryByPage = ctx.request.getQueryByPage();
        // 排序字段映射关系
        queryByPage.fieldsMapping = {
            store_no: "store_no",
        };
        queryByPage.store_no = Interop.asJLong("1089704947936186369");
        return jdbc.queryByPage("select * from tb_order_detail_distinct where store_no = :store_no", queryByPage);
    },

    put: ctx => {
        log.info("-> {}", ctx.request.getQueryString());
        ctx.response.addHeader("x-h-test", "test ")
        return jdbc.queryByPage("select * from tb_order_main", {
            pageNo: 2
        })
    },
};

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

export const t03: HttpRouter = {
    get: ctx => {
        const {request, response} = ctx;
        response.getHeaders("");
        const limit = request.getParameter("limit") ?? "3";
        const listData = jdbc.queryList(
            "select * from tb_order_detail_distinct limit :limit",
            {limit: Interop.asJInt(limit)},
        );
        excelUtils.write<ExcelEntity>(
            {
                request: request.originalRequest(),
                response: response.originalResponse(),
                fileName: "数据导出.xlsx",
                autoCloseStream: false,
                sheetName: "订单明细",
                columns: {
                    store_no: {column: ["店铺信息", "店铺编号"], columnWidth: 22},
                    store_prod_no: {column: ["店铺信息", "店铺商品编码"], columnWidth: 26},
                    order_code: {column: ["店铺信息", "订单编码"], columnWidth: 20, contentFontStyle: {color: IndexedColors.GREEN}},
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
                        contentFontStyle: {color: IndexedColors.RED,},
                        contentStyle: {dataFormat: BuiltinFormats.Fmt_8,},
                    },
                    // create_at: {column: ["购买信息", "下单时间"], columnWidth: 20},
                },
                styleConfig: {
                    headStyle: {
                        locked: true,
                    }
                }
            },
            listData
        );
        // return listData;
    }
}

const mybatis = mybatisJdbcDatabase.getDefault();

export const t04: HttpRouter = {
    get: ctx => {
        return mybatis.queryList("sql.select-01", {
            // storeNo: '1089704947936186369',
            orderCodeList: Interop.asJList('hubei0XS00000037', 'hubei0XS00000038', 'hubei0XS00000040'),
        });
    },
}