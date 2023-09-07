const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];


for(let i = 0; i <= 10; i++){
    console.log(i)
}
let i=0;
while(i<countries.length){
  console.log(i);
  i++;
}
i=0
do{
  console.log(i);
  i++;
}while(i<countries.length)
//
console.log("###")
for(let i = 10; i >= 0; i--){
  console.log(i)
}
i=10;
while(i>=0){
console.log(i);
i--;
}
i=10
do{
console.log(i);
i--;
}while(i>=0)
//
let n=20;
for(let i = 0; i <= n; i++){
  console.log(i)
}
//
 let gato="#"
for(let i = 0; i <= 6; i++){
  console.log(gato)
    gato+="#";
}
for(let i = 0; i <= 10; i++){
  console.log(`${i} x ${i} = ${i*i}`)
}
for(let i = 0; i <= 10; i++){
  console.log(`${i}  ${i**2}  ${i**3}`)
}
//
for(let i = 0; i <= 100; i++){
  if(i%2==0){
    console.log(`${i}`)
  }
}
for(let i = 0; i <= 100; i++){
  if(i%2!=0){
    console.log(`${i}`)
  }
}
let suma=0;
for(let i = 0; i <= 100; i++){
  suma+=i;
  console.log(suma)

}
 suma=0;
for(let i = 0; i <= 100; i++){
  if(i%2==0){
    suma+=i;
    console.log(`${suma}`)
  }
}
suma=0;
for(let i = 0; i <= 100; i++){
  if(i%2!=0){//Todo los numeros no sean divididos entre dos y den cero
    suma+=i;
    console.log(`${suma}`)
  }
}
let sumaimpar=0;
let sumapar=0;
let total=[]
for(let i = 0; i <= 100; i++){
  if(i%2!=0){//Todo los numeros no sean divididos entre dos y den cero
    sumaimpar+=i;
  }
  if(i%2==0){//Todo los numeros no sean divididos entre dos y den cero
    sumapar+=i;
  }
}
total.push(sumapar,sumaimpar)
console.log(total)

let matrizrandom=[]
for(let i = 0; i <5; i++){
  matrizradom.push(Math.round(Math.random()*10))
}
console.log(matrizrandom)

matrizradom=[]
for(let i = 0; i <=4; i++){
  let numaletorio=Math.round(Math.random()*10)
  if(!matrizradom.includes(numaletorio)){
    matrizradom.push(numaletorio)

  }
  else{
    i--
  }
}
console.log(matrizradom)
//
let caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
id=""
for(let i = 0; i <6; i++){
  let caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
  id+=(caracteres[caracteraletorio])
}
console.log(id)
//
id=""
for(let i = 0; i <12; i++){
  let caracteraletorio=Math.round(Math.random()*(caracteres.length-1))
  id+=(caracteres[caracteraletorio])
}
console.log(id)
//
id=""
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
console.log("rgb"+"("+id+")")
//
pasisesMayus=[]
for(let i=0;i<countries.length;i++){
  pasisesMayus[i]=countries[i].toLocaleUpperCase()
}
console.log(countries)
//
let longitudPais=[]
for(let i=0;i<countries.length;i++){
  longitudPais.push(countries[i].length)
}
console.log(longitudPais)
//
let paises=[];
for(let i=0;i<countries.length;i++){
  paises.push([countries[i]+" , "+(countries[i].toLocaleUpperCase()).slice(0,3)+" , "+countries[i].length])
  console.log(paises)
}
console.log(paises)
//
let palabra=[]
let sinpalabra=[]
for(let i=0;i<countries.length;i++){
  if(countries[i].includes("land")){
    palabra.push(countries[i])
  }
  else{
    sinpalabra.push(countries[i])
  }
}
console.log(palabra)
console.log(`Todos estos países no tienen la palabra land ${sinpalabra} `)
//
palabra=[]
sinpalabra=[]
for(let i=0;i<countries.length;i++){
  if(countries[i][countries[i].length-2]=="i" && countries[i][countries[i].length-1]=="a"){
    palabra.push(countries[i])
  }
  else{
    sinpalabra.push(countries[i])
  }

}
console.log(palabra)
console.log(`Todos estos países no tienen la palabra land ${sinpalabra} `)
//
let paisMayor=""
for(let i=0;i<countries.length;i++){
  if(countries[i].length>paisMayor.length){
    paisMayor=""
    paisMayor=countries[i]
  }

}
console.log(paisMayor)
//
paisesMayores=""
for(let i=0;i<countries.length;i++){
  if(countries[i].length==5){
    paisesMayores+=countries[i]+" "
  }
}
console.log(paisesMayores)
//
let webMayor=""
for(let i=0;i<webTechs.length;i++){
  if(countries[i].length>webMayor.length){
    webMayor=""
    webMayor=webTechs[i]
  }
}
console.log(webMayor)
//
let webtecn=[]
for(let i=0;i<webTechs.length;i++){
  webtecn.push([webTechs[i]+", "+webTechs[i].length])
  console.log(webtecn)
}
//
acronimo=""
for(let i = 0; i <mernStack.length; i++){
  acronimo+=mernStack[i][0]
  console.log(acronimo)
}
for(elemento of mernStack){
  console.log(elemento)
}
let frutas=['banana', 'orange', 'mango', 'lemon']
let frutasrev=""
for(let i = frutas.length-1; i >=0; i--){
  frutasrev+=frutas[i]+" "
}
console.log("\n"+frutasrev)
//
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for(let i = 0; i <(fullStack).length; i++){
for(let y=0; y<(fullStack[i]).length;y++){
  console.log(fullStack[i][y].toLocaleUpperCase())

}
}
///
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
///
let newpais=[];
newpais=newpais.concat(newcountries)
console.log(newpais)
//
let sortedCountries=[]
sortedCountries=newcountries.sort()
console.log(sortedCountries)
//
console.log(webTechs.sort())
console.log(mernStack.sort())
//
let landcontri=[]
for(i=0;i<newcountries.length;i++){
  if(newcountries[i].includes("land")){
    landcontri.push(newcountries[i])
  }
  console.log(landcontri)
}
//
let contrimayor=""
for(i=0;i<newcountries.length;i++){
  if(newcountries[i].length>contrimayor.length){
    contrimayor+=newcountries[i]
  }
}
console.log("Contri mayor "+contrimayor)
//
let contricaracteres=[]
for(i=0;i<newcountries.length;i++){
  if(newcountries[i].length==4){
    contricaracteres.push(newcountries[i])
  }
}
console.log(contricaracteres)
//
let contriPalabras=[]
for(i=0;i<newcountries.length;i++){
  if(newcountries[i].split(" ").length>2){
    contriPalabras.push(newcountries[i])
  }
}
console.log(contriPalabras)
//
let contriInvMay=[]
for(i=0;i<newcountries.length;i++){
  contriInvMay.push(newcountries[i].toUpperCase())
  contriInvMay.sort()
}
console.log(contriInvMay)