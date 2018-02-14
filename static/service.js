
// Refresh badge counter once
refreshBadgeCounter();

// Show banner if new message received
api.integration.gmail.on('changes', function (data)
{

    $.each(data.changes, function () {
        
        if (this.messagedAdded)
        {
            if (this.messagedAdded.length > 0) {

                if (jQuery.inArray("INBOX", this.messagedAdded[0]) != -1) {

                    api.banner()
                        .setTitle(lang.gmailMsgReceive)
                        .setText(lang.gmailMsgReceiveNewMsg)
                        .setIcon('https://static.inevio.com/app/522/icon.png')
                        .render();

                    // Also refresh badge counter
                    refreshBadgeCounter();

                    return false;
                }
            }
        }

    });


});


function refreshBadgeCounter()
{
    var numberOfBadge = 0;
    api.integration.gmail.listAccounts(function (error, accounts) {
        if(error){
            console.log('Accounts error'+ JSON.stringify(error));  
        }
        
        
        if(accounts && accounts.length > 0){            
            accounts.forEach(function (account) {
                account.usersLabelsGet("INBOX", function (error, messages) {
                    if(error)
                        console.log('usersLabelsGet error'+ JSON.stringify(error));
  
                    if(messages){               
                        numberOfBadge = numberOfBadge + messages.threadsUnread;
                    } 
                    api.app.setBadge(numberOfBadge);
                });

            });
        }
    });
}

