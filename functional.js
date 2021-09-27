// const prepareGreenTea= ()=>'Green Tea'
// const prepareBlackTea= ()=>'Black Tea'
// const prepareTea= ()=>'green tea'
// const getTea=(numberOfCups)=>{
//     const teaCups=[]
//     for (let cups=1;cups<numberOfCups;cups++){
//         let teacup=prepareTea()
//         teaCups.push(teacup)
//     }
//     return teaCups

// }
// let team4=getTea(40)
// console.log(team4);

// const prepareGreenTea= ()=>'Green Tea'
// const prepareBlackTea= ()=>'Black Tea'

// const getTea=(prepareTea,numberOfCups)=> {
//     const teaCups=[]
//     for (let cups=1;cups<numberOfCups;cups++){
//         let teacup=prepareTea
//         teaCups.push(teacup)
//     }
//     return teaCups;
// }
// let team4GreenTea=getTea(prepareGreenTea(),10)
// let team4BlackTea=getTea(prepareBlackTea(),5)
// console.log(team4GreenTea);
// console.log(team4BlackTea);


// function Window(tabs){
//     this.tabs=tabs;
// }
// Window.prototype={
//     join (othertabs){
//         this.tabs=this.tabs.concat(othertabs.tabs)
//         return this
//     },
//     tabOpen (){
//         this.tabs.push('New Tab')
//         return this
//     },
//     tabClose (index){
//          this.tabs.splice(index,1)
//          return this
//         // var tabsBeforeIndex = this.tabs.splice(0, index);
//         // var tabsAfterIndex = this.tabs.splice(1);
//         // this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
//         // return this.tabs
//     }


// }

// let workWindow=new Window(['GMail', 'Inbox', 'Work mail', 'Docs','freeCodeCamp'])
// let socialWindow=new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium'])
// let videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine'])
// console.log(workWindow);
// console.log(socialWindow);
// console.log(workWindow.tabOpen());
// console.log(workWindow.tabClose(2));
// console.log(workWindow.tabs);
// var finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

// let finalTabs=socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);


// Suppose if u write a function it should not change its content or other content .if a function is there it shold accept the dependent variable as the argument.

// let fixedValue=1;
// function incrementer(){
//     return fixedValue+1
// }
// console.log(incrementer());

// let fixedValue=1;
// function incrementer(value){
//     return value+1
// }
// console.log(incrementer(fixedValue));

// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// function add(arr,bookName){
//     // let newBookList=[...arr]
//     // newBookList.push(bookName)
//     // return newBookList;
//     return [...arr,bookName]
// }
// function remove(arr,bookName){
//     // let newBookList=[...arr];
//     // if (newBookList.indexOf(bookName)>0){
//     //     newBookList.splice(newBookList.indexOf(bookName),1)
//     // }
//     // return newBookList;
//     return arr.filter(book=>book!==bookName)
// }
// let addNewBook=add(bookList,'Wings of Fire')
// let removeNewBook=remove(bookList,'Wings of Fire')
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
// console.log(newestBookList);


// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];
// console.log(users.map(user => user.name));


// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];

//   let ratings=[];
//   ratings=watchList.map( item => ({title:item['Title'],rating:item['imdbRating']}))
// console.log(ratings);


// var s = [23, 65, 98, 5];
// // console.log(s.map(item=>item*2));
// function mapAlt(s,func){
//     let newArr=[]
//     // for (let i=0;i<s.length;i++){
//     //     newArr.push(func(s[i]))
//     // }
//     // return newArr;
//     s.forEach(item =>newArr.push(func(item)))
//     return newArr;
// }
// console.log(mapAlt(s,(item)=> item*2));


// const users = [
//         { name: 'John', age: 34 },
//         { name: 'Amy', age: 20 },
//         { name: 'camperCat', age: 10 }
//       ];
// console.log(users.map(user => user.name));
// console.log(users.filter(user=>user.age>=20));
// console.log(users.map((user,index)=>{
//     return index
// }));


