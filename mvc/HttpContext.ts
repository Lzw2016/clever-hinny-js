import { HttpRequestWrapper } from "./http/HttpRequestWrapper";
import { HttpResponseWrapper } from "./http/HttpResponseWrapper";
import { HttpSessionWrapper } from "./http/HttpSessionWrapper";
import { ServletContextWrapper } from "./http/ServletContextWrapper";

export interface HttpContext {
    /**
     * HTTP 请求对象
     */
    readonly request: HttpRequestWrapper;

    /**
     * HTTP 响应对象
     */
    readonly response: HttpResponseWrapper;

    /**
     * HTTP Session对象
     */
    readonly session: HttpSessionWrapper;
    /**
     * Servlet 容器对象
     */
    readonly servletContext: ServletContextWrapper;
}
