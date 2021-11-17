// const a = 6;
// const b = 2;
// let myName = "seo";
// //variable(변수)의 선언 2가지: let, const
// //const: constant(상수)-값이 바뀔수(업데이트할 수) 없음
// //let: var과 같이 바뀔수(업데이트 할 수) 있음. 바꿀때는 let을 다시 사용하지 않음
// myName = "jungMin";

// const amIFat = null; //비어있다는 null이라는 값으로 표현
// let something; //undefined 변수가 있지만 값은 없음

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// console.log(daysOfWeek[0]);

// daysOfWeek.push("sun")
// const player = {//object 객체
//     name:"nico",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// player.height=176;
// console.log(player);

// function sayHello(){
//     console.log(hello);
// }

// const age = prompt("How old are you?");
// console.log(age);

// parseInt()//"15"->15\
// const age = parseInt(prompt("How old are you?"));
// if(isNaN(age)){
//     console.log("please write a number");
// } else{
//     console.log("tank you for writing your age");
// }

const calculator={
    add: function(a, b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    }
};
calculator.add(1,2);
calculator.minus(1,2);