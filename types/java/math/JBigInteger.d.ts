/**
 * java.math.BigInteger 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“Interop”创建该类型实例<br />
 * @see Interop
 */
interface JBigInteger extends JObject {
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