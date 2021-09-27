// let str='I am a Good boy'
// let regextest=/am/
// console.log(regextest.test(str));
// console.log(str.match(regextest));
// let myString='I am a good boy';
// let myRegex=/Good|good|boy/
// console.log(myRegex.test(myString));

// let myString='i am a Good boy'
// let myRegex=/Good/i //i defines the ignore Case we can ignore the case differences
// console.log(myRegex.test(myString));

// let myString='i am a Good boy'
// let myRegex=/Good/
// console.log(myString.match(myRegex));

// let myString="i am not a bad boy"
// console.log(myString.match(/ba/));

// let myString="I am boy BOY Boy boY bOy";
// let myRegex=/boy/gi
// let result=myString.match(myRegex)
// console.log(result);
// console.log(result.length);
// console.log(result.indexOf('BOY'));


// let myString="humm hug hung";
// let myRegex=/hu./gi
// console.log(myRegex.test(myString));
// console.log(myString.match(myRegex));

// let quoteSample =
//   "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /b[aeiou]g.| c[aeiou]d./gi; // Change this line
// let result = quoteSample.match(vowelRegex);
// console.log(result);

// let quoteSample ="Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let myReegex=/[a-z]/gi;
// let result=quoteSample.match(myReegex)
// console.log(result);

// let myString="i am A good guy and daaaa"
// let myReg=/[a-z]/gi;
// console.log(myString.match(myReg));

// let quoteSample ="Beware of 12345bugs in 6778 the abovew . code; @I have only proved it correct, not tried it.";
// let myReg=/[^a-z0-9]/gi;
// console.log(quoteSample.match(myReg));
// console.log();


// let quoteSample ="Beware of 12345bugs in 6778 the abovew . code; @I have only proved it correct, not tried it.";
// let myReg=/[a-r+]/gi;
// console.log(quoteSample.match(myReg));
// console.log();

// let myString='haaaa i amaamammmmma'
// let myReg=/a+|m+/gi
// console.log(myString.match(myReg));

// let myString='haaaa i ammmmmmma'
// let myReg=/ha*|m*/gi
// console.log(myString.match(myReg));

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgha!";
// let chewieRegex = /Aa+|a/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgha!";
// let chewieRegex = /.*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log(result);


// let myString="<h1> i am a boy </h1>";
// let myReg=/<.*?>/ //? it refers to the shorter string and it is also called as lazy loading.
// console.log(myString.match(myReg));

// let myString="P1P5P4CCCcP2P6P3.";
// let myReg=/CC*/
// console.log(myString.match(myReg));

// let myString="Haari kishann reddy";
// let myReg=/^Haari/ //^ is used to negate aexpression and to search the first word in the string
// console.log(myString.match(myReg));

// let myString="Haari kishann reddy";
// let myReg=/Reddy$/i //$ is used to find the pattern at the end of the string
// console.log(myString.match(myReg));
 
// let myString="Haari kishann reddy 1999";
// let myReg=/\w/gi //it is shortcut for all alphanumeric characters 
// console.log(myString.match(myReg));


// let myString="Haari kishann reddy";
// let myReg=/\W/gi //it is shortcut for all oppsite alphanumeric characters 
// console.log(myString.match(myReg));


// let myString="i was born on 1999"
// let myReg=/\d/gi;    // \d defines the [0-9]
// console.log(myString.match(myReg));

// let myString="i was born on 1999"
// let myReg=/\D/; // opposite for the up.
// console.log(myString.match(myReg));  

// let userName="Z97";
// let myReg=/^[a-z][a-z]+\d+$|^[a-z]\d\d+$/i
// console.log(userName.match(myReg));


// let myString="jsc scsa csac"
// let myReg=/\s/g;
// console.log(myString.match(myReg));

// let myString="jsc scsa csac"
// let myReg=/\S/g;
// console.log(myString.match(myReg));


// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/; //it defines the range of characters itis also replaces the + and * .
// let multipleB = /a{0,2}h/;
// // multipleA.test(A4);
// // multipleA.test(A2);
// console.log(A4.match(multipleA));
// console.log(A2.match(multipleB));


// let myStr='ohhhh no'
// let myReg=/oh{1,4}\sno$/
// console.log(myStr.match(myReg));

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{2}h/;
console.log(A4.match(multipleA));
console.log(A2.match(multipleA));
console.log(A100.match(multipleA));

// let haStr = "Hazzzzzah";
// let haRegex = /Haz{3,}ah/; // Change this line
// console.log(haStr.match(haRegex));

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4}ah/; // Change this line
// console.log(haStr.match(haRegex));

// let american = "color";
// let british = "colour";  
// let rainbowRegex= /colou?r/; // ? it makes the before letter as optional
// console.log(american.match(rainbowRegex));
// console.log(british.match(rainbowRegex));

// let myStr='bana12'
// let myReg=/(?=\w{3,6})(?=\w*\d{2})/
// console.log(myStr.match(myReg));
// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
// // console.clear()
// console.log(sampleWord.match(pwRegex));


/////////////////THIS IS NOT BELONG TO REgex




// let myArr=[1,2,4,5,6]
// console.log(myArr.reverse());

// function myFun(){
//     return 'I\'m shocked'
// }

// console.log(myFun);
// console.log(myFun());

// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
    
//     for (let i = 0; i < m; i++) {
//       // Adds the m-th row into newArray
//       let row = [];
//       for (let j = 0; j < n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         row.push(0);
//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
//       newArray.push(row);
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);

// let complexArray = [
//     [
//       {
//         one: 1,
//         two: 2
//       },
//       {
//         three: 3,
//         four: 4
//       }
//     ],
//     [
//       {
//         a: "a",
//         b: "b"
//       },
//       {
//         c: "c",
//         d: "d"
//       }
//     ]
//   ];
//   console.log(complexArray[0][0]);


// let myArr=[0,1,2,3,4,5]
// console.log(myArr);
// delete myArr[1];
// console.log(myArr);

//splice is used to delete multiple elements in array
// let myArr = [1,2,3,4,5,]
// myArr.splice(0,2)
// console.log(myArr);
// // myArr.slice(1,1)
// console.log(myArr.splice(0,2));
// console.log(myArr);

//slice operator is used to copy the required elements in an array

// let myArr=[1,2,3,4,5]
// let copyArray=myArr.slice(0,-2)
// console.log(copyArray);

//copy the array with spread opertor
// let myArr=[3,2,1,6,5,4]
// let copy1=myArr
// let copy2=[...myArr]
// console.log(myArr)
// console.log(copy1)
// console.log(copy2.sort())

//spread operator can used as combining strings and concatenaation
// let myArr=["heLLo"]
// let inserted =[...myArr,"Haari"]
// console.log(inserted);


//indexOf operator
// let myArr=['hello',1,2,3,1,5];
// console.log(myArr.indexOf(2));
// console.log(myArr.includes('hello'));

// const names= (arr,elem)=>{
//     let newArr=[]
//     for (let i=0;i<arr.length;i++){
//         for (let j=0;j<arr[i].length;j++){
//             if (arr[i][j]===elem){
//                 arr.splice(i)
//                 newArr.push(arr)
//             }
//         }
//     }
//     return newArr;
// }
// console.log(names(([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)));
// let myArr=[[10, 8, 3], [14, 6, 23], [3, 18, 6]];
// let updated=myArr.splice(2)
// console.log(myArr);


// function samo(arr,elem){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if (arr[i].indexOf(elem)==-1){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(samo([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// console.log(samo([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));

// let nestedArray = [
//     ['deep'],
//     [
//       ['deeper'], ['deeper'] 
//     ],
//     [
//       [
//         ['deepest'], ['deepest']
//       ],
//       [
//         [
//           ['deepest-est?']
//         ]
//       ]
//     ]
//   ];
// console.log(nestedArray[2][1][0][0][0]);

