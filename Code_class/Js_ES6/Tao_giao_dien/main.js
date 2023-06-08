// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];
// // load data
// // const data=document.querySelector('#data');
// // const load = (arr) => {
// //     data.innerHTML='';
// //     const h1=document.createElement('h1');
// //     h1.innerText='The list of company names';
// //     data.appendChild(h1);
// //     const ol=document.createElement('ol');
// //     arr.map(c=>{
// //         const li=document.createElement('li');
// //         li.innerText=`${c.name} - ${c.start} - ${c.end}`;
// //         ol.appendChild(li);
// //     });
// //     data.appendChild(ol);
// // }

// // const loadData=() => {
// //     load(companies);
// // };

// // chuyen thanh bang 
// const tbody=document.querySelector('#table-company');
// const load = (arr) => {
//     const tr=document.createElement('tr');
//     arr.map(c=>{
//         const td=document.createElement('td');
//         td.innerText=`${c.name} `;
//         tr.appendChild(td);
//     });
//     tbody.appendChild(tr);
// }

// const loadData=() => {
//     load(companies);
// };

// // filterData
// const filterData=() => {
//     const from = parseInt(document.querySelector('#fromYear').value);
//     const to = parseInt(document.querySelector('#toYear').value);

//     const arr=companies.filter(c=> c.start >= from && c.start <= to);
//     if(arr.length == 0){
//         data.innerHTML='';
//         const h3=document.createElement('h3');
//         h3.style.color='red';
//         h3.innerText='khong tim thay'
//         data.appendChild(h3);
//     }else{
//         load(arr);
//     }
// };

// //sort by name
// const sortByName = () =>{
//     let arr = companies.sort((a, b) => a.name.localeCompare(b.name))
//     load(arr);
// }

// // sort by start
// const sortByTimeStart = () =>  {
//     const arr = companies.sort((a, b) => a.start - b.start);
//     load(arr);    
// }

// // search by name


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];
    //load data
    const root = document.querySelector('#root');
    const table = document.querySelector('#table');
    table.border = '1px';
    table.style.borderCollapse = 'collapse';
    table.width = '40%';
    const load = (arr) => {
    root.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerText = 'List of company name';
    root.appendChild(h1);
    arr.map(c => {
    const tr = document.createElement('tr');
    for (const [key, value] of Object.entries(c)) {
    const td = document.createElement('td');
    td.innerText = `${value}`;
    tr.appendChild(td);
    }
    table.appendChild(tr);
    });
    }
    const loadData = () => { load(companies) };
    const filterData = () => {
    table.innerHTML = `
    <tr>
    <th>Name</th>
    <td>category</td>
    <th>start</th>
    <th>end</th>
    </tr>
    `;
    const from = parseInt(document.querySelector('#fromYear').value);
    const to = parseInt(document.querySelector('#toYear').value);
    const arr = companies.filter(c => c.start >= from && c.end <= to);
    if (arr.length == 0) {
    const h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = 'no Company';
    root.appendChild(h3);
    } else {
    let sortStart = arr.sort((a, b) => {
    return a.start - b.start;
    })
    load(sortStart);
    }
    }
    const filterByName = () => {
    table.innerHTML = `
    <tr>
    <th>Name</th>
    <td>category</td>
    <th>start</th>
    <th>end</th>
    </tr>
    `;
    let target = document.querySelector('#nameSearch').value.toLowerCase().trim();
    const arr = companies.filter(c => c.name.toLowerCase().includes(target));
    if (arr.length == 0) {
    const h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = 'no Company';
    root.appendChild(h3);
    } else {
    let sortName = arr.sort((a, b) => {
    let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();
    if (fa < fb) {
    return -1;
    }
    if (fa > fb) {
    return 1;
    }
    return 0;
    })
    load(sortName);
    }
    }

