// interface Class {
//
// }

export interface CellData {

}

export interface ExcelContentProperty {

}

export interface GlobalConfiguration {

}

export enum ExcelTypeEnum {
    /** .xls */
    XLS = "XLS",
    /** .xlsx */
    XLSX = "XLSX",
}

export enum CellExtraTypeEnum {
    /** 批注信息 */
    COMMENT = "COMMENT",
    /** 超链接 */
    HYPERLINK = "HYPERLINK",
    /** 合并单元格 */
    MERGE = "MERGE",
}

export enum CellDataTypeEnum {
    /** 字符串 */
    STRING = "STRING",
    /** 不需要在sharedStrings.xml，它只用于过度使用，并且数据将存储为字符串 */
    DIRECT_STRING = "DIRECT_STRING",
    /** 数字 */
    NUMBER = "NUMBER",
    /** boolean值 */
    BOOLEAN = "BOOLEAN",
    /** 空单元格 */
    EMPTY = "EMPTY",
    /** 错误格 */
    ERROR = "ERROR",
    /** 当前仅在写入时支持图像 */
    IMAGE = "IMAGE",
}

export enum Locale {
    /** 英语 */
    ENGLISH = "ENGLISH",
    /** 中文 */
    CHINESE = "CHINESE",
    /** 简体中文 */
    SIMPLIFIED_CHINESE = "SIMPLIFIED_CHINESE",
    /** 繁体中文 */
    TRADITIONAL_CHINESE = "TRADITIONAL_CHINESE",
}

export interface AbstractParameterBuilder<T extends AbstractParameterBuilder<T>> {
    /** 如果日期使用1904窗口，则为True；如果使用1900日期窗口，则为false */
    use1904windowing(use1904windowing: boolean): T;

    /** Locale对象表示特定的地理、政治或文化区域。设置日期和数字格式时使用此参数 */
    locale(locale: Locale): void;

    /** 自动删除空格字符 */
    autoTrim(autoTrim: boolean): void;

    // head(List<List<String>> head)
}

export interface AbstractExcelReaderParameterBuilder<T extends AbstractExcelReaderParameterBuilder<T>> extends AbstractParameterBuilder<T> {

    /** 表头行数 */
    headRowNumber(headRowNumber: number): T;

    /** 使用科学格式 */
    useScientificFormat(useScientificFormat: boolean): T;

    // registerReadListener(readListener: ReadListener): T;
}

export interface ExcelReaderSheetBuilder extends AbstractExcelReaderParameterBuilder<ExcelReaderSheetBuilder> {
    /** 页签编号(从0开始) */
    sheetNo(sheetNo: number): ExcelReaderSheetBuilder;

    /** 页签名称(xlsx格式才支持) */
    sheetName(sheetName: string): ExcelReaderSheetBuilder;

    /**
     * 开始读取Excel数据(推荐)
     */
    doRead(): void;

    // /**
    //  * 读取Excel数据，并返回所有结果(数据量大时，会消耗大量内存)
    //  */
    // doReadSync(): List<T>;
}

export interface ExcelReaderBuilder extends AbstractExcelReaderParameterBuilder<ExcelReaderBuilder> {
    /** 文件输入流 */

    // file(inputStream: InputStream): ExcelReaderBuilder;

    /** 强制使用输入流，如果为false，则将“inputStream”传输到临时文件以提高效率 */
    mandatoryUseInputStream(mandatoryUseInputStream: boolean): ExcelReaderBuilder;

    /** 是否自动关闭输入流 */
    autoCloseStream(autoCloseStream: boolean): ExcelReaderBuilder;

    /** 是否忽略空行 */
    ignoreEmptyRow(ignoreEmptyRow: boolean): ExcelReaderBuilder;

    /** 设置一个自定义对象，可以在侦听器中读取此对象(AnalysisContext.getCustom()) */
    customObject(customObject: any): ExcelReaderBuilder;

    /** Excel文件密码 */
    password(password: string): ExcelReaderBuilder;

    /** 读取扩展信息配置 */
    extraRead(extraRead: CellExtraTypeEnum): ExcelReaderBuilder;

    /**
     * 设置读取的页签
     * @param sheetNo 页签编号(从0开始)
     */
    sheet(sheetNo: number): ExcelReaderSheetBuilder;

    /**
     * 设置读取的页签
     * @param sheetName 页签名称(xlsx格式才支持)
     */
    sheet(sheetName: string): ExcelReaderSheetBuilder;

    /** 开始读取所有的页签数据 */
    doReadAll(): void;

    /** 开始读取所有的页签数据，并返回所有结果(数据量大时，会消耗大量内存) */
    // doReadAllSync(): List<T>;
}

