interface JMapEntry<K, V> extends JObject {
    java_util_Map_Entry: "java.util.Map.Entry";

    // boolean equals(Object o)
    // 比较指定对象与此项的相等性。
    // K getKey()
    // 返回与此项对应的键。
    // V getValue()
    // 返回与此项对应的值。
    // int hashCode()
    // 返回此映射项的哈希码值。
    // V setValue(V value)
    // 用指定的值替换与此项对应的值（可选操作）。
}

/**
 * java.util.Map 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * @see Interop
 */
interface JMap<K, V> extends JObject {
    java_util_Map: "java.util.Map";

    // void clear()
    // 从此映射中移除所有映射关系（可选操作）。
    // boolean containsKey(Object key)
    // 如果此映射包含指定键的映射关系，则返回 true。
    // boolean containsValue(Object value)
    // 如果此映射为指定值映射一个或多个键，则返回 true。
    // Set<Map.Entry<K,V>> entrySet()
    // 返回此映射中包含的映射关系的 set 视图。
    // boolean equals(Object o)
    // 比较指定的对象与此映射是否相等。
    // V get(Object key)
    // 返回此映射中映射到指定键的值。
    // int hashCode()
    // 返回此映射的哈希码值。
    // boolean isEmpty()
    // 如果此映射未包含键-值映射关系，则返回 true。
    // Set<K> keySet()
    // 返回此映射中包含的键的 set 视图。
    // V put(K key, V value)
    // 将指定的值与此映射中的指定键相关联（可选操作）。
    // void putAll(Map<? extends K,? extends V> t)
    // 从指定映射中将所有映射关系复制到此映射中（可选操作）。
    // V remove(Object key)
    // 如果存在此键的映射关系，则将其从映射中移除（可选操作）。
    // int size()
    // 返回此映射中的键-值映射关系数。
    // Collection<V> values()
    // 返回此映射中包含的值的 collection 视图。
}