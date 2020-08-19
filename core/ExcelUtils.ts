import { isNumber, isString } from "./TypeUtils";

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

export enum BuiltinFormats {
// 0, "General"
// 1, "0"
// 2, "0.00"
// 3, "#,##0"
// 4, "#,##0.00"
// 5, "$#,##0_);($#,##0)"
// 6, "$#,##0_);[Red]($#,##0)"
// 7, "$#,##0.00);($#,##0.00)"
// 8, "$#,##0.00_);[Red]($#,##0.00)"
// 9, "0%"
// 0xa, "0.00%"
// 0xb, "0.00E+00"
// 0xc, "# ?/?"
// 0xd, "# ??/??"
// 0xe, "m/d/yy"
// 0xf, "d-mmm-yy"
// 0x10, "d-mmm"
// 0x11, "mmm-yy"
// 0x12, "h:mm AM/PM"
// 0x13, "h:mm:ss AM/PM"
// 0x14, "h:mm"
// 0x15, "h:mm:ss"
// 0x16, "m/d/yy h:mm"
// // 0x17 - 0x24 reserved for international and undocume
// 0x25, "#,##0_);(#,##0)"
// 0x26, "#,##0_);[Red](#,##0)"
// 0x27, "#,##0.00_);(#,##0.00)"
// 0x28, "#,##0.00_);[Red](#,##0.00)"
// 0x29, "_(* #,##0_);_(* (#,##0);_(* \"-\"_);_(@_)"
// 0x2a, "_($* #,##0_);_($* (#,##0);_($* \"-\"_);_(@_)"
// 0x2b, "_(* #,##0.00_);_(* (#,##0.00);_(* \"-\"??_);_(@_)"
// 0x2c, "_($* #,##0.00_);_($* (#,##0.00);_($* \"-\"??_);_(@_)"
// 0x2d, "mm:ss"
// 0x2e, "[h]:mm:ss"
// 0x2f, "mm:ss.0"
// 0x30, "##0.0E+0"
// 0x31, "@" - This is text format.
// 0x31  "text" - Alias for "@"
}

export enum HorizontalAlignment {
    GENERAL = "GENERAL",
    LEFT = "LEFT",
    CENTER = "CENTER",
    RIGHT = "RIGHT",
    FILL = "FILL",
    JUSTIFY = "JUSTIFY",
    CENTER_SELECTION = "CENTER_SELECTION",
    DISTRIBUTED = "DISTRIBUTED",
}

export enum VerticalAlignment {
    TOP = "TOP",
    CENTER = "CENTER",
    BOTTOM = "BOTTOM",
    JUSTIFY = "JUSTIFY",
    DISTRIBUTED = "DISTRIBUTED",
}

export enum BorderStyle {
    NONE = (0x0),
    THIN = (0x1),
    MEDIUM = (0x2),
    DASHED = (0x3),
    DOTTED = (0x4),
    THICK = (0x5),
    DOUBLE = (0x6),
    HAIR = (0x7),
    MEDIUM_DASHED = (0x8),
    DASH_DOT = (0x9),
    MEDIUM_DASH_DOT = (0xA),
    DASH_DOT_DOT = (0xB),
    MEDIUM_DASH_DOT_DOT = (0xC),
    SLANTED_DASH_DOT = (0xD),
}

export enum IndexedColors {
    BLACK1 = (0),
    WHITE1 = (1),
    RED1 = (2),
    BRIGHT_GREEN1 = (3),
    BLUE1 = (4),
    YELLOW1 = (5),
    PINK1 = (6),
    TURQUOISE1 = (7),
    BLACK = (8),
    WHITE = (9),
    RED = (10),
    BRIGHT_GREEN = (11),
    BLUE = (12),
    YELLOW = (13),
    PINK = (14),
    TURQUOISE = (15),
    DARK_RED = (16),
    GREEN = (17),
    DARK_BLUE = (18),
    DARK_YELLOW = (19),
    VIOLET = (20),
    TEAL = (21),
    GREY_25_PERCENT = (22),
    GREY_50_PERCENT = (23),
    CORNFLOWER_BLUE = (24),
    MAROON = (25),
    LEMON_CHIFFON = (26),
    LIGHT_TURQUOISE1 = (27),
    ORCHID = (28),
    CORAL = (29),
    ROYAL_BLUE = (30),
    LIGHT_CORNFLOWER_BLUE = (31),
    SKY_BLUE = (40),
    LIGHT_TURQUOISE = (41),
    LIGHT_GREEN = (42),
    LIGHT_YELLOW = (43),
    PALE_BLUE = (44),
    ROSE = (45),
    LAVENDER = (46),
    TAN = (47),
    LIGHT_BLUE = (48),
    AQUA = (49),
    LIME = (50),
    GOLD = (51),
    LIGHT_ORANGE = (52),
    ORANGE = (53),
    BLUE_GREY = (54),
    GREY_40_PERCENT = (55),
    DARK_TEAL = (56),
    SEA_GREEN = (57),
    DARK_GREEN = (58),
    OLIVE_GREEN = (59),
    BROWN = (60),
    PLUM = (61),
    INDIGO = (62),
    GREY_80_PERCENT = (63),
    AUTOMATIC = (64),
}

