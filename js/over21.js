var Date = prompt(What is your birthday?);
var today = new Date();
var years = today.getFullYear();
Var findyear = Date.getFullYear();
Var AgeReq;

if ((years-findyear) >=21) {
    AgeReq = "Good to go!"
} else {
    AgeReq = "Not old enough!"
}

document.write("<h1>"+agereq+"</h1>");
