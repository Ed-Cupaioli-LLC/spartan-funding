$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    console.log($( "#loan-ammount option:selected" ).text())
    $("form[name= 'application-form']").validate({
      // Specify validation rules
      rules: {
         radio1:{ required:true },
         radio2:{ required:true },
         radio3:{ required:true },
         radio4:{ required: true},
        },

      // Specify validation error messages
      messages: {
        radio1:
        {
          required:"Please select Loan Type"
        },
        radio2:
        {
          required:"Please select Term"
        },
        radio3:
        {
          required:"Please select Program"
        },
        radio4:
        {
          required:"Please select Propery"
        },
        
      
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function (form) {
        alert('valid form submission'); // for demo
        // $( "#loan-ammount option:selected" ).text()
        // $.ajax({
        //     url: "https://docs.google.com/forms/d/e/1FAIpQLScM7ypLv4wen7UzFS1CN9YuFSFmaWrFO0XJHoAyfbS6jnye6A/formResponse",
        //     data: $(form).serialize(),
        //     type: 'GET',
        //     dataType: 'json',
        //     crossorigin: true,

        //   //   success: function(){  
        //   //     $("#success").show();  
        //   //   },
        //   //   error: function() { 
        //   //     alert('Error submitting your request'); 
        //   // }     
        // }).always(function(){
        //   form.reset();
        //   $('.success').show();
        // })
        
        return false; // required to block normal submit since you used ajax
    }

});

});