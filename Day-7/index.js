let fullname=(name)=>name;
console.log(fullname("Erick Padilla"))

fullname=(firstName,lastName)=>firstName+lastName;
console.log(fullname("Erick ","Padilla"))

let addNumbers=(num1,num2)=>num1+num2;
console.log(addNumbers(5,5))

function areaOfRectangle(length,width){
let area=length*width;
return area
}
console.log(areaOfRectangle(4,4))

function perimeterOfRectangle (length,width){
    let perimetro=2*(length+width);
    return perimetro;
}
console.log(perimeterOfRectangle(5,5))

let volumeOfRectPrism=(length,width,height)=>length*width*height;
console.log(volumeOfRectPrism(5,5,5))

let areaOfCircle =(pi,r)=>pi*(r**2);
console.log(areaOfCircle(3.1416,5))

let circumOfCircle=(pi,r)=>2*pi*r;
console.log(circumOfCircle(3.1416,2))

let density=(mass,volume)=>mass/volume;
console.log(density(44,22))

let speed=(distanciaTotal,tiempoTotal)=>distanciaTotal/tiempoTotal;
console.log(speed(5,2))

let weight=(mass,gravity=9.8)=>mass*gravity;
console.log(weight(3))

let convertCelsiusToFahrenheit =(C)=>C*((9/5)+32);
console.log(convertCelsiusToFahrenheit(2))

function imc(peso,altura){
    let imcT=peso/(altura*altura)
    if(imcT<18.5 && imcT>0){
        return console.log(`Peso bajo ${imcT}`)
    }
    else if(imcT>18.5 && imcT<24.9){
        return console.log(`Peso normal ${imcT}`)
    }
    else if(imcT>25 && imcT<29.9){
        return console.log(`Sobrepeso ${imcT}`)
    }
    else{
        return console.log(`Obeso ${imcT}`)
    }
    
}
imc(65,1.73);
//
let checkSeason=(mes)=>{
    if(mes=='Abril'||mes=='Mayo'){
        console.log('Primavera')

    }
    else if(mes=='Junio'||mes=='Julio'||mes=='Agosto'||mes=='Septiembre'){
        console.log('Verano')
    }
    else if(mes=='Noviembre'||mes=='Octubre'){
        console.log('Otoño')

    }
    else{
        console.log('Invierno')

    }
        
    
};
checkSeason('Octubre')
//
let findMax =(num1,num2,num3)=>{
    if(num1>num2 && num1>num3){
        console.log(num1)
    }
    else if(num2>num3){
        console.log(num2)
    }
    else{
        console.log(num3)

    }
}
findMax(22,2,44)
///

let solveLinEquation=(a,b,c)=>{
    let ecuacionLinealX=-c/a;
    let ecuacionLinealy=-c/b;
    console.log(`X despejado es ${ecuacionLinealX}`)
    console.log(`Y despejado es ${ecuacionLinealy}`)
}
solveLinEquation(1,2,3)
//
let solveQuadEquation=(a,b,c)=>{
    let solveQuadEquationX1=(-b+(Math.sqrt((b**2)-(4*a*c))))/(2*a);
    let solveQuadEquationX2=(-b-(Math.sqrt((b**2)-(4*a*c))))/(2*a);
    return  `${solveQuadEquationX1},${solveQuadEquationX2}`
}
console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}
//
let arr=['Perro','Gato','Caballo']
let printArray=(valor)=> valor;
console.log(printArray(arr))
//
let showDateTime =(fecha=new Date().toLocaleString())=> fecha;
console.log(showDateTime())
//
let swapValues=(x1,y1)=>{
    x=y1
    y=x1
    console.log(x,y)
};
swapValues(3,4)
swapValues(4,5)
//
let reverArr=[]
let reverseArray=(element)=>{
for(let i=element.length-1;i>=0;i--){
     reverArr.push(element[i])
}
return reverArr
}
console.log(reverseArray(["A", "B", "C"]));
//
let capitalizeArray=(element)=>element;
console.log(capitalizeArray([1,2,3,4]))
//
ejeArray=[1,2,3,4]
let addItem=(element)=>{
     ejeArray.push(element)
     return ejeArray
}
console.log(addItem(5))
//
ejeArray=[1,2,3,4]
let removeItem=(element)=>{
     ejeArray.slice(0,element)
     return ejeArray
}
console.log(removeItem(5))
//
let sum=0;
let sumOfNumbers=(limite)=>{
    for (let i=0;i<=limite;i++){
         sum+=i
    }
    return sum
}
console.log(sumOfNumbers(5))
//
let sumOfOdds=(limite)=>{
    let sum=0;
    for (let i=0;i<=limite;i++){
        if(i%2!=0){
            sum+=i
        }
    }
    return sum
}
console.log(sumOfOdds(5))
//
sum=0;
let sumOfEven=(limite)=>{
    for (let i=0;i<=limite;i++){
        if(i%2==0){
            sum+=i
        }
    }
    return sum
}
console.log(sumOfEven(5))
//

