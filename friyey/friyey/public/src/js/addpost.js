

$(document).ready(function () {
    console.log('Inside Addpost.js');

    $("#btnSubmit").click(function (event) {
        console.log('Button Clicked');



        //stop submit the form, we will post it manually.
        event.preventDefault();

        var $inputs = $('#fileUploadForm :input');

        var values = {};
        $inputs.each(function() {
        values[this.name] = $(this).val();
        });
        console.log(values);
        console.log(values.files);

        // Get form
        
        var form = $('#fileUploadForm')[0];

		// Create an FormData object 
        var data = new FormData(form);
        
        
        var formDdata=document.getElementById('input').files[0];
        // If you want to add an extra field for the FormData
        data.append("file", formDdata);
        data.append("postRequest", "{\n  \"companyName\": \"Audi\",\n  \"title\": \"Autocad\",\n  \"category\": \"job\",\n  \"description\": \"job\",\n  \"phone\": \"9359606353\",\n  \"emailId\": \"siddhesh@gmail.com\"\n}");


        console.log(data);
		// disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "http://139.59.81.245:8085/spaces/post/create",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {

                //$("#result").text(data);
                console.log("SUCCESS : ", data);
                $("#btnSubmit").prop("disabled", false);

            },
            error: function (e) {

                //$("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);

            }
        });

    });

});