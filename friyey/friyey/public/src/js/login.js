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
        window.location.replace("./index.html");
    }
});