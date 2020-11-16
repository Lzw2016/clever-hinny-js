import { RedisInfo } from "./RedisInfo";
import { RedisDataSourceStatus } from "./RedisDataSourceStatus";

export enum RedisDataType {
    /** key不存在 */
    None = "none",
    /** String结构 */
    String = "string",
    /** List结构 */
    List = "list",
    /** Set结构 */
    Set = "set",
    /** ZSet结构 */
    ZSet = "zset",
    /** Hash结构 */
    Hash = "hash",
}

export interface ZSetValue<T extends object = object> {
    /** 排序值 */
    getScore(): JDouble;

    /** 排序值 */
    setScore(score: JDouble): void;

    /** 数据值 */
    getValue(): T;

    /** 数据值 */
    setValue(value: T): void;
}

export interface PointValue<T extends object = object> {
    /** x轴位置(经度) */
    getX(): JDouble;

    /** x轴位置(经度) */
    setX(x: JDouble): void;

    /** y轴位置(维度) */
    getY(): JDouble;

    /** y轴位置(维度) */
    setY(y: JDouble): void;

    /** 数据值 */
    getValue(): T;

    /** 数据值 */
    setValue(value: T): void;
}

/**
 * 数据迭代回调处理
 *
 * @param item 数据项
 * @return 是否需要中断迭代
 */
export type ScanCallback<T> = (item: T) => JBoolean;

export interface RedisMetric {
    org_springframework_data_geo_Metric: "org.springframework.data.geo.Metric";

    /** 返回从基本刻度计算度量值的乘数 */
    getMultiplier(): JDouble;

    /** 返回度量单位的科学缩写 */
    getAbbreviation(): JString;
}

export interface RedisDistance extends JComparable<RedisDistance> {
    org_springframework_data_geo_Distance: "org.springframework.data.geo.Distance";

    /** 当前度量中的距离值 */
    getValue(): JDouble;

    /** 返回距离所在单位的字符串表示形式 */
    getUnit(): JString;

    /** 返回有关基础度量的规范化值 */
    getNormalizedValue(): JDouble;

    /** Metric */
    getMetric(): RedisMetric;
}

export interface RedisPoint {
    /** 返回点的x坐标 */
    getX(): JDouble;

    /** 返回点的y坐标 */
    getY(): JDouble;
}

/**
 * Redis数据库操作对象<br />
 * <pre>
 *     k***()           Key 操作
 *     v***()           String 操作
 *     h***()           Hash 操作
 *     l***()           List 操作
 *     s***()           Set 操作
 *     zs***()          Sorted Set 操作
 *     hyperLogLog***() HyperLogLog  操作
 *     geo***()         Geo 操作
 * </pre>
 */
export interface RedisDataSource extends JObject {
    /**
     * 当前数据源是否关闭
     */
    isClosed(): JBoolean;

    /**
     * 关闭当前数据源
     */
    close(): void;


    // --------------------------------------------------------------------------------------------
    // Key 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 删除 key
     *
     * @param key key
     */
    kDelete(key: JString): JBoolean;

    /**
     * 删除 key
     *
     * @param keys keys
     */
    kDelete(keys: JCollection<JString>): JLong;

    /**
     * 删除 key
     *
     * @param keys keys
     */
    kDelete(...keys: JString[]): JLong;

    /**
     * 序列化给定 key ，并返回被序列化的值
     *
     * @param key key
     */
    kDump(key: JString): JByte[];

    /**
     * 检查给定 key 是否存在
     *
     * @param key key
     */
    kHasKey(key: JString): JBoolean;

    /**
     * 为给定 key 设置过期时间，以毫秒计
     *
     * @param key     key
     * @param timeout timeout以毫秒计
     */
    kExpire(key: JString, timeout: number): JBoolean;

    /**
     * 为给定 key 设置过期时间
     *
     * @param key  key
     * @param date 过期时间
     */
    kExpireAt(key: JString, date: JDate): JBoolean;

