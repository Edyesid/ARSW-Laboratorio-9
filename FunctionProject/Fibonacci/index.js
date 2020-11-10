var bigInt = require("big-integer");
let mem = {};
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let nth0 = bigInt.zero;
    let nth1 = bigInt.one;
    mem[0] = nth0;
    mem[1] = nth1;
    mem[2] = nth1;
    let answer = bigInt.zero;

    answer = fib(nth);

    context.res = {
        body: answer.toString()
    };
}
function fib(n) {
    if (mem[n]) {
        return mem[n];
    }
    mem[n] = fib(n - 1).add(fib(n - 2));
    return mem[n];
}