

console.log('Test attachment to Horbito FS')

var messageId     = '15f163f789b457ab',
    attachmentId  = 'ANGjdJ_n1F7T7gzUg2HOutSzM-Cm1eP_JEgrx5cAJDqLZxw2fFPcrMmfjrhmCuM7c7zzj1ipg9EdRwaVS2PgjtboHiXLxargQaPFIkPu-27_glcLzd5WQXutXEo_oKlzezzit8euL3oeRZkLOGkR-5Ajw6dxXZgzIhwgg7YF-Js0JWyLlxbKkRmD7CjChPEfX4WxnFugh272NSpucj7RFbFgEBGj4V-cA8M2Lv3Y4Ba7cGEXQPZzUq0bx4qgK0_l3bpJNvL1c0qW2-E-c4UCiVQ9yfOzQ_ggYfpckzutn7HWsPLBqMLwi5ddiFHSPL5qaMHYasw9rxfT7_AWhQqapvCl5v0DUkEVFzCEdl5oEXU3Fkk8ZLjqrmo6oWTYCm0QkHDITo1vKCRbFQKh9rko',
    filename      = 'dni2.png',
    folderId      = 'root'

console.log( '[Gmail] fileToHorbito test...' )


api.integration.gmail.listAccounts(function( error , accounts ){
    if( error ) return console.error('Error:\n', JSON.stringify( error, null, 2 ) )

    accounts.forEach(function( account, i ){
      console.log('Vamos a actuar con la cuenta:\n', JSON.stringify( account, null, 2 ) )

      account.fileToHorbito(messageId, attachmentId, filename, folderId, ( err, res ) => {
        if( err ) return console.log('Error:\n', JSON.stringify( err, null, 2  ) )
        console.log('Success:\n', JSON.stringify( res, null, 2 ) )
      })
    })

});
