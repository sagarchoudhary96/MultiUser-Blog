$(".animi-shadow").hover(function(){$(this).toggleClass('z-depth-1').toggleClass('z-depth-2');});var validate_signup=function(){var username=$("#username");var email=$("#email");var password=$("#password");var verify_password=$("#verify_password");if(username.val()==""||password.val()==""||verify_password.val()==""){Materialize.toast("Required Fields can't be Empty",5000);return false;}var re=/^(([-\w\d]{1,10}))$/;if(!(re.test(username.val()))){if(username.val().length>10){Materialize.toast("Username Length can't be greater than 10 characters",5000);}else{Materialize.toast("Invalid Characters used",5000);}username.focus();return false;}re=/^(([-\w\d\.\@]{1,}))$/;if(email.val()!=""&&!(re.test(email.val()))){Materialize.toast("Email Id contains invalid characters",5000);email.focus();return false;}if(!(password.val()===verify_password.val())){Materialize.toast("Both Passwords don't match",5000);password.val("");verify_password.val("");password.focus();return false;}$("#signup").submit();};var validate_signin=function(){var username=$("#username");var password=$("#passwd");if(username.val()==""||password.val()==""){Materialize.toast("Both fields are required",5000);return false;}var re=/^(([-\w\d]{1,10}))$/;if(!(re.test(username.val()))){if(username.val().length>10){Materialize.toast("Username Length can't be greater than 10 characters",5000);}else{Materialize.toast("Invalid Characters used",5000);}username.focus();return false;}$("#signin").submit();};var validate_new_post=function(){var post_title=$("#post-title");var image_url=$("#post-image-url");var post_content=$("#post-content");if(post_title.val()==""||image_url.val()==""||post_content.val()==""){Materialize.toast("All fields are required.",5000);if(post_title.val()==""){post_title.focus();}else if(image_url.val()==""){image_url.focus();}else{post_content.focus();}return false;}$("#new_post").submit();};var validate_new_comment=function(){var comment=$("#comment");if(comment.val()==""){Materialize.toast("Comment is Empty!!",5000);comment.focus();return false;}$("#post-comment").submit();};