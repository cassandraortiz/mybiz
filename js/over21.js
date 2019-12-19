


var today = new Date();
var years = today.getFullYear();
var hourNow = today.getHours();
var agereq  = prompt('How old are you?');

var greeting;

if (agereq >= 21) {20
    greeting = 'Enjoy your drink!';
} else if (agereq > 18) {
    greeting = 'You are not old enough, but do not tell your parents';
} else if (agereq > 0) {
    greeting = 'Please do not drink - you are too young.';
} else {
    greeting = 'Please be responsible.';
}

document.write('<h1>' + greeting + '</h1>');