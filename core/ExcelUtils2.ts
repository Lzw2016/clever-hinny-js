// export interface AbstractParameterBuilder<T extends AbstractParameterBuilder<T>> {
//     /** 如果日期使用1904窗口，则为True；如果使用1900日期窗口，则为false */
//     use1904windowing(use1904windowing: boolean): T;
//
//     /** Locale对象表示特定的地理、政治或文化区域。设置日期和数字格式时使用此参数 */
//     locale(locale: ExcelLocale): void;
//
//     /** 自动删除空格字符 */
//     autoTrim(autoTrim: boolean): void;
//
//     /** 设置Excel表头 */
//     head(head: JString[][]): void;
// }
//
// export interface AbstractExcelReaderParameterBuilder<T extends AbstractExcelReaderParameterBuilder<T>> extends AbstractParameterBuilder<T> {
//     /** 表头行数 */
//     headRowNumber(headRowNumber: number): T;
//
//     /** 使用科学格式 */
//     useScientificFormat(useScientificFormat: boolean): T;
//
//     // registerReadListener(readListener: ReadListener): T;
// }
//
// export interface ExcelReaderSheetBuilder extends AbstractExcelReaderParameterBuilder<ExcelReaderSheetBuilder> {
//     /** 页签编号(从0开始) */
//     sheetNo(sheetNo: number): ExcelReaderSheetBuilder;
//
//     /** 页签名称(xlsx格式才支持) */
//     sheetName(sheetName: string): ExcelReaderSheetBuilder;
//
//     /**
//      * 开始读取Excel数据(推荐)
//      */
//     doRead(): void;
//
//     /**
//      * 读取Excel数据，并返回所有结果(数据量大时，会消耗大量内存)
//      */
//     doReadSync<T>(): JList<T>;
// }
//
// export interface ExcelReaderBuilder extends AbstractExcelReaderParameterBuilder<ExcelReaderBuilder> {
//     /** 文件输入流 */
//     file(inputStream: JInputStream): ExcelReaderBuilder;
//
//     /** 强制使用输入流，如果为false，则将“inputStream”传输到临时文件以提高效率 */
//     mandatoryUseInputStream(mandatoryUseInputStream: boolean): ExcelReaderBuilder;
//
//     /** 是否自动关闭输入流 */
//     autoCloseStream(autoCloseStream: boolean): ExcelReaderBuilder;
//
//     /** 是否忽略空行 */
//     ignoreEmptyRow(ignoreEmptyRow: boolean): ExcelReaderBuilder;
//
//     /** 设置一个自定义对象，可以在侦听器中读取此对象(AnalysisContext.getCustom()) */
//     customObject(customObject: any): ExcelReaderBuilder;
//
//     /** Excel文件密码 */
//     password(password: string): ExcelReaderBuilder;
//
//     /** 读取扩展信息配置 */
//     extraRead(extraRead: CellExtraTypeEnum): ExcelReaderBuilder;
//
//     /**
//      * 设置读取的页签
//      * @param sheetNo 页签编号(从0开始)
//      */
//     sheet(sheetNo: number): ExcelReaderSheetBuilder;
//
//     /**
//      * 设置读取的页签
//      * @param sheetName 页签名称(xlsx格式才支持)
//      */
//     sheet(sheetName: string): ExcelReaderSheetBuilder;
//
//     /** 开始读取所有的页签数据 */
//     doReadAll(): void;
//
//     /** 开始读取所有的页签数据，并返回所有结果(数据量大时，会消耗大量内存) */
//     doReadAllSynTc<T>(): JList<T>;
// }
//
// export interface AbstractExcelWriterParameterBuilder<T extends AbstractExcelWriterParameterBuilder<T>> extends AbstractParameterBuilder<T> {
//     /** 设置Excel表头所在行，从0开始 */
//     relativeHeadRowIndex(relativeHeadRowIndex: number): T;
//
//     /** 是否需要输出表头 */
//     needHead(needHead: boolean): T;
//
//     /** 是否使用默认样式 */
//     useDefaultStyle(useDefaultStyle: boolean): T;
//
//     /** 是否自动合并表头 */
//     automaticMergeHead(automaticMergeHead: boolean): T;
//
//     excludeColumnIndexes(excludeColumnIndexes: JCollection<JInt>): T;
//
//     excludeColumnFiledNames(excludeColumnFiledNames: JCollection<JString>): T;
//
//     includeColumnIndexes(includeColumnIndexes: JCollection<JInt>): T;
//
//     includeColumnFiledNames(includeColumnFiledNames: JCollection<JString>): T;
// }
//
// export interface ExcelWriterSheetBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterSheetBuilder> {
//     /** 页签编号(从0开始) */
//     sheetNo(sheetNo: number): ExcelWriterSheetBuilder;
//
//     /** 页签名称(xlsx格式才支持) */
//     sheetName(sheetName: string): ExcelWriterSheetBuilder;
//
//     doWrite(data: JList<object>): void
//
//     doFill(data: object): void
//
//     // doFill(Object data, FillConfig fillConfig):void
//     table(): ExcelWriterSheetBuilder;
//
//     table(tableNo: JInt): ExcelWriterSheetBuilder;
// }
//
// export interface ExcelWriterTableBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterTableBuilder> {
//     tableNo(tableNo: JInt): ExcelWriterTableBuilder;
//
//     doWrite(data: JList<object>): void
// }
//
// export interface ExcelWriterBuilder extends AbstractExcelWriterParameterBuilder<ExcelWriterBuilder> {
//     file(outputStream: JOutputStream): void;
//
//     withTemplate(templateInputStream: JInputStream): void;
//
//     /**  */
//     autoCloseStream(autoCloseStream: boolean): ExcelWriterBuilder;
//
//     password(password: string): ExcelWriterBuilder;
//
//     inMemory(inMemory: boolean): ExcelWriterBuilder;
//
//     writeExcelOnException(writeExcelOnException: boolean): ExcelWriterBuilder;
//
//     excelType(excelType: ExcelTypeEnum): ExcelWriterBuilder;
//
//     /**
//      * 设置读取的页签
//      * @param sheetNo 页签编号(从0开始)
//      */
//     sheet(sheetNo: number): ExcelWriterSheetBuilder;
//
//     /**
//      * 设置读取的页签
//      * @param sheetName 页签名称(xlsx格式才支持)
//      */
//     sheet(sheetName: string): ExcelWriterSheetBuilder;
// }
//
// export interface ExcelDataReader<T> {
//     /**
//      * Excel文件名称
//      */
//     getFilename(): JString;
//
//     /**
//      * 读取Excel文件最大行数
//      */
//     getLimitRows(): JInt;
//
//     /**
//      * 是否缓存读取的数据结果到内存中(默认启用)
//      */
//     isEnableExcelData(): JBoolean;
//
//     /**
//      * Excel读取结果
//      */
//     getExcelSheetMap(): JMap<JString, ExcelData<T>>;
//
//     /**
//      * 返回Excel文件读取器
//      */
//     read(): ExcelReaderBuilder;
// }
//
// export interface ExcelDataWriter<T> {
//     /**
//      * 返回Excel文件写入器
//      */
//     write(): ExcelWriterBuilder;
// }
//
// export interface ExcelUtils {
//     /**
//      * 读取Excel数据
//      * @param initConfig 初始化配置
//      */
//     createReader<T extends object>(initConfig: ExcelReaderConfig<T>): ExcelDataReader<T>;
//
//     /**
//      * 生成Excel文件
//      * @param initConfig 初始化配置
//      */
//     createWriter<T extends object>(initConfig: ExcelWriterConfig<T>): ExcelDataWriter<T>;
// }
//
// // -------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// declare const excelUtils: ExcelUtils;
//
// class Test {
//     aaa: string = "";
//     bbb: number = 1;
//     ccc: Date = new Date();
// }
//
// const excelReaderConfig = new ExcelReaderConfig<Test>();
// excelReaderConfig.columns = {
//     aaa: {
//         dataType: ExcelDataType.JString,
//         column: "第一列",
//         dateFormat: "yyyy-MM-dd HH:mm:ss",
//     },
//     bbb: {
//         dataType: ExcelDataType.JBigDecimal,
//         column: "第二列",
//     },
//     ccc: {
//         dataType: ExcelDataType.JDate,
//         column: "第三列",
//     }
// }
//
// const excelDataReader = excelUtils.createReader<Test>(excelReaderConfig);
// excelDataReader.read().sheet(0).doRead();
//
// // excelDataReader.read()
//
// excelDataReader.getExcelSheetMap()
//
// excelUtils.createReader<Test>({
//     sheetNo: 0,
//     headRowNumber: 1,
//     ignoreEmptyRow: false,
//     autoTrim: false,
// }).read().sheet(0).doRead();
//
// const excelWriterConfig = new ExcelWriterConfig<Test>();
// excelWriterConfig.columns = {
//     aaa: {
//         column: ["第一列", "数据A"],
//     },
//     bbb: {
//         column: ["第一列", "数据B"],
//     },
//     ccc: {
//         column: ["第二列", "数据B"],
//         dateFormat: "yyyy-MM-dd HH:mm:ss",
//     },
// }
//
// const excelDataWriter = excelUtils.createWriter(excelWriterConfig);
// excelDataWriter.write()
//     .sheet("第一页")
//     .doWrite(Interop.asJList<Test>(new Test(), new Test(), new Test()));
//
