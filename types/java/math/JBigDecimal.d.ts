enum RoundingMode {
    /**
     * 向正无穷方向对齐
     */
    UP = 0,
    /**
     * 向负无穷方向对齐
     */
    DOWN = 1,
    /**
     * 向原点的反方向对齐
     */
    CEILING = 2,
    /**
     * 向原点方向对齐
     */
    FLOOR = 3,
    /**
     * “四舍五入”，如果舍弃部分的最高位大于等于 5，向正无穷方向对齐，否则向负无穷方向对齐
     */
    HALF_UP = 4,
    /**
     * 五舍六入”，如果舍弃部分的最高位大于 5，向正无穷方向对齐，否则向负无穷方向对齐
     */
    HALF_DOWN = 5,
    /**
     * “四舍六入五成双”，如果舍弃部分的最高位大于等于六，或等于五并且前一位是奇数，向正无穷方向对齐，否则向负无穷方向对齐
     */
    HALF_EVEN = 6,
    /**
     * 如果需要舍入，就抛出算术异常
     */
    UNNECESSARY = 7,
}

/**
 * java.math.BigDecimal 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“Interop”创建该类型实例<br />
 * @see Interop
 */
interface JBigDecimal extends JObject, Comparable<JBigDecimal> {
    java_math_BigDecimal: "java.math.BigDecimal";

    /**
     * 返回BigDecimal，其值是(this + augend) <br />
     * 其标度为 max(this.scale(), augend.scale())
     */
    add(augend: JBigDecimal): JBigDecimal;

    /**
     * 返回 BigDecimal ，其值是 (this - subtrahend) <br />
     * 其标度为 max(this.scale(), subtrahend.scale())
     */
    subtract(subtrahend: JBigDecimal): JBigDecimal;

    /**
     * 返回 BigDecimal ，其值是 (this × multiplicand) <br />
     * 其标度为 (this.scale() + multiplicand.scale())
     */
    multiply(multiplicand: JBigDecimal): JBigDecimal;

    /**
     * 返回BigDecimal，其值为(this / divisor) <br />
     * 标度优先级为(this.scale() - divisor.scale()) <br />
     * 如果不能表示确切的商（因为它具有非终止的十进制扩展），则抛出一个ArithmeticException
     */
    divide(divisor: JBigDecimal): JBigDecimal;

    /**
     * 返回BigDecimal ，其值是(this / divisor) <br />
     * 其标度为this.scale()
     */
    divide(divisor: JBigDecimal, roundingMode: RoundingMode): JBigDecimal;

    /**
     * 返回一个 BigDecimal ，其值为 (this / divisor)
     */
    divide(divisor: JBigDecimal, scale: JInt, roundingMode: RoundingMode): JBigDecimal;

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
     * 返回一个 BigDecimal ，其值为此 BigDecimal的绝对值，其缩放比例为 this.scale()
     */
    abs(): JBigDecimal;

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
     * 返回BigDecimal，其值是(-this)，其标为this.scale()
     */
    negate(): JBigDecimal;

    /**
     * 返回BigDecimal，其值是 (+this)，根据上下文设置进行舍入
     */
    plus(): JBigDecimal;

    /**
     * 此方法返回一个BigDecimal，其值是(this^n), 幂被精确计算，使其具有无限精度
     */
    pow(n: JInt): JBigDecimal;

    /**
     * 此方法返回此BigDecimal的精度
     */
    precision(): JInt;

    /**
     * 返回 BigDecimal ，其值是 (this % divisor)
     */
    remainder(divisor: JBigDecimal): JBigDecimal;

    /**
     * 此方法返回此BigDecimal的标度
     */
    scale(): JInt;

    /**
     * 返回一个BigDecimal，其大小是指定值，其值在数字上等于此 BigDecimal
     */
    setScale(newScale: JInt): JBigDecimal;

    /**
     * 返回一个 BigDecimal ，其规模是指定值，其缩放值通过将此 BigDecimal的非标度值乘以10的适当功率来确定，以维持其总体值
     */
    setScale(newScale: JInt, roundingMode: RoundingMode): JBigDecimal;

    /**
     * 将此 BigDecimal转换为 short ，检查丢失的信息
     */
    shortValueExact(): JBigDecimal;

    /**
     * 此方法返回-1，0，或1，此BigDecimal的值分类为负，零或正值
     */
    signum(): JBigDecimal;

    /**
     * 用于去除末尾多余的0的
     */
    stripTrailingZeros(): JBigDecimal;


    /**
     * 将此 BigDecimal转换为 BigInteger
     */
    toBigInteger(): JBigInteger;

    /**
     * 将此 BigDecimal转换为 BigInteger ，检查丢失的信息
     */
    toBigIntegerExact(): JBigInteger;

    /**
     * 如果需要指数，则使用工程符号返回此 BigDecimal的字符串表示形式
     */
    toEngineeringString(): JString;

    /**
     * 返回没有指数字段的此 BigDecimal的字符串表示形式
     */
    toPlainString(): JString;

    /**
     * 返回此 BigDecimal的最后一个位置的ulp（一个单位）的大小
     */
    ulp(): JBigDecimal;

    /**
     * 返回一个 BigInteger ，其值是此 BigDecimal的 未缩放值
     */
    unscaledValue(): JBigInteger;
}
