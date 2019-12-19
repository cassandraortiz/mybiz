
'use strict'

var today = new Date();
var years = today.getFullYear();
var hourNow = today.getHours();

var code = confirm('Are you ready to code?');
var msg;


if (code){
    msg = "Let's get drunk and write some code!";
}
else{
    msg = "Don't want to code? Your loss!";
}

document.write('<h1>' + msg + '</h1>');

var greeting;
var under;

var agereq  = prompt('How old are you?');

if (agereq >= 21) {
    greeting = 'Enjoy your drink!';
    under = false;
} else if (agereq > 18) {
    greeting = 'Do your parents know you are trying to drink?';
    under = true;
} else if (agereq > 0) {
    greeting = 'Please do not drink - you are too young.';
    under = true;
} else {
    greeting = 'Please be responsible.';
}

alert(greeting);

if (under) {
    window.location.href = "http://127.0.0.1:5500/projects/mybiz/under21.html";;
}



