// JavaScript Series  With Hitesh Choudhary 

//  **********************************Day-1*************************************

        console.log("Hello World ..")

//1:  Variables and Constants 

        const account_id=18890;// can not be changed 
        let account_email="muhammadkhan@njv.edu.pk"; 
        var account_password="12345"; 
        account_city="Qazi Ahmed"
        let account_state; // value will be undefined

/*
        prefer not to use var
        because of issue in block scope and functional scope

*/

        console.table([account_id,account_email,account_password,account_city,account_state])
  
/* 2: Datatypes and ECMA standards
 
=> 
        String=>""
        number 2^53
        bigint 
        Boolean 
        null              type of null is Object
        undefined
        symbol =>unique 

*/
        console.log(typeof'');

//3:    Datatype conversion confusion
        let score="33"
        console.log(typeof(Number(score)))

/* 
        "33"-> 33
        "33abc"-> NaN
        true-> 1 & False->0
        "muhammad"-> true in Boolean
        ""-> false
*/

//4: Operations
        let value=3
        console.log(value);
        console.log(2+2);
        console.log(2-2);
        console.log(2*2);
        console.log(2**2);

        str1="Hello"
        str2=" hitesh"
        console.log(str1+str2);
/*
        console.log('2'+2); 22
        console.log(2+'2');  22
        console.log('1'+2+2);  122
        console.log(2+2+'2');  42 Toprimitive guidlines
*/

        console.log(true);
        console.log(+true);
        console.log(+'');

        let num1,num2,num3
        num1=num2=num3=2+2

        let gameCounter=100 // 100+1  prefix and postfix
        gameCounter++
        console.log(gameCounter);

//5:    Comparision
        console.log("Comparision Operator's > >= <= < != == and other");
        
        console.log("2">1); // true
        console.log('02'>1);//true
        console.log(null>0);// false
        console.log(null==0);// false*
        console.log(null>=0);// true

        console.log("2"=== 2); // false === also checks the data type 

/*
        6:  Data Types Notes
        i primitives data types (Call by Value)
                => String,
                => Number,
                => Boolean,
                => Null,
                => Undefined,
                => Symbol,
                => BigInt
        ii Non-primitives data types (Reference Type)
                Arrays,
                Objects,
                Functions

* js statically or dynamic *

*/
        const id = Symbol("123")
        const an_id= Symbol("123")
        console.table([id,an_id])
        console.log(id===an_id)
        
//-----------  Memory Concepts-----------------

// 1 Stack -> primitives  -> copy of data types


        let std_name="Muhammad Khan"
        let another_name=std_name
        console.table([std_name,another_name]);
        another_name="Mujahid Hussain"
        console.table([std_name,another_name]);

// 2 Heap -> Non primitives -> Reference of Origional Value

        let user1={
                email:"muhammad@njv.edu.pk",
                payment_method:"Jazz Cash"
        }
        
        let user2=user1
        user2.payment_method="EasyPaisa"
        console.table([user1,user2])