let data =["chrome",true,132.8,0,,'test']
console.log(data);
data[5]="Webkit"
console.log("Added index[5]      : " +data);
data.pop();
console.log("After pop           : "+ data);
data.push("Firefox");

console.log("After push firefox  : " +data);
data.shift();
console.log("After shift         : " +data);
data.unshift("Test") 
console.log("After unshift       : " +data);

console.log(data.indexOf(true));
console.log(data.indexOf(0,3))
console.log(data.indexOf(0,4))

let data1=data.join();
console.log(data1);

console.log(data1.split("").reverse());
console.log(data.sort());


console.log(data.includes('test'))
console.log(data.includes('test1'))

