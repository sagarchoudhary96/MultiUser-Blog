$(".animi-shadow").hover(
    function() {
        $(this).toggleClass('z-depth-1').toggleClass('z-depth-2');

    }
);


//checking validations for signup form
var validate = function() {
  var username = $("#username");
  var email = $("#email");
  var password = $("#password");
  var verify_password = $("#verify_password");

  //validation for null input
  if (username.val() == "" || password.val()== "" || verify_password.val() == ""){
    Materialize.toast("Required Fields can't be Empty", 5000);
    return false;
  }

  //validation for username
  var re = /^(([-\w\d]{1,10}))$/;
  if (!(re.test(username.val()))){
    Materialize.toast("Invalid Characters used", 5000);
    username.focus();
    return false;
  }

  //validation for email
  re = /^(([-\w\d\.\@]{1,}))$/;
  if (email.val()!="" && !(re.test(email.val()))){
    Materialize.toast("Email Id contains invalid characters", 5000);
    email.focus();
    return false;
  }

  $("#signup").submit();
};
