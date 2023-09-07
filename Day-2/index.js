let desafío="30 días de JavaScript"
console.log(desafío)
console.log(desafío.length)
console.log(desafío.toUpperCase())
console.log(desafío.toLowerCase())

let segmento="segmenta"
console.log(segmento.substring(0,1))

let frase="Days Of JavaScript de 30 Days Of JavaScript"
console.log(frase.substring(0,18))
console.log(frase.includes("Script"))
console.log(frase.split())
console.log(frase.split("30 Days Of JavaScript"))
let empresas='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(empresas.split(","))
console.log(frase.replace("30 Days Of JavaScript","30 Days Of Python"))
console.log(frase.charAt(15))
console.log(frase.charCodeAt("J"))
console.log(frase.indexOf("30 Days Of JavaScript"))
console.log(frase.lastIndexOf("30 Days Of JavaScript"))

let oracion="No puedes terminar una oración con porque porque porque es una conjunción"
console.log(oracion.indexOf("porque"))
console.log(oracion.lastIndexOf("porque"))
console.log(oracion.search("porque"))

let diasJavascript=" 30 días de JavaScript "
console.log(diasJavascript.trim())
console.log(diasJavascript.startsWith(" "))
console.log(diasJavascript.endsWith(" "))
console.log(diasJavascript.match("a"))

let dias="30 días de"
let leguajeP=" JavaScrip"

console.log(dias.concat(leguajeP))
console.log(diasJavascript.repeat(2))


//Ejercicio: Nivel 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof('10'))
console.log(typeof(10))
console.log(Math.round(9.8))

let espero="Espero que este curso no esté lleno de jerga";
console.log("Python".includes("on"))
console.log("jerga".includes("on"))
console.log("Espero que este curso no esté lleno de jerga".includes("jargon"))
console.log(Math.random()*101)
console.log(Math.random()*(100 - 50)+50)
console.log(Math.random()*255)
let lenguaje="JavaScript"
console.log(lenguaje[Math.round(Math.random()*9)])

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")
let oracion2="No puedes terminar una oración con porque porque porque es una conjunción";
console.log(oracion2.substr(35, 20));

//Ejercicios: Nivel 3
let amorCadena="El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración";
console.log(amorCadena.match("amor"))

let porqueCadena="No puedes terminar una oración con porque porque porque es una conjunción"
console.log(porqueCadena.match("porque"))
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
  let regEx = /[%$&@#;?]+/g;
  console.log(sentence.replace(regEx,""))
  let gana="Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes"
  let regGana = /[0-9]+/g;
  salario=gana.match(regGana)
  console.log(parseInt(salario[0]*12)+parseInt(salario[1])+parseInt(salario[2]*12))