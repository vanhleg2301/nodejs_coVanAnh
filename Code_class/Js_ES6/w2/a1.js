
let arr=['tuan','lan','ha','thao'];
let [a,b,,c]=arr;
console.log(a,b,c);
for( const[value,index] of arr.entries()){
      console.log(`${value} at ${index}`);
}
