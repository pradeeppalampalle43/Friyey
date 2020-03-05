var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
var sharedMomentsArea = document.querySelector('#feed');
var postId;
var commentTime;


const posts = document.querySelector('.posts');


function getCurrentDate() {
  var currentdate = new Date();
  var datetime = currentdate.getFullYear() + "-"
                  + (currentdate.getMonth()+1)  + "-"
                  + currentdate.getDate() + " "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();
  //console.log(datetime);
  datetime = new Date();
  //console.log(datetime);
  return(currentdate);
}

function getDateDiffernce(postDateTime) {
  var currentTime =  getCurrentDate();
  console.log(currentTime);
  var postTime = new Date(postDateTime)
  console.log(postTime);
  var differnce = Math.abs(currentTime - postTime) / 1000;
  //console.log(differnce);
  return differnce;
}




function commentTimefetch(diff){
var days = Math.floor(diff / 86400);
console.log(days);
var hours = Math.floor(diff / 3600) % 24;
console.log(hours);
var minutes = Math.floor(diff / 60) % 60;
console.log(minutes);
var seconds = Math.floor(diff % 60);
console.log(seconds);
  if(days!=0){
    commentTime= days+" days ago";
   }
   else if(hours!=0){
    commentTime= hours+" hours ago";
   }
   else if(minutes!=0){
    commentTime= minutes+" minutes ago";
   }
   else{
    commentTime= " while ago";

   }
   return commentTime;
}

function showCard1(data) {
  console.log('Inside show card Post_details');
  
  var cardWrapper = document.createElement('section');
  cardWrapper.className = 'photo'; 
  
  
  var cardHeader = document.createElement('header');
  cardHeader.className = 'photo__header';

  var cardHeaderColumn = document.createElement('div');
  cardHeaderColumn.className = 'photo__header-column';
  
  var cardProfile = document.createElement('img');   // Create an <img> element.  
  cardProfile.className = 'photo__avatar';
  cardProfile.src = data.images[0];
  cardProfile.style.backgroundImage;  
  cardHeaderColumn.append(cardProfile);
  cardHeader.append(cardHeaderColumn);
  

  var cardHeaderColumn = document.createElement('div');
  cardHeaderColumn.className = 'photo__header-column';

  var cardUser = document.createElement('span');
  cardUser.className = 'photo__username'; 
  cardUser.textContent = data.userName;

  var cardUser1 = document.createElement('span');
  cardUser1.className = 'photo__location'; 
  cardUser1.textContent = data.title; 
  
 
  
  
  cardHeaderColumn.append(cardUser);
  cardHeaderColumn.append(cardUser1);  
  cardHeader.append(cardHeaderColumn);

  var cardBookmark = document.createElement('div');
  cardBookmark.className = 'bookmark';

  // var cardBookmark1 = document.createElement('img');
  // cardBookmark1.className = 'photo__avatar1';   // Create an <img> element.  
  
  // cardBookmark1.src = data.images[0];
  // cardBookmark1.style.backgroundImage;  
  // cardBookmark.append(cardBookmark1);
  cardHeader.append(cardBookmark);

  cardWrapper.append(cardHeader); 


  var cardImage = document.createElement('img');   // Create an <img> element.  
  cardImage.className = 'photo__file-container'; 
  cardImage.src = data.images[0];
  cardImage.style.backgroundImage;  
  cardWrapper.appendChild(cardImage);
  

  

  var cardCommentinfo = document.createElement('div');
   cardCommentinfo.className = 'photo__info'; 

   var cardComment = document.createElement('div');
   cardComment.className = 'photo__add-comment-container'; 

   var cardDescribe = document.createElement('div');
   cardDescribe.setAttribute('class', 'describe');
   cardDescribe.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"; 
   cardWrapper.appendChild(cardDescribe);
  // console.log('--------------------length---------------------->', data.comments.length);

    if (data.comments != null){
    for(var  i = 0; i < data.comments.length; i++ ){
      
      var cardUserComment = document.createElement('ul');
      cardUserComment.setAttribute('class', 'photo__comments');
      
      var cardFirstComment = document.createElement('li');
      cardFirstComment.setAttribute('class', 'photo__comment');
      var cardFirstComment1 = document.createElement('span');
      cardFirstComment1.setAttribute('class', 'photo__comment-author');
      cardFirstComment1.textContent = data.comments[i].userName;
      cardFirstComment.append(cardFirstComment1);
      var cardFirstComment11 = document.createElement('span');
      
      cardFirstComment11.textContent = data.comments[i].comment;
      cardFirstComment.append(cardFirstComment11);
     
      cardUserComment.append(cardFirstComment);
   
      cardWrapper.appendChild(cardUserComment);
    }}

    var commentCountText = '';
  if (data.commentCnt == 1){
    commentCountText = '1 Comment';
  } else commentCountText = data.commentCnt + ' Comments';



   var cardCommentCount = document.createElement('div');
   cardCommentCount.setAttribute('class', 'commentcount');
   cardCommentCount.textContent = commentCountText; 
   cardWrapper.appendChild(cardCommentCount);

   var diff = getDateDiffernce(data.time);
   commentTime=commentTimefetch(diff);

   var cardCommentTime = document.createElement('div');
   cardCommentTime.setAttribute('class', 'commenttime');
   cardCommentTime.textContent = commentTime; 
   cardWrapper.appendChild(cardCommentTime);

   var cardText = document.createElement('textarea');
   cardText.setAttribute('name', 'comment');
   cardText.setAttribute('placeholder', 'Add a comment...');
   cardComment.append(cardText); 

   var cardButton = document.createElement('button');
   cardButton.setAttribute('type', 'button');
   cardButton.setAttribute('class', 'btn');
   cardButton.textContent = "Post";   
   
   cardComment.append(cardText); 
   cardComment.append(cardButton);

  
  cardCommentinfo.append(cardComment); 
   cardWrapper.append(cardCommentinfo); 

  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);

}