//for in is used for objects to iterate.
// let myObject={
//     Alan:"hello",
//     Jeff: "world",
//     Sarah:"welcome"
//   }
// for (let user in myObject){
//     console.log(`${user}: ${myObject[user]}`);
// }
// console.log(Object.values(myObject));
// function nam(Object){
//     let result=0
//     for (let user in Object){
        
//         if (Object[user].online==true){
//             result++
//         }
//     }
//     return result;
// }
// console.log(nam(myObject));


// console.log(Object.keys(myObject));
// let myArr=[]
// for (let user in myObject){
//     myArr.push(user)
// }
// console.log(myArr);

// let str='haari'
// str=str.split('')
// // str=str.reverse()
// console.log(str.join('-'));
// console.log(str);

// function rever(str){
//     let reverseStr='';
//     for(let i=str.length-1;i>=0;i--){
//         reverseStr+=str[i]
//     }
//     return reverseStr
// }
// console.log(rever('haari'));

// function fact(num){
//     for (var product=1;num>0;num--){
//         product*=num;
//     }
//     return product;
// }
// console.log(fact(5));

// function fac(num){
//     if (num==0){
//         return 1;
//     }
//     return fac(num-1)*num
// }
// console.log(fac(5));

// function long(str){
//     let word=str.split(' ')
//     let maxlength=0;
//     for (var i=0;i<word.length;i++){
//         if (word[i].length>maxlength){
//             maxlength=word[i].length;
//         }
//     }
//     return maxlength;
// }
// console.log(long('The quick brown fox jumped over the lazy dog'))


// function long(str){
//     return str.split(' ').reduce(function(longest,word){ return Math.max(longest,word.length)},0)
// }
// console.log(long('The quick brown fox jumped over the lazy dog'))


// let str='The quick brown fox jumped over the lazy dog'
// // console.log(str.split(' '))
// // console.log(str.split(' ').map(word => word.length));
// let arr = [];
// str.split(' ').forEach(ele=> {
    
//     arr.push(ele.length)
// })
// console.log(arr)


// function laarg(arr){
    
//     for (let i=0;i<arr.length;i++){
//         let maxlenfth=0;
//         for (let j=0;j<arr[i].length;j++){
//             if (arr[i][j]>maxlenfth){
//                 maxlenfth=arr[i][j];
//         }
//         }   
//     }
//     return maxlenfth;   
     
