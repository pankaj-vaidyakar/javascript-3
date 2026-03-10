
let api = "https://jsonplaceholder.typicode.com/photos";
let main = document.getElementById("main");
let loader = document.getElementById("loader");

const getData = async()=>{
    try {
        loader.style.display = "Block"
         let res = await fetch(api);
         let data = await res.json();
         //  console.log(data);
         display(data);
         loader.style.display = "none"
    } catch (error) {
       console.log(error);
        
    }

 
}

setTimeout(() => {
    getData();
},2000);



const display = ((data)=>{
    data.map((el)=>{
     let id =document.createElement("h1");
    id.innerText = el.id;
    let url = document.createElement("img");
    url.src = el.url;
    let line = document.createElement("hr");
    let div = document.createElement("div");
    div.append(url,id,line);
    main.append(div)
    })
    
})