export interface StringUtils {
    // Other
    //----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 调用对象的toString方法，如果对象为空返回默认值
     *
     * @param object     需要toString的对象
     * @param defaultStr 对象为空时返回的默认值
     * @return 返回对象的toString方法结果
     */
    objectToString(object: any, defaultStr: JString): JString

    /**
     * 除去html标签
     *
     * @param htmlStr 含有html标签的字符串
     * @return 网页文本内容
     */
    delHTMLTag(htmlStr: JString): JString

// Empty checks
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 是否是空字符串(“”或null)
     * <pre>
     *  .isEmpty(null)      = true
     *  .isEmpty("")        = true
     *  .isEmpty(" ")       = false
     *  .isEmpty("bob")     = false
     *  .isEmpty("  bob  ") = false
     * </pre>
     */
    isEmpty(cs: JString): JBoolean

    /**
     * 是否是非空字符串(“”或null)
     * <pre>
     *  .isNotEmpty(null)      = false
     *  .isNotEmpty("")        = false
     *  .isNotEmpty(" ")       = true
     *  .isNotEmpty("bob")     = true
     *  .isNotEmpty("  bob  ") = true
     * </pre>
     */
    isNotEmpty(cs: JString): JBoolean

    /**
     * 是否存在空字符串(“”或null)
     * <pre>
     *  .isAnyEmpty((String) null)    = true
     *  .isAnyEmpty((String[]) null)  = false
     *  .isAnyEmpty(null, "foo")      = true
     *  .isAnyEmpty("", "bar")        = true
     *  .isAnyEmpty("bob", "")        = true
     *  .isAnyEmpty("  bob  ", null)  = true
     *  .isAnyEmpty(" ", "bar")       = false
     *  .isAnyEmpty("foo", "bar")     = false
     *  .isAnyEmpty(new String[]{})   = false
     *  .isAnyEmpty(new String[]{""}) = true
     * </pre>
     */
    isAnyEmpty(css: JString[]): JBoolean

    /**
     * 是否存在非空字符串(“”或null)
     * <pre>
     *  .isNoneEmpty((String) null)    = false
     *  .isNoneEmpty((String[]) null)  = true
     *  .isNoneEmpty(null, "foo")      = false
     *  .isNoneEmpty("", "bar")        = false
     *  .isNoneEmpty("bob", "")        = false
     *  .isNoneEmpty("  bob  ", null)  = false
     *  .isNoneEmpty(new String[] {})  = true
     *  .isNoneEmpty(new String[]{""}) = false
     *  .isNoneEmpty(" ", "bar")       = true
     *  .isNoneEmpty("foo", "bar")     = true
     * </pre>
     */
    isNoneEmpty(css: JString[]): JBoolean

    /**
     * 是否所有字符串都是空字符串(“”或null)
     * <pre>
     *  .isAllEmpty(null)             = true
     *  .isAllEmpty(null, "")         = true
     *  .isAllEmpty(new String[] {})  = true
     *  .isAllEmpty(null, "foo")      = false
     *  .isAllEmpty("", "bar")        = false
     *  .isAllEmpty("bob", "")        = false
     *  .isAllEmpty("  bob  ", null)  = false
     *  .isAllEmpty(" ", "bar")       = false
     *  .isAllEmpty("foo", "bar")     = false
     * </pre>
     */
    isAllEmpty(css: JString[]): JBoolean

    /**
     * 是否是空字符串(“”、“ ”或null)
     * <pre>
     *  .isBlank(null)      = true
     *  .isBlank("")        = true
     *  .isBlank(" ")       = true
     *  .isBlank("bob")     = false
     *  .isBlank("  bob  ") = false
     * </pre>
     */
    isBlank(cs: JString): JBoolean

    /**
     * 是否是非空字符串(“”、“ ”或null)
     * <pre>
     *  .isNotBlank(null)      = false
     *  .isNotBlank("")        = false
     *  .isNotBlank(" ")       = false
     *  .isNotBlank("bob")     = true
     *  .isNotBlank("  bob  ") = true
     * </pre>
     */
    isNotBlank(cs: JString): JBoolean

    /**
     * 是否存在空字符串(“”、“ ”或null)
     * <pre>
     *  .isAnyBlank((String) null)    = true
     *  .isAnyBlank((String[]) null)  = false
     *  .isAnyBlank(null, "foo")      = true
     *  .isAnyBlank(null, null)       = true
     *  .isAnyBlank("", "bar")        = true
     *  .isAnyBlank("bob", "")        = true
     *  .isAnyBlank("  bob  ", null)  = true
     *  .isAnyBlank(" ", "bar")       = true
     *  .isAnyBlank(new String[] {})  = false
     *  .isAnyBlank(new String[]{""}) = true
     *  .isAnyBlank("foo", "bar")     = false
     * </pre>
     */
    isAnyBlank(css: JString[]): JBoolean

    /**
     * 是否存在非空字符串(“”、“ ”或null)
     * <pre>
     *  .isNoneBlank((String) null)    = false
     *  .isNoneBlank((String[]) null)  = true
     *  .isNoneBlank(null, "foo")      = false
     *  .isNoneBlank(null, null)       = false
     *  .isNoneBlank("", "bar")        = false
     *  .isNoneBlank("bob", "")        = false
     *  .isNoneBlank("  bob  ", null)  = false
     *  .isNoneBlank(" ", "bar")       = false
     *  .isNoneBlank(new String[] {})  = true
     *  .isNoneBlank(new String[]{""}) = false
     *  .isNoneBlank("foo", "bar")     = true
     * </pre>
     */
    isNoneBlank(css: JString[]): JBoolean

    /**
     * 是否所有字符串都是空字符串(“”、“ ”或null)
     * <pre>
     *  .isAllBlank(null)             = true
     *  .isAllBlank(null, "foo")      = false
     *  .isAllBlank(null, null)       = true
     *  .isAllBlank("", "bar")        = false
     *  .isAllBlank("bob", "")        = false
     *  .isAllBlank("  bob  ", null)  = false
     *  .isAllBlank(" ", "bar")       = false
     *  .isAllBlank("foo", "bar")     = false
     *  .isAllBlank(new String[] {})  = true
     * </pre>
     */
    isAllBlank(css: JString[]): JBoolean

// Trim
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .trim(null)          = null
     *  .trim("")            = ""
     *  .trim("     ")       = ""
     *  .trim("abc")         = "abc"
     *  .trim("    abc    ") = "abc"
     * </pre>
     */
    trim(str: JString): JString

    /**
     * <pre>
     *  .trimToNull(null)          = null
     *  .trimToNull("")            = null
     *  .trimToNull("     ")       = null
     *  .trimToNull("abc")         = "abc"
     *  .trimToNull("    abc    ") = "abc"
     * </pre>
     */
    trimToNull(str: JString): JString

    /**
     * <pre>
     *  .trimToEmpty(null)          = ""
     *  .trimToEmpty("")            = ""
     *  .trimToEmpty("     ")       = ""
     *  .trimToEmpty("abc")         = "abc"
     *  .trimToEmpty("    abc    ") = "abc"
     * </pre>
     */
    trimToEmpty(str: JString): JString

    /**
     * 截断字符串
     * <pre>
     *  .truncate(null, 0)       = null
     *  .truncate(null, 2)       = null
     *  .truncate("", 4)         = ""
     *  .truncate("abcdefg", 4)  = "abcd"
     *  .truncate("abcdefg", 6)  = "abcdef"
     *  .truncate("abcdefg", 7)  = "abcdefg"
     *  .truncate("abcdefg", 8)  = "abcdefg"
     *  .truncate("abcdefg", -1) = throws an IllegalArgumentException
     * </pre>
     */
    truncate(str: JString, maxWidth: JInt): JString

    /**
     * 截断字符串
     *
     * @param str      被截断的字符串
     * @param offset   起始位置
     * @param maxWidth 结果字符串的最大长度
     */
    truncate(str: JString, offset: JInt, maxWidth: JInt): JString

// Stripping
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 从字符串的开始和结尾删除空白
     * <pre>
     *  .strip(null)     = null
     *  .strip("")       = ""
     *  .strip("   ")    = ""
     *  .strip("abc")    = "abc"
     *  .strip("  abc")  = "abc"
     *  .strip("abc  ")  = "abc"
     *  .strip(" abc ")  = "abc"
     *  .strip(" ab c ") = "ab c"
     * </pre>
     */
    strip(str: JString): JString

    /**
     * 从字符串的开始和结尾去除空白，如果字符串在strip之后为空（“”），则返回null
     * <pre>
     *  .stripToNull(null)     = null
     *  .stripToNull("")       = null
     *  .stripToNull("   ")    = null
     *  .stripToNull("abc")    = "abc"
     *  .stripToNull("  abc")  = "abc"
     *  .stripToNull("abc  ")  = "abc"
     *  .stripToNull(" abc ")  = "abc"
     *  .stripToNull(" ab c ") = "ab c"
     * </pre>
     */
    stripToNull(str: JString): JString

    /**
     * 从字符串的开始和结尾去除空白，如果字符串在strip之后为null，则返回“”
     * <pre>
     *  .stripToEmpty(null)     = ""
     *  .stripToEmpty("")       = ""
     *  .stripToEmpty("   ")    = ""
     *  .stripToEmpty("abc")    = "abc"
     *  .stripToEmpty("  abc")  = "abc"
     *  .stripToEmpty("abc  ")  = "abc"
     *  .stripToEmpty(" abc ")  = "abc"
     *  .stripToEmpty(" ab c ") = "ab c"
     * </pre>
     */
    stripToEmpty(str: JString): JString

    /**
     * <pre>
     *  .strip(null, *)          = null
     *  .strip("", *)            = ""
     *  .strip("abc", null)      = "abc"
     *  .strip("  abc", null)    = "abc"
     *  .strip("abc  ", null)    = "abc"
     *  .strip(" abc ", null)    = "abc"
     *  .strip("  abcyx", "xyz") = "  abc"
     * </pre>
     *
     * @param str        源字符串
     * @param stripChars 要删除的字符，null被视为空白
     */
    strip(str: JString, stripChars: JString): JString

    /**
     * 删除开始的空白字符
     * <pre>
     *  .stripStart(null, *)          = null
     *  .stripStart("", *)            = ""
     *  .stripStart("abc", "")        = "abc"
     *  .stripStart("abc", null)      = "abc"
     *  .stripStart("  abc", null)    = "abc"
     *  .stripStart("abc  ", null)    = "abc  "
     *  .stripStart(" abc ", null)    = "abc "
     *  .stripStart("yxabc  ", "xyz") = "abc  "
     * </pre>
     *
     * @param str        源字符串
     * @param stripChars 要删除的字符，null被视为空白
     */
    stripStart(str: JString, stripChars: JString): JString

    /**
     * 删除结束的空白字符
     * <pre>
     *  .stripEnd(null, *)          = null
     *  .stripEnd("", *)            = ""
     *  .stripEnd("abc", "")        = "abc"
     *  .stripEnd("abc", null)      = "abc"
     *  .stripEnd("  abc", null)    = "  abc"
     *  .stripEnd("abc  ", null)    = "abc"
     *  .stripEnd(" abc ", null)    = " abc"
     *  .stripEnd("  abcyx", "xyz") = "  abc"
     *  .stripEnd("120.00", ".0")   = "12"
     * </pre>
     *
     * @param str        源字符串
     * @param stripChars 要删除的字符，null被视为空白
     */
    stripEnd(str: JString, stripChars: JString): JString

// StripAll
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .stripAll(null)             = null
     *  .stripAll([])               = []
     *  .stripAll(["abc", "  abc"]) = ["abc", "abc"]
     *  .stripAll(["abc  ", null])  = ["abc", null]
     * </pre>
     */
    stripAll(strs: JString[]): JString[]

    /**
     * <pre>
     *  .stripAll(null, *)                = null
     *  .stripAll([], *)                  = []
     *  .stripAll(["abc", "  abc"], null) = ["abc", "abc"]
     *  .stripAll(["abc  ", null], null)  = ["abc", null]
     *  .stripAll(["abc  ", null], "yz")  = ["abc  ", null]
     *  .stripAll(["yabcz", null], "yz")  = ["abc", null]
     * </pre>
     *
     * @param strs       源字符串数组
     * @param stripChars 要删除的字符，null被视为空白
     */
    stripAll(strs: JString[], stripChars: JString): JString[]

    /**
     * 从字符串中删除音调符号。例如，“à”将被“a”替换。
     * <pre>
     *  .stripAccents(null)         = null
     *  .stripAccents("")           = ""
     *  .stripAccents("control")    = "control"
     *  .stripAccents("éclair")     = "eclair"
     * </pre>
     */
    stripAccents(input: JString): JString

// Equals
//-----------------------------------------------------------------------

    /**
     * <pre>
     *  .equals(null, null)   = true
     *  .equals(null, "abc")  = false
     *  .equals("abc", null)  = false
     *  .equals("abc", "abc") = true
     *  .equals("abc", "ABC") = false
     * </pre>
     */
    equals(cs1: JCharSequence, cs2: JCharSequence): JBoolean

    /**
     * <pre>
     *  .equalsIgnoreCase(null, null)   = true
     *  .equalsIgnoreCase(null, "abc")  = false
     *  .equalsIgnoreCase("abc", null)  = false
     *  .equalsIgnoreCase("abc", "abc") = true
     *  .equalsIgnoreCase("abc", "ABC") = true
     * </pre>
     */
    equalsIgnoreCase(str1: JCharSequence, str2: JCharSequence): JBoolean

// Compare
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .compare(null, null)   = 0
     *  .compare(null , "a")   < 0
     *  .compare("a", null)    > 0
     *  .compare("abc", "abc") = 0
     *  .compare("a", "b")     < 0
     *  .compare("b", "a")     > 0
     *  .compare("a", "B")     > 0
     *  .compare("ab", "abc")  < 0
     * </pre>
     */
    compare(str1: JString, str2: JString): JInt

