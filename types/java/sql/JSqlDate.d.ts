/**
 * java.sql.Date 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“Interop”创建该类型实例<br />
 * @see Interop
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