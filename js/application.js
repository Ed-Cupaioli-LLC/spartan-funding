$(function () {
  
  $("input[name='entry.784023676']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    
});
$("input[name='entry.1889879909']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  
})
$("input[name='entry.1694289332']").on({
  keyup: function() {
    formatPercentage($(this));
  }
})
function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input) {
  var input_val = input.val();
  var caret_pos = input.prop("selectionStart");
  var original_len = input_val.length;
  
  // don't validate empty input
  if (input_val === "") {
     return;
  } else {
     // join number by .
     input_val = formatNumber(input_val);
     input_val = "$"+input_val ; 
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}
function formatPercentage(input) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  var caret_pos = input.prop("selectionStart");
  var original_len = input_val.length;
  
  // don't validate empty input
  if (input_val === "") {
     return;
  } else {
     // join number by .
     input_val = formatNumber(input_val);
     input_val = input_val + "%" ;
     
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}



  

  // $('#cost').toLocaleString("en");
  //relations between total cost, % and downpayment
  $("#currency-field").on("keyup", function () {
    
    var cost = $(this).val().split(',').join('')
    cost = parseInt(cost.match(/\d+/), 10);
    console.log(cost);

    var percent = parseInt($("#percent").val().match(/\d+/), 10);
    var dollar = $("#dollar").val().split(',').join('')
    dollar = parseInt(dollar.match(/\d+/), 10);
    if (isNaN(cost) === true) {
      $("#percent").val(0 + '%');
      $("#dollar").val('$' +0);
    } else if (isNaN(percent) === false && isNaN(dollar) === false) {
      $("#percent").val(Math.ceil(dollar / cost));
      $("#dollar").val(Math.ceil(cost * percent));
    }
  });

  $("#percent").on("keyup", function () {
    var val = parseInt($(this).val().match(/\d+/), 10);

    var item = $("#currency-field").val().split(',').join('')
    var num = parseInt(item.match(/\d+/), 10);
    if (isNaN(val) === true) {
      $("#dollar").val( '$'+ 0);
    } else {
      var dollar = (Math.ceil((num * val) / 100))
      dollar = dollar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      $("#dollar").val('$'+ dollar);
    }
  });

  $("#dollar").on("keyup", function () {
    var val = $(this).val().split(',').join('')
    val = parseInt(val.match(/\d+/), 10);
    console.log(val)
    // var val = parseInt($(this).val().match(/\d+/), 10);
    var item = $("#currency-field").val().split(',').join('')
    var num = parseInt(item.match(/\d+/), 10);
    if (isNaN(val) === true) {
      $("#percent").val(0  + '%');
    } else {
      $("#percent").val(Math.ceil((val * 100) / num)  + '%');
    }
  });     
    $("form[name='application-form']").validate({
      ignore:[],
      rules: {
        "entry.1486781400": { required: true },
        "entry.1004451045":{ required:true },
        "entry.1969835035":{ required:true },
        "entry.1613886317":{ required:true },
        "entry.860121282":{ required:true },
        "entry.152925055": { required: true },
        "entry.758167786":  { required: true },
        "entry.105311915": { required: true },
         "entry.279358715": {required: true,
            digits: true,
            minlength: 5,
            maxlength: 5,},
         "entry.784023676":  {required: true,
                            },
         "entry.1694289332":  {required: true},
         "entry.1889879909":  {required: true},
         "entry.1499206232": {required: true},
         "entry.1525139678": {required: true,
                              email: true
                            },
         "entry.670253592": {required: true,
                            digits: true,
                            minlength: 10,
                            maxlength: 10 },
        },

      // Specify validation error messages
      messages: {
        'entry.1486781400':
        {
          required:"Please select an option. "
        },
        "entry.1004451045":
        {
          required:"Please select an option."
        },
        "entry.1969835035":
        {
          required:"Please select an option."
        },
        "entry.1613886317":
        {
          required:"Please select an option."
        },
        "entry.860121282":
        {
          required:"Please select an option."
        },
        "entry.152925055":{ required:"Please enter a valid address." },
        "entry.758167786": { required:""},
        'entry.105311915': { required:""},
        "entry.279358715": { required:""},
        "entry.784023676": { required:"Please provide an estimated price." },
        "entry.1694289332": { required:"" },
        "entry.1889879909":{ required:"Please provide an estimated down payment."},
        "entry.1499206232": { required:"Please don’t leave this blank." },
        "entry.1525139678":{ required:"Please enter a valid email address." },
        "entry.670253592":{ required:"Please enter a valid phone number." },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      alert("valid form submission"); // for demo
      // $( "#loan-ammount option:selected" ).text()
      $.ajax({
        url:
          "https://docs.google.com/forms/d/e/1FAIpQLSd1dng2c1vB31_CaTMhEdIk9YK2RhjxFFVnfcvrPeGqC7o7qA/formResponse",
        data: $(form).serialize(),
        type: "GET",
        dataType: "json",
        crossorigin: true,

        //     success: function(){
        //       $("#success").show();
        //     },
        //     error: function() {
        //       alert('Error submitting your request');
        //   }
      }).always(function () {
        form.reset();
        $(".success").show();
      });

      return false; // required to block normal submit since you used ajax
    },
  });
});
