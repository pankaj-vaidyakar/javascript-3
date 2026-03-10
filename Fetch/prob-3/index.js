let api = "https://fakestoreapi.com/products";
let main = document.getElementById("main")
let loader = document.getElementById("loader")

const getData = async()=>{
    try {
        loader.style.display = "Block"
        let res = await fetch(api);
        let data = await res.json();
        console.log(data);
        display(data);
        loader.style.display = "none"
    } catch (error) {
        console.log(error);
        
    }
  
  
}

// getData();

setTimeout(()=>{
    getData()
},2000)



const display = ((data)=>{
    data.map(({title,price,image})=>{
       main.innerHTML += `
       <div>
        <img src="${image}" alt="">
        <h1>${title}</h1>
        <h2>${price}</h2>
       </div>
       `;
    })
})