// }
// function laarg(arr) {
//     let results = [];
//     for (let i = 0; i < arr.length; i++) {
//       let largestNumber = 0;
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > largestNumber) {
//           largestNumber = arr[i][j];
//         }
//       }
//       results[i] = largestNumber;
//     }
//     // return arr[results.indexOf(Math.max(...results))]
//     return results
    
//   }

// function laarg(arr){
//     let result=[]
//     for (let i=0;i<arr.length;i++){
//         let largestNumber=0;
//         for (let j=0;j<arr[i].length;j++){
//             if (arr[i][j]>largestNumber){
//                 largestNumber=arr[i][j];
//             }
//         }
//         result.push(largestNumber)
//     }
//     return result

// }
// console.log(laarg([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(laarg([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));



// let jaa=[ 5, 27, 39, 1001 ]
// console.log(jaa.indexOf(Math.max(...jaa)));



// function last(str,target){
//     return str.slice(str.length-target.length)===target;

// }
// console.log(last("He has to give me a new name", "name"));
// console.log(last('hello my name is haari','haari'));

// console.log("He has to give me a new name", "name");
// let str="He has to give me a new name";
// let target='name';
// let result=str.slice(str.length-target.length)
// console.log(str.slice(24,));

// function lasft(str,target){
//     // let reg=/name$/gi
//     let reg=new RegExp(target+'$','gi')
//     return reg.test(str)
// }
// console.log(lasft("He has to give me a new name", "name"));


// function lasft(str,target){
//     if (str.slice(-target.length)===target){
//         return `${target} is match with the ${str}`
//     }
// }
// console.log(lasft("He has to give me a new name", "name"));
// console.log(lasft("Bastian", "n"));


// function mul(str,num){
//     let mystr=''
//     for (let i=0;i<num;i++){
//         mystr+=str
//     }
//     return mystr;
// }
// console.log(mul('* ',3));
    

// function mul(str,num){
//     if (num<1){
//         return ''
//     }
//     return str+mul(str,num-1)
// }
// console.log(mul('* ',3));

// function trunc(str,num){
//     return str.slice(0,num)+'....'
// }
// console.log(trunc("A-tisket a-tasket A green and yellow basket", 8))

// function findEle(arr,func){
//     let num=0;
//     for (let i=0;i<arr.length;i++){
//         num=arr[i]
//         if (func(num)){
//             return num
//         }
//     }
//     return undefined
// }
// console.log(findEle([1, 2, 3, 4],num => num%2==0));


// function findEle(arr,func){
//    return arr.find(func)
// }
// console.log(findEle([1,15],num => num%2==0));

// let arr=[10];
// // console.log(arr.find(a => a%2==0))
// console.log(arr.map(a=>a%2==0));


// function boo(bool){
//     return typeof bool===Boolean
// }
// console.log(true);


// function upper(str){
//     return str.toLowerCase().split(' ').map( a => 
//         {
//         return a.replace(a.charAt(0),a.charAt(0).toUpperCase())
//     }).join(' ')
 
// }
// console.log(upper("I'm a little tea pot"));

// function spliceslice(arr1,arr2,n){
//     let array2=arr2.slice();
//     array2.splice(n,0,...arr1)
//     return array2
// }
// console.log(spliceslice([1, 2, 3], [4, 5, 6], 1));
// // console.log([4, 5, 6].splice(1,0,[1, 2, 3]))
// function spliceslice(arr1,arr2,n){
//     let localarr=arr2.slice();
//     for (i=0;i<arr1.length;i++){
//         localarr.splice(n,0,arr1[i])
//         n++
//     }
//     return localarr
// }


// let arra=[1,2,3,4,5]
// console.log(arra.map(a => a*2));
// console.log(arra.filter(a => a>2));

// function getIndex(arr,num){
//     arr.sort(((a, b) => a - b));
//     let index;
//     for (let i=0;i<arr.length;i++){
//         if (arr[i]>=num){
           
//             return i;
//         }
//     }
//     // return i;
// }
// console.log(getIndex([5, 3, 20, 3], 5))

// function Index(arr,num){
//     // let counter=0;
//     // for (let i=0;i<arr.length;i++){
//     //     if(num>arr[i]){
//     //         counter++;

//     //     }
//     // }
//     // return counter;

//     // return arr.filter(a => num>a).length
//     arr.push(num)
//     arr.sort()
//     return arr.indexOf(num)
// }
// console.log(Index([4,5,3,2,1], 1.5))

// function mutation(arr) {
//     return arr[1].toLowerCase().split("").every(a=>arr[0].toLowerCase().indexOf(a)!=-1)}
  
// console.log(mutation(["hello", "Hello"]))


// function chunkArrayInGroups(arr, size) {
//     let newArr=[]
//     for (let i=0;i<arr.length;i=i+size){
//         newArr.push(arr.slice(i,i+size))
//     }
//     return newArr;
//     //    let newArr=[]
//     //    let i=0
//     //    while(i<arr.length){
//     //        newArr.push(arr.slice(i,i+size))
//     //        i+=size
//     //    }
//     //    return newArr
//   }
  
//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// let myObj={
//     name:"haari",
//     age:20
// }

// for (let item of Object.entries(myObj)){
//     console.log(item);
// }
// Object.entries(myObj).map( item => console.log(item))
