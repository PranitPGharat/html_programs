const person={
    name:"diablo",
    age:100,
    email:"diablo@charllote.com"
}
console.log(person.name+" "+person.email+" "+person.age);//st1
//adding object destructure
const {name,age,email}=person;
console.log(name+" "+age+"  "+email+"");//st2