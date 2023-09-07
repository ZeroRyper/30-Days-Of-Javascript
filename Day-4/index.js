let edad = prompt("¿Que edad tienes?");
if (edad>=18){
    console.log("Tiene la edad suficiente para conducir.")
}
else{
    console.log(`Te faltan ${18-edad} años para conducir.`)

}

let myAge = 250;
let yourAge = 25;
if(myAge > yourAge){
    console.log(`Soy ${myAge} mayor que tu`)

}
else{
    console.log(`Eres ${yourAge} que yo`);
}
//
let a = 4;
let b = 3;
if(a>b){
    console.log(` ${a} es mayor que ${b}`)
}
else{
    console.log(` ${b} es mayor que ${a}`)
}
//
let num=prompt("Ingrese un número");
if(num%2==0){
    console.log(`${num} es un número par`)
}
else{
    console.log(`${num} es un número impar`)
}
//
let calificacion=prompt("Ingrese su calificacion");
console.log(parseInt(calificacion))
if(calificacion>0 && calificacion<49){
    console.log("0-49, F")
}
else if(calificacion>50 && calificacion<59){
    console.log("50-59, D")

}
else if(calificacion>60 && calificacion<69){
    console.log("60-69, C")

}
else if(calificacion>70 && calificacion<89){
    console.log("70-89, B")

}
else{
    console.log("80-100, A")

}
//
let mes=prompt("Ingresa el mes");
mes=mes.toLowerCase();
if(mes=="septiembre" || mes=="octubre" || mes=="noviembre"){
 console.log("la temporada es Otoño")
}
else if(mes=="diciembre"||mes=="enero"||mes=="febrero"){
    console.log("la temporada es Invierno")
}
else if(mes=="marzo"||mes=="abril "||mes=="mayo"){
    console.log("la temporada es Primavera")
}
else {
    console.log("la temporada es Verano")
}
//
let dia = prompt("¿Qué día es hoy?");
dia = dia.toLowerCase();

switch (dia) {
  case "lunes":
    console.log("El lunes es un día laborable.");
    break;
  case "martes":
    console.log("El martes es un día laborable.");
    break;
  case "miércoles":
    console.log("El miércoles es un día laborable.");
    break;
  case "jueves":
    console.log("El jueves es un día laborable.");
    break;
  case "viernes":
    console.log("El viernes es un día laborable.");
    break;
  case "sábado":
    console.log("El sábado es fin de semana");
    break;
  case "domingo":
    console.log("El domingo es fin de semana");
    break;
  default:
    console.log("No es un día de semana.");
}
//
let mesDias=prompt("Introduce un mes:");
mesDias=mesDias.toLowerCase()
let diabisieto=prompt("Es dia bisieto");
diabisieto=diabisieto.toLowerCase()
diaBi=28;
if(diabisieto=="si"){
    diaBi+=1;

}
if(mesDias == "febrero"){
    console.log(diaBi)
}
else if(mesDias=="abril"||mesDias=="junio"||mesDias=="septiembre"||mesDias=="noviembre"){
    console.log(30)
}
else if(mesDias=="enero"||mesDias=="marzo"||mesDias=="mayo"||mesDias=="julio"||mesDias=="agosto"||mesDias=="octubre"||mesDias=="diciembre"){
    console.log(31)

}
else{
    console.log("Formato no valido")
}