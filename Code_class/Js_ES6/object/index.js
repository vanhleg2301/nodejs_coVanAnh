// let person = { id: 1, name: 'To an An', age: 20 
// };
// console.log(person);
// console.log("ID: " + person.id + ', Name: ' + 
// person.name + ', Age: ' + person.age);


// danh sach sinh vien 
const list = [
    {id:1, fname:'Ha', age:25, gender:false},
    {id:2, fname:'Vanh', age:20, gender:true},
    {id:3, fname:'Chi', age:22, gender:false},
    {id:4, fname:'Long', age:21, gender:true},
];
// Kieu ES6
//cach 1
console.log('ID\fname\age\gender');
for(let s of list){
    console.log(s.id + '\t' + s.fname + '\t' + s.age + '\t' + (s.gender ? 'male' : 'female'));
}

// cach 2
console.log('ID\fname\age\gender');
for(let s of list){
    console.log(`${s.id}\t${s.fname}\t${s.age}\t${s.gender?'male':'female'}`);
}