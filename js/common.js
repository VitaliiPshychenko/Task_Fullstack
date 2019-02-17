$( function() {
    $( "#date" ).datepicker();
  } );


var form = document.querySelector('.formWithValidation')
var fields = form.querySelectorAll('input:not([type="submit"]), select' )


var generateError = function (text) {
  var error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  
  return error
}

var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value)  {
      var error = generateError('This field is required')
      form[i].parentElement.insertBefore(error, fields[i])
    }
    /* else if (form.gender[0,1].checked == false ) {
      var error = generateError('This field is required')
      form[i].parentElement.insertBefore(error, fields[i])
    } */
    
  }
}

var validText = document.getElementById('valid-text'); 
var chekEmail = document.getElementById('email').onkeyup = function(){
  var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   if(!reg.test(this.value)) {
    validText.innerHTML = "Email address is not valid.";
    validText.style.color = 'red'
   }
   else{
    validText.innerHTML = "Valid email!";
    validText.style.color = 'green';
   }
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  removeValidation()

  checkFieldsPresence()

  chekEmail()
  
})




