// let myData=123;
// let myDat=321;
// console.log(myData);

// 'use strict';
// var myDat=123
// console.log(myDat)

// var printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// let i='Global scope';
// function checkScope() {
//     'use strict';
//      i = 'function scope';
//     if (true) {
//      let i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return ;
//   }
//   checkScope()
// console.log(i)
// let i=1;
//  i=2;
// console.log(i)

// let myArr=[1,2,3];
// myArr=[5,6,7]
// console.log(myArr)

// const myArr=[1,2,3]
// Object.freeze(myArr)
// myArr[3]=4;
// // myArr.push(4)
// console.log(myArr);
// const myArr={
//     'name':'Haari'
// }
// Object.freeze(myArr)
// myArr.name='Kishann'
// console.log(myArr);

// const myDate=()=>{ return new Date();}
// console.log(myDate())
/* In Arrow Fuction if there is nobody in the function then there is no need to use brackets and return statement */
// const mydate= () => new Date();
// console.log(mydate());
// const addString=(string1,string2)=>{
//     return string1+string2;
// }
// console.log(addString('Haari',' Kishann'))


// const singleParameter= item=> item*120;
// console.log(singleParameter(10));

// function myFun(name=' Haari') {
//     return 'HELLO'+name;
// }
// console.log(myFun(' HaariKishann'));

// const myFun=(num1,num2=4)=>num1+num2;
// console.log(myFun(1,4))

//rest parameter
// const myFun=(...args) =>{ 
//     args[3].push(4) 
//     return args
// };
// console.log(myFun(1,2,'Haari',[1,5,10],{name:'Kishann'}));
// const sum= (...args) => args.reduce((a,b)=>a+b,0);
// console.log(sum(1,2,3,4,5));
// const sum= (...args) => args.reduce((a,b)=>a+b);
// console.log(sum([1,2,3,4,5,6]));
// const sum= [1,2,3,4]
// const add =function (a,b){
//     return a+b;
// }
// console.log(sum.reduce(add,0))


//spread opertor
// const myArr=['JAN', 'FEB', 'MAR', 'APR', 'MAY'];;
// let myArr1;
// myArr1=myArr;
// console.log(myArr1)

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2 
// arr2 = [...arr1];  // Change this line
// console.log(...arr2);

// var myArr=['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// var myArr1=[...myArr]
// console.log(myArr1)
// console.log(myArr+myArr1)
// console.log(...myArr,...myArr1)
// console.log(...myArr1)
// console.log(myArr.push('june'));

// const myArr=[1,2,3,4,5]
// console.log(Math.max(...myArr))


//Destructing Assignment; it works only for objects or Dictionary;
// const user={name:'haari',age:20,dept:'cse',clg:'SSE'}
// const {name,age,clg,dept}=user;
// console.log(name);
// console.log(age);
// console.log(clg);
// user.name='kishann';
// console.log(user);
// console.log(dept);
// console.log(name);

// const user={name:'haari',age:20,dept:'cse',clg:'SSE'}
// const {name:username,clg:userclg}=user;
// // user.name='kishann';
// // console.log(name);

// // console.log(clg);
// console.log(username);
// console.log(user);
// console.log(username);
// console.log(userclg);

// const userDetails={
//     haari:{
//         age:20,
//         branch:'cse'
//     }
// }
// const {haari:{age:userAge,branch:userBranch},haari} =userDetails;
// console.log(haari);
// console.log(userAge);


// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
// const {yesterday:dayBeforeYesterday,today:{low,high},tomorrow}=LOCAL_FORECAST;
// console.log(dayBeforeYesterday,low,tomorrow);

// const myArr=[1,2,3,4,5]
// console.log(...myArr)
// console.log(myArr)
// // const [a,b,c,,d]=[1,2,3,4,5]
// const [a,b,...arr]=myArr;
// console.log(a,b,arr);
// console.log(a,b,c,d);

// function destructure(forecast){
    
