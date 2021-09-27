// this keyworsd inside an object refers to object but outside refers to window

// console.log(this);
// this.name='haari';
// console.log(this.name);
// console.log(window.name);
// console.log(name);

// let arr=['haari','kishann','reddy','amla']
// let sore=arr.sort((a,b)=>a.localeCompare(b))
// console.log(sore);

// function async(){
//     setTimeout(()=>console.log(name),0)
// }
// async()

function aasync(){
    return Promise.resolve();
}
aasync().then(()=>console.log(name))

let name='haari'

// setTimeout is used to work like async
// function async(cb){
//     setTimeout(()=>{
//         cb(null,'data is received');
//     },0)

// }
// async((err,data)=>{
//     if (err){
//         throw err
//     }
//     else{
//         console.log(data);
//     }
// });

// let name='haari kishann';



// const promise=new Promise((resolve,reject)=>{
//     console.log("Async task execution");
//     if (false){
//         const name="Haari"
//         resolve(name)
//     }
//     else{
//         const error={errCode:'1001'}
//         reject(error);
//     }
// })
// promise.then((val)=>console.log(val),(err)=>console.log(err));

// let p=Promise.resolve('Executed')
// p.then((val)=>console.log(val))


// function makeApiCall(time){
//     return new Promise((resolve,reject)=>{
//         if (true){
//             setTimeout(()=>{
//                 resolve('API Executed in:'+time);
//             },time)
//         }
       
//     })
// }
// makeApiCall(1000).then((val)=>console.log(val))
// let makeMultipleApiCall=[makeApiCall(1000),makeApiCall(2000),makeApiCall(500)]
// Promise.all(makeMultipleApiCall).then(val=>console.log(val))
// Promise.race(makeMultipleApiCall).then(val=>console.log(val))



let userLogin=()=>{
    console.log('Enter Username and PassWord');
    let username=prompt('Enter Your Name');
    let password=prompt('Password');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (username==='haari' && password==='haari'){
                resolve("User Authenticated")
            }
            else{
                reject('Authenticated failed')
            }
        },1000)
    })
}

function gotoHome(status){
    return Promise.resolve(`Go to home Page:${status}`)
}



// userLogin().then((resp)=>{
//     console.log('user Validated')
//     return gotoHome(resp)
// }).then((val)=>{
//     console.log(val);
// })


async function perfomtask(){
    const response=await userLogin();
    console.log("validate user");
    const status=await gotoHome(response);
    console.log(status);

}

perfomtask()