export interface AbstractExcelWriterParameterBuilder<T extends AbstractExcelWriterParameterBuilder<T>> extends AbstractParameterBuilder<T> {
    /** 设置Excel表头所在行，从0开始 */
    relativeHeadRowIndex(relativeHeadRowIndex: number): T;

    /** 是否需要输出表头 */
    needHead(needHead: boolean): T;

    /** 是否使用默认样式 */
    useDefaultStyle(useDefaultStyle: boolean): T;

    /** 是否自动合并表头 */
    automaticMergeHead(automaticMergeHead: boolean): T;

    // excludeColumnIndexes(Collection<Integer> excludeColumnIndexes):T;

    // excludeColumnFiledNames(Collection<String> excludeColumnFiledNames):T;

    // includeColumnIndexes(Collection<Integer> includeColumnIndexes):T;

    // includeColumnFiledNames(Collection<String> includeColumnFiledNames):T;
}

export interface ExcelWriterSheetBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterSheetBuilder> {
    /** 页签编号(从0开始) */
    sheetNo(sheetNo: number): ExcelWriterSheetBuilder;

    /** 页签名称(xlsx格式才支持) */
    sheetName(sheetName: string): ExcelWriterSheetBuilder;

    // doWrite(List data):void

    // doFill(Object data):void

    // doFill(Object data, FillConfig fillConfig):void

    // table():ExcelWriterSheetBuilder

    // table(Integer tableNo):ExcelWriterSheetBuilder
}

export interface ExcelWriterTableBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterTableBuilder> {
    // tableNo(Integer tableNo):ExcelWriterTableBuilder

    // doWrite(List data):void
}

export interface ExcelWriterBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterBuilder> {

    // file(OutputStream outputStream)

    // withTemplate(InputStream templateInputStream)

    /**  */
    autoCloseStream(autoCloseStream: boolean): ExcelWriterBuilder;

    password(password: string): ExcelWriterBuilder;

    inMemory(inMemory: boolean): ExcelWriterBuilder;

    writeExcelOnException(writeExcelOnException: boolean): ExcelWriterBuilder;

    excelType(excelType: ExcelTypeEnum): ExcelWriterBuilder;

    /**
     * 设置读取的页签
     * @param sheetNo 页签编号(从0开始)
     */
    sheet(sheetNo: number): ExcelWriterBuilder;

    /**
     * 设置读取的页签
     * @param sheetName 页签名称(xlsx格式才支持)
     */
    sheet(sheetName: string): ExcelWriterBuilder;
}

export enum DataType {
    String = "String",
    BigDecimal = "BigDecimal",
    Boolean = "Boolean",
    ByteArray = "Byte[]",
    Byte = "Byte",
    Date = "Date",
    Double = "Double",
    Float = "Float",
    Integer = "Integer",
    Long = "Long",
    Short = "Short",
}

export interface ExcelProperty {
    /** 列名称 */
    column: string | string[];

    /** 列的数据类型 */
    dataType: DataType;

    /** 是否忽略当前列 */
    ignore?: boolean;

    /** 定义列的排序顺序 */
    order?: number;
}

export interface DateTimeFormat {
    /** 时间格式化的格式定义 */
    dateFormat: string;

    /** 如果日期使用1904窗口，则为True；如果使用1900日期窗口，则为false */
    use1904windowing?: boolean;
}

export interface NumberFormat {
    /** 数字格式化 */
    numberFormat: string;

    /** 四舍五入模式 */
    // roundingMode?: RoundingMode;
}

export interface ColumnWidth {
    /** 列宽 */
    columnWidth: number;
}

export interface ContentFontStyle {
    /** 字体的名称（如: Arial） */
    fontName?: string;

    /** 以熟悉的测量单位表示的高度- points */
    fontHeightInPoints?: number;

    /** 是否使用斜体 */
    italic?: boolean;

    /** 是否在文本中使用删除线水平线 */
    strikeout?: boolean;

    /** 字体的颜色 */
    color?: number;

    /** 设置normal、super或subscript */
    typeOffset?: number;

    /** 要使用的文本下划线 */
    underline?: number;

    /** 设置要使用的字符集 */
    charset?: number;

    /** 粗体 */
    bold?: boolean;
}

export interface ContentLoopMerge {
    /** 行 */
    eachRow: number;

    /** 列 */
    columnExtend: number;
}

export interface ContentRowHeight {
    /** 行高 */
    rowHeight: number;
}

export interface ContentStyle {
    // dataFormat: ;
    // hidden: ;
    // locked: ;
    // quotePrefix: ;
    // horizontalAlignment: ;
    // verticalAlignment: ;
    // rotation: ;
    // indent: ;
    // borderLeft: ;
    // borderRight: ;
    // borderTop: ;
    // borderBottom: ;
    // leftBorderColor: ;
    // rightBorderColor: ;
    // topBorderColor: ;
    // bottomBorderColor: ;
    // fillPatternType: ;
    // fillBackgroundColor: ;
    // fillForegroundColor: ;
    // shrinkToFit: ;
}

