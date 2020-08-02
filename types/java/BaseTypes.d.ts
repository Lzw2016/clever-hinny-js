/**
 * Java 基本类型 byte (-128~127)
 */
type JByte = number;

/**
 * Java 基本类型 short (-32,768 ~ 32,767)
 */
type JShort = number;

/**
 * Java 基本类型 int (-2,147,483,648 ~ 2,147,483,647)
 */
type JInt = number;

/**
 * Java 基本类型 long (-9,223,372,036,854,774,808 ~ 9,223,372,036,854,774,807)
 */
type JLong = number;

/**
 * Java 基本类型 double
 */
type JDouble = number;

/**
 * Java 基本类型 boolean
 */
type JBoolean = boolean;

/**
 * Java 基本类型 char
 */
type JChar = string;

/**
 * Java 基本类型 String
 */
type JString = string;

/**
 * java.util.Date 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JDate {
    java_util_Date: "java.util.Date";

    /**
     * 返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。
     */
    getTime(): number;
}

/**
 * java.math.BigDecimal 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JBigDecimal {
    java_math_BigDecimal: "java.math.BigDecimal";
}

/**
 * java.math.BigInteger 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JBigInteger {
    java_math_BigInteger: "java.math.BigInteger";
}

/**
 * java.sql.Timestamp 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JSqlTimestamp {
    java_sql_Timestamp: "java.sql.Timestamp";
}

/**
 * java.sql.Time 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JSqlTime {
    java_sql_Time: "java.sql.Time";
}

/**
 * java.sql.Date 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JSqlDate extends JDate {
    java_sql_Time: "java.sql.Date";
}

interface JObject {
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
     * 创建 java.util.List 集合
     * @param args 集合元素
     */
    asJList<T>(...args: T): JList<T>;

    /**
     * 创建 java.util.List 集合
     * @param args 数组
     */
    asJList<T>(args: Array<T> | T[]): JList<T>;

    /**
     * 创建 java.util.Set 集合
     * @param args 集合元素
     */
    asJSet<T>(...args: T): JSet<T>;

    /**
     * 创建 java.util.Set 集合
     * @param args 数组
     */
    asJSet<T>(args: Array<T> | T[]): JSet<T>;

    /**
     * 创建 java.util.Map 集合
     * @param arg JavaScript对象
     */
    asJMap<K, V>(arg: object): JMap<K, V>;

    // TODO 补充常用类型

    /**
     * 把jdbc时间类型转换成 java.util.Date 类型
     */
    toJDate(arg: JSqlDate | JSqlTime | JSqlTimestamp): JDate;

    /**
     * BigInteger 转换成 JInt
     */
    toJInt(arg: JBigInteger): JInt;
}

interface Interop {
    // fromJList<T>(list: JList<T>): T[];

    // fromJArray<T>(...array: T): T[];

    fromJMap<T extends JMap>(obj: T): T;

    // fromJMap<T>(map: JMap<string, any>): T;

    fromJDate(date: JDate): Date;
}

declare const JObject: JObject;

declare const Interop: Interop;