export enum FillPatternType {
    NO_FILL = (0),
    SOLID_FOREGROUND = (1),
    FINE_DOTS = (2),
    ALT_BARS = (3),
    SPARSE_DOTS = (4),
    THICK_HORZ_BANDS = (5),
    THICK_VERT_BANDS = (6),
    THICK_BACKWARD_DIAG = (7),
    THICK_FORWARD_DIAG = (8),
    BIG_SPOTS = (9),
    BRICKS = (10),
    THIN_HORZ_BANDS = (11),
    THIN_VERT_BANDS = (12),
    THIN_BACKWARD_DIAG = (13),
    THIN_FORWARD_DIAG = (14),
    SQUARES = (15),
    DIAMONDS = (16),
    LESS_DOTS = (17),
    LEAST_DOTS = (18),
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
    sheet(sheetNo: number): ExcelWriterSheetBuilder;

    /**
     * 设置读取的页签
     * @param sheetName 页签名称(xlsx格式才支持)
     */
    sheet(sheetName: string): ExcelWriterSheetBuilder;
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

export interface ExcelFontStyle {
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

export interface ContentFontStyle extends ExcelFontStyle {
}

/** 合并区域配置 */
export interface ContentLoopMerge {
    /** 行 */
    eachRow: number;

    /** 列 */
    columnExtend: number;
}

/** 行高 */
export interface ContentRowHeight {
    /** 行高 */
    rowHeight: number;
}

export interface ExcelCellStyle {
    /** 设置数据格式（必须是有效格式）。内置格式在内置信息中定义 */
    dataFormat?: BuiltinFormats;
    /** 将单元格使用此样式设置为隐藏 */
    hidden?: JBoolean;
    /** 将单元格使用此样式设置为锁定 */
    locked?: JBoolean;
    /**
     * 打开或关闭样式的“Quote Prefix”或“123 Prefix”，
     * 用于告诉Excel，看起来像数字或公式的内容不应被视为打开。
     * 打开此选项有点（但不是完全打开，请参见IgnoredErrorType）类似于在Excel中为单元格值添加前缀
     */
    quotePrefix?: JBoolean;
    /** 设置单元格的水平对齐方式 */
    horizontalAlignment?: HorizontalAlignment;
    /** 设置是否应该换行。将此标志设置为true可以通过在多行上显示所有内容来使其在一个单元格中可见 */
    wrapped?: JBoolean;
    /** 设置单元格的垂直对齐方式 */
    verticalAlignment?: VerticalAlignment;
    /**
     * 设置单元格中文本的旋转度<br />
     * 注意：HSSF使用-90至90度的值，而XSSF使用0至180度的值。
     * 此方法的实现将在这两个值范围之间进行映射，
     * 但是，相应的getter返回此CellStyle所应用的当前Excel文件格式类型所要求的范围内的值。
     */
    rotation?: JShort;
    /** 设置空格数以缩进单元格中的文本 */
    indent?: JShort;
    /** 设置要用于单元格左边框的边框类型 */
    borderLeft?: BorderStyle;
    /** 设置用于单元格右边框的边框类型 */
    borderRight?: BorderStyle;
    /** 设置要用于单元格顶部边框的边框类型 */
    borderTop?: BorderStyle;
    /** 设置用于单元格底部边框的边框类型 */
    borderBottom?: BorderStyle;
    /**  设置用于左边框的颜色*/
    leftBorderColor?: IndexedColors;
    /** 设置用于右边框的颜色 */
    rightBorderColor?: IndexedColors;
    /** 设置要用于顶部边框的颜色 */
    topBorderColor?: IndexedColors;
    /** 设置用于底边框的颜色 */
    bottomBorderColor?: IndexedColors;
    /** 设置为1会使单元格充满前景色...不知道其他值 */
    fillPatternType: FillPatternType;
    /**  设置背景填充颜色*/
    fillBackgroundColor?: IndexedColors;
    /**
     * 设置前景色填充颜色<br />
     * 注意：确保将前景色设置为背景颜色之前
     */
    fillForegroundColor?: IndexedColors;
    /** 控制如果文本太长，是否应自动调整单元格的大小以缩小以适合 */
    shrinkToFit?: JBoolean;
}

export interface ContentStyle extends ExcelCellStyle {
}

export interface HeadFontStyle extends ExcelFontStyle {
}

export interface HeadRowHeight {
    /** 表格头行高 */
    headRowHeight?: number;
}

export interface HeadStyle extends ExcelCellStyle {
}

export interface OnceAbsoluteMerge {
    /** 第一行 */
    firstRowIndex: JInt;
    /** 最后一行 */
    lastRowIndex: JInt;
    /** 第一列 */
    firstColumnIndex: JInt;
    /** 最后一列 */
    lastColumnIndex: JInt;
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

export interface ExcelDataWriter<T> {
    /**
     * 返回Excel文件写入器
     */
    write(): ExcelWriterBuilder;
}

/** 读取Excel时的表头配置 */
export interface ExcelReaderHeadConfig extends ExcelProperty, Partial<DateTimeFormat>, Partial<NumberFormat> {
    // TODO 读取数据校验配置
}

/** 写入Excel时的表头配置 */
export interface ExcelWriterHeadConfig
    extends ExcelProperty,
        Partial<DateTimeFormat>,
        Partial<NumberFormat>,
        Partial<ColumnWidth>,
        Partial<ContentFontStyle>,
        Partial<ContentLoopMerge>,
        Partial<ContentStyle>,
        Partial<HeadFontStyle>,
        Partial<HeadStyle> {
}

export interface ExcelWriterStyleConfig
    extends Partial<ContentFontStyle>,
        Partial<ContentRowHeight>,
        Partial<ContentStyle>,
        Partial<HeadFontStyle>,
        Partial<HeadRowHeight>,
        Partial<HeadStyle>,
        Partial<OnceAbsoluteMerge> {
}

/** 读取Excel时的初始化配置 */
export class ExcelReaderConfig<T extends object> {
    /** Excel文件名称(或者Excel文件路径) */
    filename?: JString;
    /** 文件输入流 */
    inputStream?: JInputStream;
    /**  读取Excel文件最大行数(默认: 2000)，小于0表示不限制 */
    limitRows?: JInt = 2000;
    /** 是否缓存读取的数据结果到内存中(默认启用) */
    enableExcelData?: JBoolean = true;
    /** 是否启用数据校验(默认启用) */
    enableValidation?: JBoolean = true;
    // /**
    //  * 处理读取Excel异常
    //  */
    // private ExcelReaderExceptionHand excelReaderExceptionHand;
    // /**
    //  * 处理Excel数据行
    //  */
    // @SuppressWarnings("rawtypes")
    // private ExcelRowReader<Map> excelRowReader;
    //