    /**
     * 为给定 key 设置过期时间
     *
     * @param key     key
     * @param dateStr 过期时间
     */
    kExpireAt(key: JString, dateStr: JString): JBoolean;

    /**
     * 查找所有符合给定模式( pattern)的 key
     *
     * @param pattern 模式( pattern)
     */
    keys(pattern: JString): JSet<JString>;

    /**
     * 将当前数据库的 key 移动到给定的数据库 db 当中
     *
     * @param key     key
     * @param dbIndex dbIndex
     */
    kMove(key: JString, dbIndex: JInt): JBoolean;

    /**
     * 移除 key 的过期时间，key 将持久保持
     *
     * @param key key
     */
    kPersist(key: JString): JBoolean

    /**
     * 以毫秒为单位返回 key 的剩余的过期时间
     *
     * @param key key
     */
    kGetExpire(key: JString): JLong;

    /**
     * 从当前数据库中随机返回一个 key
     */
    kRandomKey(): JString;

    /**
     * 修改 key 的名称
     *
     * @param oldKey oldKey
     * @param newKey newKey
     */
    kRename(oldKey: JString, newKey: JString): void;

    /**
     * 仅当 newKey 不存在时，将 key 改名为 newKey
     *
     * @param oldKey oldKey
     * @param newKey newKey
     */
    kRenameIfAbsent(oldKey: JString, newKey: JString): JBoolean;

    /**
     * 返回 key 所储存的值的类型
     *
     * @param key key
     */
    kType(key: JString): RedisDataType;

    // --------------------------------------------------------------------------------------------
    // String 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 设置指定 key 的值
     *
     * @param key   key
     * @param value value
     */
    vSet(key: JString, value: object): void;

    /**
     * 将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以毫秒为单位)
     *
     * @param key     key
     * @param value   value
     * @param timeout 过期时间毫秒
     */
    vSet(key: JString, value: object, timeout: number): void;

    /**
     * 只有在 key 不存在时设置 key 的值
     *
     * @param key   key
     * @param value value
     */
    vSetIfAbsent(key: JString, value: object): JBoolean;

    /**
     * @param key     key
     * @param value   value
     * @param timeout 过期时间毫秒
     */
    vSetIfAbsent(key: JString, value: object, timeout: number): JBoolean;

    /**
     * 获取Value的值
     *
     * @param key key
     */
    vGet(key: JString): object;

    /**
     * 返回 key 中字符串值的子字符
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    vGet(key: JString, start: number, end: number): JString;

    /**
     * 将给定 key 的值设为 value ，并返回 key 的旧值(old value)
     *
     * @param key   key
     * @param value value
     */
    vGetAndSet(key: JString, value: object): object;

    /**
     * 对 key 所储存的字符串值，获取指定偏移量上的位(bit)
     *
     * @param key    key
     * @param offset 偏移量
     */
    vGetBit(key: JString, offset: number): JBoolean;

    /**
     * 获取所有(一个或多个)给定 key 的值
     *
     * @param keys keys
     */
    vMultiGet(keys: JCollection<JString>): JList<object>;

    /**
     * 获取所有(一个或多个)给定 key 的值
     *
     * @param keys keys
     */
    vMultiGet(...keys: JString[]): JList<object>

    /**
     * 对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)
     *
     * @param key    key
     * @param offset 偏移量
     * @param value  值
     */
    vSetBit(key: JString, offset: number, value: boolean): JBoolean;

    /**
     * 用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始
     *
     * @param key    key
     * @param value  value
     * @param offset 偏移量
     */
    vSetRange(key: JString, value: object, offset: number): void;

    /**
     * 返回 key 所储存的字符串值的长度
     *
     * @param key key
     */
    vSize(key: JString): JLong;

    /**
     * 同时设置一个或多个 key-value 对
     *
     * @param map 多个 key-value 对
     */
    vMultiSet(map: JMap<JString, object>): void;

