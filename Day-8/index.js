let dog={};
console.log(dog)
//
dog={
    name:"Milka",
    legs:"4",
    color:"Brown",
    age:"10", 
    bark:function() {
        return "woff woff"
    }
}
console.log(dog)
console.log(dog.bark())
//
dog.breed="";
dog.getDogInfo=""
console.log(dog)
//
let  users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
 //
 let skillMayor=[]
 let userMayor=""
 Object.keys(users).forEach(username => {
    if(users[username].skills.length>skillMayor.length){
        skillMayor=users[username].skills
        userMayor=(username)
    }
  });
  console.log(userMayor)
  //
    userMayor=""
  Object.keys(users).forEach(username => {
     if(users[username].points>=50){
         userMayor+=(username+" ")
     }
   });
   console.log(userMayor)
   //
    let MERN =['MongoDB', 'Express', 'React', 'Node']
    let personaMern=""
   Object.keys(users).forEach(username => {
    const userSkills = users[username].skills;
    //////////////Importante
      if(MERN.every(skill => userSkills.includes(skill))){
          personaMern+=(username+" ")
      }
    });
    console.log(personaMern)
    //
    usuario={
        Erick: {
            email: 'erick100520@gmail.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 23,
            isLoggedIn: true,
            points: 999
          }
    }
    let usuarioYo=Object.assign(users, usuario);

    console.log(usuarioYo)
    //
    Object.keys(usuarioYo).forEach(username => {
        console.log(username,Object.keys(usuarioYo[username]))
      });
    //
    Object.keys(usuarioYo).forEach(username => {
        console.log(username,Object.values(usuarioYo[username]))
      });
//
let pais={
    Mexico:{
        nombre:"Mexico",
        capital:"Ciudad de México",
        población:126.7,
        idiomas:"Español"
    },
    Japon:{
        nombre:"Japon",
        capital:"Tokio",
        población:125.7,
        idiomas:"Japones"
    }
    ,
    Canada:{
        nombre:"Canada",
        capital:"Ottawa",
        población:38.25,
        idiomas:"Ingles"
    }
}
console.log(Object.entries(pais))
//
let personAccount={
  firstName:"Erick",
  lastName:"Padilla",
  incomes:[],
  expenses:[],
  totalIncome: function () {
      let total=0
      for(let i of this.incomes) total+=i
      return total
  }
  ,
  totalExpense: function () {
    let total=0
    for(let i of this.expenses) total+=i
    return total
    },
  accountInfo: function () {
    return this.firstName.concat(" "+this.lastName)
  },
  addIncome: function (inc) {
    return this.incomes.push(inc)
  },
  addExpense : function (expense) {
    return this.expenses.push(expense)
  },
  accountBalance : function () { 
    let balance=0
    balance=this.totalIncome()-this.totalExpense()
    console.log(balance)
  },
}

personAccount.incomes.push(300,200,300)
personAccount.expenses.push(200,300)
console.log(personAccount.incomes)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
personAccount.addIncome(400)
personAccount.addExpense(200)
console.log(personAccount.incomes)
console.log(personAccount.expenses)
personAccount.accountBalance()
//
const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(id,nombre,correo,contra,fechaUser){
  for(let i=0;i<users2.length;i++){
    console.log(users2[i].username,users2[i].isLoggedIn)
    if(users2[i].username==nombre && users2[i].isLoggedIn==true){
      return console.log("El usuario ya esta logeado")
    }
  }
  users2.push({_id:id,username:nombre,email:correo,password:contra,fecha:fechaUser})
  console.log(users2)

}
signUp("sfsdfa","Erick","erick100520@gmail.com","12343","02/03/2023 11:00 AM")
//
function signIn (nombre,contra){
  for(let i=0;i<users2.length;i++){
    if(users2[i].username==nombre && users2[i].password==contra){
      return console.log(`Ha inciado sesion ${users2[i].username}`)
    }
  }
   console.log("No ingresates bien el usuario o la contraseña ")
}
signIn("Erick","12343")
//
function rateProduct (name,userid,rate){
  for(let i=0;i<products.length;i++){
    if(products[i].name==name){
      return products[i].ratings.push({userid,rate})
    }
  }
}

rateProduct("mobile phone","ewrsd",5)
//
function averageRating (){
  let media=0
  let suma=0
  for(let i1=0;i1<products.length;i1++){
    for(let i2=0;i2<products[i1].ratings.length;i2++){
      suma+=products[i1].ratings[i2].rate
       media=`La media es ${products[i1].name} ${suma/3} `
    }
     console.log(media)
    suma=0
    media=0
  }
  return media
}
averageRating()
//
function likeProduct(like){
  for(let i=0;i<products.length;i++){
    if (like=="Me gusta"){
      if(products[i].likes=="fg12cy"){
        console.log("Ya te gustaba ")
      }
      else{
        products[i].likes.push(["fg12cy"])
        console.log("Ya te gusta ")

      }
    }
    else{
      if(products[i].likes=="fg12cy"){
        console.log("Ya no te gusta ")
      }
      else{
        console.log("Ya no te gustaba")
      }
    } 
  }

}
likeProduct("No me gusta")