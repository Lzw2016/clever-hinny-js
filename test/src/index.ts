import { a as aa } from '../../core/src/a';

console.count();

console.timeLog("", aa)

const a: String = '12';

console.log(a)

const log = LoggerFactory.getLogger("aaa");

log.debug("aaaa = {}", 121);


var js01 = require("./01");

var fuc = function (a: number, b: number) {
    var sum = a + b + js01.fuc(a, b);
    print(a + "+" + b + "+fuc(a, b) = " + sum);
    return sum;
}

exports.a1 = "a111111";
exports.a2 = "a222222";
exports.fuc = fuc;