    /**
     * 同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在
     *
     * @param map 多个 key-value 对
     */
    vMultiSetIfAbsent(map: JMap<JString, object>): void;

    /**
     * 将 key 中储存的数字值增 1
     *
     * @param key key
     */
    vIncrement(key: JString): JLong;

    /**
     * 将 key 所储存的值加上给定的增量值（increment）
     *
     * @param key   key
     * @param delta 增量值
     */
    vIncrement(key: JString, delta: JLong | JInt | JDouble): JLong;

    /**
     * 将 key 中储存的数字值减 1
     *
     * @param key key
     */
    vDecrement(key: JString): JLong;

    /**
     * key 所储存的值减去给定的减量值（decrement）
     *
     * @param key   key
     * @param delta 减量值
     */
    vDecrement(key: JString, delta: JLong | JInt | JDouble): JLong;

    /**
     * 如果 key 已经存在并且是一个字符串， APPEND 命令将指定的 value 追加到该 key 原来值（value）的末尾
     *
     * @param key   key
     * @param value value
     */
    vAppend(key: JString, value: JString): JInt;

    // --------------------------------------------------------------------------------------------
    // Hash 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 删除一个或多个哈希表字段
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
    hDelete(key: JString, ...hashKeys: object[]): JLong;

    /**
     * 删除一个或多个哈希表字段
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
    hDelete(key: JString, hashKeys: JCollection<object>): JLong;

    /**
     * 查看哈希表 key 中，指定的字段是否存在
     *
     * @param key     key
     * @param hashKey hashKey
     */
    hHasKey(key: JString, hashKey: object): JBoolean;

    /**
     * 获取存储在哈希表中指定字段的值
     *
     * @param key     key
     * @param hashKey hashKey
     */
    hGet(key: JString, hashKey: object): object;

    /**
     * 获取所有给定字段的值
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
    hMultiGet(key: JString, hashKeys: JCollection<object>): JList<object>;

    /**
     * 获取所有给定字段的值
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
    hMultiGet(key: JString, ...hashKeys: object[]): JList<object>;

    /**
     * 为哈希表 key 中的指定字段的整数值加上增量 increment
     *
     * @param key     key
     * @param hashKey hashKey
     * @param delta   增量
     */
    hIncrement(key: JString, hashKey: object, delta: JLong | JInt | JDouble): JLong;

    /**
     * 获取所有哈希表中的字段
     *
     * @param key key
     */
    hKeys(key: JString): JSet<object>;

    /**
     * 返回与hashKey关联的值的长度。如果键或hashKey不存在，则返回0
     *
     * @param key     key
     * @param hashKey hashKey
     */
    hLengthOfValue(key: JString, hashKey: object): JLong;

    /**
     * 获取哈希表中字段的数量
     *
     * @param key key
     */
    hSize(key: JString): JLong;

    /**
     * 同时将多个 field-value (域-值)对设置到哈希表 key 中
     *
     * @param key key
     * @param m   field-value
     */
    hPutAll(key: JString, m: JMap<object, object>): void;

    /**
     * 将哈希表 key 中的字段 field 的值设为 value
     *
     * @param key     key
     * @param hashKey field
     * @param value   value
     */
    hPut(key: JString, hashKey: object, value: object): void;

    /**
     * 只有在字段 field 不存在时，设置哈希表字段的值
     *
     * @param key     key
     * @param hashKey field
     * @param value   字段的值
     */
    hPutIfAbsent(key: JString, hashKey: object, value: object): JBoolean;

    /**
     * 获取哈希表中所有值
     *
     * @param key key
     */
    hValues(key: JString): JList<object>;

    /**
     * 将整个散列存储在键上
     *
     * @param key key
     */
    hEntries(key: JString): JMap<object, object>;

    /**
     * 迭代哈希表中的键值对
     *
     * @param key      key
     * @param count    数量
     * @param pattern  字段匹配字符串
     * @param callback 数据迭代回调
     */
    // TODO hScan( key:JString,  count:number,  pattern:JString,  callback: Value):void;