    /**
     * <pre>
     *  .compare(null, null, *)     = 0
     *  .compare(null , "a", true)  < 0
     *  .compare(null , "a", false) > 0
     *  .compare("a", null, true)   > 0
     *  .compare("a", null, false)  < 0
     *  .compare("abc", "abc", *)   = 0
     *  .compare("a", "b", *)       < 0
     *  .compare("b", "a", *)       > 0
     *  .compare("a", "B", *)       > 0
     *  .compare("ab", "abc", *)    < 0
     * </pre>
     *
     * @param nullIsLess 是否是空值小于非空值
     * @param str1
     * @param str2
     */
    compare(str1: JString, str2: JString, nullIsLess: JBoolean): JInt

    /**
     * <pre>
     *  .compareIgnoreCase(null, null)   = 0
     *  .compareIgnoreCase(null , "a")   < 0
     *  .compareIgnoreCase("a", null)    > 0
     *  .compareIgnoreCase("abc", "abc") = 0
     *  .compareIgnoreCase("abc", "ABC") = 0
     *  .compareIgnoreCase("a", "b")     < 0
     *  .compareIgnoreCase("b", "a")     > 0
     *  .compareIgnoreCase("a", "B")     < 0
     *  .compareIgnoreCase("A", "b")     < 0
     *  .compareIgnoreCase("ab", "ABC")  < 0
     * </pre>
     */
    compareIgnoreCase(str1: JString, str2: JString): JInt

    /**
     * <pre>
     *  .compareIgnoreCase(null, null, *)     = 0
     *  .compareIgnoreCase(null , "a", true)  < 0
     *  .compareIgnoreCase(null , "a", false) > 0
     *  .compareIgnoreCase("a", null, true)   > 0
     *  .compareIgnoreCase("a", null, false)  < 0
     *  .compareIgnoreCase("abc", "abc", *)   = 0
     *  .compareIgnoreCase("abc", "ABC", *)   = 0
     *  .compareIgnoreCase("a", "b", *)       < 0
     *  .compareIgnoreCase("b", "a", *)       > 0
     *  .compareIgnoreCase("a", "B", *)       < 0
     *  .compareIgnoreCase("A", "b", *)       < 0
     *  .compareIgnoreCase("ab", "abc", *)    < 0
     * </pre>
     *
     * @param nullIsLess 是否是空值小于非空值
     * @param str1
     * @param str2
     */
    compareIgnoreCase(str1: JString, str2: JString, nullIsLess: JBoolean): JInt

    /**
     * 将给定字符串与搜索字符串的JCharSequences vararg进行比较，如果字符串等于任何搜索字符串，则返回true
     * <pre>
     *  .equalsAny(null, (JCharSequence[]) null) = false
     *  .equalsAny(null, null, null)    = true
     *  .equalsAny(null, "abc", "def")  = false
     *  .equalsAny("abc", null, "def")  = false
     *  .equalsAny("abc", "abc", "def") = true
     *  .equalsAny("abc", "ABC", "DEF") = false
     * </pre>
     */
    equalsAny(string: JCharSequence, searchStrings: JCharSequence[]): JBoolean

    /**
     * 将给定字符串与搜索字符串的JCharSequences vararg进行比较，如果字符串等于任何搜索字符串，则返回true。忽略大小写
     * <pre>
     *  .equalsAnyIgnoreCase(null, (JCharSequence[]) null) = false
     *  .equalsAnyIgnoreCase(null, null, null)    = true
     *  .equalsAnyIgnoreCase(null, "abc", "def")  = false
     *  .equalsAnyIgnoreCase("abc", null, "def")  = false
     *  .equalsAnyIgnoreCase("abc", "abc", "def") = true
     *  .equalsAnyIgnoreCase("abc", "ABC", "DEF") = true
     * </pre>
     */
    equalsAnyIgnoreCase(string: JCharSequence, searchStrings: JCharSequence[]): JBoolean

// IndexOf
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .indexOf(null, *)         = -1
     *  .indexOf("", *)           = -1
     *  .indexOf("aabaabaa", 'a') = 0
     *  .indexOf("aabaabaa", 'b') = 2
     * </pre>
     */
    indexOf(seq: JCharSequence, searchChar: JInt): JInt

    /**
     * <pre>
     *  .indexOf(null, *, *)          = -1
     *  .indexOf("", *, *)            = -1
     *  .indexOf("aabaabaa", 'b', 0)  = 2
     *  .indexOf("aabaabaa", 'b', 3)  = 5
     *  .indexOf("aabaabaa", 'b', 9)  = -1
     *  .indexOf("aabaabaa", 'b', -1) = 2
     * </pre>
     */
    indexOf(seq: JCharSequence, searchChar: JInt, startPos: JInt): JInt

    /**
     * <pre>
     *  .indexOf(null, *)          = -1
     *  .indexOf(*, null)          = -1
     *  .indexOf("", "")           = 0
     *  .indexOf("", *)            = -1 (except when * = "")
     *  .indexOf("aabaabaa", "a")  = 0
     *  .indexOf("aabaabaa", "b")  = 2
     *  .indexOf("aabaabaa", "ab") = 1
     *  .indexOf("aabaabaa", "")   = 0
     * </pre>
     */
    indexOf(seq: JCharSequence, searchSeq: JCharSequence): JInt

    /**
     * <pre>
     *  .indexOf(null, *, *)          = -1
     *  .indexOf(*, null, *)          = -1
     *  .indexOf("", "", 0)           = 0
     *  .indexOf("", *, 0)            = -1 (except when * = "")
     *  .indexOf("aabaabaa", "a", 0)  = 0
     *  .indexOf("aabaabaa", "b", 0)  = 2
     *  .indexOf("aabaabaa", "ab", 0) = 1
     *  .indexOf("aabaabaa", "b", 3)  = 5
     *  .indexOf("aabaabaa", "b", 9)  = -1
     *  .indexOf("aabaabaa", "b", -1) = 2
     *  .indexOf("aabaabaa", "", 2)   = 2
     *  .indexOf("abc", "", 9)        = 3
     * </pre>
     */
    indexOf(seq: JCharSequence, searchSeq: JCharSequence, startPos: JInt): JInt

    /**
     * <pre>
     *  .ordinalIndexOf(null, *, *)          = -1
     *  .ordinalIndexOf(*, null, *)          = -1
     *  .ordinalIndexOf("", "", *)           = 0
     *  .ordinalIndexOf("aabaabaa", "a", 1)  = 0
     *  .ordinalIndexOf("aabaabaa", "a", 2)  = 1
     *  .ordinalIndexOf("aabaabaa", "b", 1)  = 2
     *  .ordinalIndexOf("aabaabaa", "b", 2)  = 5
     *  .ordinalIndexOf("aabaabaa", "ab", 1) = 1
     *  .ordinalIndexOf("aabaabaa", "ab", 2) = 4
     *  .ordinalIndexOf("aabaabaa", "", 1)   = 0
     *  .ordinalIndexOf("aabaabaa", "", 2)   = 0
     * </pre>
     *
     * @param ordinal 要查找的第n个searchStr
     * @param str
     * @param searchStr
     */
    ordinalIndexOf(str: JCharSequence, searchStr: JCharSequence, ordinal: JInt): JInt

    /**
     * <pre>
     *  .indexOfIgnoreCase(null, *)          = -1
     *  .indexOfIgnoreCase(*, null)          = -1
     *  .indexOfIgnoreCase("", "")           = 0
     *  .indexOfIgnoreCase("aabaabaa", "a")  = 0
     *  .indexOfIgnoreCase("aabaabaa", "b")  = 2
     *  .indexOfIgnoreCase("aabaabaa", "ab") = 1
     * </pre>
     */
    indexOfIgnoreCase(str: JCharSequence, searchStr: JCharSequence): JInt

    /**
     * <pre>
     *  .indexOfIgnoreCase(null, *, *)          = -1
     *  .indexOfIgnoreCase(*, null, *)          = -1
     *  .indexOfIgnoreCase("", "", 0)           = 0
     *  .indexOfIgnoreCase("aabaabaa", "A", 0)  = 0
     *  .indexOfIgnoreCase("aabaabaa", "B", 0)  = 2
     *  .indexOfIgnoreCase("aabaabaa", "AB", 0) = 1
     *  .indexOfIgnoreCase("aabaabaa", "B", 3)  = 5
     *  .indexOfIgnoreCase("aabaabaa", "B", 9)  = -1
     *  .indexOfIgnoreCase("aabaabaa", "B", -1) = 2
     *  .indexOfIgnoreCase("aabaabaa", "", 2)   = 2
     *  .indexOfIgnoreCase("abc", "", 9)        = -1
     * </pre>
     */
    indexOfIgnoreCase(str: JCharSequence, searchStr: JCharSequence, startPos: JInt): JInt

// LastIndexOf
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .lastIndexOf(null, *)         = -1
     *  .lastIndexOf("", *)           = -1
     *  .lastIndexOf("aabaabaa", 'a') = 7
     *  .lastIndexOf("aabaabaa", 'b') = 5
     * </pre>
     */
    lastIndexOf(seq: JCharSequence, searchChar: JInt): JInt

    /**
     * <pre>
     *
     * </pre>
     */
    lastIndexOf(seq: JCharSequence, searchChar: JInt, startPos: JInt): JInt

    /**
     * <pre>
     *  .lastIndexOf(null, *)          = -1
     *  .lastIndexOf(*, null)          = -1
     *  .lastIndexOf("", "")           = 0
     *  .lastIndexOf("aabaabaa", "a")  = 7
     *  .lastIndexOf("aabaabaa", "b")  = 5
     *  .lastIndexOf("aabaabaa", "ab") = 4
     *  .lastIndexOf("aabaabaa", "")   = 8
     * </pre>
     */
    lastIndexOf(seq: JCharSequence, searchSeq: JCharSequence): JInt

    /**
     * <pre>
     *  .lastOrdinalIndexOf(null, *, *)          = -1
     *  .lastOrdinalIndexOf(*, null, *)          = -1
     *  .lastOrdinalIndexOf("", "", *)           = 0
     *  .lastOrdinalIndexOf("aabaabaa", "a", 1)  = 7
     *  .lastOrdinalIndexOf("aabaabaa", "a", 2)  = 6
     *  .lastOrdinalIndexOf("aabaabaa", "b", 1)  = 5
     *  .lastOrdinalIndexOf("aabaabaa", "b", 2)  = 2
     *  .lastOrdinalIndexOf("aabaabaa", "ab", 1) = 4
     *  .lastOrdinalIndexOf("aabaabaa", "ab", 2) = 1
     *  .lastOrdinalIndexOf("aabaabaa", "", 1)   = 8
     *  .lastOrdinalIndexOf("aabaabaa", "", 2)   = 8
     * </pre>
     *
     * @param ordinal 要查找的第n个searchStr
     * @param str
     * @param searchStr
     */
    lastOrdinalIndexOf(str: JCharSequence, searchStr: JCharSequence, ordinal: JInt): JInt

    /**
     * <pre>
     *  .lastIndexOf(null, *, *)          = -1
     *  .lastIndexOf(*, null, *)          = -1
     *  .lastIndexOf("aabaabaa", "a", 8)  = 7
     *  .lastIndexOf("aabaabaa", "b", 8)  = 5
     *  .lastIndexOf("aabaabaa", "ab", 8) = 4
     *  .lastIndexOf("aabaabaa", "b", 9)  = 5
     *  .lastIndexOf("aabaabaa", "b", -1) = -1
     *  .lastIndexOf("aabaabaa", "a", 0)  = 0
     *  .lastIndexOf("aabaabaa", "b", 0)  = -1
     *  .lastIndexOf("aabaabaa", "b", 1)  = -1
     *  .lastIndexOf("aabaabaa", "b", 2)  = 2
     *  .lastIndexOf("aabaabaa", "ba", 2)  = 2
     * </pre>
     */
    lastIndexOf(seq: JCharSequence, searchSeq: JCharSequence, startPos: JInt): JInt

    /**
     * <pre>
     *  .lastIndexOfIgnoreCase(null, *)          = -1
     *  .lastIndexOfIgnoreCase(*, null)          = -1
     *  .lastIndexOfIgnoreCase("aabaabaa", "A")  = 7
     *  .lastIndexOfIgnoreCase("aabaabaa", "B")  = 5
     *  .lastIndexOfIgnoreCase("aabaabaa", "AB") = 4
     * </pre>
     */
    lastIndexOfIgnoreCase(str: JCharSequence, searchStr: JCharSequence): JInt

    /**
     * <pre>
     *  .lastIndexOfIgnoreCase(null, *, *)          = -1
     *  .lastIndexOfIgnoreCase(*, null, *)          = -1
     *  .lastIndexOfIgnoreCase("aabaabaa", "A", 8)  = 7
     *  .lastIndexOfIgnoreCase("aabaabaa", "B", 8)  = 5
     *  .lastIndexOfIgnoreCase("aabaabaa", "AB", 8) = 4
     *  .lastIndexOfIgnoreCase("aabaabaa", "B", 9)  = 5
     *  .lastIndexOfIgnoreCase("aabaabaa", "B", -1) = -1
     *  .lastIndexOfIgnoreCase("aabaabaa", "A", 0)  = 0
     *  .lastIndexOfIgnoreCase("aabaabaa", "B", 0)  = -1
     * </pre>
     */
    lastIndexOfIgnoreCase(str: JCharSequence, searchStr: JCharSequence, startPos: JInt): JInt

// Contains
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .contains(null, *)    = false
     *  .contains("", *)      = false
     *  .contains("abc", 'a') = true
     *  .contains("abc", 'z') = false
     * </pre>
     */
    contains(seq: JCharSequence, searchChar: JInt): JBoolean

