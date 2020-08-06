/**
 * java.sql.Timestamp 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“Interop”创建该类型实例<br />
 * @see Interop
 */
interface JSqlTimestamp extends JObject {
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