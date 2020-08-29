export interface HttpContext {
    /**
     * HTTP 请求对象
     */
    readonly request: JHttpServletRequest;

    /**
     * HTTP 响应对象
     */
    readonly response: JHttpServletResponse;

    /**
     * HTTP Session对象
     */
    readonly session: JHttpSession;
    /**
     * Servlet 容器对象
     */
    readonly servletContext: JServletContext;
}