    // ----------------------------------------------------------------------
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
    /** Excel页签编号(从0开始) */
    sheetNo?: JInt;
    /** Excel页签名称(xlsx格式才支持) */
    sheetName?: JString;
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
    /** Excel列配置(表头) */
    columns?: {
        [column in keyof T]: ExcelReaderHeadConfig;
    };

    /**
     * @param sheet           页签编号或名称
     * @param headRowNumber   表头行数
     * @param autoTrim        自动删除空格字符
     * @param ignoreEmptyRow  是否忽略空行
     * @param limitRows       读取Excel文件最大行数(默认: 2000)，小于0表示不限制
     * @param locale          Locale对象表示特定的地理、政治或文化区域。设置日期和数字格式时使用此参数
     * @param password        Excel文件密码
     */
    constructor(sheet?: number | string, headRowNumber?: number, autoTrim?: boolean, ignoreEmptyRow?: boolean, limitRows?: JInt, locale?: ExcelLocale, password?: string) {
        if (isString(sheet)) {
            this.sheetName = sheet;
        } else if (isNumber(sheet)) {
            this.sheetNo = sheet;
        } else {
            this.sheetNo = 0;
        }

        this.headRowNumber = headRowNumber ?? 1;
        this.autoTrim = autoTrim ?? true;
        this.ignoreEmptyRow = ignoreEmptyRow ?? false;
        this.limitRows = limitRows ?? 2000;
        this.locale = locale ?? ExcelLocale.SIMPLIFIED_CHINESE;
        this.password = password ?? undefined;
    }
}

export class ExcelWriterConfig<T extends object> {
    /** Excel导出请求对象 */
    // private HttpServletRequest request;
    /** Excel导出响应对象 */
    // private HttpServletResponse response;
    /** Excel导出文件名(或者Excel文件路径) */
    fileName?: JString;
    /** Excel文件对应输出流 */
    outputStream?: JOutputStream;

