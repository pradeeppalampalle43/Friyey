$('#reset_pass_form').submit(function(event) {
    // get all the inputs into an array.
    event.preventDefault();
    var $inputs = $('#reset_pass_form :input');

    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    console.log(values);

    console.log('Email : ', values.email);
    console.log('Old Password : ', values.old_pass);
    console.log('New Password : ', values.new_pass);
    console.log('Confirm Password : ', values.confirm_pass);
    var email = values.email;
    var old_password = values.old_pass;
    var new_password = values.new_pass;
    var confirm_password = values.confirm_pass;

    if (new_password == confirm_password){
        // call reset password API, get token, and store into db
        resetPassword(email, old_password, new_password, confirm_password);
    }else{
        //new password and confrim password doesn't match
        console.log('new password and confirm password does not match');
        alert("new password and confirm password does not match..!");
    }
});



function resetPassword(email, old_password, new_password, confirm_password){
    //checkIfUserTokenExists();
    var url = 'http://139.59.81.245:8085/spaces/user/changepass';  
    const ps = {
        emailId : email,
        oldPassword : old_password,
        newPassword : new_password,
        confirmPassword : confirm_password
    };
    console.log(ps);
    const request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(ps),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
    });
    var networkDataReceived = false;
    
    fetch(request)
    .then(function(res) {  
        return res.json();
    })
    .then(function(data) {
        networkDataReceived = true;
        console.log('From Wb DB', data);
        if(data.message == 'Password changed successfully'){
            window.location.replace("./login.html");
        }
    });
}

