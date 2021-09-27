// function temparature(celsius){
//     let fah=(9/5*celsius)+32
//     return fah
// }
// console.log(temparature(37));

// function reverseString (str){
//     // return str.split('').reverse().join('')
//     let stringArr=''
//     for (let i=str.length-1;i>=0;i--){
//         stringArr+=str[i]
//     }
//     return stringArr;
// }
// console.log(reverseString('haari'));

// function fact(num){
//     // let factotial=1
//     // for (let i=num;i>0;i--){
//     //     factotial*=i

//     // }
//     // return factotial
//     // if (num<=0){
//     //     return 1
//     // }
//     // return num*fact(num-1)
// }
// console.log(fact(5));


// function longestWord(str){
//     // let maxlen=0;
//     // str=str.split(' ')
//     // for (let i=0;i<str.length;i++){
//     //     if (str[i].length>maxlen){
//     //         maxlen=str[i].length;
//     //     }
//     // }
//     // return maxlen;
//     // return str.split(' ').reduce( (longest,a) => Math.max(longest,a.length) ,1)
//     // return Math.max(...str.split(' ').map(a => a.length))

// }
// console.log(longestWord("The quick brown fox jumped over the lazy dog"));


// function LargestArray(arr){
//     // return arr.map(a =>Math.max(...a))
//     // let newArr=[]
//     // for (let i=0;i<arr.length;i++){
//     //     let largest=arr[i][0];
//     //     for (let j=1;j<arr[i].length;j++){
//     //         if (arr[i][j]>largest)
//     //         largest=arr[i][j];
            
//     //     }
//     //     newArr.push(largest)
//     // }
//     // return newArr
//     return arr.map(a => a.reduce( (pre,curr)=> curr>pre?curr:pre))
// }
// console.log(LargestArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// function lastLetter(str,letter){
//     return str.slice(-letter.length)===letter
// }
// console.log(lastLetter("Bastian", "n"));

// function repeatString(str,num){
//     // let newstr=''
//     // for (let i=0;i<num;i++){
//     //     newstr+=str
//     // }
//     // return newstr
//     if (num===0){
//         return ''
//     }
//     return str+repeatString(str,num-1)
// }
// console.log(repeatString("abc", 0));

// function truncate(str,num){
//     // return str.slice(0,num)+'...'
//     return str.length>num ? str.slice(0,num)+'...':str
// }
// console.log(truncate("A-tisket a-tasket A green and yellow basket", 25))

// function findElement(arr,func){
//     // for (let i=0;i<arr.length;i++){
//     //     if (func(arr[i])){
//     //         return arr[i]
//     //     }
//     // }

//     // return arr.filter(func) 
//     return arr.find(func) //it returns the first element which satisfied the condition
    
// }
// console.log(findElement([1,2,3,4],(a)=>a%2===0))

// function booWho(bool){
//     if (bool){
//         return true
//     }
//     return false
// }
// console.log(booWho(-1));

// let arr=[1,2,3,4,5]
// let myObj={name:'harri',age:20}
// // // arr=arr.lastIndexOf()
// // console.log(arr.lastIndexOf(a =>a>2));
// for (let i in arr) {
//     console.log(arr[i]);
// }

// function letterCase(str){
//     return str.split(' ').map( a => a.replace(a[0],a[0].toUpperCase())).join(' ')
// }
// console.log(letterCase("I'm a little tea pot"));

// function spice(arr1,arr2,num){
//     // let arr3=arr2.slice()
//      arr2.splice(num,0,...arr1)
//      return arr2
// }
// console.log(spice([1, 2], ["a", "b"], 1));

// function falsy(val)
// {
//     if (val){
//         return true
//     }
//     return false
// }
// console.log(falsy(0));

// function getIndex(arr,n){
//     // arr=arr.sort(((a, b) => a - b))
//     // for (let i=0;i<arr.length;i++){
//     //     if (arr[i]>=n){
//     //         return i
//     //     }
//     // }
//     arr.push(n);
//     arr.sort((a, b) => a - b)
//     return arr.indexOf(n)
  

// }
// console.log(getIndex([5,3,20,3],5));


// function Every(arr){
//     // return arr[1].toLowerCase().split('').every( a =>arr[0].indexOf(a)!=-1)
    
// }
// console.log(Every(["hello","Hello"]));

// function copy(arr,num){
//     let newArr=[];
//     for (let i=0;i<arr.length;i+num){
//         newArr.push(arr.splice(i,i+num))
//     }
//     return newArr
// }
// console.log(copy(["a", "b", "c", "d"], 2));

// console.log([11,2,'apple',true]);


// let dog= {
//     name:'foxy',
//     age :25,
//     sayAge () {
//         return `${this.name} is ${this.age} old`
//     }
// }
// console.log(dog.sayAge())


//CONSTRUCTOR

//constructor is afunction that is used to create new objects and properties and behaviour 
//small difference between Normal function and constructor function is function_name is written is started with Capitalize letter.

// function Bird(name,age,legs){
//     this.birdName=name;
//     this.birdAge=age;
//     this.legs=legs
// }
// let kiwi=new Bird('kiwi',2,5)
// console.log(kiwi);
// console.log(kiwi instanceof Bird);
// for (let item in kiwi){
//     console.log(item);
// }


