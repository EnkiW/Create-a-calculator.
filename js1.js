let op;

function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    document.getElementById("result").innerHTML = result;
}
let nums1 = [];
let txt1 = document.getElementById('num1')
function setNum1(num) {
    nums1.push(num)
    txt1.value += num
    txt1.placeholder += num

}
function del1() {
    txt1.placeholder = ""
    txt1.value = ""
}
let nums2 = [];
let txt2 = document.getElementById('num2')

function setNum2(num) {
    nums2.push(num)
    txt2.value += num
    txt2.placeholder += num

}

function del2() {
    txt2.placeholder = ""
    txt2.value = ""
}