    // --------------------------------------------------------------------------------------------
    // List 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 获取列表指定范围内的元素
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    lRange(key: JString, start: number, end: number): JList<Object>;

    /**
     * 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    lTrim(key: JString, start: number, end: number): void;

    /**
     * 获取列表长度
     *
     * @param key key
     */
    lSize(key: JString): JLong;

    /**
     * 将一个或多个值插入到列表头部
     *
     * @param key   key
     * @param value value
     */
    lLeftPush(key: JString, value: object): JLong;

    /**
     * 将一个或多个值插入到列表头部
     *
     * @param key    key
     * @param values values
     */
    lLeftPushAll(key: JString, ...values: object[]): JLong;

    /**
     * 将一个或多个值插入到列表头部
     *
     * @param key    key
     * @param values values
     */
    lLeftPushAll(key: JString, values: JCollection<object>): JLong;

    /**
     * 将一个值插入到已存在的列表头部
     *
     * @param key   key
     * @param value value
     */
    lLeftPushIfPresent(key: JString, value: object): JLong;

    /**
     * 将值前置到键值之前
     *
     * @param key   key
     * @param pivot pivot
     * @param value value
     */
    lLeftPush(key: JString, pivot: object, value: object): JLong;

    /**
     * 在列表中添加一个或多个值
     *
     * @param key   key
     * @param value value
     */
    lRightPush(key: JString, value: object): JLong;

    /**
     * 在列表中添加一个或多个值
     *
     * @param key    key
     * @param values values
     */
    lRightPushAll(key: JString, ...values: object[]): JLong;

    /**
     * 在列表中添加一个或多个值
     *
     * @param key    key
     * @param values values
     */
    lRightPushAll(key: JString, values: JCollection<object>): JLong;

    /**
     * 仅当列表存在时才向键追加值
     *
     * @param key   key
     * @param value value
     */
    lRightPushIfPresent(key: JString, value: object): JLong;

    /**
     * 在键值之前追加值
     *
     * @param key   key
     * @param pivot pivot
     * @param value value
     */
    lRightPush(key: JString, pivot: object, value: object): JLong;

    /**
     * 通过索引设置列表元素的值
     *
     * @param key   key
     * @param index 索引
     * @param value value
     */
    lSet(key: JString, index: number, value: object): void;

    /**
     * 移除列表元素，从存储在键上的列表中删除第一次出现的值计数
     *
     * @param key   key
     * @param count count
     * @param value value
     */
    lRemove(key: JString, count: number, value: object): JLong;

    /**
     * 通过索引获取列表中的元素
     *
     * @param key   key
     * @param index 索引
     */
    lIndex(key: JString, index: number): object;

    /**
     * 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key key
     */
    lLeftPop(key: JString): object;

    /**
     * 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key     key
     * @param timeout timeout 毫秒
     */
    lLeftPop(key: JString, timeout: number): object;

    /**
     * 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key key
     */
    lRightPop(key: JString): object;

    /**
     * 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key     key
     * @param timeout timeout 毫秒
     */
    lRightPop(key: JString, timeout: number): object;

    /**
     * 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param sourceKey      sourceKey
     * @param destinationKey destinationKey
     */
    lRightPopAndLeftPush(sourceKey: JString, destinationKey: JString): object;

    /**
     * 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param sourceKey      sourceKey
     * @param destinationKey destinationKey
     * @param timeout        timeout 毫秒
     */
    lRightPopAndLeftPush(sourceKey: JString, destinationKey: JString, timeout: number): object;

    // --------------------------------------------------------------------------------------------
    // Set 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 向集合添加一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    sAdd(key: JString, ...values: object[]): JLong;

