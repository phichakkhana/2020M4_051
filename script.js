let stored = "0";
let current = "0";
let operation = 0;
let MaxLength = 10;

function addDigit(dig_obj) {
    dig = dig_obj.value;
    if (current.length > MaxLength) {
        current = "Too long";
    } else if (eval(current) == 0 && current.indexOf(".") == -1) {
        current = dig;
    } else {
        current = current + dig;
    }
    document.getElementById("display").innerHTML = current;
}
function addDot() {
    if (current.length == 0) {
        current = "0.";
    } else if (current.indexOf(".") == -1) {
        current = current + ".";
    }
    document.getElementById("display").innerHTML = current;
}
function clearDisp() {
    stored = "0";
    current = "0";
    document.getElementById("display").innerHTML = current;
}
function operate(op_obj) {
    op = op_obj.value;
    if (op.indexOf("+") > -1) { operation = 1; }
    if (op.indexOf("-") > -1) { operation = 2; }
    if (op.indexOf("*") > -1) { operation = 3; }
    if (op.indexOf("/") > -1) { operation = 4; }
    stored = current;
    current = "";
}
function calculate() {
    tmp = current;
    if (operation == 1) { current = eval(stored) + eval(current); };
    if (operation == 2) { current = eval(stored) - eval(current); };
    if (operation == 3) { current = eval(stored) * eval(current); };
    if (operation == 4) { current = eval(stored) / eval(current); };
    if (current.toString().length > MaxLength) {
        current = "Too long";
    }
    document.getElementById("display").innerHTML = current;
    stored = current;
}
function toggle() {
    current = -1 * current;
    document.getElementById("display").innerHTML = current;
}
function percent() {
    current = current / 100;
    document.getElementById("display").innerHTML = current;
}
function x2() {
    current = current * current;
    document.getElementById("display").innerHTML = current;
}
function xx() {
    current = Math.pow(2, current);
    document.getElementById("display").innerHTML = current;
}
function x10() {
    current = Math.pow(10, current);
    document.getElementById("display").innerHTML = current;
}
function x1() {
    current = 1 / current;
    document.getElementById("display").innerHTML = current;
}
function xroot2() {
    current = Math.sqrt(current);
    document.getElementById("display").innerHTML = current;
}
function baselog() {
    current = Math.log(current);
    document.getElementById("display").innerHTML = current;
}
document.getElementById("clear").addEventListener("click", clearDisp);
document.getElementById("dot").addEventListener("click", addDot);
document.getElementById("eval").addEventListener("click", calculate);
document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("percent").addEventListener("click", percent);
document.getElementById("x2").addEventListener("click", x2);
document.getElementById("2x").addEventListener("click", xx);
document.getElementById("10x").addEventListener("click", x10);
document.getElementById("1/x").addEventListener("click", x1);
document.getElementById("2√x").addEventListener("click", xroot2);
document.getElementById("lnx").addEventListener("click", baselog);
let all_num = document.getElementsByClassName("num")
for (let i = 0; i < all_num.length; i++) {
    all_num[i].addEventListener("click", function () { addDigit(this); });
}
let all_ops = document.getElementsByClassName("ops")
for (let i = 0; i < all_ops.length; i++) {
    all_ops[i].addEventListener("click", function () { operate(this); });
}