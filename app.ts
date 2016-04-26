import * as myNpmLib from "my-npm-lib";

console.log("Value of x in app is " + myNpmLib.x);
console.log("Value of x in app is " + myNpmLib.y);


import {x} from "my-npm-lib/lib/submodule1";
console.log("Value of x in app is " + x);

import {y} from "my-npm-lib/lib/submodule2";
console.log("Value of x in app is " + y);

