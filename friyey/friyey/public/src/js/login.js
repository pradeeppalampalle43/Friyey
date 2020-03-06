$('#myForm').submit(function(event) {
    // get all the inputs into an array.
    event.preventDefault();
    var $inputs = $('#myForm :input');

    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    console.log(values);
    console.log(values.email);
    console.log(values.pass);



    login(values.email, values.pass);
    // if (values.email == "unmesh.dabhade@gmail.com" && values.pass == "unmesh"){
    //     //checkIfUserTokenExists();
    //     window.location.replace("./index.html");
        
    // }
});



function checkIfUserTokenExists(){
    var isPresent = false;
    console.log(readAllData('authentication'));
    if ('indexedDB' in window) {
        readAllData('authentication')
        .then(function(data) {
            console.log('From cache', data);
            //console.log(data.length);
        });
    }
}



function login(userName, password){
    var url = 'http://139.59.81.245:8085/spaces/user/login';  
    const ps = {
        userName : userName,
        password : password
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
        return res;
    })
    .then(function(res) {
        networkDataReceived = true;
        if(res.ok){
            if(res.json.isInitialLogin == true){
                //open reset password new user
                console.log('Its initial login');
                window.location.replace("./reset_password.html");
            }
            else if (res.json.isInitialLogin == false){
                //store stoken and open index.html
                writeData('authentication', res.json);
                window.location.replace("./index.html");
            }
        }else {
            console.log('From web-----------Not ok');
        }
        
        
    });
}

    

    