function wantToCode() {  

    var today = new Date();
    var years = today.getFullYear();
    var hourNow = today.getHours();
    
    var code = confirm('Are you ready to code?');
    var msg;
    
    
    if (code){
        msg = "Let's get drunk and write some code!";
    }
    else{
        msg = "Don't want to code? Your loss!  Go get Drunk!";
    }
    
    return msg;
        
    }

    