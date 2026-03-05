
let api = "https://jsonplaceholder.typicode.com/photos";
let main = document.getElementById("main");

const getData = async()=>{
 let res = await fetch(api);
 let data = await res.json();
//  console.log(data);
 display(data)
 
}
getData();


const display = ((data)=>{
    data.map((el)=>{
     let id =document.createElement("h1");
    id.innerText = el.id;
    let url = document.createElement("img");
    url.src = el.url;
    let div = document.createElement("div");
    div.append(url,id);
    main.append(div)
    })
    
})