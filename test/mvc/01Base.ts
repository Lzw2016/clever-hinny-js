// import { commonUtils } from "@hinny/core";
import { jdbcDatabase, mybatisJdbcDatabase, QueryByPage } from "@hinny/data-jdbc";
import { HttpHandle, HttpMethod, HttpRouter, MediaType } from "@hinny/mvc";
import { AnalysisContext, BarcodeFormat, BuiltinFormats, cookieUtils, ExcelDataType, ExcelRow, excelUtils, httpRequestUtils, imageValidateUtils, IndexedColors, ioUtils, ValidatorRule, validatorUtils, zxingUtils } from "@hinny/core";

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

// Excel导入导出
export const t03: HttpRouter = {
    get: ctx => {
        const {request, response} = ctx;
        response.getHeaders("");
        const limit = request.getParameter("limit") ?? "50";
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
                    manufacture: {column: ["商品信息", "厂家"], columnWidth: 30},
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
    },
    post: ctx => {
        const excelData = excelUtils.read<ExcelEntity>({
            request: ctx.request.originalRequest(),
            columns: {
                store_no: {dataType: ExcelDataType.JString, column: ["店铺信息", "店铺编号"]},
                store_prod_no: {dataType: ExcelDataType.JBigDecimal, column: ["店铺信息", "店铺商品编码"]},
                order_code: {dataType: ExcelDataType.JString, column: ["店铺信息", "订单编码"]},
                erp_no: {dataType: ExcelDataType.JString, column: ["商品信息", "ERP编码"]},
                prod_name: {dataType: ExcelDataType.JString, column: ["商品信息", "商品名称"]},
                prod_specification: {dataType: ExcelDataType.JString, column: ["商品信息", "规格"]},
            },
            // headRowNumber: 2,
            excelRowReader: {
                readRow(data: ExcelEntity, excelRow: ExcelRow<ExcelEntity>, context: AnalysisContext) {
                    log.info("# {} | excelRow -> {}", excelRow.getExcelRowNum(), excelRow.getData());
                    // jdbc.in
                },
                readEnd(context: AnalysisContext) {
                    log.info(" readEnd -> 导入完成!!!");
                }
            },
        });
        // excelData.getFirstExcelData().getImportData().size()
        return excelData.getFirstExcelData().getImportData();
    },

    put: ctx => {
        const reader = excelUtils.createReader({
            request: ctx.request.originalRequest(),
            columns: {
                store_no: {dataType: ExcelDataType.JString, column: ["店铺信息", "店铺编号"]},
                store_prod_no: {dataType: ExcelDataType.JBigDecimal, column: ["店铺信息", "店铺商品编码"]},
                order_code: {dataType: ExcelDataType.JString, column: ["店铺信息", "订单编码"]},
                erp_no: {dataType: ExcelDataType.JString, column: ["商品信息", "ERP编码"]},
                prod_name: {dataType: ExcelDataType.JString, column: ["商品信息", "商品名称"]},
                prod_specification: {dataType: ExcelDataType.JString, column: ["商品信息", "规格"]},
            },
            excelRowReader: {
                readRow(data: ExcelEntity, excelRow: ExcelRow<ExcelEntity>, context: AnalysisContext) {
                    log.info("{} excelRow -> {}", excelRow.getExcelRowNum(), excelRow.getData());
                },
                readEnd(context: AnalysisContext) {
                    log.info(" readEnd -> 导入完成!!!");
                }
            },
            enableExcelData: false,
        });
        reader.read().sheet(0).doRead();
        return {success: true};
    },
}

const mybatis = mybatisJdbcDatabase.getDefault();

interface OrderDetailDistinct {
    id: JLong,
    storeNo: JString,
    orderCode: JString,
    storeProdNo: JString,
    erpNo: JString,
    prodName: JString,
    prodSpecification: JString,
    packageUnit: JString,
    manufacture: JString,
    frontPic: JString,
    merchandiseNumber: JBigDecimal,
    outNumber: JBigDecimal,
    noOutNumber: JBigDecimal,
    goodsStatus: JBigDecimal,
    memberPrice: JBigDecimal,
    averagePrice: JBigDecimal,
    createAt: JSqlDate,
    updateAt: JSqlDate,
}

