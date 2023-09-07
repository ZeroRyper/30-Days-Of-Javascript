let vacio=[];
let listaCompras=["Manzana","Fresa","Uvas","Bananas","Arroz"]
console.log(listaCompras.length)
console.log(listaCompras[0],listaCompras[2],listaCompras[4])

let mixedDataTypes=["Hola",43,true,null,undefined]
console.log(mixedDataTypes.length)

let itCompanies =["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[3],itCompanies[6])
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])
console.log(itCompanies[0].toUpperCase(),itCompanies[1].toUpperCase(),itCompanies[2].toUpperCase(),itCompanies[3].toUpperCase(),itCompanies[4].toUpperCase(),itCompanies[5].toUpperCase(),itCompanies[6].toUpperCase())
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} y ${itCompanies[6]} son grandes empresas de TI.`)

let empresaIt="Amazon";

if(itCompanies.includes(empresaIt)){
    console.log("Si existe")
}else{
    console.log("La empresa no existe")
}

//
if((itCompanies[0].toLowerCase().split(/[a-np-z]+/g).toString()).replace(/,/g, "")=="oo"){
    console.log(itCompanies[0])
}
if((itCompanies[1].toLowerCase().split(/[a-np-z]+/g).toString()).replace(/,/g, "")=="oo"){
    console.log(itCompanies[1])

}
if((itCompanies[2].toLowerCase().split(/[a-np-z]+/g).toString()).replace(/,/g, "")=="oo"){
    console.log(itCompanies[2])
    
}
if((itCompanies[3].toLowerCase().split(/[a-np-z]+/g).toString()).replace(/,/g, "")=="oo"){
    console.log(itCompanies[3])
    
}
if((itCompanies[4].toLowerCase().split(/[a-np-z]+/g).toString()).replace(/,/g, "")=="oo"){
    console.log(itCompanies[4])
    
}
if((itCompanies[5].toLowerCase().split(/[a-np-z]+/g).toString()).replace(/,/g, "")=="oo"){
    console.log(itCompanies[5])
    
}
if((itCompanies[6].toLowerCase().split(/[a-np-z]+/g).toString()).replace(/,/g, "")=="oo"){
    console.log(itCompanies[6])    
}
//
console.log(itCompanies.sort())
//
console.log(itCompanies.reverse())
//
console.log(itCompanies.slice(0,2))
//
console.log(itCompanies.slice(2,6))
//
console.log(itCompanies.slice(2,5))
//
itCompanies =["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
itCompanies.shift()
console.log(itCompanies)
//
itCompanies.splice(1,2)
console.log(itCompanies)
//
itCompanies.pop()
console.log(itCompanies)
//
itCompanies.splice()
console.log(itCompanies)
//
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let arraytext=text.replace(/[.]/g, '')
arraytext=text.split(" ")
console.log(arraytext.length);
//
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
shoppingCart.splice(4, 1)
shoppingCart.splice(3, 1, "Green Tea")
console.log(shoppingCart)
//

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

console.log(frontEnd.concat(backEnd));

//
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let agemin=ages[0];
let agemax=ages[ages.length-1]; 
let agemedia=ages[ages.length/2];
let agepromedio=ages.reduce((acumulador, numero) => acumulador + numero, 0)/ages.length;
let ageRango=agemax-agemax;
console.log(agemin,agemax)
console.log(agemedia)
console.log(agepromedio)
console.log(ageRango)
console.log((agemin-agepromedio),(agemax-agepromedio))
//
