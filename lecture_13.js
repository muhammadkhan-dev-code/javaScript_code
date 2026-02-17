// Math.PI  Property Descriptors


const pi= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(pi);

console.log(Math.PI);

const newObj= {
    name:"Muhammad",
    price:124,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(newObj,'name'))

Object.defineProperty(newObj,'price',{
   writable:false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(newObj,'price'))

const chai={
    name:'ginger chai',
    price:133,
    isAvailable:true,

    orderChai:function(){
        console.log('chai ordered');   
    }
}

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !=='function' ){
        console.log(`${ key } : ${value}`);
        
    }
}

