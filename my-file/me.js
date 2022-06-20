let {name: friendName, age: friendAge} = require("../friend-file/friend.js")
let aboutMe = {
    name: "Omodaratan Oluwole",
    age: 15,
    isMarried: false,
    school: "EKSU"
}

function talkAboutMe(){
    return `My name is ${aboutMe.name} and I am ${aboutMe.age} years old. The name of my best friend is ${friendName} and he is ${friendAge} years old. we are both from ${aboutMe.school}`
}

console.log(talkAboutMe());