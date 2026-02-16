// ------------  OOP IN JS--------

const user = {
  username: "muhammad",
  loginCount: 4,
  signedIn: true,
  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
  },
};

console.log(user.getUserDetails());

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}
const userOne = new User("Muhammad", 12, true);
const userTwo = new User("ChaiStudy", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);

// --------- CLASS AND OBJECTS IN JS -----------------

//  JS PROTOYPE BEHAVIOUR

function multiply(num) {
  return num * 5;
}

multiply.power = 2;
multiply(5);
console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);
/**
 * console.log(multiply.prototype); this will give an
 *  some internal properties bhi deta he
 *
 */

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};
const user1 = new createUser("user1", 14);
const user2 = new createUser("user2", 245);

user1.printMe();
user2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the
 newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this,
  the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive
 value (object, array, function, etc.), the newly created object is returned.

*/

//  understand protoype

let myname = "muhammad       ";
console.log(myname.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.muhammad = function () {
  console.log(`Muhammad is here  for all objects `);
};

Array.prototype.muhammadk = function () {
  console.log(` Prototype is in Array`);
};

// heroPower.muhammad()
// myHeros.muhammad()

myHeros.muhammadk();
// heroPower.muhammadk()

// ---------------------- Inheritance in  JS 
const Usr = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // reference to teachSupport

}
Teacher.__proto__.Usr;


//  Modern 
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername="ChaiAurCode       "
String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(` true length : ${this.trim().length}`);
    
}

"muhammad  ".truelength()
"mkhan".truelength()


//  Call 
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // explicitly call  refernce hold krne ke liya 
   
    this.email = email
    this.password = password
}

const us_1 = new createUser("user1", "chai@fb.com", "123")
console.log(us_1);