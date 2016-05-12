let a = '123123';
console.log(a);

var fn = name => name;
console.log(fn(100));
class Person {
  say(){
    console.log("its me");
  }
}
class Student extends Person{
}
const s = new Student;
s.say();
