// -------------------- Arrays In Js ------------------------

const arr1=[1,2,3,4,5]
console.log(arr1[0]);
const arr2=new Array(1,2,3,4,6)


/*
    Shallow Copy
    is a copy of an Object whose property share the same reference point
    
    Deep Copy
    do not share the same reference point 
*/

//  Array Methods 
const arr=[1,2,3,4,5]
arr.push(6)
console.log(` Push Method in Arr : ${arr}`);
arr.pop()
console.log(` pop Method in Arr : ${arr}`);
arr.unshift(0)
console.log(` unshift Method in Arr : ${arr}`);
arr.shift()
console.log(` shift Method in Arr : ${arr}`);

console.log(` includes Method in Arr : ${arr.includes(6)}`);
console.log(` index Method in Arr : ${arr.indexOf(3)}`);
let newArr= [10,11,12,13]
a=newArr.join()
console.log(` join Method in Array : ${ typeof a}`); 

console.log('A',newArr);


/**
 * //  Slice 
 * extracts a section of the string and returns it as a new string. It doesn't change the original string
 * 
 * Splice 
 * splice changes the original array by removing, replacing, or adding values and returns the affected values.
 */
let nar=[1,2,3,4,5,6,7]
const myn1=nar.slice(1,3)
console.log(myn1);
console.log(nar);
const myn2=nar.splice(1,3)
console.log(myn2);
console.log(nar);

const myArr=[1,2,3,4,5,6,7,8,9]
const myn3=myArr.reverse()
// console.log(` Reverse Method in Array : ${myn3}`);

const marverl_heros=['Ironman','Spiderman','Hulk','Thor']
const dc_heros=['Batman','Superman','Flash']

// destructuring  elements from an array 

// by using push and concat method out put will be array inside an array
marverl_heros.push(dc_heros)
console.log(` Merge Two Arrays Using Push Method : `);
console.log(marverl_heros);

// by using concat method
let all_heros=marverl_heros.concat(dc_heros)
console.log(` Merge Two Arrays Using Concat Method : `);
console.log(all_heros);

// by using spread operator

console.log(marverl_heros.flat(Infinity))

marverl_heros.push(...dc_heros)
console.log(` Merge Two Arrays Using Spread Operator : ${marverl_heros}`);

console.log(Array.isArray("Muhammad"));
console.log(Array.from("Muhammad"));

console.log(Array.from({
    name:"Muhammad"

})); // this will give an [] array

// Create Array using of method
const myArray=Array.of(1,2,3,4,5)
console.log(myArray);

// Create Array using from method
const myArray2=Array.from("Muhammad")
console.log(myArray2);
































