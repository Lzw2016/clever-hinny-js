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
interface JDate extends JAny, Comparable<JDate> {
    java_util_Date: "java.util.Date";

    /**
     * 测试此日期是否在指定日期之后
     */
    after(when: JDate): JBoolean;

    /**
     * 测试此日期是否在指定日期之前
     */
    before(when: JDate): JBoolean;

    /**
     * 返回自1970年1月1日以来，由此Date对象表示的00:00:00 GMT的毫秒数
     */
    getTime(): JLong;

    /**
     * YEAR
     */
    getYear(): JIn;

    /**
     * MONTH
     */
    getMonth(): JIn;

    /**
     * DAY_OF_MONTH
     */
    getDate(): JIn;

    /**
     * HOUR_OF_DAY
     */
    getHours(): JIn;

    /**
     * MINUTE
     */
    getMinutes(): JIn;

    /**
     * SECOND
     */
    getSeconds(): JIn;

    /**
     * DAY_OF_WEEK
     */
    getDay(): JIn;
}

/**
 * java.math.BigDecimal 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JBigDecimal extends JAny, Comparable<JBigDecimal> {
    java_math_BigDecimal: "java.math.BigDecimal";

    /**
     * 返回一个 BigDecimal ，其值为此 BigDecimal的绝对值，其缩放比例为 this.scale()
     */
    abs(): JBigDecimal;

    /**
     * 返回BigDecimal，其值是(this + augend)，其标为 max(this.scale(), augend.scale())
     */
    add(augend: JBigDecimal): JBigDecimal;

    /**
     * 返回BigDecimal，其值为(this / divisor)，优先级为(this.scale() - divisor.scale());如果不能表示确切的商（因为它具有非终止的十进制扩展），则抛出一个ArithmeticException
     */
    divide(divisor: JBigDecimal): JBigDecimal;

    /**
     * 返回BigDecimal ，其值是(this / divisor)，其标为this.scale()
     */
    divide(divisor: JBigDecimal, roundingMode: int): JBigDecimal;

    /**
     * 返回一个 BigDecimal ，其值为 (this / divisor) ，其比例为指定
     */
    divide(divisor: JBigDecimal, scale: int, roundingMode: int): JBigDecimal;

    /**
     * 返回一个BigDecimal，它的值是BigDecimal的整数部分(this / divisor)取整
     */
    divideToIntegralValue(divisor: JBigDecimal): JBigDecimal;

    /**
     * 将此 BigDecimal转换为 double
     */
    doubleValue(): JDouble;

    /**
     * 将此 BigDecimal转换为 int
     */
    intValue(): JInt;

    /**
     * 将此 BigDecimal转换为 long
     */
    longValue(): JLong;

    /**
     * 返回大值
     */
    max(val: JBigDecimal): JBigDecimal;

    /**
     * 返回小值
     */
    min(val: JBigDecimal): JBigDecimal;

    /**
     *  返回一个BigDecimal，相当于这个小数点，向左移动了 n个地方
     */
    movePointLeft(n: JInt): JBigDecimal;

    /**
     * 返回一个BigDecimal，相当于这个小数点，向右移动了 n个地方
     */
    movePointRight(n: JInt): JBigDecimal;

    /**
     * 返回 BigDecimal ，其值是 (this × multiplicand)，其标为 (this.scale() + multiplicand.scale())
     */
    multiply(multiplicand: JBigDecimal): JBigDecimal;

    /**
     * 返回BigDecimal，其值是(-this)，其标为this.scale()
     */
    negate(): JBigDecimal;

    /**
     * 返回BigDecimal，其值是 (+this)，根据上下文设置进行舍入
     */
    plus(): JBigDecimal;

    /**
     * 返回 BigDecimal ，其值是 (thisn)，该电源，准确计算，使其具有无限精度
     */
    pow(): JBigDecimal;

    /**
     * 返回此 BigDecimal的
     */
    precision(): JInt;

    /**
     * 返回 BigDecimal ，其值是 (this % divisor)
     */
    remainder(divisor: JBigDecimal): JBigDecimal;

    /**
     * 返回此 规模 BigDecimal
     */
    scale(): JInt;

    /**
     * 返回一个BigDecimal，其大小是指定值，其值在数字上等于此 BigDecimal
     */
    setScale(newScale: JInt): JBigDecimal;

    /**
     *
     */
    aaa(): JBigDecimal;

    /**
     *
     */
    aaa(): JBigDecimal;

    /**
     *
     */
    aaa(): JBigDecimal;

    /**
     *
     */
    aaa(): JBigDecimal;


    // BigDecimal setScale(int newScale, int roundingMode)
    // 返回一个 BigDecimal ，其规模是指定值，其缩放值通过将此 BigDecimal的非标度值乘以10的适当功率来确定，以维持其总体值。
    // BigDecimal setScale(int newScale, RoundingMode roundingMode)
    // 返回一个 BigDecimal ，其规模是指定值，其缩放值通过将该 BigDecimal的非标度值乘以10的适当功率来确定，以维持其整体值。
    // short shortValueExact()
    // 将此 BigDecimal转换为 short ，检查丢失的信息。
    // int signum()
    // 返回这个 BigDecimal的signum函数。
    // BigDecimal stripTrailingZeros()
    // 返回一个 BigDecimal ，它在数字上等于此值， BigDecimal表示中删除任何尾随的零。
    // BigDecimal subtract(BigDecimal subtrahend)
    // 返回 BigDecimal ，其值是 (this - subtrahend) ，其标为 max(this.scale(), subtrahend.scale()) 。
    // BigDecimal subtract(BigDecimal subtrahend, MathContext mc)
    // 返回 BigDecimal ，其值是 (this - subtrahend) ，根据上下文设置进行舍入。
    // BigInteger toBigInteger()
    // 将此 BigDecimal转换为 BigInteger 。
    // BigInteger toBigIntegerExact()
    // 将此 BigDecimal转换为 BigInteger ，检查丢失的信息。
    // String toEngineeringString()
    // 如果需要指数，则使用工程符号返回此 BigDecimal的字符串表示形式。
    // String toPlainString()
    // 返回没有指数字段的此 BigDecimal的字符串表示形式。
    // String toString()
    // 返回此 BigDecimal的字符串表示，如果需要指数，则使用科学计数法。
    // BigDecimal ulp()
    // 返回此 BigDecimal的最后一个位置的ulp（一个单位）的大小。
    // BigInteger unscaledValue()
    // 返回一个 BigInteger ，其值是此 BigDecimal的 未缩放值 。
}

