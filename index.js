function add (x, y) {
    return x + y;
}
function subtract (x, y) {
    return x - y;
}
function multiply (x, y) {
    return x * y;
}
function divide (x, y) {
    return x / y;
}
let i = 1;
function increment(n) {
    n++;
    return n;
}
i = increment(1);
let d = 1;
function decrement(n) {
    n--;
    return n;
}
d = decrement(1);

function makeInt(n) {
return parseInt (n, 10);
}
function preserveDecimal(n) {
    return parseFloat (n);
}