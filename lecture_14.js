//  Getters and Setters
class User{

    constructor(email,password){
        this.email= email;
        this.password=password
    }

     set password(pass){
        this._password=pass

     }
     set email(email){
        this._email=email
     }
    get password(){
        return this._password.toUpperCase()
    }

    get email(){
          return this._email=email
    }
}

const user=new User("Muhmmad",'1234')
console.log(user);

/*

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}
const chai = new User("chai@chai.com", "chai")
console.log(chai.email);

const User={
    _email:"h@hc.com",
    _password:'1234',


    get email(){
        return this._email.toLocaleUpperCase()
 },

    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)// based on user a create an object and refer to tea
*/