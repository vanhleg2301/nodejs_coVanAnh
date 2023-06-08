
// var sum=function(a,b,c){
//     return (a+b+c);
// }
// console.log('ES5:',sum(5,10,5));
// const sum1=(a,b,c)=>(a+b+c);
// console.log('ES6:',sum1(5,10,5));
// const logger=()=>console.log('To yeu FU!');
// //ham tra ve so day co phai nguyen to khong : true - false
// let arr=[5,-7,2,1,8,7,13,0,56,23];//5,7,13,23
// //viet ra cac gia tri nguyen - dung filter = arr moi
// const isPrime=(n)=>{
//    if(n==0 || n==1)
//    return false;
//    for(let i=2;i<=Math.sqrt(n);i++){
//     if(n%i===0){
//         return false;
//     }
//    }
//    return true;
// }
// const arr1=arr.filter(num=>isPrime(num));
// console.log(arr1);
// const arr=['red','blue','chocolate','white'];
// let [a,,b]=arr;
// console.log(a,b);

//rest array
// const arr=['123','78','88','9999'];
// let [x,y,...arr1]=arr;
// console.log(arr1);
// //rest object
// const student={
//     id:1,
//     fName:'To an An',
//     age:20,
//     gender:true
// };
// let {gender,...freeSt}=student;
// console.log(freeSt);
const a1=[4,5,6];
const a2=[8,9,10];
const a3=[...a2,55,6,...a1];
console.log(a3);
const s1={
    id:1,
    fName:'To an An',
    age:23
};
const s2={
    address:'Ha noi',
    email:'thuTT@gmail.com',
    age:20
};
const student={
    ...s1,
    ...s2
};
console.log(student);
