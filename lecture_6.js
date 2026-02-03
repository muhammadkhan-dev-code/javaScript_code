// ----------------- Immediately invoked function---------------
/**  
 * global scope ke pollution hoti hey to 
 * isse bachne ke liye IIFE use karte hey
 */
(

    function chai (){ // named ifee

    console.log("Hello from IIFE");
})();


(
    ()=>{
        console.log('Data Base Connected ');    
    }    
)();

(
    (name)=>{
        console.log(`Hello , ${name} from IIFE`);
    }
)('Muhammad Khan');