    /**
     * 向集合添加一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    sAdd(key: JString, values: JCollection<object>): JLong;

    /**
     * 移除集合中一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    sRemove(key: JString, ...values: object[]): JLong;

    /**
     * 移除集合中一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    sRemove(key: JString, values: JCollection<object>): JLong;

    /**
     * 移除并返回集合中的一个随机元素
     *
     * @param key key
     */
    sPop(key: JString): object;

    /**
     * 移除并返回集合中的count个随机元素
     *
     * @param key   key
     * @param count count
     */
    sPop(key: JString, count: number): JList<object>;

    /**
     * 将 value 元素从 key 集合移动到 destKey 集合
     *
     * @param key     key
     * @param value   value
     * @param destKey destKey
     */
    sMove(key: JString, value: object, destKey: JString): JBoolean;

    /**
     * 获取集合的成员数
     *
     * @param key key
     */
    sSize(key: JString): JLong;

    /**
     * 判断 member 元素是否是集合 key 的成员
     *
     * @param key    key
     * @param member member 元素
     */
    sIsMember(key: JString, member: object): JBoolean;

    /**
     * 返回给定所有集合的交集
     *
     * @param key      key
     * @param otherKey otherKey
     */
    sIntersect(key: JString, otherKey: JString): JSet<object>;

    /**
     * 返回给定所有集合的交集
     *
     * @param key       key
     * @param otherKeys otherKeys
     */
    sIntersect(key: JString, otherKeys: JCollection<JString>): JSet<object>;

    /**
     * 返回给定所有集合的交集
     *
     * @param key       key
     * @param otherKeys otherKeys
     */
    sIntersect(key: JString, ...otherKeys: JString[]): JSet<object>;

    /**
     * 返回给定所有集合的交集并存储在 destination 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    sIntersectAndStore(key: JString, otherKey: JString, destKey: JString): JLong;

    /**
     * 返回给定所有集合的交集并存储在 destination 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    sIntersectAndStore(key: JString, otherKeys: JCollection<String>, destKey: JString): JLong;

    /**
     * 返回给定所有集合的交集并存储在 destination 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    sIntersectAndStore(key: JString, otherKeys: String[], destKey: String): JLong;

    /**
     * 返回所有给定集合的并集
     *
     * @param key      key
     * @param otherKey otherKey
     */
    sUnion(key: JString, otherKey: JString): JSet<object>;

    /**
     * 返回所有给定集合的并集
     *
     * @param key       key
     * @param otherKeys otherKey
     */
    sUnion(key: JString, otherKeys: JCollection<String>): JSet<object>;

    /**
     * 返回所有给定集合的并集
     *
     * @param key       key
     * @param otherKeys otherKeys
     */
    sUnion(key: JString, ...otherKeys: JString[]): JSet<object>;

    /**
     * 所有给定集合的并集存储在 destKey 集合中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    sUnionAndStore(key: JString, otherKey: JString, destKey: JString): JLong;

    /**
     * 所有给定集合的并集存储在 destKey 集合中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    sUnionAndStore(key: JString, otherKeys: JCollection<JString>, destKey: JString): JLong;

    /**
     * 所有给定集合的并集存储在 destKey 集合中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    sUnionAndStore(key: JString, otherKeys: JString[], destKey: JString): JLong;

    /**
     * 返回给定所有集合的差集
     *
     * @param key      key
     * @param otherKey otherKey
     */
    sDifference(key: JString, otherKey: JString): JSet<object>;

    /**
     * 返回给定所有集合的差集
     *
     * @param key      key
     * @param otherKey otherKey
     */
    sDifference(key: JString, otherKey: JCollection<String>): JSet<Object>;

    /**
     * 返回给定所有集合的差集
     *
     * @param key      key
     * @param otherKey otherKey
     */
    sDifference(key: JString, ...otherKey: JString[]): JSet<object>;

