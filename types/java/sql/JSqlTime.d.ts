/**
 * java.sql.Time 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“Interop”创建该类型实例<br />
 * @see Interop
 */
interface JSqlTime extends JObject {
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