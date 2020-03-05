$('#myForm').submit(function(e) {
    // get all the inputs into an array.
    e.preventDefault();
    var $inputs = $('#myForm :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
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