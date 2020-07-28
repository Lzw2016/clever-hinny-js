interface Module {
    /**
     * 模块的识别符，通常是带有绝对路径的模块文件名
     */
    readonly id: string;
    /**
     * 模块的完全解析后的文件名，带有绝对路径
     */
    readonly filename: string;
    /**
     * 返回一个对象，最先引用该模块的模块
     */
    readonly parent: Module | null;
    /**
     * 表示模块对外输出的值
     */
    readonly exports: any;
    /**
     * module.require() 方法提供了一种加载模块的方法，就像从原始模块调用 require() 一样
     */
    readonly require: Require;
    /**
     * 模块是否已经加载完成，或正在加载中
     */
    readonly loaded: boolean;
    /**
     * 模块的搜索路径
     */
    readonly paths: string[];
    /**
     * 被该模块引用的模块对象
     */
    readonly children: Module[];
}

interface Require {
    /**
     * 加载外部模块
     * @param id 模块ID
     */
    (id: string): any;

    /**
     * 指向所有缓存的模块
     */
    readonly cache: ModuleCache<NodeModule>;
}

/**
 * 脚本模块缓存
 */
interface ModuleCache<T> {
    /**
     * 从缓存中获取脚本模块，不存在就返回null
     *
     * @param fullPath 模块逻辑绝对路径
     */
    get(fullPath: string): Module;

    /**
     * 缓存脚本模块
     *
     * @param fullPath       模块逻辑绝对路径
     * @param module 脚本模块
     */
    put(fullPath: string, module: Module): void;

    /**
     * 清空脚本模块缓存
     */
    clear(): void;

    /**
     * 删除脚本模块缓存
     *
     * @param fullPath 模块逻辑绝对路径
     */
    remove(fullPath: string): void;
}

/**
 * 加载外部模块（用于引入模块、 JSON、或本地文件）
 */
declare const require: Require;

/**
 * 全局共享变量
 */
declare const global: any;

/**
 * 当前模块的目录名
 */
declare const __dirname: string;

/**
 * 当前模块的文件名。 这是当前的模块文件的绝对路径（符号链接会被解析）
 */
declare const __filename: string;

/**
 * 这是一个对于 module.exports 的更简短的引用形式
 */
declare const exports: any;

/**
 * 对当前模块的引用
 */
declare const module: Module;