    /**
     * 返回给定所有集合的差集并存储在 destKey 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    sDifferenceAndStore(key: JString, otherKey: JString, destKey: JString): JLong;

    /**
     * 返回给定所有集合的差集并存储在 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    sDifferenceAndStore(key: JString, otherKeys: JCollection<JString>, destKey: JString): JLong;

    /**
     * 返回给定所有集合的差集并存储在 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    sDifferenceAndStore(key: JString, otherKeys: JString[], destKey: JString): JLong;

    /**
     * 返回集合中的所有成员
     *
     * @param key key
     */
    sMembers(key: JString): JSet<object>;

    /**
     * 返回集合中一个或多个随机数
     *
     * @param key key
     */
    sRandomMember(key: JString): object;

    /**
     * 从集合中获取不同的随机元素
     *
     * @param key   key
     * @param count 数量
     */
    sDistinctRandomMembers(key: JString, count: number): JSet<object>;

    /**
     * 返回集合中一个或多个随机数
     *
     * @param key   key
     * @param count 数量
     */
    sRandomMembers(key: JString, count: number): JList<object>;

    /**
     * 迭代集合中的元素
     *
     * @param key      key
     * @param count    count
     * @param pattern  pattern
     * @param callback 数据迭代回调函数
     */
    // sScan( key:JString,  count:number,  pattern:JString,  callback:Value):void;

    // --------------------------------------------------------------------------------------------
    // Sorted Set 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 向有序集合添加一个或多个成员，或者更新已存在成员的分数
     *
     * @param key   key
     * @param value value
     * @param score score
     */
    zsAdd(key: JString, value: object, score: number): JBoolean;

    /**
     * 向有序集合添加一个或多个成员，或者更新已存在成员的分数
     *
     * @param key    key
     * @param values values
     */
    zsAdd(key: JString, values: JCollection<ZSetValue>): JLong;

    /**
     * 向有序集合添加一个或多个成员，或者更新已存在成员的分数
     *
     * @param key    key
     * @param values values
     */
    zsAdd(key: JString, values: ZSetValue[]): JLong;

    /**
     * 移除有序集合中的一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    zsRemove(key: JString, ...values: object[]): JLong;

    /**
     * 移除有序集合中的一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    zsRemove(key: JString, values: JCollection<object>): JLong;

    /**
     * 有序集合中对指定成员的分数加上增量 increment
     *
     * @param key   key
     * @param value value
     * @param delta increment
     */
    zsIncrementScore(key: JString, value: object, delta: number): JDouble;

    /**
     * 返回有序集合中指定成员的索引
     *
     * @param key key
     * @param o   o
     */
    zsRank(key: JString, o: object): JLong;

    /**
     * 确定元素的索引值在排序集时得分从高到低
     *
     * @param key key
     * @param o   o
     */
    zsReverseRank(key: JString, o: object): JLong;

    /**
     * 从已排序集获取开始和结束之间的元素
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    zsRange(key: JString, start: number, end: number): JSet<object>;

    /**
     * 从已排序集获取开始和结束之间的元素
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    zsRangeWithScores(key: JString, start: number, end: number): JList<ZSetValue>;

    /**
     * 从排序后的集合中获取得分介于最小值和最大值之间的元素
     *
     * @param key key
     * @param min min
     * @param max max
     */
    zsRangeByScore(key: JString, min: number, max: number): JSet<object>;

    /**
     * 从排序后的集合中获取得分介于最小值和最大值之间的元素
     *
     * @param key key
     * @param min min
     * @param max max
     */
    zsRangeByScoreWithScores(key: JString, min: number, max: number): JList<ZSetValue>;

    /**
     * 获取从开始到结束的范围内的元素，其中得分在排序集的最小值和最大值之间
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    zsRangeByScore(key: JString, min: number, max: number, offset: number, count: number): JSet<object>;

    /**
     * 获取从开始到结束的范围内的元素，其中得分在排序集的最小值和最大值之间
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    zsRangeByScoreWithScores(key: JString, min: number, max: number, offset: number, count: number): JList<ZSetValue>;

    /**
     * 获取范围从开始到结束的元素，从高到低排序的集合
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    zsReverseRange(key: JString, start: number, end: number): JSet<object>;

    /**
     * 获取范围从开始到结束的元素，从高到低排序的集合
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    zsReverseRangeWithScores(key: JString, start: number, end: number): JList<ZSetValue>;

    /**
     * 获取得分介于最小值和最大值之间的元素，从高到低排序
     *
     * @param key key
     * @param min min
     * @param max max
     */
    zsReverseRangeByScore(key: JString, min: number, max: number): JSet<object>