// function Bird(name,age){
//     this.birdName=name;
//     this.birdAge=age;
//      //This helps us without duplicating the property every time when new instance is created it saves memory.
// }
// Bird.prototype.numlegs=2
// let bird1=new Bird("jhaansi",20)
// console.log(bird1.numlegs);
// // console.log(bird1.hasOwnProperty(bird1.numlegs));
// // console.log(bird1 instanceof Bird);
// // console.log(bird1.constructor===Bird);
// // console.log(bird1.hasOwnProperty(bird1.birdName));
// let arr=[]
// for (let item in bird1){
//     // if (bird1.hasOwnProperty(item))
//     // {
//     //     arr.push(item)
//     // }
//     console.log(item);
// }
// console.log(arr);



//proptype can also use to create new objects
// function Bird(name,color){
    
//     this.birdName=name,
//     this.color=color,
//     Bird.prototype={
//         constructor:Bird,
//         numlegs:2,
//         wings () {return `i have 2 wings`},
//         tail (){return `i have one tail`}
//     }
// }
// let bird1=new Bird('jhaansi','black')
// let bird2=new Bird('Haari','White')
// // console.log(bird1.wings())
// // console.log(bird1 instanceof Bird);
// // console.log(bird1.constructor===Bird);
// // console.log(bird2 instanceof Bird);
// // console.log(bird2.constructor===Bird);
// console.log(Bird.prototype.isPrototypeOf(bird2));



// function Bird(name,color){
//     this.birdName=name;
//     this.color=color;
//     // Bird.prototype={
//     //     // constructor:Bird,
//     //     numlegs:2,
//     //     wings () {return `i have 2 wings`},
//     //     tail (){return `i have one tail`}
//     // }
// }
// let bird1=new Bird('jhaansi','black')
// console.log(bird1 instanceof Bird);
// console.log(Bird.prototype.isPrototypeOf(bird1))
// console.log(typeof Bird.prototype);
// console.log(Object.prototype.isPrototypeOf(Bird.prototype));




//DRY Do not repeat Yourself Here we are using two constructors and theprototype has describe method returning the same so we will create another constructor and place the method there.it helps us to not repeat

// function Bird(name,color){
//     this.name=name;
//     this.color=color;
// }
// Bird.prototype={
//     constructor:Bird,
    
// }
// function Dog(name,color){
//     this.name=name;
//     this.color=color
// }

// Dog.prototype={
//     constructor:Dog,
// }
// function Animal(){}
// Animal.prototype={
//     constructor:Animal,
//     represent(){
//             return `My name is ${this.name}`
//         }
// }
// Bird.prototype=Object.create(Animal.prototype);
// Dog.prototype=Object.create(Animal.prototype)
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;
// Bird.prototype.numlegs=2
// Bird.prototype.fly=function (){
//     return "I am FLying"
// }
// Dog.prototype.numlegs=4


// let bird1=new Bird('haari','whitw');
// let dog1=new Dog("kishann",'black')


// console.log(bird1.represent());
// console.log(dog1.represent());
// console.log(Bird.prototype.constructor=Bird);
// console.log(bird1.color);
// console.log(bird1.numlegs)
// console.log(dog1.numlegs);
// console.log(bird1.fly());
// console.log(Bird.prototype);



//Method Overidden 

// function Bird(name,color){
//     this.name=name;
//     this.color=color;
// }
// Bird.prototype={
//     constructor:Bird,
// }
// function Animal(){}
// Animal.prototype={
//     describe(){
//         return `Animals Can't fly`
//     }
// }
// Bird.prototype=Object.create(Animal.prototype)
// Bird.prototype.constructor=Bird;
// Bird.prototype.describe=function (){
//     return `BIrds can fly`
// }

// let amigo= new Bird('jhaansi','red')
// console.log(amigo.describe());
// amigo.legs=2
// console.log(amigo);


// MIXIN are used to give Common Behaviour for unrelated objects while inheritance give common behaviour to related objects

// let bird={
//     name:'duck',
//     numLegs:2
// }
// let plane={
//     name:'Aero_plane',
//     type:'fighter'
// }

// let mixin=function (object){
//     object.fly=function(){
//         return `woooi`
//     }
// }
// console.log(bird.name);
// console.log(mixin(bird));
// console.log(bird.fly());


//Closure used to protect properties within an object from modifying externally

// function Bird(){
//     let numLegs=2;
//     this.getnumLegs=function () {
//         return numLegs
//     };

// }
// let amigo=new Bird();
// console.log(amigo.getnumLegs());


//IIFE Immediate Invoked Function Expression
// (() => {
//     console.log('hii');
// })
// ();
//Using IIfe can create module for mixins

// let bird={
//     name:'haari',
//     age:'20'
// }
// let bike={
//     name:'Triumph',
//     age:'10'
// }
// let newModule=(function (){
//     return {
//         sound(obj){
//             obj.sound=function(){
//                 return 'ummmhhhh'
//             }
//         },
//         speed(obj){
//             obj.speed=function(){
//                 return '100mph'
//             }
//         },
        
//     }
// })();
// newModule.sound(bike)
// console.log(bike.sound());

