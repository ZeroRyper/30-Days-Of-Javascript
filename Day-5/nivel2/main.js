import { countries,countries2 } from './countries.js';
import { webTechs } from './web_techs.js';
console.log(countries)
console.log(webTechs)
if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
}else{
    countries.push("ETHIOPIA");
    console.log(countries)

}

if(webTechs.includes("Sass")){
    console.log("Sass es un preproceso de CSS")
}else{
    webTechs.push("Sass");
    console.log(webTechs)

}
//
console.log(countries2.splice(0, 10));
console.log(countries2[(countries2.length-1)/2]);
let mita1=countries2.slice(0,(countries2.length-1)/2)
let mita2=countries2.slice((countries2.length-1)/2,countries2.length)
console.log(mita1); 
console.log(mita2); 
