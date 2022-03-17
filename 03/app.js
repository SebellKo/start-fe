console.log('03');

var isMan = true;

if(isMan) {
    console.log('test');
}

//
var a = 1;
var b = a;
b = 2;
console.log(a, b);

//
var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

//
var a = {x : 1};
var b = a;
b.x = 2;
console.log(a, b);

//
function byValue(count) {
    count = count + 2;
}
var count = 3;
byValue(count);
console.log(count);

//
function byReference(count) {
    count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count);

//
var isMan = true;
var gender = '';
if(isMan) {
    gender = '남자'
    console.log('남자');
}
else {
    gender = '여자';
    console.log('여자');
}

//
function log(str){
    console.log(str);
}
log('hello')


//
var isDelete = confirm('삭제하시겠습니까?');
if (isDelete) {
    //...
}

//
var a = 2;
(function() {
    var a = 1;
    console.log(a);
})()

//
var text = 'abc def ghi jkl abc def';
var testReg = /abc/;
var result = testReg.test(text);
console.log(result);