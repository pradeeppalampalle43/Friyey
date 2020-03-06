

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
            if(data.jwttoken){
                window.location.replace("./index.html");
            }
        });
    }
}



function login(userName, password){
    //checkIfUserTokenExists();
    var url = 'http://139.59.81.245:8085/spaces/user/login';  
    const ps = {
        username : userName,
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
        return res.json();
    })
    .then(function(data) {
        networkDataReceived = true;
        // if(res.ok){
        //     console.log(res.json());
        //     if(res.json().isInitialLogin == true){
        //         //open reset password new user
        //         console.log('Its initial login');
        //         window.location.replace("./reset_password.html");
        //     }
        //     else if (res.json.isInitialLogin == false){
        //         //store stoken and open index.html
        //         writeData('authentication', res.json);
        //         window.location.replace("./index.html");
        //     }
        // }else {
        //     console.log('From web-----------Not ok');
        // }
        if (data.isInitialLogin){
            console.log('Hhhhhhhhhhhhhhh');
            console.log('Its initial login');
            window.location.replace("./reset_pasword.html");
        }
        else if (!data.isInitialLogin){
            console.log(data);
            createDatabase();
            writeData('authentication', data);
            console.log('data written to db');
        }
        console.log(data);
        
    });
}

function createDatabase(){


var dbPromise = idb.open('posts-store', 1, function (db) {
    if (!db.objectStoreNames.contains('posts')) {
      db.createObjectStore('posts', {keyPath: 'postId'});
    }
    if (!db.objectStoreNames.contains('authentication')) {
      db.createObjectStore('authentication', {keyPath: 'jwttoken'});
    }
  });
}