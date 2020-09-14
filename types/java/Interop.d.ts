interface Interop extends JObject {
    /**
     * 获取Java Class
     * @param className Java Class Name全名称
     */
    getClass(className: string): JClass;

    /**
     * 创建一个Java Class对象
     * @param className Java Class Name全名称
     */
    newJObject(className: string): JObject;

    /**
     * 创建Java byte 值 (-128~127)
     */
    asJByte(arg: number | string): JByte;

    /**
     * 创建Java short 值 (-32,768 ~ 32,767)
     */
    asJShort(arg: number | string): JShort;

    /**
     * 创建Java int 值 (-2,147,483,648 ~ 2,147,483,647)
     */
    asJInt(arg: number | string): JInt;

    /**
     * 创建Java long 值 (-9,223,372,036,854,774,808 ~ 9,223,372,036,854,774,807)
     */
    asJLong(arg: number | string): JLong;

    /**
     * 创建Java float 值
     */
    asJFloat(arg: string): JFloat;

    /**
     * 创建Java double 值
     */
    asJDouble(arg: number | string): JDouble;

    /**
     * 创建Java boolean 值
     * <pre>
     *     false    -> false
     *     true     -> true
     *     "false"  -> false
     *     "FALSE"  -> false
     *     "FALse"  -> false
     *     "true"   -> true
     *     "TRUE"   -> true
     *     "TRue"   -> true
     * </pre>
     */
    asJBoolean(arg: boolean | string): JBoolean;

    /**
     * 创建Java char 值
     */
    asJChar(arg: string): JChar;

    /**
     * 创建Java String 值
     */
    asJString(arg: any): JString;

    /**
     * 创建Java java.util.Date 对象,支持以下格式<br />
     * "yyyy-MM-dd HH:mm:ss" <br />
     * "yyyy-MM-dd HH:mm:ss.SSS" <br />
     * "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" <br />
     * "EEE MMM dd HH:mm:ss zzz yyyy" <br />
     * "yyyy-MM-dd" <br />
     * "HH:mm:ss" <br />
     */
    asJDate(arg: string | number | Date): JDate;

    /**
     * 创建Java java.math.BigDecimal 对象
     */
    asJBigDecimal(arg: string): JBigDecimal;

    /**
     * 创建Java java.math.BigInteger 对象
     */
    asJBigInteger(arg: string): JBigInteger;

    /**
     * 创建 java.util.List 集合
     * @param args 集合元素
     */
    asJList<T>(...args: T[]): JList<T>;

    /**
     * 创建 java.util.List 集合
     * @param args 数组
     */
    asJList<T>(args: Array<T> | T[]): JList<T>;

    /**
     * 创建 java.util.Set 集合
     * @param args 集合元素
     */
    asJSet<T>(...args: T[]): JSet<T>;

    /**
     * 创建 java.util.Set 集合
     * @param args 数组
     */
    asJSet<T>(args: T[]): JSet<T>;

    /**
     * 创建 java.util.Map 集合
     * @param arg JavaScript对象
     */
    asJMap<K, V>(arg: object): JMap<K, V>;

    // TODO 补充常用类型

    /**
     * 获取对象的字符串表示形式
     */
    toJString(obj: any): JString;

    /**
     * 把jdbc时间类型转换成 java.util.Date 类型
     */
    toJDate(arg: JSqlDate | JSqlTime | JSqlTimestamp): JDate;

    /**
     * BigInteger 转换成 JInt
     */
    toJInt(arg: JBigInteger): JInt;


    // fromJList<T>(list: JList<T>): T[];

    // fromJArray<T>(...array: T[]): T[];

    fromJMap<T extends object>(obj: JMap<string, any>): T;

    // fromJMap<T>(map: JMap<string, any>): T;

    fromJDate(date: JDate): Date;
}

declare const Interop: Interop;
