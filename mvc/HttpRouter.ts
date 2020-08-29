import { HttpContext } from "./HttpContext";

export enum HttpMethod {
    /**
     * GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据
     */
    GET = "GET",
    /**
     * HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体
     */
    HEAD = "HEAD",
    /**
     * POST方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用
     */
    POST = "POST",
    /**
     * PUT方法用请求有效载荷替换目标资源的所有当前表示
     */
    PUT = "PUT",
    /**
     * DELETE方法删除指定的资源
     */
    DELETE = "DELETE",
    /**
     * CONNECT方法建立一个到由目标资源标识的服务器的隧道
     */
    CONNECT = "CONNECT",
    /**
     * OPTIONS方法用于描述目标资源的通信选项
     */
    OPTIONS = "OPTIONS",
    /**
     * TRACE方法沿着到目标资源的路径执行一个消息环回测试
     */
    TRACE = "TRACE",
    /**
     * PATCH方法用于对资源应用部分修改
     */
    PATCH = "PATCH",
}

/**
 * 处理Http请求
 */
export interface HttpHandle {
    (ctx: HttpContext): any;
}

/**
 * Http请求处理器定义
 */
export interface HttpRouter {
    /**
     * 支持的 HttpMethod
     */
    method?: HttpMethod | HttpMethod[];
    /**
     * 处理method属性定义Http请求，未定义method属性则是默认的请求处理函数
     */
    handle?: HttpHandle;
}

/**
 * Http请求处理器定义
 */
export interface HttpRouter {
    /**
     * 处理 GET 请求
     */
    get?: HttpHandle;
    /**
     * 处理 HEAD 请求
     */
    head?: HttpHandle;
    /**
     * 处理 POST 请求
     */
    post?: HttpHandle;
    /**
     * 处理 PUT 请求
     */
    put?: HttpHandle;
    /**
     * 处理 DELETE 请求
     */
    delete?: HttpHandle;
    /**
     * 处理 CONNECT 请求
     */
    connect?: HttpHandle;
    /**
     * 处理 OPTIONS 请求
     */
    options?: HttpHandle;
    /**
     * 处理 TRACE 请求
     */
    trace?: HttpHandle;
    /**
     * 处理 PATCH 请求
     */
    patch?: HttpHandle;
}