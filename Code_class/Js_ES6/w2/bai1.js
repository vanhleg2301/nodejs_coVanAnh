//danh sach sinh vien
let list = [
	{ id: 1, name: 'An', age: 21, gender: true },
	{ id: 2, name: 'tuan', age: 20, gender: true },
	{ id: 3, name: 'Tuan', age: 22, gender: false },
    { id: 3, name: 'binh an', age: 22, gender: false }
];
//viet ra ds sinh vien
const showStudent=(arr)=>{
    console.log('ID\tName\tAge\tGender');
    for(s of arr){
        console.log(`${s.id}\t${s.name}\t${s.age}\t${s.gender?'male':'female'}`);
    }
}
showStudent(list);
const stA=list.filter(s=>
    s.name.toLocaleLowerCase().startsWith('a')
    );
showStudent(stA);
//dua ra sinh vien nam- true
const stB=list.filter(s=>
    s.gender=true
    );
showStudent(stB);
//dua ra sv co tuoi >20
const stC=list.filter(s=>
    s.age>20
    );
showStudent(stC);
//dua ra sv co chua ua
const stD=list.filter(s=>
    s.name.toLocaleLowerCase().indexOf('ua')>=0
    );
showStudent(stD);
//sap xep tuoi
let stSort1 = list.sort((a, b) => a.age - b.age);
showStudent(stSort1);
//sap xep theo ten - khong phan biet
let sort2=list.sort((a,b)=>{
    if(a.name.toLocaleLowerCase()>b.name.toLocaleLowerCase())
        return 1;
        if(a.name.toLocaleLowerCase()===b.name.toLocaleLowerCase())
        return 0;
        if(a.name.toLocaleLowerCase()<b.name.toLocaleLowerCase())
        return -1;    
}); 
console.log('sap xep theo ho');
showStudent(sort2);

//sap xep theo ten va theo gioi tinh nu len truoc
