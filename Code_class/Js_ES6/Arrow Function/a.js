// var sum = function(a,b,c){
//     return (a+b+c);
// }
// console.log('ES5:', sum(5,10,5));
// // ES6 
// const sum1 = (a,b,c) => (a+b+c);
// console.log('ES6:', sum1(5,10,5));

// // ko có đối số 

// const logger = () => console.log('Toi yeu em');

//  hàm trả về có phải số nguyên tố ko.
// viết ra các giá trị nguyên tố - dùng filter
// let arr=[5, 1, 8, 7, 13, 0, 56, 23 ]; // 5,7,13,23

// const isPrime=(n)=> {
//     if(n==0 || n==1) return false;
//     for(i=2; i<=Math.sqr(n); i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// const arr1=arr.filter(num => isPrime(num));
// console.log("result:" + arr1);

// // call back
// function myFun(param){
//     if(typeof param==='function' ){
//     param('yeu fpt');
//     } 
//     }
// function myCallBack(value){
//      console.log("say:",value);
// }
//     myFun(myCallBack);

// const arr=['red', 'blue','pink','yellow'];
// let [a,,b,c]=arr;
// console.log(a,b,c);




// rest array . trừ cái đầu tiên và in ra cái còn lại
const arr=['1','23','13','124','562','543']
let [x,...arr1]=arr;
console.log(arr1);

// rest object . trừ cái đầu tiên và in ra cái còn lại
const student ={
    id:1,
    name:'Vanh',
    age:21,
    gender:true
};
let {gender,id,...freeSt}=student;
console.log(freeSt);


//spread array
const a1=[4,5,6];
const a2=[8,9,10];
const a3=[...a2,55,6,...a1];
console.log(a3);
// spread object
let o1={
    fname:'an', 
    age:23
}
let o2={ 
    age:20 // cái age sau sẽ đc lấy trước 
}
let o3={
    ...o1,...o2 
}
console.log(o3);
    