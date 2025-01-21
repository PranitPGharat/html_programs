// var a=10;
// console.log("a value is ="+a);
// var a=20;
// console.log("a value is ="+a);

// let a=10;
// console.log("a value is ="+a);
// var a="vasantdada";
// console.log("a value is ="+a);
//output:
// var a="vasantdada";
//     ^

// SyntaxError: Identifier 'a' has already been declared
// for(var a=0;a<=5;a++){
//     console.log("a value is ="+a)//here scope of "a" variable is local
// }
// console.log("a value is="+a)//here scope of "a" global

//note: let keyword scope is only inside of the block
const a=10;
a=a+5;
console.log("a value is="+a);
//output: a=a+5;TypeError: Assignment to constant variable.at Object