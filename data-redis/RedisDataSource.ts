export enum RedisDataType {
    NotExists="NotExists",
    None="none",
    String="string",
    List="list",
    Set="set",
    ZSet="zset",
    Hash="hash",
}

export interface ZSetValue<T extends object =object> {
    /** 排序值 */
    getScore():JDouble;
    /** 排序值 */
    setScore(score:JDouble):void;
    /** 数据值 */
    getValue():T;
    /** 数据值 */
    setValue(value:T):void;
}

export interface PointValue<T extends object =object> {
    /** x轴位置(经度) */
    getX():JDouble;
    /** x轴位置(经度) */
    setX(x:JDouble):void;
    /** y轴位置(维度) */
    getY():JDouble;
    /** y轴位置(维度) */
    setY(y:JDouble):void;
    /** 数据值 */
    getValue():T;
    /** 数据值 */
    setValue(value:T):void;
}

/**
 * 数据迭代回调处理
 *
 * @param item 数据项
 * @return 是否需要中断迭代
 */
export type ScanCallback<T> =  (item: T) => JBoolean;

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
    kDelete(key:JString):JBoolean;

    /**
     * 删除 key
     *
     * @param keys keys
     */
    kDelete(keys:JCollection<JString>):JLong;

    /**
     * 删除 key
     *
     * @param keys keys
     */
    kDelete(...keys: JString[]):JLong;

    /**
     * 序列化给定 key ，并返回被序列化的值
     *
     * @param key key
     */
    kDump(key:JString):JByte[];

    /**
     * 检查给定 key 是否存在
     *
     * @param key key
     */
    kHasKey( key:JString):JBoolean;

    /**
     * 为给定 key 设置过期时间，以毫秒计
     *
     * @param key     key
     * @param timeout timeout以毫秒计
     */
    kExpire( key:JString,  timeout: number): JBoolean;

    /**
     * 为给定 key 设置过期时间
     *
     * @param key  key
     * @param date 过期时间
     */
    kExpireAt( key:JString,  date:JDate):JBoolean;

    /**
     * 为给定 key 设置过期时间
     *
     * @param key     key
     * @param dateStr 过期时间
     */
    kExpireAt( key:JString,  dateStr:JString):JBoolean;

    /**
     * 查找所有符合给定模式( pattern)的 key
     *
     * @param pattern 模式( pattern)
     */
    keys( pattern:JString):JSet<JString>;

    /**
     * 将当前数据库的 key 移动到给定的数据库 db 当中
     *
     * @param key     key
     * @param dbIndex dbIndex
     */
    kMove( key:JString,  dbIndex:JInt):JBoolean;

    /**
     * 移除 key 的过期时间，key 将持久保持
     *
     * @param key key
     */
    kPersist( key:JString):JBoolean

    /**
     * 以毫秒为单位返回 key 的剩余的过期时间
     *
     * @param key key
     */
    kGetExpire( key:JString):JLong;

    /**
     * 从当前数据库中随机返回一个 key
     */
    kRandomKey():JString;

    /**
     * 修改 key 的名称
     *
     * @param oldKey oldKey
     * @param newKey newKey
     */
    kRename( oldKey:JString,  newKey:JString):void;

    /**
     * 仅当 newKey 不存在时，将 key 改名为 newKey
     *
     * @param oldKey oldKey
     * @param newKey newKey
     */
    kRenameIfAbsent( oldKey:JString,  newKey:JString):JBoolean;

    /**
     * 返回 key 所储存的值的类型
     *
     * @param key key
     */
    kType( key:JString):RedisDataType;

    // --------------------------------------------------------------------------------------------
    // String 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 设置指定 key 的值
     *
     * @param key   key
     * @param value value
     */
    vSet( key:JString,  value:object):void;

    /**
     * 将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以毫秒为单位)
     *
     * @param key     key
     * @param value   value
     * @param timeout 过期时间毫秒
     */
    vSet( key:JString,  value:object,  timeout:number):void;

    /**
     * 只有在 key 不存在时设置 key 的值
     *
     * @param key   key
     * @param value value
     */
    vSetIfAbsent( key:JString,  value:object):JBoolean;

    /**
     * @param key     key
     * @param value   value
     * @param timeout 过期时间毫秒
     */
    vSetIfAbsent( key:JString,  value:object,  timeout:number):JBoolean;

    /**
     * 获取Value的值
     *
     * @param key key
     */
     vGet( key:JString): object;

    /**
     * 返回 key 中字符串值的子字符
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    vGet( key:JString,  start:number,  end:number):JString;

    /**
     * 将给定 key 的值设为 value ，并返回 key 的旧值(old value)
     *
     * @param key   key
     * @param value value
     */
    vGetAndSet( key:JString,  value:object):object;

    /**
     * 对 key 所储存的字符串值，获取指定偏移量上的位(bit)
     *
     * @param key    key
     * @param offset 偏移量
     */
    vGetBit( key:JString,  offset:number):JBoolean;

    /**
     * 获取所有(一个或多个)给定 key 的值
     *
     * @param keys keys
     */
      vMultiGet( keys:JCollection<JString>):JList<object>;

    /**
     * 获取所有(一个或多个)给定 key 的值
     *
     * @param keys keys
     */
     vMultiGet(...keys:JString[]): JList<object>

    /**
     * 对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)
     *
     * @param key    key
     * @param offset 偏移量
     * @param value  值
     */
     vSetBit( key:JString,  offset:number,  value:boolean):JBoolean;

    /**
     * 用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始
     *
     * @param key    key
     * @param value  value
     * @param offset 偏移量
     */
    vSetRange( key:JString,  value:object,  offset:number) :void;

    /**
     * 返回 key 所储存的字符串值的长度
     *
     * @param key key
     */
    vSize( key:JString):JLong;

    /**
     * 同时设置一个或多个 key-value 对
     *
     * @param map 多个 key-value 对
     */
    vMultiSet( map:JMap<JString, object>):void;

    /**
     * 同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在
     *
     * @param map 多个 key-value 对
     */
    vMultiSetIfAbsent( map:JMap<JString, object>):void;

    /**
     * 将 key 中储存的数字值增 1
     *
     * @param key key
     */
    vIncrement( key:JString):JLong;

    /**
     * 将 key 所储存的值加上给定的增量值（increment）
     *
     * @param key   key
     * @param delta 增量值
     */
    vIncrement( key:JString,  delta: JLong | JInt|JDouble):JLong;

    /**
     * 将 key 中储存的数字值减 1
     *
     * @param key key
     */
    vDecrement( key:JString):JLong;

    /**
     * key 所储存的值减去给定的减量值（decrement）
     *
     * @param key   key
     * @param delta 减量值
     */
     vDecrement( key:JString,  delta: JLong | JInt|JDouble):JLong;

    /**
     * 如果 key 已经存在并且是一个字符串， APPEND 命令将指定的 value 追加到该 key 原来值（value）的末尾
     *
     * @param key   key
     * @param value value
     */
     vAppend( key:JString,  value:JString):JInt;

    // --------------------------------------------------------------------------------------------
    // Hash 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 删除一个或多个哈希表字段
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
     hDelete( key:JString, ...hashKeys:object[]):JLong;

    /**
     * 删除一个或多个哈希表字段
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
     hDelete( key:JString,  hashKeys:JCollection<object>):JLong;

    /**
     * 查看哈希表 key 中，指定的字段是否存在
     *
     * @param key     key
     * @param hashKey hashKey
     */
     hHasKey( key:JString,  hashKey:object):JBoolean;

    /**
     * 获取存储在哈希表中指定字段的值
     *
     * @param key     key
     * @param hashKey hashKey
     */
     hGet( key:JString,  hashKey:object):object;

    /**
     * 获取所有给定字段的值
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
     hMultiGet( key:JString,  hashKeys:JCollection<object>):JList<object>;

    /**
     * 获取所有给定字段的值
     *
     * @param key      key
     * @param hashKeys hashKeys
     */
     hMultiGet( key:JString, ...hashKeys:object[]):JList<object>;

    /**
     * 为哈希表 key 中的指定字段的整数值加上增量 increment
     *
     * @param key     key
     * @param hashKey hashKey
     * @param delta   增量
     */
     hIncrement( key:JString,  hashKey:object,  delta: JLong | JInt |JDouble):JLong;

    /**
     * 获取所有哈希表中的字段
     *
     * @param key key
     */
     hKeys( key:JString):JSet<object>;

    /**
     * 返回与hashKey关联的值的长度。如果键或hashKey不存在，则返回0
     *
     * @param key     key
     * @param hashKey hashKey
     */
     hLengthOfValue( key:JString,  hashKey:object):JLong;

    /**
     * 获取哈希表中字段的数量
     *
     * @param key key
     */
     hSize( key:JString):JLong;

    /**
     * 同时将多个 field-value (域-值)对设置到哈希表 key 中
     *
     * @param key key
     * @param m   field-value
     */
     hPutAll( key:JString,  m:JMap<object, object>):void;

    /**
     * 将哈希表 key 中的字段 field 的值设为 value
     *
     * @param key     key
     * @param hashKey field
     * @param value   value
     */
     hPut( key:JString,  hashKey:object,  value:object):void;

    /**
     * 只有在字段 field 不存在时，设置哈希表字段的值
     *
     * @param key     key
     * @param hashKey field
     * @param value   字段的值
     */
    hPutIfAbsent( key:JString,  hashKey:object,  value:object):JBoolean;

    /**
     * 获取哈希表中所有值
     *
     * @param key key
     */
    hValues( key:JString):JList<object>;

    /**
     * 将整个散列存储在键上
     *
     * @param key key
     */
     hEntries( key:JString):JMap<object, object>;

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
     lRange( key:JString,  start:number,  end:number):JList<Object>;

    /**
     * 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    lTrim( key:JString,  start:number,  end:number):void;

    /**
     * 获取列表长度
     *
     * @param key key
     */
    lSize( key:JString):JLong;

    /**
     * 将一个或多个值插入到列表头部
     *
     * @param key   key
     * @param value value
     */
     lLeftPush( key:JString,  value:object):JLong;

    /**
     * 将一个或多个值插入到列表头部
     *
     * @param key    key
     * @param values values
     */
     lLeftPushAll( key:JString, ... values:object[]):JLong;

    /**
     * 将一个或多个值插入到列表头部
     *
     * @param key    key
     * @param values values
     */
     lLeftPushAll( key:JString,  values:JCollection<object>):JLong;

    /**
     * 将一个值插入到已存在的列表头部
     *
     * @param key   key
     * @param value value
     */
     lLeftPushIfPresent( key:JString,  value:object):JLong;

    /**
     * 将值前置到键值之前
     *
     * @param key   key
     * @param pivot pivot
     * @param value value
     */
     lLeftPush( key:JString,  pivot:object,  value:object):JLong;

    /**
     * 在列表中添加一个或多个值
     *
     * @param key   key
     * @param value value
     */
     lRightPush( key:JString,  value:object):JLong;

    /**
     * 在列表中添加一个或多个值
     *
     * @param key    key
     * @param values values
     */
     lRightPushAll( key:JString, ... values:object[]):JLong;

    /**
     * 在列表中添加一个或多个值
     *
     * @param key    key
     * @param values values
     */
     lRightPushAll( key:JString,  values:JCollection<object>):JLong;

    /**
     * 仅当列表存在时才向键追加值
     *
     * @param key   key
     * @param value value
     */
     lRightPushIfPresent( key:JString,  value:object):JLong;

    /**
     * 在键值之前追加值
     *
     * @param key   key
     * @param pivot pivot
     * @param value value
     */
    lRightPush( key:JString,  pivot:object,  value:object):JLong;

    /**
     * 通过索引设置列表元素的值
     *
     * @param key   key
     * @param index 索引
     * @param value value
     */
     lSet( key:JString,  index:number,  value:object):void;

    /**
     * 移除列表元素，从存储在键上的列表中删除第一次出现的值计数
     *
     * @param key   key
     * @param count count
     * @param value value
     */
     lRemove( key:JString,  count:number,  value:object):JLong;

    /**
     * 通过索引获取列表中的元素
     *
     * @param key   key
     * @param index 索引
     */
     lIndex( key:JString,  index:number):object;

    /**
     * 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key key
     */
     lLeftPop( key:JString):object;

    /**
     * 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key     key
     * @param timeout timeout 毫秒
     */
    lLeftPop( key:JString,  timeout:number):object;

    /**
     * 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key key
     */
     lRightPop( key:JString):object;

    /**
     * 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param key     key
     * @param timeout timeout 毫秒
     */
     lRightPop( key:JString,  timeout:number):object;

    /**
     * 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param sourceKey      sourceKey
     * @param destinationKey destinationKey
     */
     lRightPopAndLeftPush( sourceKey:JString,  destinationKey:JString):object;

    /**
     * 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
     *
     * @param sourceKey      sourceKey
     * @param destinationKey destinationKey
     * @param timeout        timeout 毫秒
     */
     lRightPopAndLeftPush( sourceKey:JString,  destinationKey:JString,  timeout:number):object;

    // --------------------------------------------------------------------------------------------
    // Set 操作
    // --------------------------------------------------------------------------------------------

    /**
     * 向集合添加一个或多个成员
     *
     * @param key    key
     * @param values values
     */
     sAdd( key:JString, ... values:object[]):JLong;

    /**
     * 向集合添加一个或多个成员
     *
     * @param key    key
     * @param values values
     */
     sAdd( key:JString,  values:JCollection<object>):JLong;

    /**
     * 移除集合中一个或多个成员
     *
     * @param key    key
     * @param values values
     */
     sRemove( key:JString, ... values:object[]):JLong;

    /**
     * 移除集合中一个或多个成员
     *
     * @param key    key
     * @param values values
     */
     sRemove( key:JString,  values:JCollection<object>):JLong;

    /**
     * 移除并返回集合中的一个随机元素
     *
     * @param key key
     */
     sPop( key:JString):object;

    /**
     * 移除并返回集合中的count个随机元素
     *
     * @param key   key
     * @param count count
     */
     sPop( key:JString,  count:number):JList<object>;

    /**
     * 将 value 元素从 key 集合移动到 destKey 集合
     *
     * @param key     key
     * @param value   value
     * @param destKey destKey
     */
    sMove( key:JString,  value:object,  destKey:JString):JBoolean;

    /**
     * 获取集合的成员数
     *
     * @param key key
     */
     sSize( key:JString):JLong;

    /**
     * 判断 member 元素是否是集合 key 的成员
     *
     * @param key    key
     * @param member member 元素
     */
    sIsMember( key:JString,  member:object):JBoolean;

    /**
     * 返回给定所有集合的交集
     *
     * @param key      key
     * @param otherKey otherKey
     */
    sIntersect( key:JString,  otherKey:JString):JSet<object>;

    /**
     * 返回给定所有集合的交集
     *
     * @param key       key
     * @param otherKeys otherKeys
     */
    sIntersect( key:JString, otherKeys:JCollection<JString> ):JSet<object>;

    /**
     * 返回给定所有集合的交集
     *
     * @param key       key
     * @param otherKeys otherKeys
     */
     sIntersect( key:JString, ... otherKeys:JString[]):JSet<object>;

    /**
     * 返回给定所有集合的交集并存储在 destination 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    sIntersectAndStore( key:JString,  otherKey:JString,  destKey:JString):JLong;

    /**
     * 返回给定所有集合的交集并存储在 destination 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
     sIntersectAndStore( key:JString,  otherKeys:JCollection<String>,  destKey:JString):JLong;

    /**
     * 返回给定所有集合的交集并存储在 destination 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
     sIntersectAndStore( key:JString,  otherKeys:String[],  destKey:String):JLong;

    /**
     * 返回所有给定集合的并集
     *
     * @param key      key
     * @param otherKey otherKey
     */
     sUnion( key:JString,  otherKey:JString):JSet<object>;

    /**
     * 返回所有给定集合的并集
     *
     * @param key       key
     * @param otherKeys otherKey
     */
    sUnion( key:JString, otherKeys:JCollection<String> ):JSet<object>;

    /**
     * 返回所有给定集合的并集
     *
     * @param key       key
     * @param otherKeys otherKeys
     */
     sUnion( key:JString, ... otherKeys:JString[]):JSet<object>;

    /**
     * 所有给定集合的并集存储在 destKey 集合中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
     sUnionAndStore( key:JString,  otherKey:JString,  destKey:JString):JLong;

    /**
     * 所有给定集合的并集存储在 destKey 集合中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
     sUnionAndStore( key:JString,  otherKeys:JCollection<JString>,  destKey:JString):JLong;

    /**
     * 所有给定集合的并集存储在 destKey 集合中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    sUnionAndStore( key:JString,  otherKeys:JString[],  destKey:JString):JLong;

    /**
     * 返回给定所有集合的差集
     *
     * @param key      key
     * @param otherKey otherKey
     */
     sDifference( key:JString,  otherKey:JString):JSet<object>;

    /**
     * 返回给定所有集合的差集
     *
     * @param key      key
     * @param otherKey otherKey
     */
    sDifference( key:JString,  otherKey:JCollection<String>):JSet<Object>;

    /**
     * 返回给定所有集合的差集
     *
     * @param key      key
     * @param otherKey otherKey
     */
     sDifference( key:JString, ... otherKey:JString[]):JSet<object>;

    /**
     * 返回给定所有集合的差集并存储在 destKey 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
     sDifferenceAndStore( key:JString,  otherKey:JString,  destKey:JString):JLong;

    /**
     * 返回给定所有集合的差集并存储在 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
     sDifferenceAndStore( key:JString,  otherKeys:JCollection<JString>,  destKey:JString):JLong;

    /**
     * 返回给定所有集合的差集并存储在 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
     sDifferenceAndStore( key:JString,  otherKeys:JString[],  destKey:JString):JLong;

    /**
     * 返回集合中的所有成员
     *
     * @param key key
     */
     sMembers( key:JString):JSet<object>;

    /**
     * 返回集合中一个或多个随机数
     *
     * @param key key
     */
     sRandomMember( key:JString):object;

    /**
     * 从集合中获取不同的随机元素
     *
     * @param key   key
     * @param count 数量
     */
     sDistinctRandomMembers( key:JString,  count:number):JSet<object>;

    /**
     * 返回集合中一个或多个随机数
     *
     * @param key   key
     * @param count 数量
     */
     sRandomMembers( key:JString,  count:number):JList<object>;

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
     zsAdd( key:JString,  value:object,  score:number):JBoolean;

    /**
     * 向有序集合添加一个或多个成员，或者更新已存在成员的分数
     *
     * @param key    key
     * @param values values
     */
     zsAdd( key:JString,  values:JCollection<ZSetValue>):JLong;

    /**
     * 向有序集合添加一个或多个成员，或者更新已存在成员的分数
     *
     * @param key    key
     * @param values values
     */
     zsAdd( key:JString,  values:ZSetValue[]):JLong;

    /**
     * 移除有序集合中的一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    public Long zsRemove(String key, Object... values) {
        return delegate.zsRemove(key, values);
    }

    /**
     * 移除有序集合中的一个或多个成员
     *
     * @param key    key
     * @param values values
     */
    public Long zsRemove(String key, Collection<Object> values) {
        return delegate.zsRemove(key, values.toArray());
    }

    /**
     * 有序集合中对指定成员的分数加上增量 increment
     *
     * @param key   key
     * @param value value
     * @param delta increment
     */
    public Double zsIncrementScore(String key, Object value, Number delta) {
        return delegate.zsIncrementScore(key, value, delta.doubleValue());
    }

    /**
     * 返回有序集合中指定成员的索引
     *
     * @param key key
     * @param o   o
     */
    public Long zsRank(String key, Object o) {
        return delegate.zsRank(key, o);
    }

    /**
     * 确定元素的索引值在排序集时得分从高到低
     *
     * @param key key
     * @param o   o
     */
    public Long zsReverseRank(String key, Object o) {
        return delegate.zsReverseRank(key, o);
    }

    /**
     * 从已排序集获取开始和结束之间的元素
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    public Set<Object> zsRange(String key, Number start, Number end) {
        return delegate.zsRange(key, start.longValue(), end.longValue());
    }

    /**
     * 从已排序集获取开始和结束之间的元素
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    public List<ZSetValue> zsRangeWithScores(String key, Number start, Number end) {
        return delegate.zsRangeWithScores(key, start.longValue(), end.longValue());
    }

    /**
     * 从排序后的集合中获取得分介于最小值和最大值之间的元素
     *
     * @param key key
     * @param min min
     * @param max max
     */
    public Set<Object> zsRangeByScore(String key, Number min, Number max) {
        return delegate.zsRangeByScore(key, min.doubleValue(), max.doubleValue());
    }

    /**
     * 从排序后的集合中获取得分介于最小值和最大值之间的元素
     *
     * @param key key
     * @param min min
     * @param max max
     */
    public List<ZSetValue> zsRangeByScoreWithScores(String key, Number min, Number max) {
        return delegate.zsRangeByScoreWithScores(key, min.doubleValue(), max.doubleValue());
    }

    /**
     * 获取从开始到结束的范围内的元素，其中得分在排序集的最小值和最大值之间
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    public Set<Object> zsRangeByScore(String key, Number min, Number max, Number offset, Number count) {
        return delegate.zsRangeByScore(key, min.doubleValue(), max.doubleValue(), offset.longValue(), count.longValue());
    }

    /**
     * 获取从开始到结束的范围内的元素，其中得分在排序集的最小值和最大值之间
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    public List<ZSetValue> zsRangeByScoreWithScores(String key, Number min, Number max, Number offset, Number count) {
        return delegate.zsRangeByScoreWithScores(key, min.doubleValue(), max.doubleValue(), offset.longValue(), count.longValue());
    }

    /**
     * 获取范围从开始到结束的元素，从高到低排序的集合
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    public Set<Object> zsReverseRange(String key, Number start, Number end) {
        return delegate.zsReverseRange(key, start.longValue(), end.longValue());
    }

    /**
     * 获取范围从开始到结束的元素，从高到低排序的集合
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    public List<ZSetValue> zsReverseRangeWithScores(String key, Number start, Number end) {
        return delegate.zsReverseRangeWithScores(key, start.longValue(), end.longValue());
    }

    /**
     * 获取得分介于最小值和最大值之间的元素，从高到低排序
     *
     * @param key key
     * @param min min
     * @param max max
     */
    public Set<Object> zsReverseRangeByScore(String key, Number min, Number max) {
        return delegate.zsReverseRangeByScore(key, min.doubleValue(), max.doubleValue());
    }

    /**
     * 获取得分介于最小值和最大值之间的元素，从高到低排序
     *
     * @param key key
     * @param min min
     * @param max max
     */
    public List<ZSetValue> zsReverseRangeByScoreWithScores(String key, Number min, Number max) {
        return delegate.zsReverseRangeByScoreWithScores(key, min.doubleValue(), max.doubleValue());
    }

    /**
     * 获取从开始到结束的范围内的元素，其中得分在最小和最大之间，排序集高 -> 低
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    public Set<Object> zsReverseRangeByScore(String key, Number min, Number max, Number offset, Number count) {
        return delegate.zsReverseRangeByScore(key, min.doubleValue(), max.doubleValue(), offset.longValue(), count.longValue());
    }

    /**
     * 获取从开始到结束的范围内的元素，其中得分在最小和最大之间，排序集高 -> 低
     *
     * @param key    key
     * @param min    min
     * @param max    max
     * @param offset offset
     * @param count  count
     */
    public List<ZSetValue> zsReverseRangeByScoreWithScores(String key, Number min, Number max, Number offset, Number count) {
        return delegate.zsReverseRangeByScoreWithScores(key, min.doubleValue(), max.doubleValue(), offset.longValue(), count.longValue());
    }

    /**
     * 用最小值和最大值之间的值计算排序集中的元素数
     *
     * @param key key
     * @param min min
     * @param max max
     */
    public Long zsCount(String key, Number min, Number max) {
        return delegate.zsCount(key, min.doubleValue(), max.doubleValue());
    }

    /**
     * 返回按给定键存储的已排序集的元素数
     *
     * @param key key
     */
    public Long zsSize(String key) {
        return delegate.zsSize(key);
    }

    /**
     * 获取有序集合的成员数
     *
     * @param key key
     */
    public Long zsZCard(String key) {
        return delegate.zsZCard(key);
    }

    /**
     * 返回有序集中，成员的分数值
     *
     * @param key key
     * @param o   o
     */
    public Double zsScore(String key, Object o) {
        return delegate.zsScore(key, o);
    }

    /**
     * 从按键排序的集合中删除开始和结束之间范围内的元素
     *
     * @param key   key
     * @param start start
     * @param end   end
     */
    public Long zsRemoveRange(String key, Number start, Number end) {
        return delegate.zsRemoveRange(key, start.longValue(), end.longValue());
    }

    /**
     * 从按键排序的集合中删除得分在min和max之间的元素
     *
     * @param key key
     * @param min min
     * @param max max
     */
    public Long zsRemoveRangeByScore(String key, Number min, Number max) {
        return delegate.zsRemoveRangeByScore(key, min.doubleValue(), max.doubleValue());
    }

    /**
     * 计算给定的一个或多个有序集的并集，并存储在新的 destKey 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    public Long zsUnionAndStore(String key, String otherKey, String destKey) {
        return delegate.zsUnionAndStore(key, otherKey, destKey);
    }

    /**
     * 计算给定的一个或多个有序集的并集，并存储在新的 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    public Long zsUnionAndStore(String key, Collection<String> otherKeys, String destKey) {
        return delegate.zsUnionAndStore(key, otherKeys, destKey);
    }

    /**
     * 计算给定的一个或多个有序集的并集，并存储在新的 destKey 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    public Long zsUnionAndStore(String key, String[] otherKeys, String destKey) {
        return delegate.zsUnionAndStore(key, Arrays.asList(otherKeys), destKey);
    }

    /**
     * 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中
     *
     * @param key      key
     * @param otherKey otherKey
     * @param destKey  destKey
     */
    public Long zsIntersectAndStore(String key, String otherKey, String destKey) {
        return delegate.zsIntersectAndStore(key, otherKey, destKey);
    }

    /**
     * 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    public Long zsIntersectAndStore(String key, Collection<String> otherKeys, String destKey) {
        return delegate.zsIntersectAndStore(key, otherKeys, destKey);
    }

    /**
     * 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中
     *
     * @param key       key
     * @param otherKeys otherKeys
     * @param destKey   destKey
     */
    public Long zsIntersectAndStore(String key, String[] otherKeys, String destKey) {
        return delegate.zsIntersectAndStore(key, Arrays.asList(otherKeys), destKey);
    }

    /**
     * 迭代有序集合中的元素（包括元素成员和元素分值）
     *
     * @param key      key
     * @param count    count
     * @param pattern  pattern
     * @param callback 数据迭代回调函数
     */
    public void zsScan(String key, Number count, String pattern, Value callback) throws IOException {
        delegate.zsScan(key, count, pattern, getScanCallback(callback));
    }

    /**
     * 通过字典区间返回有序集合的成员
     *
     * @param key       key
     * @param minValue  minValue
     * @param equalsMin equalsMin
     * @param maxValue  maxValue
     * @param equalsMax equalsMax
     */
    public Set<Object> zsRangeByLex(String key, Object minValue, boolean equalsMin, Object maxValue, boolean equalsMax) {
        return delegate.zsRangeByLex(key, minValue, equalsMin, maxValue, equalsMax);
    }

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
    public Set<Object> zsRangeByLex(String key, Object minValue, boolean equalsMin, Object maxValue, boolean equalsMax, Number count, Number offset) {
        return delegate.zsRangeByLex(key, minValue, equalsMin, maxValue, equalsMax, count, offset);
    }

    // --------------------------------------------------------------------------------------------
    // HyperLogLog  操作
    // --------------------------------------------------------------------------------------------

    /**
     * 添加指定元素到 HyperLogLog 中
     *
     * @param key    key
     * @param values values
     */
    public Long hyperLogLogAdd(String key, Object... values) {
        return delegate.hyperLogLogAdd(key, values);
    }

    /**
     * 添加指定元素到 HyperLogLog 中
     *
     * @param key    key
     * @param values values
     */
    public Long hyperLogLogAdd(String key, Collection<Object> values) {
        return delegate.hyperLogLogAdd(key, values.toArray());
    }

    /**
     * 获取键中元素的当前数目
     *
     * @param keys keys
     */
    public Long hyperLogLogSize(String... keys) {
        return delegate.hyperLogLogSize(keys);
    }

    /**
     * 获取键中元素的当前数目
     *
     * @param keys keys
     */
    public Long hyperLogLogSize(Collection<String> keys) {
        return delegate.hyperLogLogSize(keys.toArray(new String[0]));
    }

    /**
     * 将多个 HyperLogLog 合并为一个 HyperLogLog
     *
     * @param destination destination
     * @param sourceKeys  sourceKeys
     */
    public Long hyperLogLogUnion(String destination, String... sourceKeys) {
        return delegate.hyperLogLogUnion(destination, sourceKeys);
    }

    /**
     * 将多个 HyperLogLog 合并为一个 HyperLogLog
     *
     * @param destination destination
     * @param sourceKeys  sourceKeys
     */
    public Long hyperLogLogUnion(String destination, Collection<String> sourceKeys) {
        return delegate.hyperLogLogUnion(destination, sourceKeys.toArray(new String[]{}));
    }

    /**
     * 删除给定的密钥
     *
     * @param key key
     */
    public void hyperLogLogDelete(String key) {
        delegate.hyperLogLogDelete(key);
    }

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
    public Long geoAdd(String key, Number x, Number y, Object member) {
        return delegate.geoAdd(key, x, y, member);
    }

    /**
     * 将指定成员名的点添加到键上
     *
     * @param key        key
     * @param pointValue pointValue
     */
    public Long geoAdd(String key, PointValue pointValue) {
        return delegate.geoAdd(key, pointValue);
    }

    /**
     * 将指定成员名的点添加到键上
     *
     * @param key         key
     * @param pointValues pointValues
     */
    public Long geoAdd(String key, Collection<PointValue> pointValues) {
        return delegate.geoAdd(key, pointValues);
    }

    /**
     * 将指定成员名的点添加到键上
     *
     * @param key         key
     * @param pointValues pointValues
     */
    public Long geoAdd(String key, PointValue[] pointValues) {
        return delegate.geoAdd(key, pointValues);
    }

    /**
     * 返回两个给定位置之间的距离
     *
     * @param key     key
     * @param member1 member1
     * @param member2 member2
     */
    public Distance geoDistance(String key, Object member1, Object member2) {
        return delegate.geoDistance(key, member1, member2);
    }

    /**
     * 获取一个或多个成员位置的GeoHash表示
     *
     * @param key     key
     * @param members members
     */
    public List<String> geoHash(String key, Object... members) {
        return delegate.geoHash(key, members);
    }

    /**
     * 获取一个或多个成员位置的GeoHash表示
     *
     * @param key     key
     * @param members members
     */
    public List<String> geoHash(String key, Collection<Object> members) {
        return delegate.geoHash(key, members.toArray());
    }

    /**
     * 获取一个或多个成员的位置的点表示
     *
     * @param key     key
     * @param members members
     */
    public List<Point> geoPosition(String key, Object... members) {
        return delegate.geoPosition(key, members);
    }

    /**
     * 获取一个或多个成员的位置的点表示
     *
     * @param key     key
     * @param members members
     */
    public List<Point> geoPosition(String key, Collection<Object> members) {
        return delegate.geoPosition(key, members.toArray());
    }

    // --------------------------------------------------------------------------------------------
    // 其它 操作
    // --------------------------------------------------------------------------------------------

    public RedisInfo getInfo() {
        return delegate.getInfo();
    }

    public RedisDataSourceStatus getStatus() {
        return delegate.getStatus();
    }
}