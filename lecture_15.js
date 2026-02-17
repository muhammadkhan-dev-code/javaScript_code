// LEXICAL SCOPE IN JS  CLOUSRE

function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}

init();

function outer() {
  let username = "muhammad";

  function inner() {
    let secret = "my123";
    console.log("inner ", username);

    function innerTwo() {
      console.log("inner to ", username);
      console.log(`secret ${secret}`);
    }

    innerTwo();
  }

  // function innerBahi(){
  //     console.log(secret);

  // }
  // innerBahi()
  inner();
}
outer();
// console.log('Username outer',username);

// Closure
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName; // just not function return but also 
//    lexical Scope will be returend 
}

const myFunc = makeFunc();
myFunc();

function clickHanlder(color){
    return function(){
        document.body.style.background=`${color}`
    }
}





