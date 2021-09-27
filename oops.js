// let human={
//     name:'haari',
//     legs:2
// }
// console.log(human.name,human.legs);
// human.hands=2
// console.log(human);

// let human={
//     name:"haari",
//     legs:2,
//     details:function (){
//         return `hello ${this.name} has ${this.legs}`
//     }
// }
// console.log(human.details());

// Method in objects
// let human={
//     name:'haari',
//     legs:2,
//     details:function (){ return `${this.name} has ${this.legs} legs`}
// }
// console.log(human.details());

//constructor

// class Humann{
//     constructor (name,age){
//         this.name=name
//         this.age=age
//     }
// }
// let h2 =new Humann('haari Kishann',20)
// console.log(h2);
// console.log(h2.name);

// function Human(name,age)
// {
//     this.name = name
//     this.age = age
// }
// Human.prototype.legs=2;
// let h1=new Human('haari',20)
// // h1.legs=2
// console.log(h1);
// console.log(Human.prototype);


// console.log(h1 instanceof Human);
// console.log(h1.constructor===Human);
// for (let item in h1){
//     if (h1.hasOwnProperty(item)){
//         console.log(item);
//     }
// }

// function Bird(name){
//     this.name = name;
// }
// Bird.prototype={
//     constructor:Bird,
// }

// function Animal(){}
// Animal.prototype={
//     constructor:Animal,
//     numLegs:2
// }
// Bird.prototype=Object.create(Animal.prototype)
// Bird.prototype.constructor=Bird

// let duck=new Bird("haari");
// console.log(duck.numLegs);




//Create the prototype as new object

// function Cat(name,age){
//     this.name=name;
//     this.age=age

// }
// Cat.prototype={
//     constructor:Cat,
   
// }


// function Dog(name,age){
//     this.name=name;
//     this.age=age
// }
// Dog.prototype={
//     constructor:Dog,
    
// }


// function Animal(){}
// Animal.prototype={
//     constructor:Animal,
//     describe(){
//         return `i am ${this.name}`
//     }
// }


// Cat.prototype=Object.create(Animal.prototype)
// Dog.prototype=Object.create(Animal.prototype)
// Cat.prototype.constructor=Cat;
// Dog.prototype.constructor=Dog;  

// Cat.prototype.numlegs=4;
// Dog.prototype.numlegs=4

// let c1=new Cat('jhaansi cat',20)
// let d1=new Dog('jhaansi dog',21)
// // console.log(c1.constructor===Cat);
// // console.log(Cat.prototype.isPrototypeOf(c1));
// // console.log(Object.prototype.isPrototypeOf(Cat.prototype));
// console.log(c1.numlegs);
// console.log(c1.describe());
// console.log(c1.age);





//Mixins 

// const flyMixin=function(obj){
//     obj.fly=function(){
//        return 'Im flying'
//     }
// }

// let bird={
//     name:'crow',
//     color:'black'

// }
// let plane={
//     model:'AirWings',
//     type:'2012',
//     cry:function(){
//         return 'hii iama plane'
//     }
// }
// flyMixin(bird)
// flyMixin(plane)

// console.log(bird.fly());
// console.log(plane);