    /**
     * <pre>
     *  .contains(null, *)     = false
     *  .contains(*, null)     = false
     *  .contains("", "")      = true
     *  .contains("abc", "")   = true
     *  .contains("abc", "a")  = true
     *  .contains("abc", "z")  = false
     * </pre>
     */
    contains(seq: JCharSequence, searchSeq: JCharSequence): JBoolean

    /**
     * <pre>
     *  .containsIgnoreCase(null, *)    = false
     *  .containsIgnoreCase(*, null)    = false
     *  .containsIgnoreCase("", "")     = true
     *  .containsIgnoreCase("abc", "")  = true
     *  .containsIgnoreCase("abc", "a") = true
     *  .containsIgnoreCase("abc", "z") = false
     *  .containsIgnoreCase("abc", "A") = true
     *  .containsIgnoreCase("abc", "Z") = false
     * </pre>
     */
    containsIgnoreCase(str: JCharSequence, searchStr: JCharSequence): JBoolean

    /**
     * 检查给定的JCharSequence是否包含任何空白字符
     */
    containsWhitespace(seq: JCharSequence): JBoolean

    /**
     * <pre>
     *  .indexOfAny(null, *)                = -1
     *  .indexOfAny("", *)                  = -1
     *  .indexOfAny(*, null)                = -1
     *  .indexOfAny(*, [])                  = -1
     *  .indexOfAny("zzabyycdxx",['z','a']) = 0
     *  .indexOfAny("zzabyycdxx",['b','y']) = 3
     *  .indexOfAny("aba", ['z'])           = -1
     * </pre>
     */
    indexOfAny(cs: JCharSequence, searchChars: JChar[]): JInt

    /**
     * <pre>
     *  .indexOfAny(null, *)            = -1
     *  .indexOfAny("", *)              = -1
     *  .indexOfAny(*, null)            = -1
     *  .indexOfAny(*, "")              = -1
     *  .indexOfAny("zzabyycdxx", "za") = 0
     *  .indexOfAny("zzabyycdxx", "by") = 3
     *  .indexOfAny("aba","z")          = -1
     * </pre>
     */
    indexOfAny(cs: JCharSequence, searchChars: JString): JInt

    /**
     * <pre>
     *  .containsAny(null, *)                = false
     *  .containsAny("", *)                  = false
     *  .containsAny(*, null)                = false
     *  .containsAny(*, [])                  = false
     *  .containsAny("zzabyycdxx",['z','a']) = true
     *  .containsAny("zzabyycdxx",['b','y']) = true
     *  .containsAny("zzabyycdxx",['z','y']) = true
     *  .containsAny("aba", ['z'])           = false
     * </pre>
     */
    containsAny(cs: JCharSequence, searchChars: JChar[]): JBoolean

    /**
     * <pre>
     *  .containsAny(null, *)               = false
     *  .containsAny("", *)                 = false
     *  .containsAny(*, null)               = false
     *  .containsAny(*, "")                 = false
     *  .containsAny("zzabyycdxx", "za")    = true
     *  .containsAny("zzabyycdxx", "by")    = true
     *  .containsAny("zzabyycdxx", "zy")    = true
     *  .containsAny("zzabyycdxx", "\tx")   = true
     *  .containsAny("zzabyycdxx", "$.#yF") = true
     *  .containsAny("aba","z")             = false
     * </pre>
     */
    containsAny(cs: JCharSequence, searchChars: JCharSequence): JBoolean

    /**
     * <pre>
     *  .containsAny(null, *)            = false
     *  .containsAny("", *)              = false
     *  .containsAny(*, null)            = false
     *  .containsAny(*, [])              = false
     *  .containsAny("abcd", "ab", null) = true
     *  .containsAny("abcd", "ab", "cd") = true
     *  .containsAny("abc", "d", "abc")  = true
     * </pre>
     */
    containsAny(cs: JCharSequence, searchJCharSequences: JCharSequence[]): JBoolean

// IndexOfAnyBut JChars
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 搜索JCharSequence以查找不在给定字符集中的任何字符的第一个索引。空的JCharSequence将返回-1。空搜索字符串将返回-1。
     * <pre>
     *  .indexOfAnyBut(null, *)                              = -1
     *  .indexOfAnyBut("", *)                                = -1
     *  .indexOfAnyBut(*, null)                              = -1
     *  .indexOfAnyBut(*, [])                                = -1
     *  .indexOfAnyBut("zzabyycdxx", new JChar[] {'z', 'a'} ) = 3
     *  .indexOfAnyBut("aba", new JChar[] {'z'} )             = 0
     *  .indexOfAnyBut("aba", new JChar[] {'a', 'b'} )        = -1
     * </pre>
     */
    indexOfAnyBut(cs: JCharSequence, searchChars: JChar[]): JInt

    /**
     * 搜索JCharSequence以查找不在给定字符集中的任何字符的第一个索引。空的JCharSequence将返回-1。空搜索字符串将返回-1。
     * <pre>
     *  .indexOfAnyBut(null, *)            = -1
     *  .indexOfAnyBut("", *)              = -1
     *  .indexOfAnyBut(*, null)            = -1
     *  .indexOfAnyBut(*, "")              = -1
     *  .indexOfAnyBut("zzabyycdxx", "za") = 3
     *  .indexOfAnyBut("zzabyycdxx", "")   = -1
     *  .indexOfAnyBut("aba","ab")         = -1
     * </pre>
     */
    indexOfAnyBut(seq: JCharSequence, searchChars: JCharSequence): JInt

// ContainsOnly
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 检查JCharSequence是否只包含某些字符
     * <pre>
     *  .containsOnly(null, *)       = false
     *  .containsOnly(*, null)       = false
     *  .containsOnly("", *)         = true
     *  .containsOnly("ab", '')      = false
     *  .containsOnly("abab", 'abc') = true
     *  .containsOnly("ab1", 'abc')  = false
     *  .containsOnly("abz", 'abc')  = false
     * </pre>
     */
    containsOnly(cs: JCharSequence, valid: JChar[]): JBoolean

    /**
     * 检查JCharSequence是否只包含某些字符
     * <pre>
     *  .containsOnly(null, *)       = false
     *  .containsOnly(*, null)       = false
     *  .containsOnly("", *)         = true
     *  .containsOnly("ab", "")      = false
     *  .containsOnly("abab", "abc") = true
     *  .containsOnly("ab1", "abc")  = false
     *  .containsOnly("abz", "abc")  = false
     * </pre>
     */
    containsOnly(cs: JCharSequence, validChars: JString): JBoolean

// ContainsNone
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 检查JCharSequence是否不包含某些字符
     * <pre>
     *  .containsNone(null, *)       = true
     *  .containsNone(*, null)       = true
     *  .containsNone("", *)         = true
     *  .containsNone("ab", '')      = true
     *  .containsNone("abab", 'xyz') = true
     *  .containsNone("ab1", 'xyz')  = true
     *  .containsNone("abz", 'xyz')  = false
     * </pre>
     */
    containsNone(cs: JCharSequence, searchChars: JChar[]): JBoolean

    /**
     * 检查JCharSequence是否不包含某些字符
     * <pre>
     *  .containsNone(null, *)       = true
     *  .containsNone(*, null)       = true
     *  .containsNone("", *)         = true
     *  .containsNone("ab", "")      = true
     *  .containsNone("abab", "xyz") = true
     *  .containsNone("ab1", "xyz")  = true
     *  .containsNone("abz", "xyz")  = false
     * </pre>
     */
    containsNone(cs: JCharSequence, invalidChars: JString): JBoolean

// IndexOfAny Strings
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .indexOfAny(null, *)                     = -1
     *  .indexOfAny(*, null)                     = -1
     *  .indexOfAny(*, [])                       = -1
     *  .indexOfAny("zzabyycdxx", ["ab","cd"])   = 2
     *  .indexOfAny("zzabyycdxx", ["cd","ab"])   = 2
     *  .indexOfAny("zzabyycdxx", ["mn","op"])   = -1
     *  .indexOfAny("zzabyycdxx", ["zab","aby"]) = 1
     *  .indexOfAny("zzabyycdxx", [""])          = 0
     *  .indexOfAny("", [""])                    = 0
     *  .indexOfAny("", ["a"])                   = -1
     * </pre>
     */
    indexOfAny(str: JCharSequence, searchStrs: JCharSequence[]): JInt

    /**
     * <pre>
     *  .lastIndexOfAny(null, *)                   = -1
     *  .lastIndexOfAny(*, null)                   = -1
     *  .lastIndexOfAny(*, [])                     = -1
     *  .lastIndexOfAny(*, [null])                 = -1
     *  .lastIndexOfAny("zzabyycdxx", ["ab","cd"]) = 6
     *  .lastIndexOfAny("zzabyycdxx", ["cd","ab"]) = 6
     *  .lastIndexOfAny("zzabyycdxx", ["mn","op"]) = -1
     *  .lastIndexOfAny("zzabyycdxx", ["mn","op"]) = -1
     *  .lastIndexOfAny("zzabyycdxx", ["mn",""])   = 10
     * </pre>
     */
    lastIndexOfAny(str: JCharSequence, searchStrs: JCharSequence[]): JInt

// SubString
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .subString(null, *)   = null
     *  .subString("", *)     = ""
     *  .subString("abc", 0)  = "abc"
     *  .subString("abc", 2)  = "c"
     *  .subString("abc", 4)  = ""
     *  .subString("abc", -2) = "bc"
     *  .subString("abc", -4) = "abc"
     * </pre>
     */
    subString(str: JString, start: JInt): JString

    /**
     * <pre>
     *  .subString(null, *, *)    = null
     *  .subString("", * ,  *)    = "";
     *  .subString("abc", 0, 2)   = "ab"
     *  .subString("abc", 2, 0)   = ""
     *  .subString("abc", 2, 4)   = "c"
     *  .subString("abc", 4, 6)   = ""
     *  .subString("abc", 2, 2)   = ""
     *  .subString("abc", -2, -1) = "b"
     *  .subString("abc", -4, 2)  = "ab"
     * </pre>
     */
    subString(str: JString, start: JInt, end: JInt): JString

// Left/Right/Mid
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .left(null, *)    = null
     *  .left(*, -ve)     = ""
     *  .left("", *)      = ""
     *  .left("abc", 0)   = ""
     *  .left("abc", 2)   = "ab"
     *  .left("abc", 4)   = "abc"
     * </pre>
     */
    left(str: JString, len: JInt): JString

    /**
     * <pre>
     *  .right(null, *)    = null
     *  .right(*, -ve)     = ""
     *  .right("", *)      = ""
     *  .right("abc", 0)   = ""
     *  .right("abc", 2)   = "bc"
     *  .right("abc", 4)   = "abc"
     * </pre>
     */
    right(str: JString, len: JInt): JString

    /**
     * <pre>
     *  .mid(null, *, *)    = null
     *  .mid(*, *, -ve)     = ""
     *  .mid("", 0, *)      = ""
     *  .mid("abc", 0, 2)   = "ab"
     *  .mid("abc", 0, 4)   = "abc"
     *  .mid("abc", 2, 4)   = "c"
     *  .mid("abc", 4, 2)   = ""
     *  .mid("abc", -2, 2)  = "ab"
     * </pre>
     */
    mid(str: JString, pos: JInt, len: JInt): JString

// SubStringAfter/SubStringBefore
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 获取第一次出现分隔符之前的子字符串
     * <pre>
     *  .subStringBefore(null, *)      = null
     *  .subStringBefore("", *)        = ""
     *  .subStringBefore("abc", "a")   = ""
     *  .subStringBefore("abcba", "b") = "a"
     *  .subStringBefore("abc", "c")   = "ab"
     *  .subStringBefore("abc", "d")   = "abc"
     *  .subStringBefore("abc", "")    = ""
     *  .subStringBefore("abc", null)  = "abc"
     * </pre>
     */
    subJStringBefore(str: JString, separator: JString): JString

    /**
     * 获取第一次出现分隔符后的子字符串
     * <pre>
     *  .subStringAfter(null, *)      = null
     *  .subStringAfter("", *)        = ""
     *  .subStringAfter(*, null)      = ""
     *  .subStringAfter("abc", "a")   = "bc"
     *  .subStringAfter("abcba", "b") = "cba"
     *  .subStringAfter("abc", "c")   = ""
     *  .subStringAfter("abc", "d")   = ""
     *  .subStringAfter("abc", "")    = "abc"
     * </pre>
     */
    subStringAfter(str: JString, separator: JString): JString

    /**
     * 获取最后一次出现分隔符之前的子字符串
     * <pre>
     *  .subStringBeforeLast(null, *)      = null
     *  .subStringBeforeLast("", *)        = ""
     *  .subStringBeforeLast("abcba", "b") = "abc"
     *  .subStringBeforeLast("abc", "c")   = "ab"
     *  .subStringBeforeLast("a", "a")     = ""
     *  .subStringBeforeLast("a", "z")     = "a"
     *  .subStringBeforeLast("a", null)    = "a"
     *  .subStringBeforeLast("a", "")      = "a"
     * </pre>
     */
    subStringBeforeLast(str: JString, separator: JString): JString

