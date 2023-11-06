// Explique la diferencia entre forEach, map, filter, and reduce.
// Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
countries.forEach((pais)=>console.log(pais))

names.forEach((nombre)=>console.log(nombre))

names.forEach((numbers)=>console.log(numbers))

const newcontries= countries.map((paises)=>paises.toUpperCase())
console.log(newcontries)

const largopaises= countries.map((paises)=>paises.length)
console.log(largopaises)

const numerosAlCuadrado= numbers.map((paises)=>paises**2)
console.log(numerosAlCuadrado)

const newnames= names.map((nombre)=>nombre.toUpperCase())
console.log(newnames)

const landcontries=countries.filter((clave)=>clave.includes("land") || clave.includes("Land"))
console.log(landcontries)

const largocontries=countries.filter((clave)=>clave.length===6)
console.log(largocontries)

const seisoMas=countries.filter((clave)=>clave.length>=6)
console.log(seisoMas)

const inicieConE=countries.filter((clave)=>clave.startsWith("E"))
console.log(inicieConE)

const preciosconValores=products.filter((clave)=>clave.price!=0)
console.log(preciosconValores)

const getStringLists=(arr)=>{
        arr.forEach((valor)=>console.log(valor.toString()))
}
getStringLists([1,2,3,4,5,6])

const paisesConcatenados=countries.reduce((a,b)=>a+", "+b,"Estonia")
console.log(paisesConcatenados+"son países del norte de Europa" )

//Explique la diferencia entre some y every
//R=Que every todo los datos deben concidir con lo que se este comparando y some es por cualquier dato del la lista;
const names2 = ["Asabeneh", "Mathias", "Elias", "Brook"];
names2.some((name) =>{
  if(name.length>7){
    console.log(name)
  }else{
    console.log(`${name} No tiene mas de 7`)
  }
}); 
//
console.log(countries.every((paises)=> paises==("land")))
//
//Explique la diferencia entre find y findIndex.
//R=find retonna el valor que estas buscando y findindex retorna la posicion 
console.log(countries.find((paises)=>paises.length==6))

console.log(countries.findIndex((paises)=>paises.length==6))

const estaenNor=countries.findIndex((pais)=>pais==("Norway"))
console.log(estaenNor)

const estaenRu=countries.findIndex((pais)=>pais==("Russia"))
console.log(estaenRu)
///

const preciototal=products.map(clave=>clave.price).filter(price=>price!=0).reduce((total,price)=>total+price)
console.log(preciototal)


const sumaProduct=products.reduce((a,b)=>{
      if(b.price!=0){
        a+=b.price
      }
      return a
},0)
console.log(sumaProduct)
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
function categorizeCountries(){
newcountries.some((clave)=>{
  if(clave.includes("land") || clave.includes("ia")|| clave.includes("island")|| clave.includes("stan") ){
    console.log(clave)
  }
})
}
categorizeCountries()

function letras(letra){
    newcountries.forEach((findletra)=>{
      let sum=0
      for(let i=0;i<findletra.length;i++){
        if(findletra[i].includes(letra)){
          sum++
        }
      }
      console.log(findletra,sum)


    })

}
letras("l")

function getFirstTenCountries (){
  newcountries.map((num) => {
    if(newcountries.indexOf(num) <10){
      console.log(num)
    }
  });
}
getFirstTenCountries()

function getLastTenCountries (){
  listareves=newcountries
  listareves.reverse()
  listareves.map((num) => {
    if(newcountries.indexOf(num) <10){
      console.log(num)
    }
  });
}
getLastTenCountries()
const letrasInc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function vecesL() {
  let sum = 0;
  letrasInc.forEach((letra) => {
    newcountries.forEach((findletra) => {
      if (findletra[0] === letra) {
        sum++;
      }
    });
    console.log(`${letra}: ${sum}`);
    sum = 0; // Reset sum for the next letter
  });
}


vecesL();