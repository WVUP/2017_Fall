var creds = {
   username: new String,
   password: new String
}


function login(){
   creds.username = document.getElementById("username").value;
   creds.password = document.getElementById("password").value;
   console.log( creds );
   
   if( validate() )
   {
      window.location.replace( 'admissions.html' );
   }
   else
   {
      window.location.href = 'error.html';
   }
}
function validate()
{
  return creds.username == "gary" && creds.password == "password";
}