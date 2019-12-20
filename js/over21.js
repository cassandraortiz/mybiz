
'use strict'

var agereq  = prompt('How old are you?');
var greeting;
var under;

if (isNaN(agereq)){
    agereq = prompt('Please enter a valid number to continue...')
} else if (agereq >= 21) {
    under = false;
} else if (agereq > 18) {
    greeting = 'Do your parents know you are trying to drink?';
    under = true;
} else if (agereq >0) {
    greeting = 'Please do not drink - you are way too young!';
    under = true;
} else {
    while (isNaN(agereq) || agereq === null || agereq.length<1 ) {
        agereq  = prompt('Please enter in your age to continue...');
    }
}

console.log('age: '+agereq)


if (under) {
    alert(greeting);
    
    window.location.href = "under21.html";
}
