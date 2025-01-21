// const arr=["one","two","three","four","five"]
// const newarr=["six","seven",...arr];
// console.log(newarr);

// const sayHI=()=>{console.log("it is sayHI function")}
// const sayHELLO=()=>{
//     console.log("it is sayHELLO function");sayHI();
// console.log("end of the hello function");
// }
// sayHELLO();

//asynchronous process
const sayHi=()=>{
    console.log("It is sayHi function")
}

const sayHello=()=>{
    console.log("begining of the sayHello")
    setTimeout(()=>{      
    sayHi();
    }
    ,5000)
console.log("End of the say Hello function");
}

sayHello();