    /**
     * 获取得分介于最小值和最大值之间的元素，从高到低排序
     *
     * @param key key
     * @param min min
     * @param max max
     */
    zsReverseRangeByScoreWithScores(key: JString, min: number, max: number): JList<ZSetValue>;

    /**
     * 获取从开始到结束的范围内的元素，其中得分在最小和最大之间，排序集高 -> 低
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    zsReverseRangeByScore(key: JString, min: number, max: number, offset: number, count: number): JSet<object>;

    /**
     * 获取从开始到结束的范围内的元素，其中得分在最小和最大之间，排序集高 -> 低
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    zsReverseRangeByScoreWithScores(key: JString, min: number, max: number, offset: number, count: number): JList<ZSetValue>;

    /**
     * 用最小值和最大值之间的值计算排序集中的元素数
     *
     * @param key key
     * @param min min
     * @param max max
     */
    zsCount(key: JString, min: number, max: number): JLong;

    /**
     * 返回按给定键存储的已排序集的元素数
     *
     * @param key key
     */
    zsSize(key: JString): JLong;

    /**
     * 获取有序集合的成员数
     *
     * @param key key
     */
    zsZCard(key: JString): JLong;

    /**
     * 返回有序集中，成员的分数值
     *
     * @param key key
     * @param o   o
     */
    zsScore(key: JString, o: object): JDouble;

    /**
     * 从按键排序的集合中删除开始和结束之间范围内的元素
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    zsRemoveRange(key: JString, start: number, end: number): JLong;

    /**
     * 从按键排序的集合中删除得分在min和max之间的元素
     *
     * @param key key
     * @param min min
     * @param max max
     */
    zsRemoveRangeByScore(key: JString, min: number, max: number): JLong;

    /**
     * 计算给定的一个或多个有序集的并集，并存储在新的 destKey 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    zsUnionAndStore(key: JString, otherKey: JString, destKey: JString): JLong;

    /**
     * 计算给定的一个或多个有序集的并集，并存储在新的 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    zsUnionAndStore(key: JString, otherKeys: JCollection<JString>, destKey: JString): JLong;

    /**
     * 计算给定的一个或多个有序集的并集，并存储在新的 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    zsUnionAndStore(key: JString, otherKeys: JString[], destKey: JString): JLong;

    /**
     * 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    zsIntersectAndStore(key: JString, otherKey: JString, destKey: JString): JLong;

    /**
     * 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    zsIntersectAndStore(key: JString, otherKeys: JCollection<JString>, destKey: JString): JLong;

    /**
     * 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    zsIntersectAndStore(key: JString, otherKeys: JString[], destKey: JString): JLong;

    /**
     * 迭代有序集合中的元素（包括元素成员和元素分值）
     *
     * @param key      key
     * @param count    count
     * @param pattern  pattern
     * @param callback 数据迭代回调函数
     */

    // zsScan( key:JString,  count:number,  pattern:JString,  callback:Value):void;

    /**
     * 通过字典区间返回有序集合的成员
     *
     * @param key       key
     * @param minValue  minValue
     * @param equalsMin equalsMin
     * @param maxValue  maxValue
     * @param equalsMax equalsMax
     */
    zsRangeByLex(key: JString, minValue: object, equalsMin: JBoolean, maxValue: object, equalsMax: JBoolean): JSet<object>;

