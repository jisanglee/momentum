//alert('im alert');
//console.log('Im Working. Im JS. Im Beautiful. Im worth it');
// const a = 221;  //const변수는 상수임. 바뀌지않음.
// let b = a-5;  //let변수는 계속 바뀔수잇음.
//var c = b-1000;
//a = 4; //updated a  //cannot change a beacause a is const
//console.log(b,a,c);
//const, let, var에 관해선 
//https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d 에 좋은 설명이있다.

//변수 정리방법 camel case : ex) lowerOfWeek 소문자로 시작해서 스페이스가 필요하면 대문자로시작.

//arrray
// const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",true];
// console.log(daysOfWeek);
// console.log(daysOfWeek[2]);


//Object
// const jsInfoList = {
//   name:"Jisang",
//   age:33,
//   gender:"Male",
//   isHandsome:true,
//   favMusic:["BoyzllMen","Browneyedsoul","Melomance"],
//   favFood:[
//     { 
//       name:"Kimchi",
//       fatty:false
//     },
//     {
//       name:"cheese Burger",
//       fatty:true
//     }]
//   };
// console.log(jsInfoList);
// console.log(jsInfoList.age);
// console.log(jsInfoList.favMusic[1]);
// console.log(jsInfoList.favFood[1].name);

//function
/*
function sayHello(name,age,fav){
  //console.log('Hello!',"you have",age,"favorite is",fav);
  //console.log('hello ' + name + 'you are ' + age + 'years old ' + 'your favorite is ' + fav);
  //console.log(`hello ${name} you are ${age} years old your favorite is ${fav}`);
  return `hello ${name} you are ${age} years old your favorite is ${fav}`;
}
*/
//const greetJS = sayHello("JS",32,'guitar')
//console.log(greetJS);
//sayHello('jisang',33,'gostop');
//console.log('Hi!');
// const calculator = {
//   plus: function(a,b){
//     return a+b;
//   } ,
//   minus: function(a,b){
//     return a-b;
//   },
//   div: function(a,b){
//     return a/b;
//   },
//   multi: function(a,b){
//     return a*b;
//   },
//   expo: function(a,b){
//     return a**b;
//   },
// }
// const plus = calculator.plus(5,5)
// const minus = calculator.minus(5,5)
// const div = calculator.div(5,5)
// const multi = calculator.multi(5,5)
// const expo = calculator.expo(5,5)
// console.log(plus,minus,div,multi,expo)


//const title = document.getElementById("title");
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  const hasClass = title.classList.contains(CLICKED_CLASS);
  /*
  //const currentClass = title.className;
  //if(currentClass !== CLICKED_CLASS){
  if(hasClass){
    title.classList.remove(CLICKED_CLASS);
  }else{
    title.classList.add(CLICKED_CLASS);
  }
  */
 //toggle
 title.classList.toggle(CLICKED_CLASS);
}
/*
const BASE_COLOR = "rgb(0, 0, 0)";//"#34495e" //const 변수는 대문자로 보통 선언함.
const OTHER_COLOR = "rgb(128,128,128)";
// console.log(title);

// console.error("FFFF!!");


// title.innerHTML="Hi! Its JAVASCRIPT";
// title.style.color="red";
// console.log(title);

// console.dir(title);
// document.title = "gogogogogogo!!" // Something to  gogogogogogoo!!


//intercept

function handleResize(event){
  console.log(event);
  //console.log("i have been resized");
}

function handleClick(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }else{
    title.style.color = BASE_COLOR;
  }
}
*/
function init(){
  //title.style.color = BASE_COLOR;
  title.addEventListener("click",handleClick);
}
init();

//window.addEventListener("resize",handleResize); //()와 없음의 차이를 알아야함. ()있으면 자동적 실행. 돔 불러오면서 그냥 한번 실행하고 끗. 없으면 이 이벤트 실행따마다 함수 호출.
//title.addEventListener("click",handleClick);
/*
//if - else
if("10" === 10){
  console.log("hi");
}else if("10" === "10"){
  console.log("lalala");
}else{
  console.log("ho");
}

// && || 연산자. 
if(20 > 5 && "js" === "js"){
  console.log("yes");
}else{
  console.log("no");
}


//prompt  alert와 비슷한녀석.
const age = prompt("how old r u?");

//console.log(age);
if (age >= 18 && age <= 21){
  console.log("u can drink but u shold not")
}else if(age >21){
  console.log("u r old. keep ur health.")
}else{
  console.log("u cant")
}

*/