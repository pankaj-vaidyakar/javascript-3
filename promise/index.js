// Promise

// Creating a Promise

// let promise = new Promise(function(res,rej){
// //    async work
// })

// let success = true;
// let promise = new Promise(function(res,rej){

//     if(success){
//         res("Task completed")
//     }else{
//         rej("Task failed")
//     }
// })

// console.log(promise);

// how to handle promise

// .then .catch

// .then() - when success , resolve
// .catch - when error

// let data = true;

// let pro = new Promise(function (res, rej) {
//   setTimeout(() => {
//     if (data) {
//       res("Done");
//     } else {
//       rej("failed");
//     }
//   }, 2000);
// });

// pro.then(function (res) {
//   console.log(res);
// });

// pro.catch(function (rej) {
//   console.log(rej);
// });

let data = true;
let Task = new Promise(function(res,rej){
    setTimeout(()=>{
        if(data){
            res("completed")
        }else{
            rej("not completed")
        }
    },2000)
})

Task.then(function(res){
    console.log(res);
})

Task.catch(function(rej){
    console.log(rej);
});  