    /**
     * 通过字典区间返回有序集合的成员
     *
     * @param key       key
     * @param minValue  minValue
     * @param equalsMin equalsMin
     * @param maxValue  maxValue
     * @param equalsMax equalsMax
     * @param count     count
     * @param offset    offset
     */
    zsRangeByLex(key: JString, minValue: object, equalsMin: JBoolean, maxValue: object, equalsMax: JBoolean, count: number, offset: number): JSet<object>;

    // --------------------------------------------------------------------------------------------
    // HyperLogLog  操作
    // --------------------------------------------------------------------------------------------

    /**
     * 添加指定元素到 HyperLogLog 中
     *
     * @param key    key
     * @param values values
     */
    hyperLogLogAdd(key: JString, ...values: object[]): JLong;

    /**
     * 添加指定元素到 HyperLogLog 中
     *
     * @param key    key
     * @param values values
     */
    hyperLogLogAdd(key: JString, values: JCollection<object>): JLong;

    /**
     * 获取键中元素的当前数目
     *
     * @param keys keys
     */
    hyperLogLogSize(...keys: JString[]): JLong;

    /**
     * 获取键中元素的当前数目
     *
     * @param keys keys
     */
    hyperLogLogSize(keys: JCollection<JString>): JLong;

    /**
     * 将多个 HyperLogLog 合并为一个 HyperLogLog
     *
     * @param destination destination
     * @param sourceKeys  sourceKeys
     */
    hyperLogLogUnion(destination: JString, ...sourceKeys: JString[]): JLong;

    /**
     * 将多个 HyperLogLog 合并为一个 HyperLogLog
     *
     * @param destination destination
     * @param sourceKeys  sourceKeys
     */
    hyperLogLogUnion(destination: JString, sourceKeys: JCollection<JString>): JLong;

    /**
     * 删除给定的密钥
     *
     * @param key key
     */
    hyperLogLogDelete(key: JString): void;

    // --------------------------------------------------------------------------------------------
    // Geo 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 将指定成员名的点添加到键上
     *
     * @param key    key
     * @param x      x
     * @param y      y
     * @param member member
     */
    geoAdd(key: JString, x: number, y: number, member: object): JLong;

    /**
     * 将指定成员名的点添加到键上
     *
     * @param key        key
     * @param pointValue pointValue
     */
    geoAdd(key: JString, pointValue: PointValue): JLong;

    /**
     * 将指定成员名的点添加到键上
     *
     * @param key         key
     * @param pointValues pointValues
     */
    geoAdd(key: JString, pointValues: JCollection<PointValue>): JLong;

    /**
     * 将指定成员名的点添加到键上
     *
     * @param key         key
     * @param pointValues pointValues
     */
    geoAdd(key: JString, pointValues: PointValue[]): JLong;

    /**
     * 返回两个给定位置之间的距离
     *
     * @param key     key
     * @param member1 member1
     * @param member2 member2
     */
    geoDistance(key: JString, member1: object, member2: object): RedisDistance;

    /**
     * 获取一个或多个成员位置的GeoHash表示
     *
     * @param key     key
     * @param members members
     */
    geoHash(key: JString, ...members: object[]): JList<JString>;

    /**
     * 获取一个或多个成员位置的GeoHash表示
     *
     * @param key     key
     * @param members members
     */
    geoHash(key: JString, members: JCollection<object>): JList<JString>;

    /**
     * 获取一个或多个成员的位置的点表示
     *
     * @param key     key
     * @param members members
     */
    geoPosition(key: JString, ...members: object[]): JList<RedisPoint>

    /**
     * 获取一个或多个成员的位置的点表示
     *
     * @param key     key
     * @param members members
     */
    geoPosition(key: JString, members: JCollection<object>): JList<RedisPoint>;

    // --------------------------------------------------------------------------------------------
    // 其它 操作
    // --------------------------------------------------------------------------------------------

    /** 获取Redis信息 */
    getInfo(): RedisInfo;

    /** 获取Redis服务器状态 */
    getStatus(): RedisDataSourceStatus;
}