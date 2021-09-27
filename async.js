// SYNC Executes Line by Line so if one line takies time means the other has to wqit
// console.log("HELLO");
// console.log("HELLO");
// console.log("HELLO");


console.log("Start Operation")

function sleep(miliseconds){
    let startTime=new Date().getTime();
    // console.log(startTime); 
    console.log("operation is Running");
    while(new Date().getTime()<startTime){
        console.log(new Date().getTime());
        console.log("in progress");

    }
    console.log("operation done");
}
sleep(1000)
console.log("do something else");