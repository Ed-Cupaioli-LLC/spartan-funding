$(function() {
    $("form[name='application-form']").validate({
      ignore:[],
      rules: {
        'entry.1486781400': { required: true },
        "entry.1004451045":{ required:true },
        "entry.1969835035":{ required:true },
        "entry.1613886317":{ required:true },
        "entry.860121282":{ required:true },
         'entry.152925055': { required: true },
         'entry.758167786':  { required: true },
         'entry.105311915': { required: true },
         "entry.279358715": {required: true},
         "entry.784023676":  {required: true},
         "entry.1694289332":  {required: true},
         "entry.1889879909":  {required: true},
         "entry.1499206232": {required: true},
         "entry.1525139678": {required: true},
         "entry.670253592": {required: true},
        },

      // Specify validation error messages
      messages: {
        'entry.1486781400':
        {
          required:"Please select Loan Type"
        },
        "entry.1004451045":
        {
          required:"Please select Loan Type"
        },
        "entry.1969835035":
        {
          required:"Please select Loan Type"
        },
        "entry.1613886317":
        {
          required:"Please select Loan Type"
        },
        "entry.860121282":
        {
          required:"Please select Loan Type"
        },
        "entry.152925055":{ required:"Please fill out all the highlightet fields " },
        "entry.758167786": { required:"Please fill out all the highlightet fields "},
        'entry.105311915': { required:"Please fill out all the highlightet fields "},
        "entry.279358715": { required:"Please fill out all the highlightet fields "},
        "entry.784023676": { required:"Please fill out all the highlightet fields " },
        "entry.1694289332": { required:"Please fill out all the highlightet fields " },
        "entry.1889879909":{ required:""},
        "entry.1499206232": { required:"Please fill out all the highlightet fields " },
        "entry.1525139678":{ required:"Please fill out all the highlightet fields " },
        "entry.670253592":{ required:"Please fill out all the highlightet fields " },

    },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function (form) {
        alert('valid form submission'); // for demo
        // $( "#loan-ammount option:selected" ).text()
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSd1dng2c1vB31_CaTMhEdIk9YK2RhjxFFVnfcvrPeGqC7o7qA/formResponse",
            data: $(form).serialize(),
            type: 'GET',
            dataType: 'json',
            crossorigin: true,

        //     success: function(){  
        //       $("#success").show();  
        //     },
        //     error: function() { 
        //       alert('Error submitting your request'); 
        //   }     
        }).always(function(){
          form.reset();
          $('.success').show();
        })
        
        return false; // required to block normal submit since you used ajax
    }

});

});