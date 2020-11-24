// $(function(){
//     var v = $("form").validate({
//         submitHandler: function() {
//             console.log('successful submit');
//             return false;
//           },
//         rules: {
//             name: "required",
//             email: "required email",
//             phone: "required",
//         },
//         messages: {
//             name: "Enter your First Name",
//             email: "Enter your Last Name",
//             phone: 'looks like you forgot your phone number',
//     }
        
//        });
       
//        $('#name').blur(function(){
//         v.element('#name'); 
//        });
       
//        $('#email').blur(function(){
//         v.element('#email'); 
//        });
//        $('#phone').blur(function(){
//         v.element('#phone'); 
//        });

//     //    $.validator.messages.required = 'required';
// });

// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contact']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
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
        'entry.1833635029': "Please enter your firstname",
        'entry.2074440609': "Please enter a valid email address",
        'entry.1757091664': "Please enter phone number",
        submit: 'Please fill out all the missing items'
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function (form) {
        alert('valid form submission'); // for demo
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScM7ypLv4wen7UzFS1CN9YuFSFmaWrFO0XJHoAyfbS6jnye6A/formResponse",
            data: $(form).serialize(),
            type: 'GET',
            dataType: 'json',
            crossorigin: true,
            success: function(){  
              $("#success").show();  
            },
            error: function(textStatus, errorThrown) { 
              alert('Error submitting your request'); 
          }     
        });
        return false; // required to block normal submit since you used ajax
    }

});

});