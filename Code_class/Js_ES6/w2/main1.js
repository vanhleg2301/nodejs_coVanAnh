//cach 1
let emp={
    id:1,
    fName:'Ha thu',
    age:20,
    gender:true,
};
console.log("cach 1",emp);
//cach 2
let st=new Object();
st.rollNum=2;
st.fName='Toa an An';
console.log('cach 2:',st);
function person(code,fName,email){
    this.code=code;
    this.fName=fName;
    this.email=email;
}
let p=new person(5,'Phan thu','thup@gmail.com');
console.log('cach 3',p);
//es6
class company{
    constructor(code,brand,value){
        this.code=code;
        this.brand=brand;
        this.value=value;
    }
}
let com=new company('Honda','Viet nam',230000);
console.log('cach 4:',com);
//danh sach sinh vien
const list=[
    {id:1,fName:'Ha thu An',age:20,gender:false},
    {id:2,fName:'Tran Khanh Thi',age:19,gender:true},
    {id:3,fName:'Vu Tuan',age:20,gender:true},
    {id:4,fName:'Lai thi Van',age:21,gender:false},
];
//viet ra danh sanh
//ES5
//cach 1
console.log('cach 1');
console.log('ID\tName\tAge\tGender');
for(let s of list){
    console.log(s.id+'\t'+s.fName+'\t'+s.age+'\t'+(s.gender?'male':'female'));
}
//ES6
console.log('cach 2');
console.log('ID\tName\tAge\tGender');
for(let s of list){
    console.log(`${s.id}\t${s.fName}\t${s.age}\t${s.gender?'male':'female'}`);
}
