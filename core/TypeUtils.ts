const isString = (str: any): str is string => {
    return typeof str === 'string';
}

const isNumber = (num: any): num is number => {
    return typeof num === 'number';
}

const isUndefined = (un: any): un is undefined => {
    return typeof un === 'undefined';
}

const isObject = (obj: any): obj is object => {
    return typeof obj === 'object';
}

const isBoolean = (b: any): b is boolean => {
    return typeof b === 'boolean';
}

const isFunction = (fuc: any): boolean => {
    return typeof fuc === 'function';
}

const isBigint = (big: any): big is bigint => {
    return typeof big === 'bigint';
}

const isSymbol = (sym: any): sym is symbol => {
    return typeof sym === 'symbol';
}

export {
    isString,
    isNumber,
    isUndefined,
    isObject,
    isBoolean,
    isFunction,
    isBigint,
    isSymbol,
}
