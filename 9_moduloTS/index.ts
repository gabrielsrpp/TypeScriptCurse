// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet();

// 2 - import de variavel
import {x} from "./variable";

console.log(x);

// 3 - multiplas importações

import { a,b, myFunction }from "./multiple";

console.log(a);
console.log(b);

myFunction();