    // ----------------------------------------------------------------------

    /** 是否自动关闭输入流 */
    autoCloseStream?: boolean = false;
    /** 在内存中编写excel。默认为false，则创建缓存文件并最终写入excel。仅在内存模式下支持Comment和RichTextString */
    inMemory?: JBoolean = false;
    /** Excel模板文件路径 */
    template?: JString;
    /** Excel模板文件输入流 */
    templateInputStream?: JInputStream;
    /** 写入Excel时出现异常是否仍然继续导出 */
    writeExcelOnException?: JBoolean = false;
    /** 是否自动合并表头 */
    automaticMergeHead?: JBoolean = true;
    /** 忽略自定义列 */
    excludeColumnFiledNames ?: JString[];
    /** 忽略自定义列 */
    excludeColumnIndexes ?: JInt[];
    /** 只输出自定义列 */
    includeColumnFiledNames?: JString[];
    /** 只输出自定义列 */
    includeColumnIndexes  ?: JInt[];
    /** 是否输出表头 */
    needHead?: JBoolean = true;
    /** 输出第一行的位置 */
    relativeHeadRowIndex?: JInt = 0;
    /** 是否使用默认样式 */
    useDefaultStyle?: JBoolean = true;
    /** Excel类型 */
    excelType?: ExcelTypeEnum = ExcelTypeEnum.XLSX;
    /** Excel文件密码 */
    password?: JString;
    /** Excel页签编号(从0开始) */
    sheetNo?: JInt;
    /** Excel页签名称(xlsx格式才支持) */
    sheetName?: JString;
    /** 如果日期使用1904窗口，则为True；如果使用1900日期窗口，则为false */
    use1904windowing?: JBoolean = false;
    /** Locale对象表示特定的地理、政治或文化区域。设置日期和数字格式时使用此参数 */
    locale?: ExcelLocale = ExcelLocale.SIMPLIFIED_CHINESE;
    /** 自动删除空格字符 */
    autoTrim?: JBoolean = true;
    /** Excel表头 */
    columns?: {
        [column in keyof T]: ExcelWriterHeadConfig;
    };

    // ----------------------------------------------------------------------
    /** 全局样式配置 */
    styleConfig?: ExcelWriterStyleConfig;
}

export interface ExcelUtils {
    /**
     * 读取Excel数据
     * @param initConfig 初始化配置
     */
    createReader<T extends object>(initConfig: ExcelReaderConfig<T>): ExcelDataReader<T>;

    /**
     * 生成Excel文件
     * @param initConfig 初始化配置
     */
    createWriter<T extends object>(initConfig: ExcelWriterConfig<T>): ExcelDataWriter<T>;
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

// excelDataReader.read()

excelDataReader.getExcelSheetMap()

excelUtils.createReader<Test>({
    sheetNo: 0,
    headRowNumber: 1,
    ignoreEmptyRow: false,
    autoTrim: false,
}).read().sheet(0).doRead();

const excelWriterConfig = new ExcelWriterConfig<Test>();
excelWriterConfig.columns = {
    aaa: {
        column: ["第一列", "数据A"],
        dataType: ExcelDataType.JString,
    },
    bbb: {
        column: ["第一列", "数据B"],
        dataType: ExcelDataType.JBigDecimal,
    },
    ccc: {
        column: ["第二列", "数据B"],
        dataType: ExcelDataType.JDate,
        dateFormat: "yyyy-MM-dd HH:mm:ss",
    }
}

const excelDataWriter = excelUtils.createWriter(excelWriterConfig);
excelDataWriter.write()
    .sheet("第一页")
    .doWrite(Interop.asJList<Test>(new Test(), new Test(), new Test()));

