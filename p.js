// var myVar;
// console.log(myVar+2);
// var myVar=10;
// myVar--
// console.log(myVar);
// var myVar="Hello My name is \"HAari Kishann Reddy\"";
// console.log(myVar);
// myVar='Hello my name is "Don Bako".'
// myVar='Hello my name\'s "Don Bako"';
// var myVar = '<a href="http://www.example.com" target="_blank">Link</a>';
// var myArray=[1,2,3,4]
// myArray.push([5])

// console.log(myArray);

// var myVar="world"
// function fName() {
//     var myVar="Hello";
//     console.log(myVar);
// }
// fName();
// console.log(myVar);
// var sum=5;
// function addSum(num) {
//     return (num+3)/2;
// }
// console.log(addSum(5));
// function nextLine(myArray,item)
// {
//     myArray.push(item);
//     myArray.shift();
//     return myArray;
// }
// var myArray=[1,2,3,4,5];
// console.log("Original Queue:",myArray);
// console.log(nextLine(myArray,6));
// console.log("After :",myArray);
// console.log("Before: " + JSON.stringify(myArray));
// console.log(nextLine(myArray, 7));
// console.log("After: " + JSON.stringify(myArray));

// function isEqual(val) {
//     if (val=='2'){
//         console.log(typeof(val))
//         return val;
//     }    
//     return "MATCH ERROR";
// }
// console.log(isEqual(''));

// function compareEquality(a,b) {
//     if (a===b){
//         return "Both are equal"
//     }
//     return 'A and B not Equal'
// }
// console.log(compareEquality(10,10))


// function notEquality(val) {
//     if (val!=99) {
//         return "Not Equal";
//     }
//     return "Equal";
// }
// console.log(notEquality('99'))

// function greaterThan(val) {
//     if (val>100){
//         return 'Value is greater than 100'
//     } 
//     else if(val>10){
//         return 'Value is grateet than 10'
//     }
//     return 'value is 0 or less than 0'
    
// }
// console.log(greaterThan('15'))


// function lesserThan(val) {
//     if (val<10){
//         return 'value less than 10'
//     }
//     if (val<100){
//         return 'value less than 100'
//     }
//     return 'Less than 0'
// }
// console.log(lesserThan(14))

// if (5<0 || 4<0){
//     return undefined;
// }

// var myDogs={
//     name:"Haari",
//     degree:"Cse",
//     course:"Full stack Javascript"
// }
// console.log(myDogs);
// myDogs.clg="SSE"
// console.log(myDogs.hasOwnProperty('clg'));
// console.log(myDogs)
// myDogs.hasOwnProperty

// function my(obj,prop){
//     if (obj.hasOwnProperty(prop)){
//         return obj.prop;
//     }
//     else{
//         return 'Error'
//     }
    
// }
// console.log(my({name:'Haari',age:20,clg:'sse'},'name'));



// function checkObj(obj,prop) {
//     if (obj.hasOwnProperty(prop)){  
//         return obj[prop]
//     }
//     else{   
//         return 'Not Found'
//     }
// }
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));

// var myMusic=[
//     {
//         'name':'Haari',
//         'roll no':191711074,
//         'College':'SSE',
//         'courses':[]
        
//     },
//     {
//         'name':'Kishann',
//         'roll no':191711074,
//         'College':'SSE'
        
//     }
// ];
// console.log(myMusic[0].dept='CSE')
// console.log(myMusic[0].courses.push('Maths'))
// console.log(myMusic)


// var collection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(object, id, prop, value) {
   
//     object[id][prop]=value;
  
//     return object;
//   }
  
// console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));

// var myArray=[]
// var i=0;
// while(i<6){
//     myArray.unshift(i)
//     i++;
// }
// console.log(myArray)

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i=0;i<arr.length;i++){
      for (var j=0;j<arr[i].length;j++){
        product *=arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));


// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }  
// console.log(multiply([1,2,3,4,5],5))



// function sum(arr, n) {
//   // Only change code below this line
//   if (n<=0){
//     return 0;
//   }
//   else{
//     return sum(arr,n-1)+arr[n-1];
//   }
//   // Only change code above this line
// }
// console.log(sum([1,2,3,4,5],5))


// var contacts = [
//   {
//       "firstName": "Akira",
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];
// function lookUpProfile(name, prop){
//   // Only change code below this line
//   for (var i=0;i<contacts.length;i++){
//     if (contacts[i].firstName==name){
//       return contacts[i][prop] || 'No Such Property'
//     }
//   }
//   return 'No such contact'
//   // Only change code above this line
//   }
  
// console.log(lookUpProfile("Akir","address"));



// function randomFunction() {
//   // return Math.floor(Math.random()*20);
//   return Math.random(2)
// }
// console.log(randomFunction())

// console.log(parseInt('0070'))
// console.log(parseInt('1111',2));

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum<=startNum-1){
//     return []
//   }
//   else {
//     var myArr=rangeOfNumbers(startNum,endNum-1)
    
//     myArr.push(endNum);
//     return myArr
//   }
// };
// console.log(rangeOfNumbers(1,20))
// console.log(rangeOfNumbers(5,0));


// import {add,sub } from './ecma.js'
// console.log(add(10,5));
// console.log(sub(10-5));





