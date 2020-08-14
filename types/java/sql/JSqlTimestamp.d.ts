/**
 * java.sql.Timestamp 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * 请使用内置对象“Interop”创建该类型实例<br />
 * @see Interop
 */
interface JSqlTimestamp extends JDate {
    java_sql_Timestamp: "java.sql.Timestamp";

    /**
     * 获取此 Timestamp 对象的 nanos 值
     */
    getNanos(): JInt;
}