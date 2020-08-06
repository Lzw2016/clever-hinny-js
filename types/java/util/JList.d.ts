/**
 * java.util.List 类型
 */
interface JList<T> extends JObject {
    java_util_List: "java.util.List";

    [index: number]: T;

    // boolean add(E o)
    // 向列表的尾部追加指定的元素（可选操作）。
    // void add(int index, E element)
    // 在列表的指定位置插入指定元素（可选操作）。
    // boolean addAll(Collection<? extends E> c)
    // 追加指定 collection 中的所有元素到此列表的结尾，顺序是指定 collection 的迭代器返回这些元素的顺序（可选操作）。
    // boolean addAll(int index, Collection<? extends E> c)
    // 将指定 collection 中的所有元素都插入到列表中的指定位置（可选操作）。
    // void clear()
    // 从列表中移除所有元素（可选操作）。
    // boolean contains(Object o)
    // 如果列表包含指定的元素，则返回 true。
    // boolean containsAll(Collection<?> c)
    // 如果列表包含指定 collection 的所有元素，则返回 true。
    // boolean equals(Object o)
    // 比较指定的对象与列表是否相等。
    // E get(int index)
    // 返回列表中指定位置的元素。
    // int hashCode()
    // 返回列表的哈希码值。
    // int indexOf(Object o)
    // 返回列表中首次出现指定元素的索引，如果列表不包含此元素，则返回 -1。
    // boolean isEmpty()
    // 如果列表不包含元素，则返回 true。
    // Iterator<E> iterator()
    // 返回以正确顺序在列表的元素上进行迭代的迭代器。
    // int lastIndexOf(Object o)
    // 返回列表中最后出现指定元素的索引，如果列表不包含此元素，则返回 -1。
    // ListIterator<E> listIterator()
    // 返回列表中元素的列表迭代器（以正确的顺序）。
    // ListIterator<E> listIterator(int index)
    // 返回列表中元素的列表迭代器（以正确的顺序），从列表的指定位置开始。
    // E remove(int index)
    // 移除列表中指定位置的元素（可选操作）。
    // boolean remove(Object o)
    // 移除列表中出现的首个指定元素（可选操作）。
    // boolean removeAll(Collection<?> c)
    // 从列表中移除指定 collection 中包含的所有元素（可选操作）。
    // boolean retainAll(Collection<?> c)
    // 仅在列表中保留指定 collection 中所包含的元素（可选操作）。
    // E set(int index, E element)
    // 用指定元素替换列表中指定位置的元素（可选操作）。
    // int size()
    // 返回列表中的元素数。
    // List<E> subList(int fromIndex, int toIndex)
    // 返回列表中指定的 fromIndex（包括 ）和 toIndex（不包括）之间的部分视图。
    // Object[] toArray()
    // 返回以正确顺序包含列表中的所有元素的数组。
    // <T> T[]
    // toArray(T[] a)
    // 返回以正确顺序包含列表中所有元素的数组；返回数组的运行时类型是指定数组的运行时类型。
}