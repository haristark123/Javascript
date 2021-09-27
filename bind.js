
// so call and apply are similarly works (when a function is in outer side of an object and you want to use the this in function then use the call and apply)

//when the bind is not used outside function then the this is make them as global

// let person={
//     name:"haari",
//     getName:function(price){
//         console.log("hello")
//         console.log(this.name+" "+price);
//     }
// }
// // console.log(person);
// // console.log(person.name);
// // console.log(person.getName());
// // var myDetails=person.getName.bind(person,100);
// // myDetails()

// // person.getName(10)
// var details=person.getName.bind(person,100)
// details()


var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.call(car,'haari');
displayDetails.apply(car,['haari'])