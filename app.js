"use strict";
var myNpmLib = require("my-npm-lib");
console.log("Value of x in app is " + myNpmLib.x);
console.log("Value of x in app is " + myNpmLib.y);
var submodule1_1 = require("my-npm-lib/lib/submodule1");
console.log("Value of x in app is " + submodule1_1.x);
var submodule2_1 = require("my-npm-lib/lib/submodule2");
console.log("Value of x in app is " + submodule2_1.y);
