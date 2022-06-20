//We can not use let and condt in JAvascript
// console.log(global);
// console.log(__filename);
// console.log(__dirname);

//Types of modules
//core, local and third party
// let name = require("./say-name")
// console.log(name.isMarried);

let {talkAboutMe} = require("../Backend/my-file/me")

talkAboutMe