// var s = [23, 65, 98, 5];
// // console.log(s.map(item=>item*2));
// function mapAlt(s,func){
//     let newArr=[]
//     // for (let i=0;i<s.length;i++){
//     //     newArr.push(func(s[i]))
//     // }
//     // return newArr;
//     s.forEach(item =>{
//         if (func(item))
//         newArr.push(item)})
//     return newArr;
// }
// console.log(mapAlt(s,(item)=> item%2===1));


// let arr=[5,4,3,2,1]
// // console.log(arr.sort((a, b) => a - b));
// // console.log(arr)
// console.log([].concat(arr).sort());
// console.log(arr);

// let arr=[1,2,3,4,5]
// // arr.push(6)
// let a=arr.concat(6)
// console.log(arr);
// console.log(a);

// const users = [
//             { name: 'John', age: 34 },
//             { name: 'Amy', age: 20 },
//             { name: 'camperCat', age: 10 }
//           ];
// console.log(users.reduce((obj,user)=>{
//     obj[user.name]=user.age;
//     return obj
// },{}));


// var watchList = [
//     {
//       Title: "Inception",
//       Year: "2010",
//       Rated: "PG-13",
//       Released: "16 Jul 2010",
//       Runtime: "148 min",
//       Genre: "Action, Adventure, Crime",
//       Director: "Christopher Nolan",
//       Writer: "Christopher Nolan",
//       Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//       Plot:
//         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       Language: "English, Japanese, French",
//       Country: "USA, UK",
//       Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       Metascore: "74",
//       imdbRating: "8.8",
//       imdbVotes: "1,446,708",
//       imdbID: "tt1375666",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "Interstellar",
//       Year: "2014",
//       Rated: "PG-13",
//       Released: "07 Nov 2014",
//       Runtime: "169 min",
//       Genre: "Adventure, Drama, Sci-Fi",
//       Director: "Christopher Nolan",
//       Writer: "Jonathan Nolan, Christopher Nolan",
//       Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       Plot:
//         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       Language: "English",
//       Country: "USA, UK",
//       Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       Metascore: "74",
//       imdbRating: "8.6",
//       imdbVotes: "910,366",
//       imdbID: "tt0816692",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "The Dark Knight",
//       Year: "2008",
//       Rated: "PG-13",
//       Released: "18 Jul 2008",
//       Runtime: "152 min",
//       Genre: "Action, Adventure, Crime",
//       Director: "Christopher Nolan",
//       Writer:
//         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       Plot:
//         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       Language: "English, Mandarin",
//       Country: "USA, UK",
//       Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       Metascore: "82",
//       imdbRating: "9.0",
//       imdbVotes: "1,652,832",
//       imdbID: "tt0468569",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "Batman Begins",
//       Year: "2005",
//       Rated: "PG-13",
//       Released: "15 Jun 2005",
//       Runtime: "140 min",
//       Genre: "Action, Adventure",
//       Director: "Christopher Nolan",
//       Writer:
//         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       Plot:
//         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       Language: "English, Urdu, Mandarin",
//       Country: "USA, UK",
//       Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       Metascore: "70",
//       imdbRating: "8.3",
//       imdbVotes: "972,584",
//       imdbID: "tt0372784",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "Avatar",
//       Year: "2009",
//       Rated: "PG-13",
//       Released: "18 Dec 2009",
//       Runtime: "162 min",
//       Genre: "Action, Adventure, Fantasy",
//       Director: "James Cameron",
//       Writer: "James Cameron",
//       Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       Plot:
//         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       Language: "English, Spanish",
//       Country: "USA, UK",
//       Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       Metascore: "83",
//       imdbRating: "7.9",
//       imdbVotes: "876,575",
//       imdbID: "tt0499549",
//       Type: "movie",
//       Response: "True"
//     }
//   ];

  
// function getRating(watchList){
//     let count=0;
//     let avgRating= watchList.reduce((avg,obj)=>{
//         if (obj.Director==="Christopher Nolan"){
//             count++
//             return avg+parseFloat(obj.imdbRating);
//         }
//         return avg;
//     },0)/count
//     return avgRating;
// }
// console.log(getRating(watchList));

