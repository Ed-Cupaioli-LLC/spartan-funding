$(function () {
  $('input[id="city-field"]').on('change', function() {
    $(this).valid();  // trigger validation test
});
  $("input[name='entry.1486781400']").on("click", function () {
    console.log($(this).val())
    if($(this).val()==='purchase'){
      $('.purchasing').show();
      $('.refinancing').hide();
      $('#percent').attr('placeholder', '20%');
      $('#dollar').attr('placeholder', '$60,000');
     
    } else{
     
      $('.purchasing').hide();
      $('.refinancing').show();
      $('#percent').attr('placeholder', '80%');
      $('#dollar').attr('placeholder', '$240,000');

      
    }
  })

  $("input[name='entry.1525139678']").on({
    keyup: function() {
      formatCurrency($(this));
      formatData($(this));
    },  
});
//ammoun to take out 
$("input[name='entry.327660014']").on({
  keyup: function() {
    formatCurrency($(this));
    formatData($(this))  
  },
  
});
  $("input[name='entry.784023676']").on({
    keyup: function() {
      formatCurrency($(this));
      formatData($(this))
    },
    
});
//$ dollar value of downpayment 
$("input[name='entry.1889879909']").on({
  keyup: function() {
    formatCurrency($(this));
    formatData($(this))  
  },
  
})

$("input[name='entry.2859881']").on({
  keyup: function() {
    formatPercentage($(this));
    formatData($(this))
  }
})
$("input[name='entry.1694289332']").on({
  keyup: function() {
    formatPercentage($(this));
    formatData($(this))
  }
})
$("input[name='entry.670253592']").on({
  keyup: function() {
    phone($(this))
  }
})

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function formatPhone(n){
  return n.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}
function formatData(input){
  var input_val = input.val().split(',').join('')
  input_val = parseInt(input_val.match(/\d+/), 10);
  console.log(input_val)
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
      $("#percent").val(Math.ceil(dollar / cost)+'%');
      $("#dollar").val('$' + Math.ceil(cost * percent));
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
        "entry.105311915": { required: true },
        "entry.279358715": {required: true},
        "entry.784023676": {required: true,
                            },
        "entry.1694289332": {required: true},
        "entry.1889879909":  {required: true},
        "entry.1499206232": {required: true},
        "entry.1861675471": {required: true,
                              email: true
                            },
        "entry.670253592": {required: true,
                              minlength: 12,
                              maxlength: 12 },
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
        "entry.105311915": { required:""},
        "entry.279358715": { required:""},
        "entry.784023676": { required:"Please provide estimated home value." },
        "entry.1694289332": { required:"" },
        "entry.1889879909": { required:"Please provide estimated ammount."},
        "entry.1499206232": { required:"Please don’t leave this blank." },
        "entry.1861675471": { required:"Please enter a valid email address." },
        "entry.670253592": { required:"Please enter a valid phone number.",
                            minlength: "Please enter a valid phone number.",
                            maxlength: "Please enter a valid phone number."
                          },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      // alert("valid form submission"); // for demo
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
//This requires the Google Maps API with the Google Places library. Include the libraries=places parameter when you first load the Google Maps API. For example:
//<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var FormAddressAutocomplete = {
	initAutocomplete : function (autocompleteField, cityField, stateField, zipCodeField, fullAddressField, callbackFunction) {
		
		//Set the object properties using the supplied parameters from the initAutocomplete method:
		this.autocompleteField= autocompleteField;
		this.cityField = cityField;
		this.stateField = stateField;
		this.zipCodeField = zipCodeField;
		this.fullAddressField = fullAddressField;
		this.callbackFunction = callbackFunction;
		
		//Create the autocomplete object, restricting the search to geographical location types within the United States:
		var options = {
			types: ["address"],
			componentRestrictions: {country: "US"},
		
		};
		
		//Create the autocomplete object and bind it to the supplied input field using the options set above:
		this.autocomplete = new google.maps.places.Autocomplete(document.getElementById(autocompleteField), options);
		console.log(this.autocomplete)
		
		
		//When the user selects an address from the dropdown, populate the address fields in the form:
		this.autocomplete.addListener('place_changed', this.populateAddress, function() {
      this.autocomplete.valid();
  });
	},
	
	populateAddress : function() {
		//Define which of the components we'd like to use from the Google Place address that gets returned:
		var addressComponentTypes = {
			street_number: "short_name",
			route: "long_name",
			locality: "long_name",
			administrative_area_level_1: "short_name",
			postal_code: "short_name"
		};
		
		//Get the Google Place details from the autocomplete object:
		var place = FormAddressAutocomplete.autocomplete.getPlace();
		
		//If no address is returned by autcomplete, return false:
		if(!place.address_components) {
			return false;
		}
		
		//Build the address components array:
		var addressComponent = [];
		
		for (var i = 0; i < place.address_components.length; i++) {
			var addressType = place.address_components[i].types[0];
			
			if (addressComponentTypes[addressType]) {
				addressComponent[addressType] = place.address_components[i][addressComponentTypes[addressType]];
			}
		}
		
		//Assign the component array values to some local properties and create the full address property:
		var number = addressComponent["street_number"] || "";
		var route = addressComponent["route"] || "";
		var streetAddress = (addressComponent["street_number"] ? addressComponent["street_number"] + " " : "") + route;
		if (streetAddress == "" && (place.name != addressComponent["locality"] && place.name != addressComponent["postal_code"]) && addressComponent["postal_code"]) {
			streetAddress = place.name || false;
		}
		var city = addressComponent["locality"] || "";
		var state = addressComponent["administrative_area_level_1"] || "";
		var zipCode = addressComponent["postal_code"] || "";
		var fullAddress = streetAddress ? streetAddress + ", " : "";
		fullAddress += addressComponent["locality"] ? addressComponent["locality"] + ", " : ""; 
		fullAddress += addressComponent["administrative_area_level_1"] ? addressComponent["administrative_area_level_1"]  : ""; 
		fullAddress += addressComponent["postal_code"] ? ", " + addressComponent["postal_code"] : "";
				
		//populate the input fields if they were supplied to the initAutocomplete method:
		if (typeof FormAddressAutocomplete.autocompleteField !== "undefined" && FormAddressAutocomplete.autocompleteField !== "") {
      document.getElementById(FormAddressAutocomplete.autocompleteField).value = streetAddress;
      
		}
		if (typeof FormAddressAutocomplete.cityField !== "undefined" && FormAddressAutocomplete.cityField !== "") {
			document.getElementById(FormAddressAutocomplete.cityField).value = city;
		}

		if (typeof FormAddressAutocomplete.stateField !== "undefined" && FormAddressAutocomplete.stateField !== "") {
			document.getElementById(FormAddressAutocomplete.stateField).value = state;
		}

		if (typeof FormAddressAutocomplete.zipCodeField !== "undefined" && FormAddressAutocomplete.zipCodeField !== "") {
			document.getElementById(FormAddressAutocomplete.zipCodeField).value = zipCode;
		}
		
		if (typeof FormAddressAutocomplete.fullAddressField !== "undefined" && FormAddressAutocomplete.fullAddressField !== "") {
			document.getElementById(FormAddressAutocomplete.fullAddressField).value = streetAddress;
		}
		
		//If a callback function was supplied to the initAutocomplete method, call it:
		if (typeof FormAddressAutocomplete.callbackFunction !== "undefined" && FormAddressAutocomplete.callbackFunction !== "") {
			FormAddressAutocomplete.callbackFunction(streetAddress);
		}
	}
};

//// Class script above. Example of external setup scripts and usage below. ////

//Example Google API callback function that is used to setup this address autocomplete class. (gets called by the Google library script referenced in the HTML body):
function autocompleteStart () {
	//Don't submit the form when a user selects an address with the enter key:
	var input = document.getElementById('address-autocomplete');
	google.maps.event.addDomListener(input, 'keydown', function (event) {
		if (event.keyCode === 13) {
			event.preventDefault();
		}
	});
	
	//Setup autocomplete:
	return FormAddressAutocomplete.initAutocomplete("address-autocomplete", "city-field", "state-field", "zip-code-field", "full-address-field");
}

//Example of this address autocomplete class's callback function. If the callback function parameter is passed to the initAutocomplete method it will be called after user selects an address. The full address string is passed back to the callback function:
// function autocompleteFinished(data) {
// 	alert("Callback Function | Full Address String: " + data);
// }