export interface HeadFontStyle {
    // fontName: ;
    // fontHeightInPoints: ;
    // italic: ;
    // strikeout: ;
    // color: ;
    // typeOffset: ;
    // underline: ;
    // charset: ;
    // bold: ;
}

export interface HeadRowHeight {
    /** 表格头行高 */
    headRowHeight: number;
}

export interface HeadStyle {
    // dataFormat: ;
    // hidden: ;
    // locked: ;
    // quotePrefix: ;
    // horizontalAlignment: ;
    // verticalAlignment: ;
    // rotation: ;
    // indent: ;
    // borderLeft: ;
    // borderRight: ;
    // borderTop: ;
    // borderBottom: ;
    // leftBorderColor: ;
    // rightBorderColor: ;
    // topBorderColor: ;
    // bottomBorderColor: ;
    // fillPatternType: ;
    // fillBackgroundColor: ;
    // fillForegroundColor: ;
    // shrinkToFit: ;
}

export interface OnceAbsoluteMerge {
    /**  */
    firstRowIndex: number;
    /**  */
    lastRowIndex: number;
    /**  */
    firstColumnIndex: number;
    /**  */
    lastColumnIndex: number;
}

export interface ExcelReaderHeadConfig extends ExcelProperty, Partial<DateTimeFormat>, Partial<NumberFormat> {
}

export class ExcelReaderConfig<T extends object> {
    /** 文件输入流 */
    // file?: InputStream;

    /** 是否自动关闭输入流 */
    autoCloseStream?: boolean = false;

    /** 读取扩展信息配置 */
    extraRead?: CellExtraTypeEnum[] = [];

    /** 是否忽略空行 */
    ignoreEmptyRow?: boolean = false;

    /** 强制使用输入流，如果为false，则将“inputStream”传输到临时文件以提高效率 */
    mandatoryUseInputStream?: boolean = false;

    /** Excel文件密码 */
    password?: string;

    /** Excel页签 */
    sheet: number | string = 0;

    /** 表头行数 */
    headRowNumber: number = 1;

    /** 使用科学格式 */
    useScientificFormat?: boolean = false;

    /** 如果日期使用1904窗口，则为True；如果使用1900日期窗口，则为false */
    use1904windowing?: boolean = false;

    /** Locale对象表示特定的地理、政治或文化区域。设置日期和数字格式时使用此参数 */
    locale?: Locale = Locale.SIMPLIFIED_CHINESE;

    /** 自动删除空格字符 */
    autoTrim?: boolean = true;

    /** 设置一个自定义对象，可以在侦听器中读取此对象(AnalysisContext.getCustom()) */
    customObject?: any;

    /** Excel列配置(表头) */
    columns?: {
        [column in keyof T]: ExcelReaderHeadConfig;
    };

    constructor(sheet?: number | string, headRowNumber?: number, autoTrim?: boolean, ignoreEmptyRow?: boolean, locale?: Locale, password?: string) {
        this.sheet = sheet ?? 0;
        this.headRowNumber = headRowNumber ?? 1;
        this.autoTrim = autoTrim ?? true;
        this.ignoreEmptyRow = ignoreEmptyRow ?? false;
        this.locale = locale ?? Locale.SIMPLIFIED_CHINESE;
        this.password = password ?? undefined;
    }
}

export class ExcelWriterConfig<T extends object> {

}

export interface ExcelUtils {
    /**
     * 读取Excel数据
     * @param initConfig 初始化配置
     */
    read<T extends object>(initConfig: ExcelReaderConfig<T>): ExcelReaderBuilder;

    /**
     * 生成Excel
     * @param initConfig 初始化配置
     */
    write<T extends object>(initConfig: ExcelWriterConfig<T>): ExcelWriterBuilder;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

declare const excelUtils: ExcelUtils;

class Test {
    aaa: string = "";
    bbb: number = 1;
    ccc: Date = new Date();
}

const excelReaderConfig = new ExcelReaderConfig<Test>();

excelReaderConfig.columns = {
    aaa: {
        dataType: DataType.String,
        column: "第一列",
        dateFormat: "yyyy-MM-dd HH:mm:ss",
    },
    bbb: {
        dataType: DataType.BigDecimal,
        column: "第二列",
    },
    ccc: {
        dataType: DataType.Date,
        column: "第三列",
    }
}

excelUtils.read<Test>(excelReaderConfig).sheet(0).doRead();

excelUtils.read<Test>({
    sheet: 0,
    headRowNumber: 1,
    ignoreEmptyRow: false,
    autoTrim: false,
}).sheet(0).doRead();