let evensAndOdds =(element)=>{
    let numPares=0;
    let numImpares=0;
    for (let i=0;i<=element;i++){
        if(i%2==0){
            numPares+=1
        }
        else   if(i%2!=0){
            numImpares+=1
        }
    } 
    return `El número de pares es ${numPares} El número de impares son ${numImpares}`
}
console.log(evensAndOdds(100))
//
function sumaT(){
    let  sum=0;
    for (let i=0;i<arguments.length;i++){
         sum+=arguments[i]
    }
    return console.log(sum)
}
sumaT(1,2,3)
sumaT(1,2,3,4)
//
function randomUserIp(){
    let ip1=Math.floor(Math.random()*256)
    let ip2=Math.floor(Math.random()*256)
    let ip3=Math.floor(Math.random()*256)
    let ip4=Math.floor(Math.random()*256)
    return `${ip1} ${ip2} ${ip3} ${ip4}`
}
console.log(randomUserIp())
//
function randomMacAddress (){
    let letras = ['A', 'B', 'C', 'D', 'E', 'F',1,2,3,4,5,6,7,8,9,0];
    let ip1=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    let ip2=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    let ip3=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    let ip4=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    return `${ip1.toString().padStart(2, '0')} ${ip2.toString().padStart(2, '0')} ${ip3.toString().padStart(2, '0')} ${ip4.toString().padStart(2, '0')}`
}
console.log(randomMacAddress())
//
function randomHexaNumberGenerator (){
    let letras = ['a', 'b', 'c', 'd', 'e', 'f',1,2,3,4,5,6,7,8,9,0];
    let ip1=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    let ip2=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    let ip3=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    let ip4=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
    return `#${ip1}${ip2}${ip3}`
}
console.log(randomHexaNumberGenerator())
//
function userIdGenerator (){
    let letras = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','P','Q','R','S','T','U','V','W','X','Y','Z b',"1","2","3","4","5","6","7","8","9","0"];
    let ip1=""
    for(let i=0;i<6;i++){
         ip1+=letras[Math.floor(Math.random() * letras.length-1)];

    }
    return ip1

}
console.log(userIdGenerator())
//
// function userIdGeneratedByUser (){
//     let letras = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','P','Q','R','S','T','U','V','W','X','Y','Z',"1","2","3","4","5","6","7","8","9","0"];
//     let ip1=""
//     let caracteres=prompt("Ingresa el numero de caracteres")
//     let cantidadId=prompt("Ingresa el numero de Ids")
//     let aletorio=0;
//     for(let i=0;i<cantidadId;i++){
//     for(let i=0;i<caracteres;i++){
//          aletorio= Math.round(Math.random() * 1)
//          if(aletorio==0){
//             ip1+=letras[Math.floor(Math.random() * letras.length)].toLocaleLowerCase()

//          }
//          else{
//             ip1+=letras[Math.floor(Math.random() * letras.length)];


