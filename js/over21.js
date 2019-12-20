
'use strict'

var greeting;
var under;

var agereq  = prompt('How old are you?');


while (isNaN(agereq) || agereq === null) {
    agereq  = prompt('Please enter in your age to continue...');
}

if (agereq >= 21) {
    greeting = 'Enjoy your drink!';
    under = false;
} else if (agereq > 18) {
    greeting = 'Do your parents know you are trying to drink?';
    under = true;
} else if (agereq >0) {
    greeting = 'Please do not drink - you are too young.';
    under = true;
} else if (agereq === null){
    agereq;
} else {
    agereq  = prompt('Please enter in your age to continue...');
    greeting = 'Please be responsible.';
}


alert(greeting);

if (under) {
    window.location.href = "http://127.0.0.1:5500/under21.html";
}
