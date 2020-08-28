// /** 事务传递方式 */
// export enum Propagation {
//     /** 如果当前没有事务，就新建一个事务，如果已经存在一个事务中，加入到这个事务中 */
//     Required,
//     /** 支持当前事务，如果当前没有事务，就以非事务方式执行 */
//     Supports,
//     /** 使用当前的事务，如果当前没有事务，就抛出异常 */
//     Mandatory,
//     /** 新建事务，如果当前存在事务，把当前事务挂起 */
//     Requires_New,
//     /** 以非事务方式执行操作，如果当前存在事务，就把当前事务挂起 */
//     Not_Supported,
//     /** 以非事务方式执行，如果当前存在事务，则抛出异常 */
//     Never,
//     /** 如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与Required类似的操作 */
//     Nested,
// }
//
// /** 数据库隔离级别 */
// export enum Isolation {
//     /** 采用数据库默认隔离级别 */
//     Default,
//     /** 读未提交的数据(会出现脏读取) */
//     Read_Uncommitted,
//     /** 读已提交的数据(会出现幻读，即前后两次读的不一样) */
//     Read_Committed,
//     /** 可重复读，会出现幻读 */
//     Repeatable_Read,
//     /** 串行化(对资源消耗较大，一般不使用) */
//     Serializable,
// }
//
// /** Transactional装饰器配置 */
// export interface TransactionalOption {
//     /** 定义使用的事务管理器 */
//     transactionManager?: string;
//     /** 定义事务传递方式，默认值：Propagation.Required */
//     propagation?: Propagation;
//     /** 定义事务隔离级别，默认值：Isolation.Default */
//     isolation?: Isolation,
//     /** 设置超时时间，单位秒，默认值：-1(使用底层事务系统的默认超时，如果不支持超时，则不支持) */
//     timeout?: number;
//     /** 是否使用只读事务，默认：false */
//     readOnly?: boolean;
//     /** 出现异常判断是否要回滚的逻辑，默认：总是需要回滚(true) */
//     rollbackFor?: boolean | ((error: any) => boolean);
// }
//
// /** Transactional装饰器配置 */
// export interface TransactionalMetadata extends Required<TransactionalOption> {
//     /** 事务名称，一个方法切面对应一个唯一的事务名称 */
//     transactionName: string;
// }
//
// export namespace TransactionalOption {
//     export function is(option: any): option is TransactionalOption {
//         return option
//             && (option.transactionManager !== undefined
//                 || option.propagation !== undefined
//                 || option.isolation !== undefined
//                 || option.timeout !== undefined
//                 || option.readOnly !== undefined
//                 || option.needRollback !== undefined
//             );
//     }
// }
//
// /** Transactional装饰器定义 */
// export interface TransactionalDecorator {
//     (option?: TransactionalOption): (target: Object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<any>) => void;
// }
//
// /** Transactional装饰器 */
// const Transactional = <TransactionalDecorator>function (option?: TransactionalOption): ClassDecorator | MethodDecorator {
//     // Transactional装饰器默认配置
//     const defaultOption: Partial<TransactionalOption> = {
//         transactionManager: "",
//         propagation: Propagation.Required,
//         isolation: Isolation.Default,
//         timeout: -1,
//         readOnly: false,
//         rollbackFor: true,
//     };
//     // Transactional装饰器配置
//     const opt: TransactionalMetadata = <TransactionalMetadata>{...defaultOption, ...option};
//     // 返回Class或者Method装饰器
//     return <ClassDecorator | MethodDecorator>function (target: any, propertyKey?: string, descriptor?: TypedPropertyDescriptor<Function>) {
//         if (target && target.prototype && propertyKey === undefined || descriptor === undefined) {
//             // Class装饰器
//             console.log("opt", opt);
//         } else if (target && propertyKey && descriptor && descriptor.value) {
//             // Method装饰器
//             console.log("opt", opt);
//         }
//     };
// }
//
// @Transactional()
// class Demo {
//
//     @Transactional()
//     t01() {
//
//     }
// }
//
// // @Transactional()
// function t01() {
//
// }
//
// // @Transactional()
// t01.aa = function () {
//
// }
//
// export {
//     Transactional,
//     t01,
//     Demo,
// }