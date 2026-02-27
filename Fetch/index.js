let main = document.getElementById("main")
let Api = "https://jsonplaceholder.typicode.com/users";

let getData = fetch(Api)

getData.then((res)=>{
    let a = res.json();
    a.then((data)=>{
        console.log(data);
        display(data)
    })
    
})


function display(data){
   data.map((el)=>{
    let name = document.createElement("h1");
    name.innerText = el.name;
    let phone = document.createElement("h3")
    phone.innerText = el.phone;
    let email = document.createElement("h2")
    email.innerText = el.email;
    let line = document.createElement("hr")
    let div = document.createElement("div")

    div.append(name,phone,email,line)
    main.append(div)
   })
}