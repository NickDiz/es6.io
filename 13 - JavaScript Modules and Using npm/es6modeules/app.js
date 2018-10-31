import  { uniq } from 'lodash';
import insane from 'insane'; 
import jsonp from 'jsonp'; 
import { apiKey, sayHi } from './src/config'; 

console.log(apiKey); 
console.log(sayHi('hi')); 

const ages = [1, 2, 0, 1, 4343, ]; 

console.log(uniq(ages)); 