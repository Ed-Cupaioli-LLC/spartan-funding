
$(function() {
  $("input[name='entry.1757091664']").on({
    keyup: function() {
      phone($(this))
    }
  })
 
  function formatPhone(n){
    return n.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  function phone(input){
    var input_val = input.val();
    if (input_val === "") {
      return;
   } else {
      // join number by .
      input_val = formatPhone(input_val);
      input_val = input_val ; 
   }
   
   // send updated string to input
   input.val(input_val);
  }
//validation rules and messages 
    $("form[name='contact']").validate({
      
      rules: {
        'entry.1833635029': "required",
        'entry.2074440609': {
            required: true,
            email: true
        },
        'entry.1757091664': {
                required: true,
                minlength: 14,
                maxlength: 14,
        },
    },
     
      messages: {
        'entry.1833635029': "Please don’t leave this blank",
        'entry.2074440609': "Please enter a valid email address",
        'entry.1757091664': {
                            required: "Please enter a valid phone number",
                            minlength: "Please enter a valid phone number.",
                            maxlength: "Please enter a valid phone number."
        }
      },
      submitHandler: function (form) {
        $( "#loan-ammount option:selected" ).text()
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScM7ypLv4wen7UzFS1CN9YuFSFmaWrFO0XJHoAyfbS6jnye6A/formResponse",
            data: $(form).serialize(),
            type: 'GET',
            dataType: 'json',
            crossorigin: true,
        }).always(function(){
          form.reset();
          $('.success').show();
          dataLayer.push({
            'event': 'gtm.formSubmit'
  
          })
        })
        
        return false; 
    }

});

});