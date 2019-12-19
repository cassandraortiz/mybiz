
var today = new Date();
var years = today.getFullYear();
var User = prompt("What is your birthday?");

Var findyear = User.getFullYear();

Var AgeReq;

if (years-findyear >=21) {
    AgeReq = "Good to go!"
} else {
    AgeReq = "Not old enough!"
}

document.write("<h1>"+agereq+"</h1>");