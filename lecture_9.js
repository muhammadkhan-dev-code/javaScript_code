//-------------- filter method
const books=[
    {
        title:"Book One",
        genre:"Fiction",
        publish:1990,
        edition:10
    },
    {
        title:"Book Two",
        genre:"Non-Fiction",
        publish:2000,
        edition:5
    },
    {
        title:"Book Three",
        genre:"Science",
        publish:2010,
        edition:2
    },
    {
        title:"Book Four",
        genre:"Fiction",
        publish:2020,
        edition:1
    },
    {
        title:"Book Five",
        genre:"Science",
        publish:2022,
        edition:3
    },
    {
        title:"Book Six",
        genre:"Non-Fiction",
        publish:2015,
        edition:4

    },
    {
        title:"Book Seven",
        genre:"History",
        publish:2005,
        edition:6
    } ,
    {
        title:"Book Eight",
        genre:"History",
        publish:1995,
        edition:8
    }


]/*

const userBooks=books.filter(
    (book)=>{
        return book.genre==="History"
    }
)
const userBooks=books.filter(
    (book)=>{
        if(book.publish>=2015){
            return `Book Title: ${book.title},  Publish Year: ${book.publish},`;
        }
    }
)
*/

const userBooks=books.filter(
    (book)=>{
        if(book.publish>=2000 && book.genre==="History"){
            return `Book Title: ${book.title},  Publish Year: ${book.publish},`;
        }
    }
)


// console.log(userBooks);

// Map method
let nums=[1,2,3,4,5,6,7,8,9,10];
 const square = nums.map(
    (num)=> num*num
)
// console.log(square);

// Chainning of filter and map
 const newNums=nums.
 map(
    (num)=>{
        return num*2
    }
 ). // passed to second map
 map(num=>{
     return num+1
 }).filter(num=>{
    return num>10
 })
console.log(newNums);

// Reduce method
const numbers=[1,2,3,4,5];
const initialValue=0;

const sumWithInitial=numbers.reduce(
    (acc,curr)=>acc+curr,initialValue
);
console.log(sumWithInitial);

const total= numbers.reduce(
    function(acc,curr){
        console.log(`Accumulator: ${acc} , Current Value: ${curr}`);
        
        return acc+curr
    },0
)
console.log(total);