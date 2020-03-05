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

    if (values.email == "unmesh.dabhade@gmail.com" && values.pass == "unmesh"){
        //checkIfUserTokenExists();
        window.location.replace("./index.html");
        
    }
});


function checkIfUserTokenExists(){
    var isPresent = false;
    if ('indexedDB' in window) {
        readAllData('authentication')
        .then(function(data) {
            console.log('From cache', data);
            //console.log(data.length);
        });
    }
}
    

    