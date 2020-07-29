// declare const __FILE__: string;
// declare const __LINE__: number;
// declare const __DIR__: string;
// declare let Packages: any;

// declare function print(...message: any[]): void;
// declare function load(script: string | object);
// declare function loadWithNewGlobal(script: string | object);
// declare function exit(code?: number);
// declare function quit(code?: number);
declare function JavaImporter(...className: string[]);

declare const Java: {
    type(s: string);
    extend(...parentTypes: any[]);
    from(javaArray: any);
    to(jsArray: any[], javaType: any);
    super(type: any);
}

// interface Object {
//     setPrototypeOf(obj: object, prototype: object);
//     bindProperties(to: object, from: object);
// }

// interface Error {
//     readonly lineNumber: number;
//     readonly columnNumber: number;
//     readonly fileName: string;
//     readonly stack?: string;
//     dumpStack();
//     printStackTrace();
//     getStackTrace(): any[];
// }

// interface String {
//     trimLeft();
//     trimRight();
// }