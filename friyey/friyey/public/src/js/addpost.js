

$(document).ready(function () {
    console.log('Inside Addpost.js');

    $("#btnSubmit").click(function (event) {
        console.log('Button Clicked');



        //stop submit the form, we will post it manually.
        event.preventDefault();
        var email;
        readAllData('authentication')
        .then(function(data) {
            console.log('From cache', data);
            //console.log(data.length);
            email=data[0].email;
            var $inputs = $('#fileUploadForm :input');

        var values = {};
        $inputs.each(function() {
        values[this.name] = $(this).val();
        });
        //console.log(values.length);
        console.log(values.files);
        console.log(values.title);

        if (values.title == ''){
            
            alert("Title can not be empty");
        }else if(values.description == '' && values.imagepost == ''){
            alert("Description and Image, both can not be empty.");
        }
        else{
        
        
        form = $('#fileUploadForm')[0];

		// Create an FormData object 
        var data = new FormData(form);
        
        
        var formDdata=document.getElementById('input').files[0];
        // If you want to add an extra field for the FormData
        data.append("file", formDdata);

        // data.append("postRequest", {"title" : values.title});
        // data.append("postRequest", {"description" : values.description});
        // data.append("postRequest", {"emailId": values.emailId});
        
        
        
        console.log('From cache', email);
        var dt = {"title": values.title,
                  "description" : values.description.replace(/\n/g, '<br>\n'),
                  "emailId" : email                         
            }
        //data.append("postRequest", "{\n  \"companyName\": \"Audi\",\n  \"title\": ${values.title},\n  \"category\": \"job\",\n  \"description\": ${values.description},\n  \"phone\": \"9359606353\",\n  \"emailId\": \"siddhesh@gmail.com\"\n}");
        data.append("postRequest", JSON.stringify(dt));
        console.log(dt);

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
               window.location.replace("./index.html");
                $("#btnSubmit").prop("disabled", false);

            },
            error: function (e) {

                //$("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);

            }
        });
    }
            
            
        });


        

    });

});