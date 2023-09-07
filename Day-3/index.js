let firstName="Erick";
let lastName="Padilla";
let country="Mexico"
let city="Zacatecas"
let age=23
let isMarried=false
let year=new Date("2022-10-05")
console.log(typeof(firstName),typeof(lastName),typeof(country),typeof(city),typeof(age),typeof(isMarried),typeof(year))
console.log(typeof('10')==typeof(10))

console.log(parseInt('9.8')==10)

console.log(1==1)
console.log("Hola"=="Hola")
console.log(true==true)

console.log(0==1)
console.log(""==" ")
console.log(0==undefined)

console.log(4>3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log((("Python").length)!=(("jargon").length))

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log("dragon".includes("on")&&"python".includes("on"))

const now = new Date();
console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now)
console.log(now.getUTCDay())
console.log(now.getHours())
console.log(now.getMinutes())

let allSeconds = Date.now(); 
let segundosTranscurridos = Math.floor(allSeconds / 1000);
console.log(segundosTranscurridos)
//Triangulo area
let base = prompt("Base");
let altura = prompt("Altura");
console.log("area es igual :"+0.5*base*altura);
//Triangulo prerimetro
let a = prompt("Lado a");
let b = prompt("Lado b");
let c = prompt("Lado c");
console.log("Perimetro:"+a*b*c);
//Rectangulo area/perimetro
let largo = prompt("Lado a");
let ancho  = prompt("Lado b");
console.log("Area:"+largo*ancho);
console.log("Perimetro:"+2*(largo+ancho));
//Radio Circulo
let radio = prompt("Radio");
console.log("Area:"+3.1416*radio**2);
console.log("Circulo:"+2*3.1416*radio);
//Pendiente
let x = prompt("intersección X");
let y=2*x-2 ;
console.log("Area:"+y);
//Pendiente 
let Int_x1 = prompt("intersección X1"),Int_x2=prompt("intersección x2");
let Int_y1 = prompt("intersección y1"), Int_y2=prompt("intersección y2");
let  m = (Int_y2-Int_y1)/(Int_x2-Int_x1);
console.log("Pendiente m:"+m);
console.log("Son iguales las pendiente?"+m==y)
//Calcule el valor
let valor_x=prompt("intersección X");
let valor_y= ((x**2)+6*valor_x+ 9);
console.log("Valor x:"+valor_y);
//salario
let hora=prompt("Ingrese horas");
let tarifaxhora=prompt("Introduce la tarifa por hora ");
let ganancixsemana=prompt("Su ganancia semanal es ");
console.log("Salario Total"+(hora*tarifaxhora)+ganancixsemana);
//
let nombre = "Erick";
nombre > 7
  ? console.log(`${nombre} es mayor que 7`)
  : console.log(`${nombre} es menor que 7`);
//

let nombreLargo = "Erick";
let apellidoLargo = "Padilla";
nombreLargo > apellidoLargo
  ? console.log(`${nombreLargo} es mas largo que ${apellidoLargo}`)
  : console.log(`${apellidoLargo} es mas largo que ${nombreLargo}`);
//
let myAge = 250;
let yourAge = 25;
myAge > yourAge
  ? console.log(`Soy ${myAge} mayor que tu`)
  : console.log(`Eres ${yourAge} que yo`);
//
let ayoNacimiento=prompt("En que ayo naciste");
let edad=ayoNacimiento-(new Date().getFullYear)

edad > 18
  ? console.log(`Tienes ${edad} años. Tienes la edad suficiente para conducir.
  `)
  : console.log(`Tienes ${edad} años. Podrás conducir después de ${18-edad} años.`);

  //
let ayovivo=prompt("Ingrese el número de años de vida:");
const segundosPorAño = 365 * 24 * 60 * 60; // Días * Horas * Minutos * Segundos
console.log(`Viviste ${segundosPorAño*ayovivo} segundos`);
//
const ayo = now.getFullYear() ;
const month = (now.getMonth() + 1).toString().padStart(2, '0'); // return meses(0 - 11)
const date = (now.getDate()).toString().padStart(2, '0'); // return días (1 - 31)
const hours = now.getHours(); // return horas (0 - 23)
const minutes = now.getMinutes();
console.log(`${ayo}/${month}/${date} ${hours}:${minutes}`); // 4/1/2020 0:56
console.log(`${date}-${month}-${ayo} ${hours}:${minutes}`); // 4/1/2020 0:56
console.log(`${date}/${month}/${ayo} ${hours}:${minutes}`); // 4/1/2020 0:56

//Ejercicios: Nivel 3
console.log(`${ayo}-${month}-${date} ${hours}:${minutes}`); // 4/1/2020 0:56
