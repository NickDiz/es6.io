import  { uniq } from 'lodash';
import insane from 'insane'; 
import jsonp from 'jsonp'; 
import { apiKey, sayHi } from './src/config'; 
import User, {createURL, gravatar} from './src/user'

const user = new User('Nick', 'njdisi01@mgail.com', 'google.com');

const profile = createURL(user.name); 

const image = gravatar(user.email); 

console.log(profile); 