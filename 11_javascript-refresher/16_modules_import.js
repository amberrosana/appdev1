import greet from './15_modules_export.js'
import { myInfo } from './15_modules_export.js'

console.log(`${greet()} I am ${myInfo.name} from the ${myInfo.country}! 
I am ${myInfo.age} and I like ${myInfo.hobby}!`) 

/*
Hello there~ I am Amber Rosana from the Philippines! 
I am 19 and I like listening to music!
*/
