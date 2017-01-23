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

//Validations for new post
var validate_new_post = function() {
  var post_title = $("#post-title");
  var image_url = $("#post-image-url");
  var post_content = $("#post-content");

  if (post_title.val() == "" || image_url.val() == "" || post_content.val() == ""){
    Materialize.toast("All fields are required.", 5000);
    if(post_title.val() == "") {
      post_title.focus();
    }
    else if (image_url.val() == "") {
      image_url.focus();
    }
    else {
      post_content.focus();
    }
    return false;
  }
  $("#new_post").submit();
};

// Validations for new comment
var validate_new_comment = function() {
  var comment = $("#comment");
  if (comment.val() == "") {
    Materialize.toast("Comment is Empty!!", 5000);
    comment.focus();
    return false;
  }
  $("#post-comment").submit();
};

// Function to truncate text on post-list on mobile view
var mq = window.matchMedia( "(max-width: 600px)" );
if (mq.matches) {
  // window width is at max 600px
  $(document).ready(function(){
    $("#post_list").each(function(i){
      len=$(this).text().length;
      if(len>150)
      {
        $(this).text($(this).text().substr(0,150)+'...');
      }
    });
  });
}
