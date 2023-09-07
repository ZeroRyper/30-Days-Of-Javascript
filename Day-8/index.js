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