// const squareList = arr => {
//     // Only change code below this line
//     // return arr.filter(a=>a>0 && a%parseInt(a)===0).map(a=>Math.pow(a,2))
//     return arr.reduce((result,nu)=>{
//         return nu>0 && Number.isInteger(nu)?result.concat(nu*nu):result
//     },[])
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);

// console.log(Number.isInteger(-3.2));
// console.log(Number.EPSILON<1);

// function alphabeticalOrder(arr) {
//     // Add your code below this line
//     return arr.sort(function(a, b) {
//       return a === b ? 0 : a < b ? -1 : 1;
//     });
    // Add your code above this line
//   }
//   console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
//   console.log([1,8,5,7,99,152].sort((a, b) => b-a));

// console.log("May-the-force-be-with-you".split('-').join(' '));

// console.log("Winter Is Coming".split(' ').filter(a=>a!=="").join('-'));


// function curried(a){
//     return function(b){
//         return a+b;
//     }
// }
// const curried=x=>y=>x+y
// console.log(curried(10)(10));

// function sumAll(arr){
//     let sum=0;
//     // for(let i=Math.min(...arr);i<=Math.max(...arr);i++){
//     //     sum+=i
//     // }
//     // return sum;
    
// }
// console.log(sumAll([1,4]));

// function diffArray(arr1,arr2){
//     // return arr1.concat(arr2).filter( item => !arr1.includes(item) || !arr2.includes(item))  
//     // return [...diff(arr1,arr2),...diff(arr2,arr1)]
//     // function diff(a,b){
//     //     return a.filter( item =>b.indexOf(item)===-1)
//     // } 
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

// function destroyer(arr) {
// //     // return arr.filter(item => !num.includes(item))
//     let value=Object.values(arguments).splice(1)
//     return arr.filter(item => !value.includes(item))
//   }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// function arguments(){
//     return Array.from(arguments)
// }
// console.log(arguments([1,2,3,],[1,2,3],1,2,3));

// function whatIsInAName(collection, source) {
//     // var arr = [];
//     // Only change code below this line
//     let sources=Object.keys(source)
//     return collection.filter(obj=>{
//         return sources.every(keys=>{
//             return obj.hasOwnProperty(keys) && obj[keys]===source[keys]
//         })
//     })
//     // Only change code above this line
    
//   }
  
//   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));



// function spinalCase(str) {
//     // "It's such a fine line between stupid, and clever."
//     // --David St. Hubbins  
//     return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase() 
//   }
// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase('thisIsSpinalTap'));


// function translatePigLatin(str) {
    // let consonantRegex = /^[^aeiou]+/;
    // let consonants=str.match(consonantRegex);

    // return consonants!==null? str.replace(consonantRegex, "").concat(consonants).concat('ay'):str.concat('way')
//     if (str.match(/^[aeiou]ig/)) return str+'way';
//     else{
//         let cons=str.match(/^[^aeiou]+/)[0]
//         return str.substr(cons.length)+cons+'ay'

//     }
   
//   }
  
//   console.log(translatePigLatin("cccconsonant"));


// function myReplace(str, before, after) {
//     let index= str.indexOf(before)
//     if (str[index]===str[index].toUpperCase()){
//         after=after.charAt(0).toUpperCase()+after.slice(1)
//     }
//     else{
//         after=after.charAt(0).toLowerCase()+after.slice(1)
//     }
//    return str.replace(before,after)
//   }
  
//  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
//  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));


// function diffArray(arr1,arr2){
//     // return [...diff(arr1,arr2),...diff(arr2,arr1)]

//     // function diff(a,b){
//     //     return a.filter(item=> !b.includes(item))
//     // }
//     return arr1.concat(arr2).filter(item=>!arr1.includes(item) || !arr2.includes(item))
// }
    
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

