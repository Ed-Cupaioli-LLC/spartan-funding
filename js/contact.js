
$(function() {
    // Initialize form validation on the registration form.
    console.log($( "#loan-ammount option:selected" ).text())
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
                digits: true,
                minlength: 10,
                maxlength: 10,
        },
    },
      // Specify validation error messages
      messages: {
        'entry.1833635029': "Please don’t leave this blank",
        'entry.2074440609': "Please enter a valid email address",
        'entry.1757091664': "Please enter a valid phone number",
        // submit: 'Please fill out all the missing items'
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function (form) {
        alert('valid form submission'); // for demo
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