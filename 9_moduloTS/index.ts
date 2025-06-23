// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet();

// 2 - import de variavel
import {x} from "./variable";

console.log(x);

// 3 - multiplas importações

import { a,b, myFunction }from "./multiple";
import { someName } from "./changename.js";

console.log(a);
console.log(b);

myFunction();

// 4 - alias

import { someName as name } from './changename';
console.log(name);

// 5 - import all
import * as myNumbers from './numbers';

console.log(myNumbers);

const nX = myNumbers.n1

console.log(nX);