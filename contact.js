$(document).ready(function() {
    console.log('ready');
   $('#btn_submit').click(function() {
       console.log('click');
       $.post("contact.php", $('#contact-form').serialize(), function(res) {
          $('#success').html(res);
       });
   });
});