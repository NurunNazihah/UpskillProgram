//variables
const = name 'nurun';

function testConstant(value){
    const name=value;
    console.log('hello my name is ${value}');
}

const firstName =  ' another name';

let lastName = 'nazihah';
function testLet(value){
    let lastName = value;
    console.log('hello my name is ${lastName}');
}

let lastName = 'nazihah';

console.log(testConstant('nurun'), testLet('nazihah'));