// function destroyer(arr) {
//     let values=Object.values(arguments).slice(1)
//     for (let i=0;i<arr.length;i++){
//         for (let j=0;j<values.length;j++){
//             if (arr[i]===values[j]){
//                 delete arr[i]
//             }
//         }

//     }
//     return arr.filter(item=>item!==null)
//     // return arr.filter(item =>! values.includes(item))
//   }
  
//  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))


// function whatIsInAName(collection, source) {
//     let srckeys=Object.keys(source)
//     let arr=[]
//     // return collection.filter(obj=>srckeys.every(item=>obj.hasOwnProperty(item) && obj[item]===source[item]))
//     for(let i=0;i<collection.length;i++){
//         for (let j=0;j<source.length;j++){
//             if (collection[i].hasOwnProperty(srckeys[j]) && collection[i][srckeys[j]]===source[srckeys[j]]){
//                 arr.push(collection[i])
//             }
//         }
//     }
//     return arr
//    }
  
//  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

// function spinalCase(str) {
//     // return str.toLowerCase().split(/\s|_|(?=[A-Z])/).join('-')

    
//     return str
//   }
  
//  console.log(spinalCase('This Is Spinal Tap'))
//  console.log(spinalCase("thisIsSpinalTap"));
//  console.log(spinalCase("The_Andy_Griffith_Show"));


// function translatePigLatin(str) {
//     let regex=/^[^aeiou]+/
//     let consonants=str.match(regex)
//     if (consonants==null){
//         return str.concat('way')
//     }
//     return str.replace(regex,'').concat(consonants).concat('ay')
    
//   }
  
//  console.log(translatePigLatin("bcdonsonant"))
//  console.log(translatePigLatin('eight'));


// function myReplace(str, before, after) {
//     // let index=str.indexOf(before)
//     // if (str[index]===str[index].toUpperCase()){
//     //     after=after[0].toUpperCase()+after.substring(1)
//     // }
//     // after=after[0].toLowerCase()+after.substring(1)
//     // return str.replace(before,after)
//     return str.split(' ').map( item=>item===before?item[0]===item[0].toUpperCase(0)?after[0].toUpperCase()+after.slice(1):after[0].toLowerCase()+after.slice(1):item)
// }
  
//  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))


// function fearNotLetter(str) {
//     // for (let i=1;i<str.length;i++){
//     //     if (str.charCodeAt(i)-str.charCodeAt(i-1)>1){
//     //        return String.fromCharCode(str.charCodeAt(i-1)+1)
//     //     }
//     // }   
//     let missing=''
//     let alphabets='abcdefghijklmnopqrstuvwxyz'.split('')
//     str=str.split('')
//     for (let i=0;i<str.length;i++){
//         if (!str.includes(alphabets[i])){
//             missing+=alphabets[i]
//         }
//     }
//     return missing

//   }
// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklno"));

// let arr=[1,2,3,4,5,5,5]
// let set=new Set(arr.flat())
// console.log([...set]);
// let arr=[1,2,3,4,5,6,1,2,[1,2,3,4,5,6]]
// console.log([...new Set(arr.flat())]);
// function uniteUnique(...arr) {
     
//     // let arr= arr1.concat(...arr2)
//     // return[ ...new Set(arr)]
//     return 
//   }
  
// // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// function sumFibs(num) {
//     let previous=0
//     let current=1
//     for (i=2;i<=num;i++){
//         console.log(previous);
//         let temp=current
        
//         current=previous+current
//         previous=temp
        
//     }
//   }
// sumFibs(10)


// function sumPrimes(num){
//     function isprime(num){
//         for (let i=2;i<num;i++){
//             if (num%i===0){
//                 return false
//             }
//         }
//         return true
//     }
//     let sum=0
//     for (let i=2;i<=num;i++){
//         if (isprime(i)){
//             sum+=i
//         }
//     }
//     return sum
// }
//  console.log(sumPrimes(10))

// let arr=[1,2,3,4,5]
// console.log(arr.fill(1000,0,1));