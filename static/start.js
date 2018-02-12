
var gmail_win = $(this);

api.integration.gmail.listAccounts(function (error, accounts) {
    
    if(error){
       gmailErrorHandling(error);
    }
    
    if(accounts.length > 0){
        var have_gmail_accounts = false;
        accounts.forEach(function (account) {
            have_gmail_accounts = true;
        });

        if(have_gmail_accounts){
            gmail_win.on(".wz-app-522").css({'width': '1030px', 'min-width': '864px'});
            $(".accountNotRegister").hide();
            $(".accountRegistered").show();
            
            setGmailBoxPosition();                        

            start();
        }
    }else{        
        $(".accountNotRegister").show();
        $(".accountRegistered").hide();
        
        start();
    }
});

function gmailErrorHandling(error){
    
    console.log('Error '+ JSON.stringify(error));
    
    if(error.code && error.code == 401 && login_error == 1){
        login_error = 2;
        confirm(lang.gmailMessageSessionExpire, function (accepted) {             
            
            api.integration.gmail.listDisabledAccounts(function( err, revokedAccounts ){
            
            if( err ) 
                return console.log( 'Error al obtener las cuentas con permisos revocados\n', err );
            
            api.integration.gmail.removeAccount(revokedAccounts[0], function () {
                login_error = 1;
                gmail_show_message(lang.gmailRemoveAccountSuccessMsg, lang.gmailRemoveGmailAccountSuccessMsg);
                show_accounts();
            });                        
          });
             
        
        });
    } 
    
    return false;
}

function setGmailBoxPosition(){
    var desktop_width = gmail_win.on(".wz-app-522").parents("#wz-desktop").width()
    var window_width = gmail_win.width();
    var positionX = parseInt((desktop_width - window_width) / 2);

    var desktop_height = gmail_win.on(".wz-app-522").parents("#wz-desktop").height()
    var window_height = gmail_win.height();
    var positionY = parseInt((desktop_height - window_height) / 2);

    //console.log('desktop '+desktop_width +' window_width '+ window_width +' transform '+ positionX);

    api.view.setPosition(positionX, positionY);
}