    /**
     * 获取最后一次出现分隔符后的子字符串
     * <pre>
     *  .subStringAfterLast(null, *)      = null
     *  .subStringAfterLast("", *)        = ""
     *  .subStringAfterLast(*, "")        = ""
     *  .subStringAfterLast(*, null)      = ""
     *  .subStringAfterLast("abc", "a")   = "bc"
     *  .subStringAfterLast("abcba", "b") = "a"
     *  .subStringAfterLast("abc", "c")   = ""
     *  .subStringAfterLast("a", "a")     = ""
     *  .subStringAfterLast("a", "z")     = ""
     * </pre>
     */
    subStringAfterLast(str: JString, separator: JString): JString

// SubString between
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 获取嵌套在同一字符串的两个实例之间的字符串
     * <pre>
     *  .subStringBetween(null, *)            = null
     *  .subStringBetween("", "")             = ""
     *  .subStringBetween("", "tag")          = null
     *  .subStringBetween("tagabctag", null)  = null
     *  .subStringBetween("tagabctag", "")    = ""
     *  .subStringBetween("tagabctag", "tag") = "abc"
     * </pre>
     */
    subStringBetween(str: JString, tag: JString): JString

    /**
     * 获取嵌套在两个字符串之间的字符串。只返回第一个匹配项
     * <pre>
     *  .subStringBetween("wx[b]yz", "[", "]") = "b"
     *  .subStringBetween(null, *, *)          = null
     *  .subStringBetween(*, null, *)          = null
     *  .subStringBetween(*, *, null)          = null
     *  .subStringBetween("", "", "")          = ""
     *  .subStringBetween("", "", "]")         = null
     *  .subStringBetween("", "[", "]")        = null
     *  .subStringBetween("yabcz", "", "")     = ""
     *  .subStringBetween("yabcz", "y", "z")   = "abc"
     *  .subStringBetween("yabczyabcz", "y", "z")   = "abc"
     * </pre>
     */
    subStringBetween(str: JString, open: JString, close: JString): JString

    /**
     * 在字符串中搜索由开始和结束标记分隔的子字符串，返回数组中所有匹配的子字符串
     * <pre>
     *  .subStringsBetween("[a][b][c]", "[", "]") = ["a","b","c"]
     *  .subStringsBetween(null, *, *)            = null
     *  .subStringsBetween(*, null, *)            = null
     *  .subStringsBetween(*, *, null)            = null
     *  .subStringsBetween("", "[", "]")          = []
     * </pre>
     */
    subStringsBetween(str: JString, open: JString, close: JString): JString[]

// Nested extraction
//----------------------------------------------------------------------------------------------------------------------------------------------

// Splitting
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * 使用空格作为分隔符，将提供的文本拆分为数组
     * <pre>
     *  .split(null)       = null
     *  .split("")         = []
     *  .split("abc def")  = ["abc", "def"]
     *  .split("abc  def") = ["abc", "def"]
     *  .split(" abc ")    = ["abc"]
     * </pre>
     */
    split(str: JString): JString[]

    /**
     * <pre>
     *  .split(null, *)         = null
     *  .split("", *)           = []
     *  .split("a.b.c", '.')    = ["a", "b", "c"]
     *  .split("a..b.c", '.')   = ["a", "b", "c"]
     *  .split("a:b:c", '.')    = ["a:b:c"]
     *  .split("a b c", ' ')    = ["a", "b", "c"]
     * </pre>
     */
    split(str: JString, separatorChar: JChar): JString[]

    /**
     * <pre>
     *  .split(null, *)         = null
     *  .split("", *)           = []
     *  .split("abc def", null) = ["abc", "def"]
     *  .split("abc def", " ")  = ["abc", "def"]
     *  .split("abc  def", " ") = ["abc", "def"]
     *  .split("ab:cd:ef", ":") = ["ab", "cd", "ef"]
     * </pre>
     */
    split(str: JString, separatorChars: JString): JString[]

    /**
     * <pre>
     *  .split(null, *, *)            = null
     *  .split("", *, *)              = []
     *  .split("ab cd ef", null, 0)   = ["ab", "cd", "ef"]
     *  .split("ab   cd ef", null, 0) = ["ab", "cd", "ef"]
     *  .split("ab:cd:ef", ":", 0)    = ["ab", "cd", "ef"]
     *  .split("ab:cd:ef", ":", 2)    = ["ab", "cd:ef"]
     * </pre>
     */
    split(str: JString, separatorChars: JString, max: JInt): JString[]

//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .splitByWholeSeparator(null, *)               = null
     *  .splitByWholeSeparator("", *)                 = []
     *  .splitByWholeSeparator("ab de fg", null)      = ["ab", "de", "fg"]
     *  .splitByWholeSeparator("ab   de fg", null)    = ["ab", "de", "fg"]
     *  .splitByWholeSeparator("ab:cd:ef", ":")       = ["ab", "cd", "ef"]
     *  .splitByWholeSeparator("ab-!-cd-!-ef", "-!-") = ["ab", "cd", "ef"]
     * </pre>
     */
    splitByWholeSeparator(str: JString, separator: JString): JString[]

    /**
     * <pre>
     *  .splitByWholeSeparator(null, *, *)               = null
     *  .splitByWholeSeparator("", *, *)                 = []
     *  .splitByWholeSeparator("ab de fg", null, 0)      = ["ab", "de", "fg"]
     *  .splitByWholeSeparator("ab   de fg", null, 0)    = ["ab", "de", "fg"]
     *  .splitByWholeSeparator("ab:cd:ef", ":", 2)       = ["ab", "cd:ef"]
     *  .splitByWholeSeparator("ab-!-cd-!-ef", "-!-", 5) = ["ab", "cd", "ef"]
     *  .splitByWholeSeparator("ab-!-cd-!-ef", "-!-", 2) = ["ab", "cd-!-ef"]
     * </pre>
     */
    splitByWholeSeparator(str: JString, separator: JString, max: JInt): JString[]

    /**
     * <pre>
     *  .splitByWholeSeparatorPreserveAllTokens(null, *)               = null
     *  .splitByWholeSeparatorPreserveAllTokens("", *)                 = []
     *  .splitByWholeSeparatorPreserveAllTokens("ab de fg", null)      = ["ab", "de", "fg"]
     *  .splitByWholeSeparatorPreserveAllTokens("ab   de fg", null)    = ["ab", "", "", "de", "fg"]
     *  .splitByWholeSeparatorPreserveAllTokens("ab:cd:ef", ":")       = ["ab", "cd", "ef"]
     *  .splitByWholeSeparatorPreserveAllTokens("ab-!-cd-!-ef", "-!-") = ["ab", "cd", "ef"]
     * </pre>
     */
    splitByWholeSeparatorPreserveAllTokens(str: JString, separator: JString): JString[]

    /**
     * <pre>
     *  .splitByWholeSeparatorPreserveAllTokens(null, *, *)               = null
     *  .splitByWholeSeparatorPreserveAllTokens("", *, *)                 = []
     *  .splitByWholeSeparatorPreserveAllTokens("ab de fg", null, 0)      = ["ab", "de", "fg"]
     *  .splitByWholeSeparatorPreserveAllTokens("ab   de fg", null, 0)    = ["ab", "", "", "de", "fg"]
     *  .splitByWholeSeparatorPreserveAllTokens("ab:cd:ef", ":", 2)       = ["ab", "cd:ef"]
     *  .splitByWholeSeparatorPreserveAllTokens("ab-!-cd-!-ef", "-!-", 5) = ["ab", "cd", "ef"]
     *  .splitByWholeSeparatorPreserveAllTokens("ab-!-cd-!-ef", "-!-", 2) = ["ab", "cd-!-ef"]
     * </pre>
     */
    splitByWholeSeparatorPreserveAllTokens(str: JString, separator: JString, max: JInt): JString[]

    /**
     * <pre>
     *  .splitPreserveAllTokens(null)       = null
     *  .splitPreserveAllTokens("")         = []
     *  .splitPreserveAllTokens("abc def")  = ["abc", "def"]
     *  .splitPreserveAllTokens("abc  def") = ["abc", "", "def"]
     *  .splitPreserveAllTokens(" abc ")    = ["", "abc", ""]
     * </pre>
     */
    splitPreserveAllTokens(str: JString): JString[]

    /**
     * <pre>
     *  .splitPreserveAllTokens(null, *)         = null
     *  .splitPreserveAllTokens("", *)           = []
     *  .splitPreserveAllTokens("a.b.c", '.')    = ["a", "b", "c"]
     *  .splitPreserveAllTokens("a..b.c", '.')   = ["a", "", "b", "c"]
     *  .splitPreserveAllTokens("a:b:c", '.')    = ["a:b:c"]
     *  .splitPreserveAllTokens("a\tb\nc", null) = ["a", "b", "c"]
     *  .splitPreserveAllTokens("a b c", ' ')    = ["a", "b", "c"]
     *  .splitPreserveAllTokens("a b c ", ' ')   = ["a", "b", "c", ""]
     *  .splitPreserveAllTokens("a b c  ", ' ')   = ["a", "b", "c", "", ""]
     *  .splitPreserveAllTokens(" a b c", ' ')   = ["", a", "b", "c"]
     *  .splitPreserveAllTokens("  a b c", ' ')  = ["", "", a", "b", "c"]
     *  .splitPreserveAllTokens(" a b c ", ' ')  = ["", a", "b", "c", ""]
     * </pre>
     */
    splitPreserveAllTokens(str: JString, separatorChar: JChar): JString[]


    /**
     * <pre>
     *  .splitPreserveAllTokens(null, *)           = null
     *  .splitPreserveAllTokens("", *)             = []
     *  .splitPreserveAllTokens("abc def", null)   = ["abc", "def"]
     *  .splitPreserveAllTokens("abc def", " ")    = ["abc", "def"]
     *  .splitPreserveAllTokens("abc  def", " ")   = ["abc", "", def"]
     *  .splitPreserveAllTokens("ab:cd:ef", ":")   = ["ab", "cd", "ef"]
     *  .splitPreserveAllTokens("ab:cd:ef:", ":")  = ["ab", "cd", "ef", ""]
     *  .splitPreserveAllTokens("ab:cd:ef::", ":") = ["ab", "cd", "ef", "", ""]
     *  .splitPreserveAllTokens("ab::cd:ef", ":")  = ["ab", "", cd", "ef"]
     *  .splitPreserveAllTokens(":cd:ef", ":")     = ["", cd", "ef"]
     *  .splitPreserveAllTokens("::cd:ef", ":")    = ["", "", cd", "ef"]
     *  .splitPreserveAllTokens(":cd:ef:", ":")    = ["", cd", "ef", ""]
     * </pre>
     */
    splitPreserveAllTokens(str: JString, separatorChars: JString): JString[]

    /**
     * <pre>
     *  .splitPreserveAllTokens(null, *, *)            = null
     *  .splitPreserveAllTokens("", *, *)              = []
     *  .splitPreserveAllTokens("ab de fg", null, 0)   = ["ab", "cd", "ef"]
     *  .splitPreserveAllTokens("ab   de fg", null, 0) = ["ab", "cd", "ef"]
     *  .splitPreserveAllTokens("ab:cd:ef", ":", 0)    = ["ab", "cd", "ef"]
     *  .splitPreserveAllTokens("ab:cd:ef", ":", 2)    = ["ab", "cd:ef"]
     *  .splitPreserveAllTokens("ab   de fg", null, 2) = ["ab", "  de fg"]
     *  .splitPreserveAllTokens("ab   de fg", null, 3) = ["ab", "", " de fg"]
     *  .splitPreserveAllTokens("ab   de fg", null, 4) = ["ab", "", "", "de fg"]
     * </pre>
     */
    splitPreserveAllTokens(str: JString, separatorChars: JString, max: JInt): JString[]

    /**
     * <pre>
     *  .splitByCharacterType(null)         = null
     *  .splitByCharacterType("")           = []
     *  .splitByCharacterType("ab de fg")   = ["ab", " ", "de", " ", "fg"]
     *  .splitByCharacterType("ab   de fg") = ["ab", "   ", "de", " ", "fg"]
     *  .splitByCharacterType("ab:cd:ef")   = ["ab", ":", "cd", ":", "ef"]
     *  .splitByCharacterType("number5")    = ["number", "5"]
     *  .splitByCharacterType("fooBar")     = ["foo", "B", "ar"]
     *  .splitByCharacterType("foo200Bar")  = ["foo", "200", "B", "ar"]
     *  .splitByCharacterType("ASFRules")   = ["ASFR", "ules"]
     * </pre>
     */
    splitByCharacterType(str: JString): JString[]

