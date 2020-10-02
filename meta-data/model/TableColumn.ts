export interface TableColumn {
    /**
     * 数据库名称
     */
    getSchemaName(): JString;

    /**
     * 表名称
     */
    getTableName(): JString;

    /**
     * 序号位置
     */
    getOrdinalPosition(): JInt;

    /**
     * 列名称
     */
    getColumnName(): JString;

    /**
     * 数据类型
     */
    getDataType(): JString;

    /**
     * 字符串最大长度，数字精度
     */
    getSize(): JInt;

    /**
     * 字段精度表示
     */
    getWidth(): JString;

    /**
     * 小数位数
     */
    getDecimalDigits(): JInt;

    /**
     * 是否不能为空
     */
    isNotNull(): JBoolean;

    /**
     * 是否自增长
     */
    isAutoIncrement(): JBoolean;

    /**
     * 默认值
     */
    getDefaultValue(): JString;

    /**
     * 列注释
     */
    getComment(): JString;

    /**
     * 所谓Generated Column，就是数据库中这一列由其他列计算而得
     */
    isGenerated(): JBoolean;

    /**
     * 是否是隐藏的列
     */
    isHidden(): JBoolean;

    /**
     * 是否是外键
     */
    isPartOfForeignKey(): JBoolean;

    /**
     * 是否建了索引
     */
    isPartOfIndex(): JBoolean;

    /**
     * 是否是主键
     */
    isPartOfPrimaryKey(): JBoolean;

    /**
     * 是否唯一约束
     */
    isPartOfUniqueIndex(): JBoolean;

    /**
     * 字段映射的Java类型
     */
    getMappedClass(): JClass;

    /**
     * 其他列属性
     */
    getAttributes(): JMap<JString, any>;
}