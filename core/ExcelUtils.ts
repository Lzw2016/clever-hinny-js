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

export enum ExcelLocale {
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
    locale(locale: ExcelLocale): void;

    /** 自动删除空格字符 */
    autoTrim(autoTrim: boolean): void;

    /** 设置Excel表头 */
    head(head: JString[][]): void;
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

    /**
     * 读取Excel数据，并返回所有结果(数据量大时，会消耗大量内存)
     */
    doReadSync<T>(): JList<T>;
}

export interface ExcelReaderBuilder extends AbstractExcelReaderParameterBuilder<ExcelReaderBuilder> {
    /** 文件输入流 */
    file(inputStream: JInputStream): ExcelReaderBuilder;

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
    doReadAllSynTc<T>(): JList<T>;
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

    excludeColumnIndexes(excludeColumnIndexes: JCollection<JInt>): T;

    excludeColumnFiledNames(excludeColumnFiledNames: JCollection<JString>): T;

    includeColumnIndexes(includeColumnIndexes: JCollection<JInt>): T;

    includeColumnFiledNames(includeColumnFiledNames: JCollection<JString>): T;
}

export interface ExcelWriterSheetBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterSheetBuilder> {
    /** 页签编号(从0开始) */
    sheetNo(sheetNo: number): ExcelWriterSheetBuilder;

    /** 页签名称(xlsx格式才支持) */
    sheetName(sheetName: string): ExcelWriterSheetBuilder;

    doWrite(data: JList<object>): void

    doFill(data: object): void

    // doFill(Object data, FillConfig fillConfig):void

    table(): ExcelWriterSheetBuilder;

    table(tableNo: JInt): ExcelWriterSheetBuilder;
}

export interface ExcelWriterTableBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterTableBuilder> {
    tableNo(tableNo: JInt): ExcelWriterTableBuilder;

    doWrite(data: JList<object>): void
}

export interface ExcelWriterBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterBuilder> {

    file(outputStream: JOutputStream): void;

    withTemplate(templateInputStream: JInputStream): void;

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

export interface AnalysisContext {

}

export enum ExcelDataType {
    JString = "JString",
    JBigDecimal = "JBigDecimal",
    JBoolean = "JBoolean",
    JDate = "JDate",
    JInteger = "JInteger",
    JDouble = "JDouble",
    JLong = "JLong",
    JFloat = "JFloat",
    JShort = "JShort",
    JByte = "JByte",
    JByteArray = "JByte[]",
}

export interface ExcelProperty {
    /** 列名称 */
    column: string | string[];

    /** 列的数据类型 */
    dataType: ExcelDataType;

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
    roundingMode?: RoundingMode;
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

export interface ExcelHead {
    /**
     * 字段位置
     */
    getIndex(): JInt;

    /**
     * Excel表头名称(允许多级表头)
     */
    getHeads(): JList<JString>;

    /**
     * 对应实体类字段名
     */
    getColumnName(): JString;

    /**
     * 第一级表头
     */
    getFirstHead(): JString;

    /**
     * 最后一级表头(建议前端使用此值)
     */
    getLastHead(): JString;
}

export interface ExcelRow<T> {
    /**
     * 数据在Excel文件中的行号
     */
    getExcelRowNum(): JInt;

    /**
     * 读取的原始数据
     */
    getData(): T;

    /**
     * 数据签名
     */
    getDataSignature(): JString;

    /**
     * 列错误
     */
    getColumnError(): JMap<JString, JList<JString>>;

    /**
     * 行错误
     */
    getRowError(): JList<JString>;

    /**
     * 当前数据是否有解析错误
     */
    hasError(): JBoolean;

    /**
     * 增加数据列错误
     */
    addErrorInColumn(columnName: JString, msg: JString): void;

    /**
     * 增加数据行错误
     */
    addErrorInRow(msg: JString): void;
}

export interface ExcelImportState {
    /**
     * 导入是否成功
     */
    getSuccess(): JBoolean;

    /**
     * 总数据量
     */
    getTotalRows(): JInt;

    /**
     * 成功数据量
     */
    getSuccessRows(): JInt;

    /**
     * 失败数据量
     */
    getFailRows(): JInt;

    /**
     * 错误数量
     */
    getErrorCount(): JInt;

    /**
     * 重复数据量
     */
    getRepeat(): JInt;

    /**
     * 处理耗时(单位毫秒)
     */
    getTakeTime(): JLong;
}

export interface ExcelData<T> {
    /**
     * 数据类型
     */
    getClazz(): JClass;

