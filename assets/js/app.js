$(".animi-shadow").hover(
    function() {
        $(this).toggleClass('z-depth-1').toggleClass('z-depth-2');

    }
);


//checking validations for signup form
var validate_signup = function() {
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
    if(username.val().length > 10){
        Materialize.toast("Username Length can't be greater than 10 characters", 5000);
    }
    else{
        Materialize.toast("Invalid Characters used", 5000);
    }
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

  //validation for password
  if (!(password.val() === verify_password.val())){
    Materialize.toast("Both Passwords don't match", 5000);
    password.val("");
    verify_password.val("");
    password.focus();
    return false;
  }

  $("#signup").submit();
};

//validations for login form
var validate_signin = function() {
  var username = $("#username");
  var password = $("#passwd");

  //validations for null inputs
  if (username.val() == "" || password.val() == "") {
    Materialize.toast("Both fields are required", 5000);
    return false;
  }

  //validation for user name
  var re = /^(([-\w\d]{1,10}))$/;
  if (!(re.test(username.val()))){
    if(username.val().length > 10){
        Materialize.toast("Username Length can't be greater than 10 characters", 5000);
    }
    else{
        Materialize.toast("Invalid Characters used", 5000);
    }
    username.focus();
    return false;
  }

  $("#signin").submit();
};