export const t04: HttpRouter = {
    get: ctx => {
        // mybatis.queryList("sql.select-01", ctx.request.getRequestData());
        const entity = mybatis.queryTableEntity<OrderDetailDistinct>(
            "tb_order_detail_distinct",
            {
                id: "1107982724040765441",
                storeProdNo: "1089710052089581571",
            },
        );
        log.info("storeNo -> {}", entity.storeNo);

        return entity;
        // return mybatis.queryList("sql.select-01", {
        //     // storeNo: '1089704947936186369',
        //     orderCodeList: Interop.asJList('hubei0XS00000037', 'hubei0XS00000038', 'hubei0XS00000040'),
        // });
    },

    put: ctx => {
        const array: OrderDetailDistinct[] = [];
        mybatis.query<OrderDetailDistinct>("sql.select-01", row => {
            log.info("storeNo -> {}", row.getRowData().storeNo)
            array.push(row.getRowData());
        });
        return array;
    }
}

interface Entity01 {
    str: JString;
    bool: JBoolean;
    num: JLong;
}

const rule0101: ValidatorRule<Entity01> = {
    str: {length: {min: 10, max: 20}},
    bool: {notNull: true, equals: true},
    num: {range: {min: 0, max: 666}},
};

export const t05: HttpRouter = {
    get: ctx => {
        const data01: Entity01 = {
            str: "aaa1234567890",
            bool: true,
            num: 666,
        }
        validatorUtils.validated(data01, rule0101);
        return data01;
    },

    post: ctx => {
        log.info("ContentType -> {}", ctx.request.getContentType());
    },
}

export const t06: HttpRouter = {
    post: ctx => {
        // 定义实体类型
        const postData = {
            name: "",
            age: 0,
            isVip: false,
            sex: "",
            sub: {},
            arr: [],
            arr2: [],
            list: Interop.asJList(),
        };
        ctx.request.fillFromAny(postData);
        // 填充实体数据并校验数据
        // ctx.request.fillAndValidatedFromAny(postData, {
        //     name: {notBlank: true, length: {min: 6, max: 12}},
        //     age: {notNull: true, range: {min: 18, max: 65}},
        //     isVip: {notNull: true},
        //     sex: {notBlank: true, equalsIn: ["f", "m"]},
        // });
        // log.info("--> {}", postData.sub);
        log.info("--> {}", (postData.sub as any).a);
        return postData;
        // 后面就可以使用 postData 了
        // ... 省略业务代码
        // return bizFuc(postData);
    },

    get: ctx => {
    },
}

export const t07: HttpRouter = {
    get: ctx => {
        const params = ctx.request.getParams();
        log.info("params -> {}", params.name);
        return params;
    },
    post: ctx => {
        const body = ctx.request.getBody();
        log.info("params -> {}", body.project_name);
        return body;
    },
    put: ctx => {
        const params = ctx.request.getParamsMap();
        log.info("params -> {}", params.get("name"));
        return params.toSingleValueMap();
    },
}

export const t08: HttpRouter = {
    get: ctx => {
        const data = ctx.request.getRequestData();
        log.info("data ->   {}", data.project_name);
        return data;
    }
}

// interface PostData {
//     name: string;
//     age: number;
//     isVip: boolean;
//     sex: string;
// }
// const t07 : HttpHandle = ctx => {
//     const {request} = ctx;
//     // 定义实体类型
//     request.fillFromAny(postData);
//
//     // 填充实体数据并校验数据
//     request.fillAndValidatedFromAny(postData, {
//         name: {notBlank: true, length: {min: 6, max: 12}},
//         age: {notNull: true, range: {min: 18, max: 65}},
//         isVip: {notNull: true},
//         sex: {notBlank: true, equalsIn: ["f", "m"]},
//     });
// }

// // 业务处理函数 -- 前端使用这个方法签名做前后端一体化
// function bizFuc(postData): any {
//     // 业务处理代码
// }


// 图片验证码
export const t60: HttpRouter = {
    get: ctx => {
        ctx.response.setContentType(MediaType.Png);

        // const code = imageValidateUtils.createImageStream(ctx.response.getOutputStream());
        // log.info("code -> {}", code);

        // const code = imageValidateUtils.createImageStreamUseCage(ctx.response.getOutputStream());
        // log.info("code -> {}", code);

        const code = imageValidateUtils.createImageStreamUseKaptcha(ctx.response.getOutputStream());
        log.info("code -> {}", code);

        // const code = imageValidateUtils.createImageStreamUsePatchca(ctx.response.getOutputStream());
        // log.info("code -> {}", code);
    },
}

