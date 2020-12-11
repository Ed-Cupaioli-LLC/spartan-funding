
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

    $("form[name='contact']").validate({
      // Specify validation rules
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
      // Specify validation error messages
      messages: {
        'entry.1833635029': "Please don’t leave this blank",
        'entry.2074440609': "Please enter a valid email address",
        'entry.1757091664': {
                            required: "Please enter a valid phone number",
                            minlength: "Please enter a valid phone number.",
                            maxlength: "Please enter a valid phone number."
        }
        // submit: 'Please fill out all the missing items'
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function (form) {
        // alert('valid form submission'); // for demo
        $( "#loan-ammount option:selected" ).text()
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScM7ypLv4wen7UzFS1CN9YuFSFmaWrFO0XJHoAyfbS6jnye6A/formResponse",
            data: $(form).serialize(),
            type: 'GET',
            dataType: 'json',
            crossorigin: true,

          //   success: function(){  
          //     $("#success").show();  
          //   },
          //   error: function() { 
          //     alert('Error submitting your request'); 
          // }     
        }).always(function(){
          form.reset();
          $('.success').show();
        })
        
        return false; // required to block normal submit since you used ajax
    }

});

});