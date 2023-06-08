const sum1=(str)=> {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            sum += parseInt(str[i]);
        }
    }
    return sum;
}
const sum2=(str)=>{
	let a=str.split(/\s+/);
	console.log(a)
	let sum=0
	a.forEach(x => {		
        sum+=parseFloat(x)
	});
	return sum
}
const sum3=(str)=>{
	let a=str.split(/\s+/);
	let sum = a.reduce(function(x, y){
		return (parseFloat(x) + parseFloat(y));}); 
return sum		
}
//button 1
const result1=document.querySelector('#result1')
const calcutate=()=>{
	let nums=document.getElementById('nums').value;
    result1.innerHTML='Sum:'+sum1(nums);
}
//button 2
const result2=document.querySelector('#result2')
const bt2=document.querySelector('#tinh')
let nums=document.getElementById('nums2')
bt2.addEventListener('click', () => {
	let n=nums.value;
    result2.innerHTML='sum:'+sum3(n)
})
