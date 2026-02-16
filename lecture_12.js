//  ES6
// inheritance
class User {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
  }

  encryptPassword() {
    return `ur password: ${this.pass} `;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }

  logMe(){
    console.log(`USERNAME IS :${this.username}`);
    
  }
}

class Teacher extends User{
    constructor(username,email,password,role){
        super(username,email,password);
        this.role= role;
    }
  addCourse(){
    console.log(`added the course by : ${this.username} `);
    
  }
}



const masalaChai=  new User("Muhammad","mu@gmail.com","123")
masalaChai.logMe()

const chai= new Teacher("Muhammad Khan","muhammad@gmail.com","123","Teacher")
chai.addCourse();
chai.logMe()

console.log(chai===masalaChai);
console.log(chai=== Teacher);
console.log(chai instanceof Teacher);

console.log(Teacher instanceof User);
console.log(chai instanceof User);


//  -----Static properties
class UserClass{
    constructor(username){
        this.username= username;
    }
    logMe(){
        console.log(`Usrname : ${this.username}`);
        
    };
     static createId(){ // id ka access kisi our ko na do
        return `id :${Math.floor(Math.random()*100 +1)}`
    }
}

class TeacherClass extends UserClass{

    constructor(username,email){
        super(username);
        this.email=email;
    }

}
const t3= new TeacherClass("Iphone","iphone@gmail.com")
console.log(t3.logMe());
console.log(t3.createId()) can not accessd by even child

const u= new UserClass("Muhammad")
console.log(u.createId()) not work now 



const user1 = new User("Muhammad", "muhammad@gmail.com", "1234");
console.log(user1.encryptPassword());
console.log(user1.changeUserName());

/*
// Behind the Scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword= function(){
    return this.password
}

User.prototype.changeUserName= function(){
    return this.username.toUpperCase()
}

const user= new User("Muhammad","muhammad@gmail.com","1234")
console.log(user.changeUserName());
console.log(user.encryptPassword());
*/
