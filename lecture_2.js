// ****************************** Day-2 **************************
/*
---------------Strings In JavaScript----------------------------
Strings are immutable  In J's once Strings are creeate then can not be editted 

*/
    let user_name="Muhammad Khan"
    const repo_count=50
    console.log(`Username :${user_name} github repo count ${repo_count}`);

    const gameName=new String('muhammad Khan') // string here is the Object  
    console.log(gameName[0]); // m
// console.log(gameName.__proto__);
    console.log(gameName.length);
    console.log(`game name : ${gameName.toUpperCase()} And To lower Case ${gameName.toLowerCase()}` );
    console.log(`3rd position character in ${gameName.charAt(3)}`);
    console.log(`Position of Character d at postion ${gameName.indexOf('d')}`);
    const newString=gameName.substring(0,5)
    const another_str=gameName.slice(-12,8) // CAN BE GIVEN NEGATIVE VALUE
    console.log(` Slice Method in String: ${another_str}`);
    const newString1="   mkhan   "
    const trim_string=newString1.trim()

    const url="https/khan.com/hitesh%20%choudhary"
    console.log(url.replace("%20%","-"))
    console.log(`Origional Url:  ${url}`);
    console.log(`Split method ${gameName.split(" ")}`)
/**
 * ------------ Numbers--------------- 
 */
    const score=400
    const balance=new Number(100)
    console.log(score);
    console.log(balance);
    const otherNumber=123.80966
    console.log(otherNumber.toPrecision(3));
    console.log(otherNumber.toFixed(2));

    const hundreds=10000000
    console.log(hundreds.toLocaleString('en-PK'));

/**
 * ----------------Maths Library in J's----------------
 */
    console.log(Math.abs(-4));
    console.log(Math.round(4.9));
    console.log(Math.ceil(4.3));
    console.log(Math.floor(4.9));
    console.log(Math.sqrt(4));
    console.log(Math.random());
    console.log((Math.random()*10)+1);

    const mn=10
    const mx=20
    console.log(Math.floor(Math.random()*(mx-mn +1)+mn))
/**
 * math.random()---- 0 btw 1
 * to avoid 0.00 add +1  
 * 
*/
//   -------- Dates in Javascript--------
    date=new Date()
    console.log(date.toLocaleString());
    console.log(date.toLocaleString());
    console.log(date.toDateString());
    
    const created_date= new Date(2004,0,1) // month start from 0 in js
    console.log(created_date.toDateString());
    date_=new Date("01-04-2004")
    console.log(date_.toLocaleString());
    console.log(date_.getTime());
    console.log(Math.floor(Date.now()/1000));
    
    let time= Date.now()
    console.log(time);
    
    let newDate=new Date()
    console.log(newDate.getFullYear());
    console.log(newDate.getDay());
    let dt = newDate.toLocaleString('default',{
        weekday:"long"  
    })
    console.log(dt);

    
    
    
    
    
    
    
        

    

    
    

    



    
    

    
    



    
  
   
    
    




    
    


    
    

    

    


        



// ******************************** Day-3 **************************

// ******************************** Day-4 **************************

// ******************************** Day-5 **************************