function setPostId(psid){
  console.log('Inside set post id');
  postId = psid;
}
function getPostId(){
  console.log('Inside get post id');
  return postId;
}

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function(choiceResult) {
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === 'dismissed') {
        console.log('User cancelled installation');
      } else {
        console.log('User added to home screen');
      }
    });

    deferredPrompt = null;
  }

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.getRegistrations()
  //     .then(function(registrations) {
  //       for (var i = 0; i < registrations.length; i++) {
  //         registrations[i].unregister();
  //       }
  //     })
  // }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

// Currently not in use, allows to save assets in cache on demand otherwise
function onSaveButtonClicked(event) {
  console.log('clicked');
  if ('caches' in window) {
    caches.open('user-requested')
      .then(function(cache) {
        cache.add('https://httpbin.org/get');
        cache.add('/src/images/sf-boat.jpg');
      });
  }
}

function clearCards() {
  while(sharedMomentsArea.hasChildNodes()) {
    sharedMomentsArea.removeChild(sharedMomentsArea.lastChild);
  }
}



function createCard(data) {
  var cardWrapper = document.createElement('section');
  cardWrapper.className = 'photo'; 
  
  
  var cardHeader = document.createElement('header');
  cardHeader.className = 'photo__header';

  var cardHeaderColumn = document.createElement('div');
  cardHeaderColumn.className = 'photo__header-column';
  
  var cardProfile = document.createElement('img');   // Create an <img> element.  
  cardProfile.className = 'photo__avatar';
  cardProfile.src = data.images[0];
  cardProfile.style.backgroundImage;  
  cardHeaderColumn.append(cardProfile);
  cardHeader.append(cardHeaderColumn);
  

  var cardHeaderColumn = document.createElement('div');
  cardHeaderColumn.className = 'photo__header-column';

  var cardUser = document.createElement('span');
  cardUser.className = 'photo__username'; 
  cardUser.textContent = data.userName;

  var cardUser1 = document.createElement('span');
  cardUser1.className = 'photo__location'; 
  cardUser1.textContent = data.title; 
  
 
  
  
  cardHeaderColumn.append(cardUser);
  cardHeaderColumn.append(cardUser1);  
  cardHeader.append(cardHeaderColumn);

  var cardBookmark = document.createElement('div');
  cardBookmark.className = 'bookmark';

  // var cardBookmark1 = document.createElement('img');
  // cardBookmark1.className = 'photo__avatar1';   // Create an <img> element.  
  
  // cardBookmark1.src = data.images[0];
  // cardBookmark1.style.backgroundImage;  
  // cardBookmark.append(cardBookmark1);
  cardHeader.append(cardBookmark);

  cardWrapper.append(cardHeader); 


  var cardImage = document.createElement('img');   // Create an <img> element.  
  cardImage.className = 'photo__file-container'; 
  cardImage.src = data.images[0];
  cardImage.style.backgroundImage;  
  cardWrapper.appendChild(cardImage);
  cardImage.addEventListener('click',function(){
    console.log("--------------postid-->",data.postId);
    setPostId(data.postId);
    postDetailsFetch();
    myFun();
  }, false);
  

 

  

  var cardCommentinfo = document.createElement('div');
   cardCommentinfo.className = 'photo__info'; 

   var cardComment = document.createElement('div');
   cardComment.className = 'photo__add-comment-container'; 

   var cardDescribe = document.createElement('div');
   cardDescribe.setAttribute('class', 'describe');
   cardDescribe.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"; 
   cardWrapper.appendChild(cardDescribe);



  //  <ul class="photo__comments">
  //                       <li class="photo__comment">
  //                           <span class="photo__comment-author">serranoarevalo</span>wow this is great!
  //                       </li>
  //                       <li class="photo__comment">
  //                           <span class="photo__comment-author">lynn</span>no is not!
  //                       </li>
  //                   </ul>



  var commentUserName = '';
  var comment = '';
  if (data.comments == null){
    comment = '';
  }
  else{
    commentUserName = data.comments[0].userName;
    comment = data.comments[0].comment;
  }

   var cardUserComment = document.createElement('ul');
   cardUserComment.setAttribute('class', 'photo__comments');
   
   var cardFirstComment = document.createElement('li');
   cardFirstComment.setAttribute('class', 'photo__comment');
   var cardFirstComment1 = document.createElement('span');
   cardFirstComment1.setAttribute('class', 'photo__comment-author');
   cardFirstComment1.textContent = commentUserName;
   cardFirstComment.append(cardFirstComment1);
   var cardFirstComment11 = document.createElement('span');
   
   cardFirstComment11.textContent = comment;
   cardFirstComment.append(cardFirstComment11);
   
   
   

   cardUserComment.append(cardFirstComment);
   



   cardWrapper.appendChild(cardUserComment);
  //  cardWrapper.appendChild(cardFirstComment);

  var commentCountText = '';
  if (data.commentCnt == 1){
    commentCountText = '1 Comment';
  } else commentCountText = data.commentCnt + ' Comments';

   var cardCommentCount = document.createElement('div');
   cardCommentCount.setAttribute('class', 'commentcount');
   cardCommentCount.textContent = commentCountText; 
   cardWrapper.appendChild(cardCommentCount);

   var diff = getDateDiffernce(data.time);
   commentTime=commentTimefetch(diff);
   


   var cardCommentTime = document.createElement('div');
   cardCommentTime.setAttribute('class', 'commenttime');
   cardCommentTime.textContent = commentTime; 
   cardWrapper.appendChild(cardCommentTime);

   
   
  
   var cardText = document.createElement('textarea');
   cardText.setAttribute('name', 'comment');
   cardText.setAttribute('placeholder', 'Add a comment...');
   cardComment.append(cardText); 
   

   var cardButton = document.createElement('button');
   cardButton.setAttribute('type', 'button');
   cardButton.setAttribute('class', 'btn');
   cardButton.textContent = "Post";  
   cardButton.addEventListener('click',function(){
     //// ---remaining task get username from cache and display 
    cardFirstComment1.textContent = 'unmesh';
    cardFirstComment.append(cardFirstComment1);
    cardFirstComment11.textContent = cardText.value;
    cardFirstComment.append(cardFirstComment11);
    postComment(data.postId, cardText.value);
    
  }, false); 
   
   cardComment.append(cardText); 
   cardComment.append(cardButton);

  cardCommentinfo.append(cardComment); 
   cardWrapper.append(cardCommentinfo); 

  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);




  
  //var cardSupportingText = document.createElement('div');
  //cardSupportingText.className = 'mdl-card__supporting-text';
  
  
  // var cardSaveButton = document.createElement('button');
  // cardSaveButton.textContent = 'Save';
  // cardSaveButton.addEventListener('click', onSaveButtonClicked);
  // cardSupportingText.appendChild(cardSaveButton);
  //cardWrapper.appendChild(cardSupportingText);
  

  
}

