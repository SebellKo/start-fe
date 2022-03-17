function Create(arrToCreate, todo) {
    arrToCreate.push(todo);
}

var arrCreate = [];
var todo = '게임';
Create(arrCreate, todo);

console.log(arrCreate);
//

function Read(arrToRead) {
    arrToRead.forEach(function(todo) {
        console.log(todo);
    })
}

var arrRead = ['a', 'b', 'c'];

Read(arrRead);
//

var arrUpdate = ['운동', '게임'];
var beforeTodo = '게임';
var afterTodo = '공부';

function Update(arrToUpdate = [], afterTodo, beforeTodo) {
    var resultArr = [...arrToUpdate];
    for(var i = 0; i < arrToUpdate.length; i++) {
        if (arrToUpdate[i] === beforeTodo) {
            resultArr[i] = afterTodo;
        }
    }
    return resultArr;
}
var result = Update(arrUpdate, afterTodo, beforeTodo);
console.log(result);
//

var arrDelete = ['운동', '공부', '게임'];
var deleteTodo = '공부';

function Delete(arrToDelete = [], deleteTodo) {
    var resultArr = [...arrToDelete];
    var deleteIndex = resultArr.findIndex(function(todo) {
        return todo === deleteTodo;
    });
    resultArr.splice(deleteIndex, 1);
    return resultArr;
}

var result = Delete(arrDelete, deleteTodo);
console.log(arrDelete);
console.log(result);