$(document).ready(function(){
  var flag=0;
 $("#Registrarse").click(function (event){
   event.
 });

 $('#password, #confirm_password').on('keyup', function () {
   if ($('#password').val() == $('#confirm_password').val()){
     $('#message').html('Coinciden').css('color', 'green');
     flag=1;
   }
   else
     $('#message').html('No coinciden').css('color', 'red');
 });
});
