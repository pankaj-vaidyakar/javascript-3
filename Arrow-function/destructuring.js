// destructuring

// let mix_data = ["hello","bye",22,44,78]

// // console.log(mix_data[0]);
// // console.log(mix_data[1]);
// // console.log(mix_data[2]);
// // console.log(mix_data[3]);
// // console.log(mix_data[4]);

// const [a,b,c,d,e] = mix_data

// console.log(a, b, c, d, e);


// let data = ["Hello","bye",[22,55,99],88,"mixing"];

// const [a,b,c,d,e] = data;

// const [x,y,z] = c

// console.log();  


// const obj1 = {
//   name: "Sachin",
//   age: 25,
//   profession: "Trainer",
//   city: "Indore",
//   language: "JavaScript",
//   experience: 2
// };

// const {name,age,profession,city,language,experience} = obj1

// console.log(name, age, profession, city, language, experience);




// 2️⃣ Complex Object with array and nested object

const complexObject = {
  company: "SkillonIT",
  location: "Indore",
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name1: "Charlie", role2: "Tester" }
  ],
  projects: {
    current: "MERN Bootcamp",
    upcoming: "Python Web Development",
    completed: ["React Website", "Flask API"]
  },
  marks:[22,11,55,66,88]
};


const {company,location,employees:[{name,role},data2,{name1,role2}],projects,marks:[a,b,c,d,e]} = complexObject  

console.log(company, location, name, role);

 