//          }  
//     }
//     ip1+=" ";
// }
// return console.log(ip1)
// }
// userIdGeneratedByUser()
function rgbColorGenerator(){
    let id=""
    for(let i = 1; i <10; i++){
      if(id.length==0 || id.length==4 || id.length==8){
        let caracteres ='012';
        let caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
        id+=(caracteres[caracteraletorio])
      }
      else{
        caracteres ='012345';
        caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
        id+=(caracteres[caracteraletorio])
      }
    
      if(i%3==0 && i%9!=0){
        id+=","
      }
    }
 return console.log("rgb"+"("+id+")")
}
rgbColorGenerator()
//
function arrayOfHexaColors(element){
    let arr2=[]
    for(let i=0;i<element;i++){
        let letras = ['a', 'b', 'c', 'd', 'e', 'f',1,2,3,4,5,6,7,8,9,0];
        let ip1=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
        let ip2=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
        let ip3=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
        let ipF=ip1.toString().padStart(2, '0')+""+ip2.toString().padStart(2, '0')+""+ip3.toString().padStart(2, '0')
        arr2.push(ipF)
    }
    console.log(arr2)
}
arrayOfHexaColors(5)
//
function arrayOfRgbColors (element){
    let arr=[]
    for(let i = 1; i <element; i++){
        let id=""

    for(let i = 1; i <=9; i++){
      if(id.length==0 || id.length==4 || id.length==8){
        let caracteres ='012';
        let caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
        id+=(caracteres[caracteraletorio])
      }
      else{
        caracteres ='012345';
        caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
        id+=(caracteres[caracteraletorio])
      }
    
      if(i%3==0 && i%9!=0){
        id+=","
      }

    }
    arr.push("rgb("+id+")")

}
    console.log(arr)
}
arrayOfRgbColors(5)
//
function convertHexaToRgb (hex) {
    // Eliminar el signo "#" si está presente
    hex = hex.replace(/^#/, '');
  
    // Obtener los componentes rojo, verde y azul
    var r = parseInt(hex.substring(0, 2), 16);//Seccion del 0 al 2 un parseInt con base hexadecimal 16 por lo tanto lo trasforma a rgb ya que lo analiza en hexa
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  console.log(convertHexaToRgb("#FFA500"))
  //
  function convertRgbToHexa(r,g,b) {
    // Eliminar el signo "#" si está presente
  
    var hexR = r.toString(16).padStart(2, '0');
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');
  
    return '#' + hexR + hexG + hexB;
}
  console.log(convertRgbToHexa(225,111,111))
  //
  function convertHexaToRgb (hex) {
    // Eliminar el signo "#" si está presente
    hex = hex.replace(/^#/, '');
  
    // Obtener los componentes rojo, verde y azul
    var r = parseInt(hex.substring(0, 2), 16);//Seccion del 0 al 2 un parseInt con base hexadecimal 16 por lo tanto lo trasforma a rgb ya que lo analiza en hexa
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  console.log(convertHexaToRgb("#FFA500"))
  //
  function generateColors (tipo,num) {

    console.log(tipo,num)
    if(tipo=="hexa"){
        let arrHexa=[]
        for(let i=0;i<num;i++){
            let letras = ['a', 'b', 'c', 'd', 'e', 'f',1,2,3,4,5,6,7,8,9,0];
            let ip1=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
            let ip2=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
            let ip3=letras[Math.floor(Math.random() * letras.length)]+letras[Math.floor(Math.random() * letras.length)];
            let ipF=ip1.toString().padStart(2, '0')+""+ip2.toString().padStart(2, '0')+""+ip3.toString().padStart(2, '0')
            arrHexa.push(ipF)
        }
        return arrHexa
    }
    else{
        let arrRgb=[]
        for(let i = 0; i<num; i++){
            let id=""
        for(let i = 1; i <=9; i++){
          if(id.length==0 || id.length==4 || id.length==8){
            let caracteres ='012';
            let caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
            id+=(caracteres[caracteraletorio])
          }
          else{
            caracteres ='012345';
            caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
            id+=(caracteres[caracteraletorio])
          }
        
          if(i%3==0 && i%9!=0){
            id+=","
          }
    
        }
        arrRgb.push("rgb("+id+")")
    }
    return arrRgb
    }
}
console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
//
function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i +1));
      [array[i], array[j]] = [array[j], array[i]];
      console.log(i,j)

    }
    return console.log(array);
  }
  // Ejemplo de uso
  shuffleArray(["Hola","Erick","Padilla"]);
  //
  function factorial(num){
    for(let i=num-1;i>0;i--){
        num*=i
    }
    return console.log(num)
  }
  factorial(3)
  //
  function isEmpty(estado){
    if(estado==null){
        return console.log("Vacio")
    }else{
        return console.log("No vacio")
    }
  }
  isEmpty()
  //
  function suma(numero){
    let sumaTota=0
    for(let i=numero.length-1;i>=0;i--){
        sumaTota+=numero[i]
    }
    return console.log(sumaTota)
  }
  suma([5,4,3,2,1])
  //
  function sumOfArrayItems(arr){
    let sumaTotal=0
    let noNumeros=""
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
             noNumeros+=" "+(arr[i])
        }
        else{
            sumaTotal+=arr[i]

        }

    }
    return  console.log(`Suma ${sumaTotal},${noNumeros} No es un numero`)

}
sumOfArrayItems([1,2,3,"Erick","Pepe"])
//
function average(arr){
    let sumaTotal=0
    let noNumeros=[]
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
             noNumeros.push(arr[i])
        }
        else{
            sumaTotal+=arr[i]
        }
    }
    return  console.log(`Promedio ${sumaTotal/(arr.length-noNumeros.length)},${noNumeros} No es un numero`)
}
average([10,15,20,25,30,50,"Erick","Pepe"])
//
function modifyArray(arr){
        if(arr.length<5){
             console.log('Not Found')
        }else{
            console.log(arr)

        }    
}
modifyArray(["Hola","Erick","Pepe","Erick","No"])
//
function isPrime(numero){
    if(numero % numero == 0 && numero % 1 == 0 ){
        if(numero%2==0){
            console.log("No es primario")
        }
        else{
            if(numero%3==0 && numero!=3){
                console.log("No es primario")
            }
            else{
                console.log("Es primario")

            }
        }
    }
    else{
        console.log("No es primario")
    }
}
isPrime(20)
//
function verifiqueUnicos (arr){
    const conjunto = new Set();
        for (const elemento of arr) {
            if (conjunto.has(elemento)) {//va procesando los valores y verificando si estan en el set 
              return console.log(`Numero repetido ${elemento}`); // Se encontró un valor repetido y rompe el for para mostrar el numero repetido
            }
            conjunto.add(elemento);
          }
          return console.log(`Todos los valores son unicos`); // No se encontraron valores repetidos
}
verifiqueUnicos([1,2,4,5,6])
//
function verifiqueMismos(arr){
        for (let i=0;i<arr.length;i++) {
            if (typeof(arr[i])==typeof(arr[i]-arr[i].length)) {//va procesando los valores y verificando si estan en el set 
            console.log(`Es el mismo tipo ${arr[i]}`);
            }else{
                console.log(`Es diferente ${arr[i]}`);
            }
          }
}
verifiqueMismos([1,"Erick",4,5])
//
function isValidVariable (palabraC){
    console.log(palabraC[0])

    for (let i=0;i<palabraC.length;i++) {
        let caraEspecial=/[!@#%^&*()+{}\[\]:;<>,?~`"'/\\|=-]/g
        if (caraEspecial.test(palabraC[0])) {
            return console.log(`Variable no valida ${palabraC}`);

        }else{
            return console.log(`Variable valida ${palabraC}`);

        }
      }
}
isValidVariable ("$lol")
//
function numAle (num){
    const conjunto = new Set();
    for (let i=0;i<num;i++) {
        numAleatorio=Math.floor(Math.random() * 10);
        if (conjunto.has(numAleatorio)) {
            numAleatorio=Math.floor(Math.random() * 10);
            i--
        }else{
            conjunto.add(numAleatorio);
        }
      }
      console.log(conjunto)
}
numAle(7)
//
const newcountries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
function reverseCountries (contri){
    let contriesCopi=contri;
    return console.log(contriesCopi.reverse())
}
reverseCountries(newcountries)
