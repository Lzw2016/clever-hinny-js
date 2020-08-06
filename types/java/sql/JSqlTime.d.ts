/**
 * java.sql.Time 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“Interop”创建该类型实例<br />
 * @see Interop
 */
interface JSqlTime extends JDate {
    java_sql_Time: "java.sql.Time";

    getDate(): JInt;

    getDay(): JInt;

    getMonth(): JInt;

    getYear(): JInt;
}