export interface AssertUtils {
    /**
     * 断言表达式的值是 true
     */
    isTrue(expression: JBoolean, message: JString): void;









}


const assertUtils: AssertUtils = Java.type('org.clever.hinny.core.AssertUtils').Instance;


export {
    assertUtils,
}