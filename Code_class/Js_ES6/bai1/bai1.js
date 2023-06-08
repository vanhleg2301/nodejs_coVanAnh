let list = [
    { id: 1, name: 'An', age: 21, gender: true },
    { id: 2, name: 'Van', age: 20, gender: true },
    { id: 3, name: 'Tuan', age: 19, gender: false },
    { id: 4, name: 'anh', age: 25, gender: true },
    { id: 5, name: 'Anh', age: 18, gender: false },
    { id: 6, name: 'Huan', age: 27, gender: true }
];
// Viet ra danh sach sinh vien 
const showStudent=(arr)=>{
    console.log('ID\tName\tAge\tGender');
    for(s of arr){
        console.log(`${s.id}\t${s.name}\t${s.age}\t${s.gender?'male':'female'}`);
    }
}
showStudent(list);   

// // tim kiem
// console.log("TenBatDauBangChu-a");
// let stA = list.filter(s =>
//     s.name.toLocaleLowerCase().startsWith('a')
// )
// showStudent(stA);

//
console.log("Sinh Vien la nam----------------");

let svN = list.filter(s =>
    s.gender=true
)   
showStudent(svN);


// tim kiem
console.log("Ten co 'ua'--------------------");
let haveUA = list.filter(s =>
    s.name.toLocaleLowerCase().indexOf('ua') >= 0
)
showStudent(haveUA);

// sap xep
console.log("sap xep theo tuoi----------------");
let sort1 = list.sort((a, b) => a.age - b.age);
showStudent(sort1);

console.log("sap xep theo ten ko phan biet - sap xep theo ho -----------------------")
let sort2 = list.sort((a,b) => {
    if(a.name.toLocaleLowerCase()>b.name.toLocaleLowerCase())
    return 1;
    if(a.name.toLocaleLowerCase()<b.name.toLocaleLowerCase())
    return -1;
    if(a.name.toLocaleLowerCase() === b.name.toLocaleLowerCase())
    return 0;
});
showStudent(sort2);