function myFun(){
 
  //window.location.replace("./post_details.html");

}



function updateUI(data) {
  clearCards();
  // for (var key in data){
  //   console.log('un---', data[key]);
  //   for (var i = 0; i <= data[key].length)
  // }
  for (var i = 0; i < 1; i++) {
    console.log("---->key",data[i][1]);
    console.log(data[i].length);
    
    for(var j=0; j<data[i].length; j++)
    {
    createCard(data[i][j]);
    }
    
  }
  
}

function updateUI1(data) {
  clearCards();
  showCard1(data);  
}

function getAllPostsAndUpdatUI(){
  var url = 'http://139.59.81.245:8085/spaces/post/get/all';  

var networkDataReceived = false;
fetch(url)
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
    updateUI(dataArray);
  });

if ('indexedDB' in window) {
  readAllData('posts')
    .then(function(data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}

}

getAllPostsAndUpdatUI();

function postDetailsFetch(){

var url = 'http://139.59.81.245:8085/spaces/post/get';  
var postIdd = getPostId();
const ps = {
  postId : postIdd
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
    console.log('From web-----------', data);
    
    updateUI1(data);
  });

if ('indexedDB' in window) {
  readAllData('posts')
    .then(function(data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI1(data);
      }
    });
}
}

function postComment(postIdd, commentpost){

  var url = 'http://139.59.81.245:8085/spaces/comment/post';    
  const ps = {
    postId : postIdd,
    emailId : "siddhesh@gmail.com",
    comment : commentpost
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
      console.log('From web-----------', data);
      
      //getAllPostsAndUpdatUI();
    });
  }