// }
// const destructure= ({yesterday:{low,high},today:{low:todayLow,high:todayHigh}}) => {
//     console.log('Todays Lowest Tem is '+todayLow+' Todays Highest tem '+todayHigh);
// }
// destructure({yesterday: { low: 61, high: 75 },today: { low: 64, high: 77 },tomorrow: { low: 68, high: 80 }})

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
//   const add=({max,min }) => max+min;
//   console.log(add(stats));

// const stats1=[1,2,3,4,5,6]
// const add1= ([a,b]) => a+b;
// console.log(add1(stats1));


//Template literals

// const user={name:'haari',age:20}
// const messege='Hey my name is ${}'+user.name+' and my age is'+user.age;
// console.log(messege);
// const templateLiteral=`hello myself ${user.name} 
// and my age is ${user.age}`
// console.log(templateLiteral);


//Object Literals
// const myObject= (x,y) => ({x,y})
// console.log(myObject(10,5))
// const details= (name,age,branch,clg)=>({name,age,branch,clg})
// console.log(details('Haari',20,'CSE','SSE'))

//concise declaraive functions 
// const myObject= {
//   name:'haari',
//   myFun (rename){
//     this.name=rename;
//     // return this.name;
//   }
// };
// myObject.myFun('Kishann')
// console.log(myObject.name);  
// console.log(myObject);

// class syntax is used crate objects
// class spaceShuttle{
//   constructor(name,branch,phn,clg){
//     this.name=name
//     this.branch=branch
//     this.phn=phn
//     this.clg=clg

//   }
// }
// const data=new spaceShuttle('haari','cse',48989865,'sse')
// const data1=new spaceShuttle('kishann','cse',48989865,'sse')
// console.log(data,data1);
// console.log(data.name,data.clg)
// data.x=2;
// console.log(data.x)
// console.log(data);

// const objectSpace=(name,branch,phn,clg)=> ({name,branch,phn,clg}) using object literls
// console.log(objectSpace('haari','cse',9182794922,'sse'));

// class spaceShuttle{
//   constructor(x){
//     this._x=x
//   }
//   get writer() {
//     return this._x
//   }
//   set writer(updatedX){
//     this._x=updatedX;
//   }
// }
// const data=new spaceShuttle(1)
// console.log(data.writer)
// data.writer=2;
// console.log(data.writer)

// class myClass {
//     constructor (name,age){
//         this._name=name
//         this._age=age
//     }
//     get data(){
//         return this._name;
//     }
//     set data(name){
//         this._name=name
//     }
// }
// const stud=new myClass('haari',20)
// console.log(stud);
// console.log(stud.data);
// stud.data='kishann';
// console.log(stud);
// console.log(stud.data);

// class Themostat{
//     constructor (fahrenheit,celsius){
//         this.fahrenheit=celsius * 9.0 / 5 + 32
//         this.celsius=5/9 * (fahrenheit - 32)
//     }
// }
// const temp=new Themostat(100,37.77777777777778);
// console.log(temp);
// console.log(temp.celsius);


//using type=module we can export the function or variable.
// export const upperCase= (string)=> string.toUpperCase()
// export const lowerCase=(string)=> string.toLowerCase()

// const upperCase= string => string.toUpperCase();
// const lowerCase=string => string.toLowerCase();
// console.log(upperCase('haari'));
// console.log(lowerCase('Haari'));

// export {upperCase,lowerCase}

// const add=(a,b) => a+b;
// const sub=(a,b) => a-b;
// export {add,sub}

// export default function add(a,b){
//     return a+b;
// }
// export default function (a,b){
//     return a+b
// }


//promises .....we use promises to do something usually asyncronously.promises is a constructor for it we passed other function as argument.

// const myPromises= new Promise((resolve,reject)=>{
//     let serverRequest=true;
//     if (serverRequest){
//         resolve('Data Recived')
//     }
//     else {
//         reject("Data not received")
//     }
// })
// // console.log(myPromises);
// myPromises.then((result)=>{
//     console.log(result)
// })
// myPromises.catch(error=>{
//     console.log(error);
// })

const myprom=new Promise( (success,denied)=>{
    let serverRequest=true;
    if (serverRequest){
        success('Successs daata is receiving')
    }
    else{
        denied('Denied the process')
    }
})
myprom.then( (output)=> {
    console.log(output);
})