    /**
     * 页签名称
     */
    getSheetName(): JString | undefined;

    /**
     * 页签编号
     */
    getSheetNo(): JInt | undefined;

    /**
     * 表头信息
     */
    getHeads(): JList<ExcelHead>;

    /**
     * Excel行数据(Excel所有数据)
     */
    getRows(): JList<ExcelRow<T>>;

    /**
     * 开始解析的时间
     */
    getStartTime(): JLong | undefined;

    /**
     * 解析完成时间
     */
    getEndTime(): JLong | undefined;

    /**
     * 读取中断在指定Excel行，为null表示未中断(行号从1开始)
     */
    getInterruptByRowNum(): JLong | undefined;

    /**
     * Excel表格头所占行数(复杂嵌套表格头行数大于1)
     */
    getHeadRowNum(): JInt;

    /**
     * 当前解析的数据是否有失败的
     */
    hasError(): JBoolean;

    /**
     * 返回导入成功的数据
     */
    getImportData(): JList<T>;

    /**
     * 返回导入失败的数据
     */
    getFailRows(): JList<ExcelRow<T>>;

    /**
     * 返回Excel导入状态
     */
    getExcelImportState(): ExcelImportState;

    /**
     * 清除导入数据
     */
    clearData(): void;
}

export interface ExcelDataReader<T> {
    /**
     * Excel文件名称
     */
    getFilename(): JString;

    /**
     * 读取Excel文件最大行数
     */
    getLimitRows(): JInt;

    /**
     * 是否缓存读取的数据结果到内存中(默认启用)
     */
    isEnableExcelData(): JBoolean;

    /**
     * Excel读取结果
     */
    getExcelSheetMap(): JMap<JString, ExcelData<T>>;

    /**
     * 返回Excel文件读取器
     */
    read(): ExcelReaderBuilder;
}


/** 读取Excel时的表头配置 */
export interface ExcelReaderHeadConfig extends ExcelProperty, Partial<DateTimeFormat>, Partial<NumberFormat> {
    // TODO 数据校验配置
}

/** 读取Excel时的初始化配置 */
export class ExcelReaderConfig<T extends object> {
    /** 文件输入流 */
    file?: JInputStream;

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
    locale?: ExcelLocale = ExcelLocale.SIMPLIFIED_CHINESE;

    /** 自动删除空格字符 */
    autoTrim?: boolean = true;

    /** 设置一个自定义对象，可以在侦听器中读取此对象(AnalysisContext.getCustom()) */
    customObject?: any;

    /**  读取Excel文件最大行数(默认: 2000)，小于0表示不限制 */
    limitRows?: JInt = 2000;

    /** 是否缓存读取的数据结果到内存中(默认启用) */
    enableExcelData?: JBoolean = true;

    /** 是否启用数据校验(默认启用) */
    enableValidation?: JBoolean = true;

    /** Excel列配置(表头) */
    columns?: {
        [column in keyof T]: ExcelReaderHeadConfig;
    };

    constructor(sheet?: number | string, headRowNumber?: number, autoTrim?: boolean, ignoreEmptyRow?: boolean, limitRows?: JInt, locale?: ExcelLocale, password?: string) {
        this.sheet = sheet ?? 0;
        this.headRowNumber = headRowNumber ?? 1;
        this.autoTrim = autoTrim ?? true;
        this.ignoreEmptyRow = ignoreEmptyRow ?? false;
        this.limitRows = limitRows ?? 2000;
        this.locale = locale ?? ExcelLocale.SIMPLIFIED_CHINESE;
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
    createReader<T extends object>(initConfig: ExcelReaderConfig<T>): ExcelDataReader<T>;

    // /**
    //  * 生成Excel
    //  * @param initConfig 初始化配置
    //  */
    // write<T extends object>(initConfig: ExcelWriterConfig<T>): ExcelWriterBuilder;
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
        dataType: ExcelDataType.JString,
        column: "第一列",
        dateFormat: "yyyy-MM-dd HH:mm:ss",
    },
    bbb: {
        dataType: ExcelDataType.JBigDecimal,
        column: "第二列",
    },
    ccc: {
        dataType: ExcelDataType.JDate,
        column: "第三列",
    }
}

const excelDataReader = excelUtils.createReader<Test>(excelReaderConfig);
excelDataReader.read().sheet(0).doRead();
excelDataReader.getExcelSheetMap()

excelUtils.createReader<Test>({
    sheet: 0,
    headRowNumber: 1,
    ignoreEmptyRow: false,
    autoTrim: false,
}).read().sheet(0).doRead();