// 条形码、二维码
export const t61: HttpRouter = {
    get: ctx => {
        ctx.response.setContentType(MediaType.Png);
        zxingUtils.createImageStream(
            "123234",
            BarcodeFormat.CODE_39,
            256,
            64,
            ctx.response.getOutputStream()
        );
    },
}

// Cookie操作
export const t62: HttpRouter = {
    get: ctx => {
        // cookieUtils.setCookieForCurrentPath(ctx.response.originalResponse(), "test-01", "aaabbb");
        // cookieUtils.setCookieForRooPath(ctx.response.originalResponse(), "test-01", "aaabbb");

        cookieUtils.delCookieForRooPath(ctx.request.originalRequest(), ctx.response.originalResponse(), "test-01");
        cookieUtils.delCookieForCurrentPath(ctx.request.originalRequest(), ctx.response.originalResponse(), "test-01");
        cookieUtils.delCookieForRooPath(ctx.request.originalRequest(), ctx.response.originalResponse(), "Authorization");
        cookieUtils.delCookieForRooPath(ctx.request.originalRequest(), ctx.response.originalResponse(), "USEDEFAULTSITE");
        cookieUtils.delCookieForRooPath(ctx.request.originalRequest(), ctx.response.originalResponse(), "auth");
        return {success: true};
    },
}

// HttpRequestUtils
export const t63: HttpRouter = {
    get: ctx => {
        const params = httpRequestUtils.getRequestParams(ctx.request.originalRequest());
        log.info("params -> {}", params);

        const uri = httpRequestUtils.getRequestURI(ctx.request.originalRequest());
        log.info("uri -> {}", uri);

        const url = httpRequestUtils.getRequestURL(ctx.request.originalRequest());
        log.info("url -> {}", url);

        const uriNotSuffix = httpRequestUtils.getRequestURINotSuffix(ctx.request.originalRequest());
        log.info("uriNotSuffix -> {}", uriNotSuffix);

        return {params, uri, url, uriNotSuffix};
    },
}

// IOUtils
export const t64: HttpRouter = {
    get: ctx => {
        const path = ioUtils.getAbsolutePath("./");
        log.info("path -> {}", path);

        // ctx.response.setContentType(MediaType.Xml);
        // const pomInput = ioUtils.openInputStream("./pom.xml")
        // ioUtils.copy(pomInput, ctx.response.getOutputStream())
        // ioUtils.close(pomInput);

        // ctx.response.setContentType(MediaType.Plain);
        // const pomInput = ioUtils.openInputStream("./graaljs-test/src/main/java/org/clever/hinny/demo/config/BeanConfiguration.java")
        // ioUtils.copy(pomInput, ctx.response.getOutputStream())
        // ioUtils.close(pomInput);

        ctx.response.setDownloadFileName("二维码.jpeg");
        const data = zxingUtils.createImage(
            "https://blog.csdn.net/weixin_38312502/article/details/83825080",
            BarcodeFormat.QR_CODE
        );
        ioUtils.writeByteArray(ctx.response.getOutputStream(), data);
    },
}

// 文件上传
export const t65: HttpRouter = {
    get: ctx => {
        const filenames = ctx.request.getUploadFileNames();
        log.info("filenames -> {}", [filenames]);
        const allFile = ctx.request.getAllUploadFiles();
        const iterator = allFile.keySet().iterator();
        while (iterator.hasNext()) {
            const files = allFile.get(iterator.next());
            if (!files) {
                continue;
            }
            for (let i = 0; i < files.size(); i++) {
                const file = files.get(i);
                log.info("file -> Name={} | OriginalFilename={} | Size={}", file.getName(), file.getOriginalFilename(), file.getSize());
            }
        }
        const file = ctx.request.getFirstUploadFile();
        const path = ioUtils.normalize(ioUtils.getAbsolutePath("./temp.jpg"));
        log.info("path -> {}", path);
        file.transferTo(path);
        ioUtils.writeByteArray(ctx.response.getOutputStream(), file.getBytes());
    },
}