    /**
     * <pre>
     *  .splitByCharacterTypeCamelCase(null)         = null
     *  .splitByCharacterTypeCamelCase("")           = []
     *  .splitByCharacterTypeCamelCase("ab de fg")   = ["ab", " ", "de", " ", "fg"]
     *  .splitByCharacterTypeCamelCase("ab   de fg") = ["ab", "   ", "de", " ", "fg"]
     *  .splitByCharacterTypeCamelCase("ab:cd:ef")   = ["ab", ":", "cd", ":", "ef"]
     *  .splitByCharacterTypeCamelCase("number5")    = ["number", "5"]
     *  .splitByCharacterTypeCamelCase("fooBar")     = ["foo", "Bar"]
     *  .splitByCharacterTypeCamelCase("foo200Bar")  = ["foo", "200", "Bar"]
     *  .splitByCharacterTypeCamelCase("ASFRules")   = ["ASF", "Rules"]
     * </pre>
     */
    splitByCharacterTypeCamelCase(str: JString): JString[]

// Joining
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .join(null)            = null
     *  .join([])              = ""
     *  .join([null])          = ""
     *  .join(["a", "b", "c"]) = "abc"
     *  .join([null, "", "a"]) = "a"
     * </pre>
     */
    join<T extends any>(elements: T[]): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join(["a", "b", "c"], ';')  = "a;b;c"
     *  .join(["a", "b", "c"], null) = "abc"
     *  .join([null, "", "a"], ';')  = ";;a"
     * </pre>
     */
    join(array: any[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JLong[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JInt[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JShort[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JByte[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JChar[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JFloat[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JDouble[], separator: JChar): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join(["a", "b", "c"], ';')  = "a;b;c"
     *  .join(["a", "b", "c"], null) = "abc"
     *  .join([null, "", "a"], ';')  = ";;a"
     * </pre>
     */
    join(array: any[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JLong[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JInt[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JByte[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JShort[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JChar[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JDouble[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join([1, 2, 3], ';')  = "1;2;3"
     *  .join([1, 2, 3], null) = "123"
     * </pre>
     */
    join(array: JFloat[], separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)                = null
     *  .join([], *)                  = ""
     *  .join([null], *)              = ""
     *  .join(["a", "b", "c"], "--")  = "a--b--c"
     *  .join(["a", "b", "c"], null)  = "abc"
     *  .join(["a", "b", "c"], "")    = "abc"
     *  .join([null, "", "a"], ',')   = ",,a"
     * </pre>
     */
    join(array: any[], separator: JString): JString

    /**
     * <pre>
     *  .join(null, *, *, *)                = null
     *  .join([], *, *, *)                  = ""
     *  .join([null], *, *, *)              = ""
     *  .join(["a", "b", "c"], "--", 0, 3)  = "a--b--c"
     *  .join(["a", "b", "c"], "--", 1, 3)  = "b--c"
     *  .join(["a", "b", "c"], "--", 2, 3)  = "c"
     *  .join(["a", "b", "c"], "--", 2, 2)  = ""
     *  .join(["a", "b", "c"], null, 0, 3)  = "abc"
     *  .join(["a", "b", "c"], "", 0, 3)    = "abc"
     *  .join([null, "", "a"], ',', 0, 3)   = ",,a"
     * </pre>
     */
    join(array: any[], separator: JString, startIndex: JInt, endIndex: JInt): JString

    /**
     * 将所提供迭代器的元素联接到包含所提供元素的单个字符串中
     */
    join(iterator: Iterator<any>, separator: JChar): JString

    /**
     * 将所提供迭代器的元素联接到包含所提供元素的单个字符串中
     */
    join(iterator: Iterator<any>, separator: JString): JString

    /**
     * 将提供的Iterable的元素联接到包含所提供元素的单个字符串中
     */
    join(iterable: Iterable<any>, separator: JChar): JString

    /**
     * 将提供的Iterable的元素联接到包含所提供元素的单个字符串中
     */
    join(iterable: Iterable<any>, separator: JString): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join(["a", "b", "c"], ';')  = "a;b;c"
     *  .join(["a", "b", "c"], null) = "abc"
     *  .join([null, "", "a"], ';')  = ";;a"
     * </pre>
     */
    join(list: JList<any>, separator: JChar, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .join(null, *)               = null
     *  .join([], *)                 = ""
     *  .join([null], *)             = ""
     *  .join(["a", "b", "c"], ';')  = "a;b;c"
     *  .join(["a", "b", "c"], null) = "abc"
     *  .join([null, "", "a"], ';')  = ";;a"
     * </pre>
     */
    join(list: JList<any>, separator: JString, startIndex: JInt, endIndex: JInt): JString

    /**
     * <pre>
     *  .joinWith(",", {"a", "b"})        = "a,b"
     *  .joinWith(",", {"a", "b",""})     = "a,b,"
     *  .joinWith(",", {"a", null, "b"})  = "a,,b"
     *  .joinWith(null, {"a", "b"})       = "ab"
     * </pre>
     */
    joinWith(separator: JString, objects: any[]): JString

// Delete
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .deleteWhitespace(null)         = null
     *  .deleteWhitespace("")           = ""
     *  .deleteWhitespace("abc")        = "abc"
     *  .deleteWhitespace("   ab  c  ") = "abc"
     * </pre>
     */
    deleteWhitespace(str: JString): JString

// Remove
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .removeStart(null, *)      = null
     *  .removeStart("", *)        = ""
     *  .removeStart(*, null)      = *
     *  .removeStart("www.domain.com", "www.")   = "domain.com"
     *  .removeStart("domain.com", "www.")       = "domain.com"
     *  .removeStart("www.domain.com", "domain") = "www.domain.com"
     *  .removeStart("abc", "")    = "abc"
     * </pre>
     */
    removeStart(str: JString, remove: JString): JString

    /**
     * <pre>
     *  .removeStartIgnoreCase(null, *)      = null
     *  .removeStartIgnoreCase("", *)        = ""
     *  .removeStartIgnoreCase(*, null)      = *
     *  .removeStartIgnoreCase("www.domain.com", "www.")   = "domain.com"
     *  .removeStartIgnoreCase("www.domain.com", "WWW.")   = "domain.com"
     *  .removeStartIgnoreCase("domain.com", "www.")       = "domain.com"
     *  .removeStartIgnoreCase("www.domain.com", "domain") = "www.domain.com"
     *  .removeStartIgnoreCase("abc", "")    = "abc"
     * </pre>
     */
    removeStartIgnoreCase(str: JString, remove: JString): JString

    /**
     * <pre>
     *  .removeEnd(null, *)      = null
     *  .removeEnd("", *)        = ""
     *  .removeEnd(*, null)      = *
     *  .removeEnd("www.domain.com", ".com.")  = "www.domain.com"
     *  .removeEnd("www.domain.com", ".com")   = "www.domain"
     *  .removeEnd("www.domain.com", "domain") = "www.domain.com"
     *  .removeEnd("abc", "")    = "abc"
     * </pre>
     */
    removeEnd(str: JString, remove: JString): JString

    /**
     * <pre>
     *  .removeEndIgnoreCase(null, *)      = null
     *  .removeEndIgnoreCase("", *)        = ""
     *  .removeEndIgnoreCase(*, null)      = *
     *  .removeEndIgnoreCase("www.domain.com", ".com.")  = "www.domain.com"
     *  .removeEndIgnoreCase("www.domain.com", ".com")   = "www.domain"
     *  .removeEndIgnoreCase("www.domain.com", "domain") = "www.domain.com"
     *  .removeEndIgnoreCase("abc", "")    = "abc"
     *  .removeEndIgnoreCase("www.domain.com", ".COM") = "www.domain")
     *  .removeEndIgnoreCase("www.domain.COM", ".com") = "www.domain")
     * </pre>
     */
    removeEndIgnoreCase(str: JString, remove: JString): JString

    /**
     * <pre>
     *  .remove(null, *)        = null
     *  .remove("", *)          = ""
     *  .remove(*, null)        = *
     *  .remove(*, "")          = *
     *  .remove("queued", "ue") = "qd"
     *  .remove("queued", "zz") = "queued"
     * </pre>
     */
    remove(str: JString, remove: JString): JString

    /**
     * <pre>
     *  .removeIgnoreCase(null, *)        = null
     *  .removeIgnoreCase("", *)          = ""
     *  .removeIgnoreCase(*, null)        = *
     *  .removeIgnoreCase(*, "")          = *
     *  .removeIgnoreCase("queued", "ue") = "qd"
     *  .removeIgnoreCase("queued", "zz") = "queued"
     *  .removeIgnoreCase("quEUed", "UE") = "qd"
     *  .removeIgnoreCase("queued", "zZ") = "queued"
     * </pre>
     */
    removeIgnoreCase(str: JString, remove: JString): JString

    /**
     * <pre>
     *  .remove(null, *)       = null
     *  .remove("", *)         = ""
     *  .remove("queued", 'u') = "qeed"
     *  .remove("queued", 'z') = "queued"
     * </pre>
     */
    remove(str: JString, remove: JChar): JString

// Replacing
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .replaceOnce(null, *, *)        = null
     *  .replaceOnce("", *, *)          = ""
     *  .replaceOnce("any", null, *)    = "any"
     *  .replaceOnce("any", *, null)    = "any"
     *  .replaceOnce("any", "", *)      = "any"
     *  .replaceOnce("aba", "a", null)  = "aba"
     *  .replaceOnce("aba", "a", "")    = "ba"
     *  .replaceOnce("aba", "a", "z")   = "zba"
     * </pre>
     */
    replaceOnce(text: JString, searchString: JString, replacement: JString): JString

    /**
     * <pre>
     *  .replaceOnceIgnoreCase(null, *, *)        = null
     *  .replaceOnceIgnoreCase("", *, *)          = ""
     *  .replaceOnceIgnoreCase("any", null, *)    = "any"
     *  .replaceOnceIgnoreCase("any", *, null)    = "any"
     *  .replaceOnceIgnoreCase("any", "", *)      = "any"
     *  .replaceOnceIgnoreCase("aba", "a", null)  = "aba"
     *  .replaceOnceIgnoreCase("aba", "a", "")    = "ba"
     *  .replaceOnceIgnoreCase("aba", "a", "z")   = "zba"
     *  .replaceOnceIgnoreCase("FoOFoofoo", "foo", "") = "Foofoo"
     * </pre>
     */
    replaceOnceIgnoreCase(text: JString, searchString: JString, replacement: JString): JString

    /**
     * <pre>
     *  .replace(null, *, *)        = null
     *  .replace("", *, *)          = ""
     *  .replace("any", null, *)    = "any"
     *  .replace("any", *, null)    = "any"
     *  .replace("any", "", *)      = "any"
     *  .replace("aba", "a", null)  = "aba"
     *  .replace("aba", "a", "")    = "b"
     *  .replace("aba", "a", "z")   = "zbz"
     * </pre>
     */
    replace(text: JString, searchString: JString, replacement: JString): JString

    /**
     * <pre>
     *  .replaceIgnoreCase(null, *, *)        = null
     *  .replaceIgnoreCase("", *, *)          = ""
     *  .replaceIgnoreCase("any", null, *)    = "any"
     *  .replaceIgnoreCase("any", *, null)    = "any"
     *  .replaceIgnoreCase("any", "", *)      = "any"
     *  .replaceIgnoreCase("aba", "a", null)  = "aba"
     *  .replaceIgnoreCase("abA", "A", "")    = "b"
     *  .replaceIgnoreCase("aba", "A", "z")   = "zbz"
     * </pre>
     */
    replaceIgnoreCase(text: JString, searchString: JString, replacement: JString): JString

    /**
     * <pre>
     *  .replace(null, *, *, *)         = null
     *  .replace("", *, *, *)           = ""
     *  .replace("any", null, *, *)     = "any"
     *  .replace("any", *, null, *)     = "any"
     *  .replace("any", "", *, *)       = "any"
     *  .replace("any", *, *, 0)        = "any"
     *  .replace("abaa", "a", null, -1) = "abaa"
     *  .replace("abaa", "a", "", -1)   = "b"
     *  .replace("abaa", "a", "z", 0)   = "abaa"
     *  .replace("abaa", "a", "z", 1)   = "zbaa"
     *  .replace("abaa", "a", "z", 2)   = "zbza"
     *  .replace("abaa", "a", "z", -1)  = "zbzz"
     * </pre>
     */
    replace(text: JString, searchString: JString, replacement: JString, max: JInt): JString

    /**
     * <pre>
     *  .replaceIgnoreCase(null, *, *, *)         = null
     *  .replaceIgnoreCase("", *, *, *)           = ""
     *  .replaceIgnoreCase("any", null, *, *)     = "any"
     *  .replaceIgnoreCase("any", *, null, *)     = "any"
     *  .replaceIgnoreCase("any", "", *, *)       = "any"
     *  .replaceIgnoreCase("any", *, *, 0)        = "any"
     *  .replaceIgnoreCase("abaa", "a", null, -1) = "abaa"
     *  .replaceIgnoreCase("abaa", "a", "", -1)   = "b"
     *  .replaceIgnoreCase("abaa", "a", "z", 0)   = "abaa"
     *  .replaceIgnoreCase("abaa", "A", "z", 1)   = "zbaa"
     *  .replaceIgnoreCase("abAa", "a", "z", 2)   = "zbza"
     *  .replaceIgnoreCase("abAa", "a", "z", -1)  = "zbzz"
     * </pre>
     */
    replaceIgnoreCase(text: JString, searchString: JString, replacement: JString, max: JInt): JString

    /**
     * <pre>
     *   .replaceEach(null, *, *)        = null
     *   .replaceEach("", *, *)          = ""
     *   .replaceEach("aba", null, null) = "aba"
     *   .replaceEach("aba", new String[0], null) = "aba"
     *   .replaceEach("aba", null, new String[0]) = "aba"
     *   .replaceEach("aba", new String[]{"a"}, null)  = "aba"
     *   .replaceEach("aba", new String[]{"a"}, new String[]{""})  = "b"
     *   .replaceEach("aba", new String[]{null}, new String[]{"a"})  = "aba"
     *   .replaceEach("abcde", new String[]{"ab", "d"}, new String[]{"w", "t"})  = "wcte"
     *   (example of how it does not repeat)
     *   .replaceEach("abcde", new String[]{"ab", "d"}, new String[]{"d", "t"})  = "dcte"
     * </pre>
     */
    replaceEach(text: JString, searchList: JString[], replacementList: JString[]): JString

    /**
     * <pre>
     *  .replaceEachRepeatedly(null, *, *) = null
     *  .replaceEachRepeatedly("", *, *) = ""
     *  .replaceEachRepeatedly("aba", null, null) = "aba"
     *  .replaceEachRepeatedly("aba", new String[0], null) = "aba"
     *  .replaceEachRepeatedly("aba", null, new String[0]) = "aba"
     *  .replaceEachRepeatedly("aba", new String[]{"a"}, null) = "aba"
     *  .replaceEachRepeatedly("aba", new String[]{"a"}, new String[]{""}) = "b"
     *  .replaceEachRepeatedly("aba", new String[]{null}, new String[]{"a"}) = "aba"
     *  .replaceEachRepeatedly("abcde", new String[]{"ab", "d"}, new String[]{"w", "t"}) = "wcte"
     *  (example of how it repeats)
     *  .replaceEachRepeatedly("abcde", new String[]{"ab", "d"}, new String[]{"d", "t"}) = "tcte"
     *  .replaceEachRepeatedly("abcde", new String[]{"ab", "d"}, new String[]{"d", "ab"}) = IllegalStateException
     * </pre>
     */
    replaceEachRepeatedly(text: JString, searchList: JString[], replacementList: JString[]): JString

// Replace, JCharacter based
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .replaceChars(null, *, *)        = null
     *  .replaceChars("", *, *)          = ""
     *  .replaceChars("abcba", 'b', 'y') = "aycya"
     *  .replaceChars("abcba", 'z', 'y') = "abcba"
     * </pre>
     */
    replaceChars(str: JString, searchChar: JChar, replaceChar: JChar): JString

    /**
     * <pre>
     *  .replaceChars(null, *, *)           = null
     *  .replaceChars("", *, *)             = ""
     *  .replaceChars("abc", null, *)       = "abc"
     *  .replaceChars("abc", "", *)         = "abc"
     *  .replaceChars("abc", "b", null)     = "ac"
     *  .replaceChars("abc", "b", "")       = "ac"
     *  .replaceChars("abcba", "bc", "yz")  = "ayzya"
     *  .replaceChars("abcba", "bc", "y")   = "ayya"
     *  .replaceChars("abcba", "bc", "yzx") = "ayzya"
     * </pre>
     */
    replaceChars(str: JString, searchChars: JString, replaceChars: JString): JString

// Overlay
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .overlay(null, *, *, *)            = null
     *  .overlay("", "abc", 0, 0)          = "abc"
     *  .overlay("abcdef", null, 2, 4)     = "abef"
     *  .overlay("abcdef", "", 2, 4)       = "abef"
     *  .overlay("abcdef", "", 4, 2)       = "abef"
     *  .overlay("abcdef", "zzzz", 2, 4)   = "abzzzzef"
     *  .overlay("abcdef", "zzzz", 4, 2)   = "abzzzzef"
     *  .overlay("abcdef", "zzzz", -1, 4)  = "zzzzef"
     *  .overlay("abcdef", "zzzz", 2, 8)   = "abzzzz"
     *  .overlay("abcdef", "zzzz", -2, -3) = "zzzzabcdef"
     *  .overlay("abcdef", "zzzz", 8, 10)  = "abcdefzzzz"
     * </pre>
     */
    overlay(str: JString, overlay: JString, start: JInt, end: JInt): JString

// Chomping
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .chomp(null)          = null
     *  .chomp("")            = ""
     *  .chomp("abc \r")      = "abc "
     *  .chomp("abc\n")       = "abc"
     *  .chomp("abc\r\n")     = "abc"
     *  .chomp("abc\r\n\r\n") = "abc\r\n"
     *  .chomp("abc\n\r")     = "abc\n"
     *  .chomp("abc\n\rabc")  = "abc\n\rabc"
     *  .chomp("\r")          = ""
     *  .chomp("\n")          = ""
     *  .chomp("\r\n")        = ""
     * </pre>
     */
    chomp(str: JString): JString

// Chopping
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .chop(null)          = null
     *  .chop("")            = ""
     *  .chop("abc \r")      = "abc "
     *  .chop("abc\n")       = "abc"
     *  .chop("abc\r\n")     = "abc"
     *  .chop("abc")         = "ab"
     *  .chop("abc\nabc")    = "abc\nab"
     *  .chop("a")           = ""
     *  .chop("\r")          = ""
     *  .chop("\n")          = ""
     *  .chop("\r\n")        = ""
     * </pre>
     */
    chop(str: JString): JString

// Conversion
//----------------------------------------------------------------------------------------------------------------------------------------------

// Padding
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .repeat(null, 2) = null
     *  .repeat("", 0)   = ""
     *  .repeat("", 2)   = ""
     *  .repeat("a", 3)  = "aaa"
     *  .repeat("ab", 2) = "abab"
     *  .repeat("a", -2) = ""
     * </pre>
     */
    repeat(str: JString, repeat: JInt): JString

    /**
     * <pre>
     *  .repeat(null, null, 2) = null
     *  .repeat(null, "x", 2)  = null
     *  .repeat("", null, 0)   = ""
     *  .repeat("", "", 2)     = ""
     *  .repeat("", "x", 3)    = "xxx"
     *  .repeat("?", ", ", 3)  = "?, ?, ?"
     * </pre>
     */
    repeat(str: JString, separator: JString, repeat: JInt): JString

    /**
     * <pre>
     *  .repeat('e', 0)  = ""
     *  .repeat('e', 3)  = "eee"
     *  .repeat('e', -2) = ""
     * </pre>
     */
    repeat(ch: JChar, repeat: JInt): JString

    /**
     * <pre>
     *  .rightPad(null, *)   = null
     *  .rightPad("", 3)     = "   "
     *  .rightPad("bat", 3)  = "bat"
     *  .rightPad("bat", 5)  = "bat  "
     *  .rightPad("bat", 1)  = "bat"
     *  .rightPad("bat", -1) = "bat"
     * </pre>
     */
    rightPad(str: JString, size: JInt): JString

    /**
     * <pre>
     *  .rightPad(null, *, *)     = null
     *  .rightPad("", 3, 'z')     = "zzz"
     *  .rightPad("bat", 3, 'z')  = "bat"
     *  .rightPad("bat", 5, 'z')  = "batzz"
     *  .rightPad("bat", 1, 'z')  = "bat"
     *  .rightPad("bat", -1, 'z') = "bat"
     * </pre>
     */
    rightPad(str: JString, size: JInt, padChar: JChar): JString

    /**
     * <pre>
     *  .rightPad(null, *, *)      = null
     *  .rightPad("", 3, "z")      = "zzz"
     *  .rightPad("bat", 3, "yz")  = "bat"
     *  .rightPad("bat", 5, "yz")  = "batyz"
     *  .rightPad("bat", 8, "yz")  = "batyzyzy"
     *  .rightPad("bat", 1, "yz")  = "bat"
     *  .rightPad("bat", -1, "yz") = "bat"
     *  .rightPad("bat", 5, null)  = "bat  "
     *  .rightPad("bat", 5, "")    = "bat  "
     * </pre>
     */
    rightPad(str: JString, size: JInt, padStr: JString): JString

    /**
     * <pre>
     *  .leftPad(null, *)   = null
     *  .leftPad("", 3)     = "   "
     *  .leftPad("bat", 3)  = "bat"
     *  .leftPad("bat", 5)  = "  bat"
     *  .leftPad("bat", 1)  = "bat"
     *  .leftPad("bat", -1) = "bat"
     * </pre>
     */
    leftPad(str: JString, size: JInt): JString

    /**
     * <pre>
     *  .leftPad(null, *, *)     = null
     *  .leftPad("", 3, 'z')     = "zzz"
     *  .leftPad("bat", 3, 'z')  = "bat"
     *  .leftPad("bat", 5, 'z')  = "zzbat"
     *  .leftPad("bat", 1, 'z')  = "bat"
     *  .leftPad("bat", -1, 'z') = "bat"
     * </pre>
     */
    leftPad(str: JString, size: JInt, padChar: JChar): JString

    /**
     * <pre>
     *  .leftPad(null, *, *)      = null
     *  .leftPad("", 3, "z")      = "zzz"
     *  .leftPad("bat", 3, "yz")  = "bat"
     *  .leftPad("bat", 5, "yz")  = "yzbat"
     *  .leftPad("bat", 8, "yz")  = "yzyzybat"
     *  .leftPad("bat", 1, "yz")  = "bat"
     *  .leftPad("bat", -1, "yz") = "bat"
     *  .leftPad("bat", 5, null)  = "  bat"
     *  .leftPad("bat", 5, "")    = "  bat"
     * </pre>
     */
    leftPad(str: JString, size: JInt, padStr: JString): JString

    /**
     * 获取JCharSequence长度，如果JCharSequence为null，则获取0
     */
    length(cs: JCharSequence): JInt

// Centering
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .center(null, *)   = null
     *  .center("", 4)     = "    "
     *  .center("ab", -1)  = "ab"
     *  .center("ab", 4)   = " ab "
     *  .center("abcd", 2) = "abcd"
     *  .center("a", 4)    = " a  "
     * </pre>
     */
    center(str: JString, size: JInt): JString

    /**
     * <pre>
     *  .center(null, *, *)     = null
     *  .center("", 4, ' ')     = "    "
     *  .center("ab", -1, ' ')  = "ab"
     *  .center("ab", 4, ' ')   = " ab "
     *  .center("abcd", 2, ' ') = "abcd"
     *  .center("a", 4, ' ')    = " a  "
     *  .center("a", 4, 'y')    = "yayy"
     * </pre>
     */
    center(str: JString, size: JInt, padChar: JChar): JString

    /**
     * <pre>
     *  .center(null, *, *)     = null
     *  .center("", 4, " ")     = "    "
     *  .center("ab", -1, " ")  = "ab"
     *  .center("ab", 4, " ")   = " ab "
     *  .center("abcd", 2, " ") = "abcd"
     *  .center("a", 4, " ")    = " a  "
     *  .center("a", 4, "yz")   = "yayz"
     *  .center("abc", 7, null) = "  abc  "
     *  .center("abc", 7, "")   = "  abc  "
     * </pre>
     */
    center(str: JString, size: JInt, padStr: JString): JString

// Case conversion
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .upperCase(null)  = null
     *  .upperCase("")    = ""
     *  .upperCase("aBc") = "ABC"
     * </pre>
     */
    upperCase(str: JString): JString

    /**
     * <pre>
     *  .upperCase(null, Locale.ENGLISH)  = null
     *  .upperCase("", Locale.ENGLISH)    = ""
     *  .upperCase("aBc", Locale.ENGLISH) = "ABC"
     * </pre>
     */
//fixme
    // upperCase(str:JString ,locale: Locale ) :JString

    /**
     * <pre>
     *  .lowerCase(null)  = null
     *  .lowerCase("")    = ""
     *  .lowerCase("aBc") = "abc"
     * </pre>
     */
    lowerCase(str: JString): JString

    /**
     * <pre>
     *  .lowerCase(null, Locale.ENGLISH)  = null
     *  .lowerCase("", Locale.ENGLISH)    = ""
     *  .lowerCase("aBc", Locale.ENGLISH) = "abc"
     * </pre>
     */
//fixme
    // lowerCase(str:JString ,locale: Locale ) :JString

    /**
     * <pre>
     *  .capitalize(null)  = null
     *  .capitalize("")    = ""
     *  .capitalize("cat") = "Cat"
     *  .capitalize("cAt") = "CAt"
     *  .capitalize("'cat'") = "'cat'"
     * </pre>
     */
    capitalize(str: JString): JString

    /**
     * <pre>
     *  .uncapitalize(null)  = null
     *  .uncapitalize("")    = ""
     *  .uncapitalize("cat") = "cat"
     *  .uncapitalize("Cat") = "cat"
     *  .uncapitalize("CAT") = "cAT"
     * </pre>
     */
    uncapitalize(str: JString): JString

    /**
     * <pre>
     *  .swapCase(null)                 = null
     *  .swapCase("")                   = ""
     *  .swapCase("The dog has a BONE") = "tHE DOG HAS A bone"
     * </pre>
     */
    swapCase(str: JString): JString

// Count matches
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .countMatches(null, *)       = 0
     *  .countMatches("", *)         = 0
     *  .countMatches("abba", null)  = 0
     *  .countMatches("abba", "")    = 0
     *  .countMatches("abba", "a")   = 2
     *  .countMatches("abba", "ab")  = 1
     *  .countMatches("abba", "xxx") = 0
     * </pre>
     */
    countMatches(str: JCharSequence, sub: JCharSequence): JInt

    /**
     * <pre>
     *  .countMatches(null, *)       = 0
     *  .countMatches("", *)         = 0
     *  .countMatches("abba", 0)     = 0
     *  .countMatches("abba", 'a')   = 2
     *  .countMatches("abba", 'b')   = 2
     *  .countMatches("abba", 'x')   = 0
     * </pre>
     */
    countMatches(str: JCharSequence, ch: JChar): JInt

// Character Tests
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .isAlpha(null)   = false
     *  .isAlpha("")     = false
     *  .isAlpha("  ")   = false
     *  .isAlpha("abc")  = true
     *  .isAlpha("ab2c") = false
     *  .isAlpha("ab-c") = false
     * </pre>
     */
    isAlpha(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isAlphaSpace(null)   = false
     *  .isAlphaSpace("")     = true
     *  .isAlphaSpace("  ")   = true
     *  .isAlphaSpace("abc")  = true
     *  .isAlphaSpace("ab c") = true
     *  .isAlphaSpace("ab2c") = false
     *  .isAlphaSpace("ab-c") = false
     * </pre>
     */
    isAlphaSpace(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isAlphanumeric(null)   = false
     *  .isAlphanumeric("")     = false
     *  .isAlphanumeric("  ")   = false
     *  .isAlphanumeric("abc")  = true
     *  .isAlphanumeric("ab c") = false
     *  .isAlphanumeric("ab2c") = true
     *  .isAlphanumeric("ab-c") = false
     * </pre>
     */
    isAlphanumeric(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isAlphanumericSpace(null)   = false
     *  .isAlphanumericSpace("")     = true
     *  .isAlphanumericSpace("  ")   = true
     *  .isAlphanumericSpace("abc")  = true
     *  .isAlphanumericSpace("ab c") = true
     *  .isAlphanumericSpace("ab2c") = true
     *  .isAlphanumericSpace("ab-c") = false
     * </pre>
     */
    isAlphanumericSpace(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isAsciiPrJIntable(null)     = false
     *  .isAsciiPrJIntable("")       = true
     *  .isAsciiPrJIntable(" ")      = true
     *  .isAsciiPrJIntable("Ceki")   = true
     *  .isAsciiPrJIntable("ab2c")   = true
     *  .isAsciiPrJIntable("!ab-c~") = true
     *  .isAsciiPrJIntable(" ") = true
     *  .isAsciiPrJIntable("!") = true
     *  .isAsciiPrJIntable("~") = true
     *  .isAsciiPrJIntable("") = false
     *  .isAsciiPrJIntable("Ceki Gülcü") = false
     * </pre>
     */
    isAsciiPrJIntable(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isNumeric(null)   = false
     *  .isNumeric("")     = false
     *  .isNumeric("  ")   = false
     *  .isNumeric("123")  = true
     *  .isNumeric("१२३")  = true
     *  .isNumeric("12 3") = false
     *  .isNumeric("ab2c") = false
     *  .isNumeric("12-3") = false
     *  .isNumeric("12.3") = false
     *  .isNumeric("-123") = false
     *  .isNumeric("+123") = false
     * </pre>
     */
    isNumeric(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isNumericSpace(null)   = false
     *  .isNumericSpace("")     = true
     *  .isNumericSpace("  ")   = true
     *  .isNumericSpace("123")  = true
     *  .isNumericSpace("12 3") = true
     *  .isNumeric("१२३")  = true
     *  .isNumeric("१२ ३")  = true
     *  .isNumericSpace("ab2c") = false
     *  .isNumericSpace("12-3") = false
     *  .isNumericSpace("12.3") = false
     * </pre>
     */
    isNumericSpace(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .getDigits(null)  = null
     *  .getDigits("")    = ""
     *  .getDigits("abc") = ""
     *  .getDigits("1000$") = "1000"
     *  .getDigits("1123~45") = "112345"
     *  .getDigits("(541) 754-3010") = "5417543010"
     *  .getDigits("\u0967\u0968\u0969") = "\u0967\u0968\u0969"
     * </pre>
     */
    getDigits(str: JString): JString

    /**
     * <pre>
     *  .isWhitespace(null)   = false
     *  .isWhitespace("")     = true
     *  .isWhitespace("  ")   = true
     *  .isWhitespace("abc")  = false
     *  .isWhitespace("ab2c") = false
     *  .isWhitespace("ab-c") = false
     * </pre>
     */
    isWhitespace(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isAllLowerCase(null)   = false
     *  .isAllLowerCase("")     = false
     *  .isAllLowerCase("  ")   = false
     *  .isAllLowerCase("abc")  = true
     *  .isAllLowerCase("abC")  = false
     *  .isAllLowerCase("ab c") = false
     *  .isAllLowerCase("ab1c") = false
     *  .isAllLowerCase("ab/c") = false
     * </pre>
     */
    isAllLowerCase(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isAllUpperCase(null)   = false
     *  .isAllUpperCase("")     = false
     *  .isAllUpperCase("  ")   = false
     *  .isAllUpperCase("ABC")  = true
     *  .isAllUpperCase("aBC")  = false
     *  .isAllUpperCase("A C")  = false
     *  .isAllUpperCase("A1C")  = false
     *  .isAllUpperCase("A/C")  = false
     * </pre>
     */
    isAllUpperCase(cs: JCharSequence): JBoolean

    /**
     * <pre>
     *  .isMixedCase(null)    = false
     *  .isMixedCase("")      = false
     *  .isMixedCase("ABC")   = false
     *  .isMixedCase("abc")   = false
     *  .isMixedCase("aBc")   = true
     *  .isMixedCase("A c")   = true
     *  .isMixedCase("A1c")   = true
     *  .isMixedCase("a/C")   = true
     *  .isMixedCase("aC\t")  = true
     * </pre>
     */
    isMixedCase(cs: JCharSequence): JBoolean

// Defaults
//-----------------------------------------------------------------------

    /**
     * <pre>
     *  .defaultString(null)  = ""
     *  .defaultString("")    = ""
     *  .defaultString("bat") = "bat"
     * </pre>
     */
    defaultString(str: JString): JString

    /**
     * <pre>
     *  .defaultString(null, "NULL")  = "NULL"
     *  .defaultString("", "NULL")    = ""
     *  .defaultString("bat", "NULL") = "bat"
     * </pre>
     */
    defaultString(str: JString, defaultStr: JString): JString

    /**
     * <pre>
     *  .firstNonBlank(null, null, null)     = null
     *  .firstNonBlank(null, "", " ")        = null
     *  .firstNonBlank("abc")                = "abc"
     *  .firstNonBlank(null, "xyz")          = "xyz"
     *  .firstNonBlank(null, "", " ", "xyz") = "xyz"
     *  .firstNonBlank(null, "xyz", "abc")   = "xyz"
     *  .firstNonBlank()                     = null
     * </pre>
     */
    firstNonBlank<T extends JCharSequence>(values: T[]): T

    /**
     * <pre>
     *  .firstNonEmpty(null, null, null)   = null
     *  .firstNonEmpty(null, null, "")     = null
     *  .firstNonEmpty(null, "", " ")      = " "
     *  .firstNonEmpty("abc")              = "abc"
     *  .firstNonEmpty(null, "xyz")        = "xyz"
     *  .firstNonEmpty("", "xyz")          = "xyz"
     *  .firstNonEmpty(null, "xyz", "abc") = "xyz"
     *  .firstNonEmpty()                   = null
     * </pre>
     */
    firstNonEmpty<T extends JCharSequence>(values: T[]): T

    /**
     * <pre>
     *  .defaultIfBlank(null, "NULL")  = "NULL"
     *  .defaultIfBlank("", "NULL")    = "NULL"
     *  .defaultIfBlank(" ", "NULL")   = "NULL"
     *  .defaultIfBlank("bat", "NULL") = "bat"
     *  .defaultIfBlank("", null)      = null
     * </pre>
     */
    defaultIfBlank<T extends JCharSequence>(str: T, defaultStr: T): T

    /**
     * <pre>
     *  .defaultIfEmpty(null, "NULL")  = "NULL"
     *  .defaultIfEmpty("", "NULL")    = "NULL"
     *  .defaultIfEmpty(" ", "NULL")   = " "
     *  .defaultIfEmpty("bat", "NULL") = "bat"
     *  .defaultIfEmpty("", null)      = null
     * </pre>
     */
    defaultIfEmpty<T extends JCharSequence>(str: T, defaultStr: T): T

// Rotating (circular shift)
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .rotate(null, *)        = null
     *  .rotate("", *)          = ""
     *  .rotate("abcdefg", 0)   = "abcdefg"
     *  .rotate("abcdefg", 2)   = "fgabcde"
     *  .rotate("abcdefg", -2)  = "cdefgab"
     *  .rotate("abcdefg", 7)   = "abcdefg"
     *  .rotate("abcdefg", -7)  = "abcdefg"
     *  .rotate("abcdefg", 9)   = "fgabcde"
     *  .rotate("abcdefg", -9)  = "cdefgab"
     * </pre>
     */
    rotate(str: JString, shift: JInt): JString

// Reversing
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .reverse(null)  = null
     *  .reverse("")    = ""
     *  .reverse("bat") = "tab"
     * </pre>
     */
    reverse(str: JString): JString

    /**
     * <pre>
     *  .reverseDelimited(null, *)      = null
     *  .reverseDelimited("", *)        = ""
     *  .reverseDelimited("a.b.c", 'x') = "a.b.c"
     *  .reverseDelimited("a.b.c", ".") = "c.b.a"
     * </pre>
     */
    reverseDelimited(str: JString, separatorChar: JChar): JString

// Abbreviating
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .abbreviate(null, *)      = null
     *  .abbreviate("", 4)        = ""
     *  .abbreviate("abcdefg", 6) = "abc[]"
     *  .abbreviate("abcdefg", 7) = "abcdefg"
     *  .abbreviate("abcdefg", 8) = "abcdefg"
     *  .abbreviate("abcdefg", 4) = "a[]"
     *  .abbreviate("abcdefg", 3) = IllegalArgumentException
     * </pre>
     */
    abbreviate(str: JString, maxWidth: JInt): JString

    /**
     * <pre>
     *  .abbreviate(null, *, *)                = null
     *  .abbreviate("", 0, 4)                  = ""
     *  .abbreviate("abcdefghijklmno", -1, 10) = "abcdefg[]"
     *  .abbreviate("abcdefghijklmno", 0, 10)  = "abcdefg[]"
     *  .abbreviate("abcdefghijklmno", 1, 10)  = "abcdefg[]"
     *  .abbreviate("abcdefghijklmno", 4, 10)  = "abcdefg[]"
     *  .abbreviate("abcdefghijklmno", 5, 10)  = "[]fghi[]"
     *  .abbreviate("abcdefghijklmno", 6, 10)  = "[]ghij[]"
     *  .abbreviate("abcdefghijklmno", 8, 10)  = "[]ijklmno"
     *  .abbreviate("abcdefghijklmno", 10, 10) = "[]ijklmno"
     *  .abbreviate("abcdefghijklmno", 12, 10) = "[]ijklmno"
     *  .abbreviate("abcdefghij", 0, 3)        = IllegalArgumentException
     *  .abbreviate("abcdefghij", 5, 6)        = IllegalArgumentException
     * </pre>
     */
    abbreviate(str: JString, offset: JInt, maxWidth: JInt): JString

    /**
     * <pre>
     *  .abbreviate(null, "[]", *)      = null
     *  .abbreviate("abcdefg", null, *)  = "abcdefg"
     *  .abbreviate("", "[]", 4)        = ""
     *  .abbreviate("abcdefg", ".", 5)   = "abcd."
     *  .abbreviate("abcdefg", ".", 7)   = "abcdefg"
     *  .abbreviate("abcdefg", ".", 8)   = "abcdefg"
     *  .abbreviate("abcdefg", "..", 4)  = "ab.."
     *  .abbreviate("abcdefg", "..", 3)  = "a.."
     *  .abbreviate("abcdefg", "..", 2)  = IllegalArgumentException
     *  .abbreviate("abcdefg", "[]", 3) = IllegalArgumentException
     * </pre>
     */
    abbreviate(str: JString, abbrevMarker: JString, maxWidth: JInt): JString

    /**
     * <pre>
     *  .abbreviate(null, "[]", *)      = null
     *  .abbreviate("abcdefg", null, *)  = "abcdefg"
     *  .abbreviate("", "[]", 4)        = ""
     *  .abbreviate("abcdefg", ".", 5)   = "abcd."
     *  .abbreviate("abcdefg", ".", 7)   = "abcdefg"
     *  .abbreviate("abcdefg", ".", 8)   = "abcdefg"
     *  .abbreviate("abcdefg", "..", 4)  = "ab.."
     *  .abbreviate("abcdefg", "..", 3)  = "a.."
     *  .abbreviate("abcdefg", "..", 2)  = IllegalArgumentException
     *  .abbreviate("abcdefg", "[]", 3) = IllegalArgumentException
     * </pre>
     */
    abbreviate(str: JString, abbrevMarker: JString, offset: JInt, maxWidth: JInt): JString

    /**
     * <pre>
     *  .abbreviateMiddle(null, null, 0)        = null
     *  .abbreviateMiddle("abc", null, 0)       = "abc"
     *  .abbreviateMiddle("abc", ".", 0)        = "abc"
     *  .abbreviateMiddle("abc", ".", 3)        = "abc"
     *  .abbreviateMiddle("abcdef", ".", 4)     = "ab.f"
     * </pre>
     */
    abbreviateMiddle(str: JString, middle: JString, length: JInt): JString

// Difference
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .difference(null, null)          = null
     *  .difference("", "")              = ""
     *  .difference("", "abc")           = "abc"
     *  .difference("abc", "")           = ""
     *  .difference("abc", "abc")        = ""
     *  .difference("abc", "ab")         = ""
     *  .difference("ab", "abxyz")       = "xyz"
     *  .difference("abcde", "abxyz")    = "xyz"
     *  .difference("abcde", "xyz")      = "xyz"
     * </pre>
     */
    difference(str1: JString, str2: JString): JString

    /**
     * <pre>
     *  .indexOfDifference(null, null)       = -1
     *  .indexOfDifference("", "")           = -1
     *  .indexOfDifference("", "abc")        = 0
     *  .indexOfDifference("abc", "")        = 0
     *  .indexOfDifference("abc", "abc")     = -1
     *  .indexOfDifference("ab", "abxyz")    = 2
     *  .indexOfDifference("abcde", "abxyz") = 2
     *  .indexOfDifference("abcde", "xyz")   = 0
     * </pre>
     */
    indexOfDifference(cs1: JCharSequence, cs2: JCharSequence): JInt

    /**
     * <pre>
     *  .indexOfDifference(null)                                            = -1
     *  .indexOfDifference(new String[] {})                                 = -1
     *  .indexOfDifference(new String[] {"abc"})                            = -1
     *  .indexOfDifference(new String[] {null, null})                       = -1
     *  .indexOfDifference(new String[] {"", ""})                           = -1
     *  .indexOfDifference(new String[] {"", null})                         = 0
     *  .indexOfDifference(new String[] {"abc", null, null})                = 0
     *  .indexOfDifference(new String[] {null, null, "abc"})                = 0
     *  .indexOfDifference(new String[] {"", "abc"})                        = 0
     *  .indexOfDifference(new String[] {"abc", ""})                        = 0
     *  .indexOfDifference(new String[] {"abc", "abc"})                     = -1
     *  .indexOfDifference(new String[] {"abc", "a"})                       = 1
     *  .indexOfDifference(new String[] {"ab", "abxyz"})                    = 2
     *  .indexOfDifference(new String[] {"abcde", "abxyz"})                 = 2
     *  .indexOfDifference(new String[] {"abcde", "xyz"})                   = 0
     *  .indexOfDifference(new String[] {"xyz", "abcde"})                   = 0
     *  .indexOfDifference(new String[] {"i am a machine", "i am a robot"}) = 7
     * </pre>
     */
    indexOfDifference(css: JCharSequence[]): JInt

    /**
     * <pre>
     *  .getCommonPrefix(null)                                              = ""
     *  .getCommonPrefix(new String[] {})                                   = ""
     *  .getCommonPrefix(new String[] {"abc"})                              = "abc"
     *  .getCommonPrefix(new String[] {null, null})                         = ""
     *  .getCommonPrefix(new String[] {"", ""})                             = ""
     *  .getCommonPrefix(new String[] {"", null})                           = ""
     *  .getCommonPrefix(new String[] {"abc", null, null})                  = ""
     *  .getCommonPrefix(new String[] {null, null, "abc"})                  = ""
     *  .getCommonPrefix(new String[] {"", "abc"})                          = ""
     *  .getCommonPrefix(new String[] {"abc", ""})                          = ""
     *  .getCommonPrefix(new String[] {"abc", "abc"})                       = "abc"
     *  .getCommonPrefix(new String[] {"abc", "a"})                         = "a"
     *  .getCommonPrefix(new String[] {"ab", "abxyz"})                      = "ab"
     *  .getCommonPrefix(new String[] {"abcde", "abxyz"})                   = "ab"
     *  .getCommonPrefix(new String[] {"abcde", "xyz"})                     = ""
     *  .getCommonPrefix(new String[] {"xyz", "abcde"})                     = ""
     *  .getCommonPrefix(new String[] {"i am a machine", "i am a robot"})   = "i am a "
     * </pre>
     */
    getCommonPrefix(strs: JString[]): JString

// Misc
//----------------------------------------------------------------------------------------------------------------------------------------------

// startsWith
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .startsWith(null, null)      = true
     *  .startsWith(null, "abc")     = false
     *  .startsWith("abcdef", null)  = false
     *  .startsWith("abcdef", "abc") = true
     *  .startsWith("ABCDEF", "abc") = false
     * </pre>
     */
    startsWith(str: JCharSequence, prefix: JCharSequence): JBoolean

    /**
     * <pre>
     *  .startsWithIgnoreCase(null, null)      = true
     *  .startsWithIgnoreCase(null, "abc")     = false
     *  .startsWithIgnoreCase("abcdef", null)  = false
     *  .startsWithIgnoreCase("abcdef", "abc") = true
     *  .startsWithIgnoreCase("ABCDEF", "abc") = true
     * </pre>
     */
    startsWithIgnoreCase(str: JCharSequence, prefix: JCharSequence): JBoolean

    /**
     * <pre>
     *  .startsWithAny(null, null)                                   = false
     *  .startsWithAny(null, new String[] {"abc"})                   = false
     *  .startsWithAny("abcxyz", null)                               = false
     *  .startsWithAny("abcxyz", new String[] {""})                  = true
     *  .startsWithAny("abcxyz", new String[] {"abc"})               = true
     *  .startsWithAny("abcxyz", new String[] {null, "xyz", "abc"})  = true
     *  .startsWithAny("abcxyz", null, "xyz", "ABCX")                = false
     *  .startsWithAny("ABCXYZ", null, "xyz", "abc")                 = false
     * </pre>
     */
    startsWithAny(sequence: JCharSequence, searchStrings: JCharSequence[]): JBoolean

// endsWith
//----------------------------------------------------------------------------------------------------------------------------------------------

    /**
     * <pre>
     *  .endsWith(null, null)      = true
     *  .endsWith(null, "def")     = false
     *  .endsWith("abcdef", null)  = false
     *  .endsWith("abcdef", "def") = true
     *  .endsWith("ABCDEF", "def") = false
     *  .endsWith("ABCDEF", "cde") = false
     *  .endsWith("ABCDEF", "")    = true
     * </pre>
     */
    endsWith(str: JCharSequence, suffix: JCharSequence): JBoolean

    /**
     * <pre>
     *  .endsWithIgnoreCase(null, null)      = true
     *  .endsWithIgnoreCase(null, "def")     = false
     *  .endsWithIgnoreCase("abcdef", null)  = false
     *  .endsWithIgnoreCase("abcdef", "def") = true
     *  .endsWithIgnoreCase("ABCDEF", "def") = true
     *  .endsWithIgnoreCase("ABCDEF", "cde") = false
     * </pre>
     */
    endsWithIgnoreCase(str: JCharSequence, suffix: JCharSequence): JBoolean

    /**
     *
     */
    normalizeSpace(str: JString): JString

    /**
     * <pre>
     *  .endsWithAny(null, null)                                    = false
     *  .endsWithAny(null, new String[] {"abc"})                    = false
     *  .endsWithAny("abcxyz", null)                                = false
     *  .endsWithAny("abcxyz", new String[] {""})                   = true
     *  .endsWithAny("abcxyz", new String[] {"xyz"})                = true
     *  .endsWithAny("abcxyz", new String[] {null, "xyz", "abc"})   = true
     *  .endsWithAny("abcXYZ", "def", "XYZ")                        = true
     *  .endsWithAny("abcXYZ", "def", "xyz")                        = false
     * </pre>
     */
    endsWithAny(sequence: JCharSequence, searchStrings: JCharSequence[]): JBoolean

    /**
     * <pre>
     *  .appendIfMissing(null, null)        = null
     *  .appendIfMissing("abc", null)       = "abc"
     *  .appendIfMissing("", "xyz")         = "xyz"
     *  .appendIfMissing("abc", "xyz")      = "abcxyz"
     *  .appendIfMissing("abcxyz", "xyz")   = "abcxyz"
     *  .appendIfMissing("abcXYZ", "xyz")   = "abcXYZxyz"
     * </pre>
     */
    appendIfMissing(str: JString, suffix: JCharSequence, suffixes: JCharSequence[]): JString

    /**
     * <pre>
     *  .appendIfMissingIgnoreCase(null, null)      = null
     *  .appendIfMissingIgnoreCase("abc", null)     = "abc"
     *  .appendIfMissingIgnoreCase("", "xyz")       = "xyz"
     *  .appendIfMissingIgnoreCase("abc", "xyz")    = "abcxyz"
     *  .appendIfMissingIgnoreCase("abcxyz", "xyz") = "abcxyz"
     *  .appendIfMissingIgnoreCase("abcXYZ", "xyz") = "abcXYZ"
     * </pre>
     */
    appendIfMissingIgnoreCase(str: JString, suffix: JCharSequence, suffixes: JCharSequence[]): JString

    /**
     * <pre>
     *  .prependIfMissing(null, null)      = null
     *  .prependIfMissing("abc", null)     = "abc"
     *  .prependIfMissing("", "xyz")       = "xyz"
     *  .prependIfMissing("abc", "xyz")    = "xyzabc"
     *  .prependIfMissing("xyzabc", "xyz") = "xyzabc"
     *  .prependIfMissing("XYZabc", "xyz") = "xyzXYZabc"
     * </pre>
     */
    prependIfMissing(str: JString, prefix: JCharSequence, prefixes: JCharSequence[]): JString

    /**
     * <pre>
     *  .prependIfMissingIgnoreCase(null, null)      = null
     *  .prependIfMissingIgnoreCase("abc", null)     = "abc"
     *  .prependIfMissingIgnoreCase("", "xyz")       = "xyz"
     *  .prependIfMissingIgnoreCase("abc", "xyz")    = "xyzabc"
     *  .prependIfMissingIgnoreCase("xyzabc", "xyz") = "xyzabc"
     *  .prependIfMissingIgnoreCase("XYZabc", "xyz") = "XYZabc"
     * </pre>
     */
    prependIfMissingIgnoreCase(str: JString, prefix: JCharSequence, prefixes: JCharSequence[]): JString

    /**
     * 使用指定的字符编码将byte[]转换为字符串
     */
//fixme Charset
    // toEncodedString(bytes:JByte[] ,JCharset: Charset ) :JString

    /**
     * <pre>
     *  .wrap(null, *)        = null
     *  .wrap("", *)          = ""
     *  .wrap("ab", '\0')     = "ab"
     *  .wrap("ab", 'x')      = "xabx"
     *  .wrap("ab", '\'')     = "'ab'"
     *  .wrap("\"ab\"", '\"') = "\"\"ab\"\""
     * </pre>
     */
    wrap(str: JString, wrapWith: JChar): JString

    /**
     * <pre>
     *  .wrap(null, *)         = null
     *  .wrap("", *)           = ""
     *  .wrap("ab", null)      = "ab"
     *  .wrap("ab", "x")       = "xabx"
     *  .wrap("ab", "\"")      = "\"ab\""
     *  .wrap("\"ab\"", "\"")  = "\"\"ab\"\""
     *  .wrap("ab", "'")       = "'ab'"
     *  .wrap("'abcd'", "'")   = "''abcd''"
     *  .wrap("\"abcd\"", "'") = "'\"abcd\"'"
     *  .wrap("'abcd'", "\"")  = "\"'abcd'\""
     * </pre>
     */
    wrap(str: JString, wrapWith: JString): JString

    /**
     * <pre>
     *  .wrap(null, *)        = null
     *  .wrap("", *)          = ""
     *  .wrap("ab", '\0')     = "ab"
     *  .wrap("ab", 'x')      = "xabx"
     *  .wrap("ab", '\'')     = "'ab'"
     *  .wrap("\"ab\"", '\"') = "\"ab\""
     *  .wrap("/", '/')  = "/"
     *  .wrap("a/b/c", '/')  = "/a/b/c/"
     *  .wrap("/a/b/c", '/')  = "/a/b/c/"
     *  .wrap("a/b/c/", '/')  = "/a/b/c/"
     * </pre>
     */
    wrapIfMissing(str: JString, wrapWith: JChar): JString

    /**
     * <pre>
     *  .wrap(null, *)         = null
     *  .wrap("", *)           = ""
     *  .wrap("ab", null)      = "ab"
     *  .wrap("ab", "x")       = "xabx"
     *  .wrap("ab", "\"")      = "\"ab\""
     *  .wrap("\"ab\"", "\"")  = "\"ab\""
     *  .wrap("ab", "'")       = "'ab'"
     *  .wrap("'abcd'", "'")   = "'abcd'"
     *  .wrap("\"abcd\"", "'") = "'\"abcd\"'"
     *  .wrap("'abcd'", "\"")  = "\"'abcd'\""
     *  .wrap("/", "/")  = "/"
     *  .wrap("a/b/c", "/")  = "/a/b/c/"
     *  .wrap("/a/b/c", "/")  = "/a/b/c/"
     *  .wrap("a/b/c/", "/")  = "/a/b/c/"
     * </pre>
     */
    wrapIfMissing(str: JString, wrapWith: JString): JString

    /**
     * <pre>
     *  .unwrap(null, null)         = null
     *  .unwrap(null, "")           = null
     *  .unwrap(null, "1")          = null
     *  .unwrap("\'abc\'", "\'")    = "abc"
     *  .unwrap("\"abc\"", "\"")    = "abc"
     *  .unwrap("AABabcBAA", "AA")  = "BabcB"
     *  .unwrap("A", "#")           = "A"
     *  .unwrap("#A", "#")          = "#A"
     *  .unwrap("A#", "#")          = "A#"
     * </pre>
     */
    unwrap(str: JString, wrapToken: JString): JString

    /**
     * <pre>
     *  .unwrap(null, null)         = null
     *  .unwrap(null, '\0')         = null
     *  .unwrap(null, '1')          = null
     *  .unwrap("\'abc\'", '\'')    = "abc"
     *  .unwrap("AABabcBAA", 'A')   = "ABabcBA"
     *  .unwrap("A", '#')           = "A"
     *  .unwrap("#A", '#')          = "#A"
     *  .unwrap("A#", '#')          = "A#"
     * </pre>
     */
    unwrap(str: JString, wrapChar: JChar): JString

    /**
     * <pre>
     *  .toCodePoJInts(null)   =  null
     *  .toCodePoJInts("")     =  []  // empty array
     * </pre>
     */
    toCodePoJInts(str: JCharSequence): JInt[]
}


const stringUtils: StringUtils = Java.type('org.clever.hinny.core.StringUtils').Instance;


export {
    stringUtils,
}