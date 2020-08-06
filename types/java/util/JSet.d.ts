/**
 * java.util.Set 类型，不要在JavaScript/TypeScript环境中创建该类型对象<br />
 * @see Interop
 */
interface JSet<E> extends JObject {
    java_util_Set: "java.util.Set";

    // boolean add(E o)
    // 如果 set 中尚未存在指定的元素，则添加此元素（可选操作）。
    // boolean addAll(Collection<? extends E> c)
    // 如果 set 中没有指定 collection 中的所有元素，则将其添加到此 set 中（可选操作）。
    // void clear()
    // 移除 set 中的所有元素（可选操作）。
    // boolean contains(Object o)
    // 如果 set 包含指定的元素，则返回 true。
    // boolean containsAll(Collection<?> c)
    // 如果此 set 包含指定 collection 的所有元素，则返回 true。
    // boolean equals(Object o)
    // 比较指定对象与此 set 的相等性。
    // int hashCode()
    // 返回 set 的哈希码值。
    // boolean isEmpty()
    // 如果 set 不包含元素，则返回 true。
    // Iterator<E> iterator()
    // 返回在此 set 中的元素上进行迭代的迭代器。
    // boolean remove(Object o)
    // 如果 set 中存在指定的元素，则将其移除（可选操作）。
    // boolean removeAll(Collection<?> c)
    // 移除 set 中那些包含在指定 collection 中的元素（可选操作）。
    // boolean retainAll(Collection<?> c)
    // 仅保留 set 中那些包含在指定 collection 中的元素（可选操作）。
    // int size()
    // 返回 set 中的元素数（其容量）。
    // Object[] toArray()
    // 返回一个包含 set 中所有元素的数组。
    // <T> T[]
    // toArray(T[] a)
    // 返回一个包含 set 中所有元素的数组；返回数组的运行时类型是指定数组的类型。
}