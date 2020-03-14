
var sharedMomentsArea3 = document.querySelector('#userinformation');


function userinfoshow(data,userName,email) {
//     <div >
//     <img id= "user_image" src="src/images/favicon.png" alt=""> 
// </div>
// <div class="user_text">
//   <h5 id="user_text">User Name</h5>
// </div>
console.log('Inside show card Post_details');
  console.log(data);
  var x = document.getElementById("user_image");
  if(data[3]!=null){
    x.setAttribute("src", data[3]);
  }
  else{
    x.setAttribute("src", "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png");
  }
  
  var y = document.getElementById("user_text").innerHTML=data[0];
  var e = document.getElementById("email").innerHTML=email;
  var p = document.getElementById("user_phone").innerHTML=data[1];
  var s = document.getElementById("subcription").innerHTML=data[4];
  var d = document.getElementById("daysremain").innerHTML=data[6];
  

//   var cardWrapper1 = document.createElement('div');
 
//   var cardWrapper1Image = document.createElement('img');
//   cardWrapper1Image.setAttribute('id', 'user_image'); 
//   cardWrapper1Image.src = "src/images/favicon.png";
//   cardWrapper1Image.style.backgroundImage;  
//   cardWrapper1.appendChild(cardWrapper1Image);
//   var cardWrapper1Text = document.createElement('div');
//   cardWrapper1Text.setAttribute('class', 'user_text'); 
//   cardWrapper1Text.textContent = userName; 
//   cardWrapper1.appendChild(cardWrapper1Text);
  

  
}

// function myFun(){
 
//   //window.location.replace("./post_details.html");

// }



function updateUserinfo(data,userName,email) {
  
  // for (var key in data){
  //   console.log('un---', data[key]);
  //   for (var i = 0; i <= data[key].length)
  // }
//   for (var i = 0; i < 1; i++) {
//     console.log("---->key",data[i][1]);
//     console.log(data[i].length);
    
//     for(var j=0; j<data[i].length; j++)
//     {
//     userinfoshow(data[i][j],userName,email);
//     }
    
//   }
userinfoshow(data,userName,email);
  
}


function getAllPostsAndUpdatUserInfo(userName,email){

  //checkIfUserTokenExists();
  var url = 'http://139.59.81.245:8085/spaces/user/info';  
  const ps = {
    email : email
  };
  console.log(ps);
  const requestuserinfo = new Request(url, {
    method: 'POST',
    body: JSON.stringify(ps),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
  });
var networkDataReceived = false;
fetch(requestuserinfo)
  .then(function(res) {
    return res.json();
  })
  
  .then(function(data) {
    networkDataReceived = true;
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
      
      dataArray.push(data[key]);
    }
    console.log("dataarrarar------",dataArray);
    updateUserinfo(dataArray,userName,email);
  });

if ('indexedDB' in window) {
  readAllData('posts')
    .then(function(data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUserinfo(data,userName,email);
      }
    });
}

}
checkIfUserTokenExists();

function checkIfUserTokenExists(){
  
  console.log(readAllData('authentication'));
  if ('indexedDB' in window) {
      readAllData('authentication')
      .then(function(data) {
          console.log('-----------------------------From cache', data);
          console.log(data.length);
          //console.log(data[0].jwttoken);
          if (data.length == 0){
            window.location.replace("./login.html");
          }else{
            getAllPostsAndUpdatUserInfo(data[0].userName, data[0].email);
          }
      });
  }
}
  

