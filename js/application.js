$(function() {

    $("form[name= 'application-form']").validate({
      // Specify validation rules
      ignore:[],
      rules: {
         radio1:{ required:true },
         radio2:{ required:true },
         radio3:{ required:true },
         radio4:{ required:true },
         radio5:{ required:true },
         address:{ required: true },
         city: { required: true },
         state: { required: true },
         zip: {required: true},
        },

      // Specify validation error messages
      messages: {
        radio1:
        {
          required:"Please select Loan Type"
        },
        radio2:
        {
          required:"Please select Loan Type"
        },
        radio3:
        {
          required:"Please select Loan Type"
        },
        radio4:
        {
          required:"Please select Loan Type"
        },
        radio4:
        {
          required:"Please select Loan Type"
        },
         address:{ required:"Please fill out all the highlightet fields " },
         city: { required:""},
         state: { required:"" },
         zip: { required: ""}
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