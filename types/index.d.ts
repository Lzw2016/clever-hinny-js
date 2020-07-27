// 发布到@types http://definitelytyped.org/guides/contributing.html

interface Console {
    /**
     * XXXXXXXXXXX
     */
    log(message?: string): void;
}

interface Require {
    (id: string): any;


}

declare const console: Console;

declare const require: Require;