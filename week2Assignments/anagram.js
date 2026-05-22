let str1='listee'
let str2='silent'
let splitStr1=str1.split("").sort().join("");
let splitStr2=str2.split("").sort().join("");
console.log(splitStr1, splitStr2)
if(splitStr1.toLocaleLowerCase()===splitStr2.toLowerCase()){
    console.log("Anagram" )
    
}
else 
    console.log("not anagram")
