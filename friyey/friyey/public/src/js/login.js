

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
        
        if (data.errorResponse){
            if (data.errorResponse[0].errorCode == '403 FORBIDDEN'){
                alert("Email Or Password Incorrect, Please try again..!");
                window.location.replace("./login.html");
            }
        }
        
        
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
        else if (data.isInitialLogin){
            console.log('Hhhhhhhhhhhhhhh');
            console.log('Its initial login');
            window.location.replace("./reset_pasword.html");
        }
        else if (!data.isInitialLogin){
            console.log(data);
            var db;
         var request = window.indexedDB.open("posts-store", 1);
         
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: "+ db);
            add(db, data);
         };
         
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("authentication", {keyPath: "jwttoken"});
            
            
         }
            console.log('data written to db');
        }
        //data.append({email : userName});
        console.log(data);
        
    });
}

function add(db, data) {
    var request = db.transaction(["authentication"], "readwrite")
    .objectStore("authentication")
    .add(data);
    
    request.onsuccess = function(event) {
        window.location.replace("./index.html");
    };
    
    request.onerror = function(event) {
       alert("Error! ");
    }
 }