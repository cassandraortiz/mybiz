function wantToCode() {  

    var today = new Date();
    var years = today.getFullYear();
    var hourNow = today.getHours();
    
    var code = confirm('Are you ready to code?');
    var msg;
    
    
    if (code){
        console.log('User is a drunk coder - WooHoo, lets code it!')
        msg = "Let's get drunk and write some code!";
    }
    else{
        console.log('User is only a drunk, dont judge.')
        msg = "Don't want to code? Your loss!  Go get Drunk!";
    }
    
    return msg;
        
    }

    function howManyDrinks() {  
        
        var drinks = prompt('Seriously though...How many drinks do you plan to have?');
        var img;
        var dm; //drunkMonkey ;)

        img = "https://www.bottleyourbrand.com/media/dol/design/1/14886331660112461351648911.png"

            while (isNaN(drinks) || drinks === null || drinks.length<1 ) {
                drinks  = prompt('Please enter a number to continue...');
            }
            
            drinks = Number(drinks);
            console.log('Gonna drink: '+drinks);

            for(dm=0;dm<=drinks;dm++){
                dm = dm + img;
            }

        
        return dm;
            
        }

    