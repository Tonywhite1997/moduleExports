let {name: friendName, age: friendAge, isMarried: friendStatus, address:friendAddress} = require("../friend-file/friend.js")
let aboutMe = {
    name: "Omodaratan Oluwole",
    age: 15,
    address: "No 25B KingKong Building",
    isMarried: false,
    school: "EKSU"
}

function talkAboutMe(){
    return `My name is ${aboutMe.name} and I am ${aboutMe.age} years old. The name of my best friend is ${friendName} and he is ${friendAge} years old. we are both from ${aboutMe.school}. My marital status is ${aboutMe.isMarried} and that of my best friend is ${friendStatus}. My friend lives in ${friendAddress} while I live in ${aboutMe.address}.`
}

console.log(talkAboutMe())