export interface CookieUtils {
    /**
     * 设置Cookie
     *
     * @param response HTTP请求
     * @param path     Cookie的Path
     * @param name     名称
     * @param value    值
     * @param maxAge   Cookie生存时间，单位：秒。负数表示Cookie永不过期，0表示删除Cookie
     */
    setCookie(response: JHttpServletResponse, path: JString, name: JString, value: JString, maxAge: JInt): void;

    /**
     * 设置Cookie(path="/")
     *
     * @param response HTTP请求
     * @param name     名称
     * @param value    值
     */
    setRooPathCookie(response: JHttpServletResponse, name: JString, value: JString): void;

    /**
     * 设置Cookie(不设置path)
     *
     * @param response HTTP请求
     * @param name     名称
     * @param value    值
     */
    setCookie(response: JHttpServletResponse, name: JString, value: JString): void;

    /**
     * 获得指定Cookie的值
     *
     * @param request  请求对象
     * @param response 响应对象，设置移除Cookie时(isRemove=true),此对象不能传null
     * @param name     名字
     * @param isRemove 是否移除
     * @return Cookie值，不存在返回null
     */
    getCookie(request: JHttpServletRequest, response: JHttpServletResponse, name: JString, isRemove: JBoolean): void;

    /**
     * 获得指定Cookie的值
     *
     * @param request 请求对象
     * @param name    名称
     * @return Cookie值
     */
    getCookie(request: JHttpServletRequest, name: JString): void;

    /**
     * 获得指定Cookie的值，并删除
     *
     * @param request  请求对象
     * @param response 响应对象
     * @param name     名称
     * @return Cookie值
     */
    getCookieAndRemove(request: JHttpServletRequest, response: JHttpServletResponse, name: JString): void;
}
