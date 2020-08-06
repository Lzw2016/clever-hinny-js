interface JIterable<T> extends JObject {
    java_util_Iterable: "java.util.Iterable";

    // Iterator<T> iterator()
    // 返回一个在一组 T 类型的元素上进行迭代的迭代器。
}

interface JIterator<E> extends JObject {
    java_util_Iterator: "java.util.Iterator";

    // boolean hasNext()
    // 如果仍有元素可以迭代，则返回 true。
    // E next()
    // 返回迭代的下一个元素。
    // void remove()
    // 从迭代器指向的集合中移除迭代器返回的最后一个元素（可选操作）。
}

interface JCollection<E> extends JObject {
    java_util_Collection: "java.util.Collection";

    // boolean add(E o)
    // 确保此 collection 包含指定的元素（可选操作）。
    // boolean addAll(Collection<? extends E> c)
    // 将指定 collection 中的所有元素都添加到此 collection 中（可选操作）。
    // void clear()
    // 移除此 collection 中的所有元素（可选操作）。
    // boolean contains(Object o)
    // 如果此 collection 包含指定的元素，则返回 true。
    // boolean containsAll(Collection<?> c)
    // 如果此 collection 包含指定 collection 中的所有元素，则返回 true。
    // boolean equals(Object o)
    // 比较此 collection 与指定对象是否相等。
    // int hashCode()
    // 返回此 collection 的哈希码值。
    // boolean isEmpty()
    // 如果此 collection 不包含元素，则返回 true。
    // Iterator<E> iterator()
    // 返回在此 collection 的元素上进行迭代的迭代器。
    // boolean remove(Object o)
    // 从此 collection 中移除指定元素的单个实例，如果存在的话（可选操作）。
    // boolean removeAll(Collection<?> c)
    // 移除此 collection 中那些也包含在指定 collection 中的所有元素（可选操作）。
    // boolean retainAll(Collection<?> c)
    // 仅保留此 collection 中那些也包含在指定 collection 的元素（可选操作）。
    // int size()
    // 返回此 collection 中的元素数。
    // Object[] toArray()
    // 返回包含此 collection 中所有元素的数组。
    // <T> T[]
    // toArray(T[] a)
    // 返回包含此 collection 中所有元素的数组；返回数组的运行时类型与指定数组的运行时类型相同。
}