/**
 * java.math.BigInteger 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JBigInteger extends JAny {
    java_math_BigInteger: "java.math.BigInteger";

    // BigInteger abs()
    // 返回一个BigInteger，它的值是此BigInteger的绝对值。
    // BigInteger add(BigInteger val)
    // 返回值为 (this + val) 。
    // BigInteger and(BigInteger val)
    // 返回值为 (this & val) 。
    // BigInteger andNot(BigInteger val)
    // 返回值为 (this & ~val) 。
    // int bitCount()
    // 返回与其符号位不同的BigInteger的二进制补码表示中的位数。
    // int bitLength()
    // 返回此BigInteger的最小二进制补码表示中的位数， 不包括符号位。
    // byte byteValueExact()
    // 将此 BigInteger转换为 byte ，检查丢失的信息。
    // BigInteger clearBit(int n)
    // 返回一个BigInteger，其值等于此BigInteger，指定的位被清零。
    // int compareTo(BigInteger val)
    // 将此BigInteger与指定的BigInteger进行比较。
    // BigInteger divide(BigInteger val)
    // 返回值为 (this / val) 。
    // BigInteger[] divideAndRemainder(BigInteger val)
    // 返回两个BigInteger的数组，其中包含 (this / val)后跟 (this % val) 。
    // double doubleValue()
    // 将此BigInteger转换为 double 。
    // boolean equals(Object x)
    // 将此BigInteger与指定的对象进行比较以实现相等。
    // BigInteger flipBit(int n)
    // 返回一个BigInteger，其值等于此BigInteger，指定的位被翻转。
    // float floatValue()
    // 将此BigInteger转换为 float 。
    // BigInteger gcd(BigInteger val)
    // 返回一个BigInteger，其值是 abs(this)和 abs(val) 。
    // int getLowestSetBit()
    // 返回此BigInteger中最右（最低位）一位的索引（最右边一位右侧的零位数）。
    // int hashCode()
    // 返回此BigInteger的哈希码。
    // int intValue()
    // 将此BigInteger转换为 int 。
    // int intValueExact()
    // 将此 BigInteger转换为 int ，检查丢失的信息。
    // boolean isProbablePrime(int certainty)
    // 返回 true如果这个BigInteger可能是素数， false如果它是绝对复合。
    // long longValue()
    // 将此BigInteger转换为 long 。
    // long longValueExact()
    // 将此 BigInteger转换为 long ，检查丢失的信息。
    // BigInteger max(BigInteger val)
    // 返回此BigInteger和 val 。
    // BigInteger min(BigInteger val)
    // 返回此BigInteger和 val 。
    // BigInteger mod(BigInteger m)
    // 返回值为 (this mod m ）。
    // BigInteger modInverse(BigInteger m)
    // 返回值为 (this -1 mod m) 。
    // BigInteger modPow(BigInteger exponent, BigInteger m)
    // 返回值为 (thisexponent mod m)的BigInteger 。
    // BigInteger multiply(BigInteger val)
    // 返回值为 (this * val) 。
    // BigInteger negate()
    // 返回值为 (-this) 。
    // BigInteger nextProbablePrime()
    // 返回大于这个 BigInteger为 BigInteger的第一个整数。
    // BigInteger not()
    // 返回值为 (~this) 。
    // BigInteger or(BigInteger val)
    // 返回值为 (this | val) 。
    // BigInteger pow(int exponent)
    // 返回值为 (thisexponent)的BigInteger 。
    // static BigInteger probablePrime(int bitLength, Random rnd)
    // 返回一个正的BigInteger，它可能是素数，具有指定的位长度。
    // BigInteger remainder(BigInteger val)
    // 返回值为 (this % val) 。
    // BigInteger setBit(int n)
    // 返回一个BigInteger，其值等于具有指定位集合的BigInteger。
    // BigInteger shiftLeft(int n)
    // 返回值为 (this << n) 。
    // BigInteger shiftRight(int n)
    // 返回值为 (this >> n) 。
    // short shortValueExact()
    // 将此 BigInteger转换为 short ，检查丢失的信息。
    // int signum()
    // 返回此BigInteger的signum函数。
    // BigInteger subtract(BigInteger val)
    // 返回值为 (this - val) 。
    // boolean testBit(int n)
    // 返回 true当且仅当指定的位被设置。
    // byte[] toByteArray()
    // 返回一个包含此BigInteger的二进制补码表示的字节数组。
    // String toString()
    // 返回此BigInteger的十进制字符串表示形式。
    // String toString(int radix)
    // 返回给定基数中BigInteger的String表示形式。
    // static BigInteger valueOf(long val)
    // 返回一个BigInteger，其值等于指定的 long 。
    // BigInteger xor(BigInteger val)
    // 返回值为 (this ^ val) 。
}

/**
 * java.sql.Timestamp 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JSqlTimestamp extends JAny {
    java_sql_Timestamp: "java.sql.Timestamp";

    // boolean after(Timestamp ts)
    // 表示是否 Timestamp对象晚于给定 Timestamp对象。
    // boolean before(Timestamp ts)
    // 指示此 Timestamp对象是否早于给定的 Timestamp对象。
    // int compareTo(Date o)
    // 将此 Timestamp对象与给定的 Date对象进行比较。
    // int compareTo(Timestamp ts)
    // 将此 Timestamp对象与给定的 Timestamp对象进行比较。
    // boolean equals(Object ts)
    // 测试这个 Timestamp对象是否等于给定的对象。
    // boolean equals(Timestamp ts)
    // 测试看看这个 Timestamp对象是否等于给定的 Timestamp对象。
    // static Timestamp from(Instant instant)
    // 从Instant对象获取一个Timestamp的实例。
    // int getNanos()
    // 获取此 Timestamp对象的 nanos值。
    // long getTime()
    // 返回自1970年1月1日以来，由此 Timestamp对象表示的00:00:00 GMT的毫秒 Timestamp 。
    // int hashCode()
    // 返回此对象的哈希码值。
    // void setNanos(int n)
    // 将此 Timestamp对象的 nanos字段设置为给定值。
    // void setTime(long time)
    // 设置此 Timestamp对象以表示1970年1月1日00:00:00 GMT后的 time毫秒的时间点。
    // Instant toInstant()
    // 将此 Timestamp对象转换为 Instant 。
    // LocalDateTime toLocalDateTime()
    // 将此 Timestamp对象转换为 LocalDateTime 。
    // String toString()
    // 以JDBC时间戳转义格式格式化时间戳。
    // static Timestamp valueOf(LocalDateTime dateTime)
    // 从 LocalDateTime对象获取 Timestamp的实例，具有与提供的相同年份，月份，月份，小时，分钟，秒和纳秒日期时间值作为提供的 LocalDateTime 。
    // static Timestamp valueOf(String s)
    // 将JDBC时间戳转义格式的 String对象转换为 Timestamp值。
}

/**
 * java.sql.Time 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JSqlTime extends JAny {
    java_sql_Time: "java.sql.Time";

    // int getDate()
    // 已弃用
    // int getDay()
    // 已弃用
    // int getMonth()
    // 已弃用
    // int getYear()
    // 已弃用
    // void setDate(int i)
    // 已弃用
    // void setMonth(int i)
    // 已弃用
    // void setTime(long time)
    // 使用毫秒时间值设置 Time对象。
    // void setYear(int i)
    // 已弃用
    // Instant toInstant()
    // 此方法总是引发UnsupportedOperationException，因为SQL Time值不具有日期组件，因此不应该使用此方法。
    // LocalTime toLocalTime()
    // 将此 Time对象转换为 LocalTime 。
    // String toString()
    // 以JDBC时间转义格式格式化。
    // static Time valueOf(LocalTime time)
    // 从LocalTime对象获取Time的实例，具有与给定的LocalTime相同的小时，分秒和秒值。
    // static Time valueOf(String s)
    // 将JDBC时间转义格式的字符串转换为 Time值。
}

/**
 * java.sql.Date 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“JObject”创建该类型实例<br />
 * @see JObject
 */
interface JSqlDate extends JDate {
    java_sql_Time: "java.sql.Date";

    // int getHours()
    // 已弃用
    // int getMinutes()
    // 已弃用
    // int getSeconds()
    // 已弃用
    // void setHours(int i)
    // 已弃用
    // void setMinutes(int i)
    // 已弃用
    // void setSeconds(int i)
    // 已弃用
    // void setTime(long date)
    // 使用给定的毫秒时间值设置现有的 Date对象。
    // Instant toInstant()
    // 此方法总是引发UnsupportedOperationException，因为SQL Date值没有时间组件，所以不应该使用。
    // LocalDate toLocalDate()
    // 将此 Date对象转换为 LocalDate
    // String toString()
    // 格式化日期转义格式yyyy-mm-dd。
    // static Date valueOf(LocalDate date)
    // 从一个LocalDate对象获取一个Date的实例，具有与给定的LocalDate相同的年，月和日的月值。
    // static Date valueOf(String s)
    // 将JDBC日期转义格式的字符串转换为 Date值。
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
