let buttons = document.querySelectorAll(".button");

let body = document.querySelector("body");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let id = e.target.id;
    if (id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    else if(id === "purple") {
      body.style.backgroundColor=e.target.id
    }
    else if (id==="blue"){
      body.style.backgroundColor=e.target.id
    }
    else if (id==="white"){
      body.style.backgroundColor="white"
    }
    else{
      body.style.backgroundColor="red"
    }
    
  });
});



