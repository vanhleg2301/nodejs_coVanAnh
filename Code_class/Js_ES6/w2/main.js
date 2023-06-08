// function generateDiv(h = '200px', w='400px', b = '2px solid red'){
// 	let divElement = document.createElement('div')
// 	divElement.style.height = h;
// 	divElement.style.width = w;
// 	divElement.style.border = b;
// 	divElement.style.textAlign='center';
// 	divElement.innerHTML='<h2>FPT là trường đại học ở Hoà Lạc</h2>';
// 	document.body.appendChild(divElement);
// 	return divElement;
// }
// document.createElement=generateDiv('300px','200px','4px solid blue');
// let a = ["a", "b", "c"];
// console.log(a[0]); // a
// // trường hợp chỉ số ngoài phạm vi giới hạn thì kết quả là undefined
// console.log(a[-1]); // undefined
// console.log(a[3]); // undefined
// // thay đổi giá trị của mảng tại chỉ số 0
// a[0] = "A";
// console.log(a[0]); // A
// // thêm phần tử vào mảng tại chỉ số 3
// a[3] = "d";
// console.log(a[3]); // d
// console.log(a)
// let a = ['a', 'b', 'c']
// let item = a.pop();
// console.log(item); // c
// console.log(a); // (2) ['a', 'b']
// console.log(a.pop())//

//Lọc những phần tử >=10
// function filt(element) { 
//     return (element >= 10); 
//  } 
//  let passed = [12, 5, 8, 130, 44].filter(filt); 
//  console.log("Result : " + passed ); 
//  // Result : 12,130,44
//  let a=[0,7,88,1,89,66,4,6,13]

 //7 89 13

//  let arr = new Array(12,13,14,15);
// console.log("In mảng gốc......");
// arr.forEach(function(val,index) {
//    console.log(index+':'+val)//arr[i]
// });
// arr.reverse(); //đảo ngược mảng
// console.log("In mảng sau khi đảo ngược....");
// arr.forEach(function(val,index){
//    console.log(val)
// });
//let m=[7,10,70,4,17,56];
//moi <10 khong giam, 10-30 giam 10%, >30 20%

//[7,9,56,4,15.3,44.8]
// let arr = ["FPT","la","truong toi", "hoc", "khi thanh xuan"];
// console.log(arr.slice(0, 2)); //FPT,la
// console.log(arr.slice(1, 3)); //la,truong toi
// console.log(arr.slice(1,4))

// let arr = new Array("đỏ", "da cam", "vàng", "lục");
// let str = arr.toString();
// console.log(str); //đỏ,da cam,vàng,lục

// var numbers = [1, 2, 3]; 
// var val= numbers.entries(); 
// var [x,y,...rest]=val
//console.log(...val);//tat ca
//console.log(rest)//2 phu tu dau

// let person = { id: 1, name: 'To an An', age: 20 };
// console.log(person);
// console.log("ID: " + person.id + ', Name: ' + person.name + ', Age: ' + person.age);
// let emp=new Object();  
// emp.id=101;  
// emp.name='Ravi Malik';  
// emp.salary=50000; 
// console.log(emp)

let fName='an';
let age=20;
let person={
   fName, // fName:fName,
    age, //age:age
    // getName:function(){
    //     return fName;
    // }
    getName(){
        return fName;
    }
};
console.log(person.getName());
