// var shareImageButton = document.querySelector('#share-image-button');
// var createPostArea = document.querySelector('#create-post');
// var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
// var sharedMomentsArea = document.querySelector('#post');

// //const posts = document.querySelector('.posts');

// function openCreatePostModal() {
//   createPostArea.style.display = 'block';
//   if (deferredPrompt) {
//     deferredPrompt.prompt();

//     deferredPrompt.userChoice.then(function(choiceResult) {
//       console.log(choiceResult.outcome);

//       if (choiceResult.outcome === 'dismissed') {
//         console.log('User cancelled installation');
//       } else {
//         console.log('User added to home screen');
//       }
//     });

//     deferredPrompt = null;
//   }

//   // if ('serviceWorker' in navigator) {
//   //   navigator.serviceWorker.getRegistrations()
//   //     .then(function(registrations) {
//   //       for (var i = 0; i < registrations.length; i++) {
//   //         registrations[i].unregister();
//   //       }
//   //     })
//   // }
// }

// function closeCreatePostModal() {
//   createPostArea.style.display = 'none';
// }

// shareImageButton.addEventListener('click', openCreatePostModal);

// closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

// // Currently not in use, allows to save assets in cache on demand otherwise
// function onSaveButtonClicked(event) {
//   console.log('clicked');
//   if ('caches' in window) {
//     caches.open('user-requested')
//       .then(function(cache) {
//         cache.add('https://httpbin.org/get');
//         cache.add('/src/images/sf-boat.jpg');
//       });
//   }
// }

// function clearCards() {
//   while(sharedMomentsArea.hasChildNodes()) {
//     sharedMomentsArea.removeChild(sharedMomentsArea.lastChild);
//   }
// }





// function showCard(data) {
//   var cardWrapper = document.createElement('section');
//   cardWrapper.className = 'photo'; 
  
  
//   var cardHeader = document.createElement('header');
//   cardHeader.className = 'photo__header';

//   var cardHeaderColumn = document.createElement('div');
//   cardHeaderColumn.className = 'photo__header-column';
  
//   var cardProfile = document.createElement('img');   // Create an <img> element.  
//   cardProfile.className = 'photo__avatar';
//   cardProfile.src = data.images[0];
//   cardProfile.style.backgroundImage;  
//   cardHeaderColumn.append(cardProfile);
//   cardHeader.append(cardHeaderColumn);
  

//   var cardHeaderColumn = document.createElement('div');
//   cardHeaderColumn.className = 'photo__header-column';

//   var cardUser = document.createElement('span');
//   cardUser.className = 'photo__username'; 
//   cardUser.textContent = data.userName;

//   var cardUser1 = document.createElement('span');
//   cardUser1.className = 'photo__location'; 
//   cardUser1.textContent = data.title; 
  
 
  
  
//   cardHeaderColumn.append(cardUser);
//   cardHeaderColumn.append(cardUser1);  
//   cardHeader.append(cardHeaderColumn);

//   var cardBookmark = document.createElement('div');
//   cardBookmark.className = 'bookmark';

//   // var cardBookmark1 = document.createElement('img');
//   // cardBookmark1.className = 'photo__avatar1';   // Create an <img> element.  
  
//   // cardBookmark1.src = data.images[0];
//   // cardBookmark1.style.backgroundImage;  
//   // cardBookmark.append(cardBookmark1);
//   cardHeader.append(cardBookmark);

//   cardWrapper.append(cardHeader); 


//   var cardImage = document.createElement('img');   // Create an <img> element.  
//   cardImage.className = 'photo__file-container'; 
//   cardImage.src = data.images[0];
//   cardImage.style.backgroundImage;  
//   cardWrapper.appendChild(cardImage);
//   cardImage.addEventListener('click',myFun);

  

//   var cardCommentinfo = document.createElement('div');
//    cardCommentinfo.className = 'photo__info'; 

//    var cardComment = document.createElement('div');
//    cardComment.className = 'photo__add-comment-container'; 

//    var cardDescribe = document.createElement('div');
//    cardDescribe.setAttribute('class', 'describe');
//    cardDescribe.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"; 
//    cardWrapper.appendChild(cardDescribe);



//   //  <ul class="photo__comments">
//   //                       <li class="photo__comment">
//   //                           <span class="photo__comment-author">serranoarevalo</span>wow this is great!
//   //                       </li>
//   //                       <li class="photo__comment">
//   //                           <span class="photo__comment-author">lynn</span>no is not!
//   //                       </li>
//   //                   </ul>


// for(var i=0;i<10;i++){
//    var cardUserComment = document.createElement('ul');
//    cardUserComment.setAttribute('class', 'photo__comments');
   
//    var cardFirstComment = document.createElement('li');
//    cardFirstComment.setAttribute('class', 'photo__comment');
//    var cardFirstComment1 = document.createElement('span');
//    cardFirstComment1.setAttribute('class', 'photo__comment-author');
//    cardFirstComment1.textContent = "Ajfsdf dfkjjaf";
//    cardFirstComment.append(cardFirstComment1);
//    var cardFirstComment11 = document.createElement('span');
   
//    cardFirstComment11.textContent = "Ajfsdf dfkjjaf";
//    cardFirstComment.append(cardFirstComment11);
   
   
   

//    cardUserComment.append(cardFirstComment);
   



//    cardWrapper.appendChild(cardUserComment);
// }
   
//   //  cardWrapper.appendChild(cardFirstComment);

//    var cardCommentCount = document.createElement('div');
//    cardCommentCount.setAttribute('class', 'commentcount');
//    cardCommentCount.textContent = "Total --- comments"; 
//    cardWrapper.appendChild(cardCommentCount);

//    var cardCommentTime = document.createElement('div');
//    cardCommentTime.setAttribute('class', 'commenttime');
//    cardCommentTime.textContent = "2 min ago"; 
//    cardWrapper.appendChild(cardCommentTime);

   
   
  
//    var cardText = document.createElement('textarea');
//    cardText.setAttribute('name', 'comment');
//    cardText.setAttribute('placeholder', 'Add a comment...');
//    cardComment.append(cardText); 

//    var cardButton = document.createElement('button');
//    cardButton.setAttribute('type', 'button');
//    cardButton.setAttribute('class', 'btn');
//    cardButton.textContent = "Post";   
   
//    cardComment.append(cardText); 
//    cardComment.append(cardButton);





   
      
 

  
//   cardCommentinfo.append(cardComment); 
//    cardWrapper.append(cardCommentinfo); 

//   componentHandler.upgradeElement(cardWrapper);
//   sharedMomentsArea.appendChild(cardWrapper);




  
//   //var cardSupportingText = document.createElement('div');
//   //cardSupportingText.className = 'mdl-card__supporting-text';
  
  
//   // var cardSaveButton = document.createElement('button');
//   // cardSaveButton.textContent = 'Save';
//   // cardSaveButton.addEventListener('click', onSaveButtonClicked);
//   // cardSupportingText.appendChild(cardSaveButton);
//   //cardWrapper.appendChild(cardSupportingText);
  

  
// }





// function myFun(){
//   window.location.replace("./post_details.html");

// }


// function updateUI(data) {
//   clearCards();
//   // for (var key in data){
//   //   console.log('un---', data[key]);
//   //   for (var i = 0; i <= data[key].length)
//   // }
//   for (var i = 0; i < 1; i++) {
//     console.log("---->key",data[i][1]);
//     console.log(data[i].length);
    
//     for(var j=0; j<data[i].length; j++)
//     {
//     //createCard(data[i][j]);
    
//     }
//     showCard(data[0][1]);
    
//   }
  
// }



// var url = 'http://139.59.81.245:8085/spaces/post/get/all';  
// var postIdd = getPostId();
// const ps = {
//   postId : postIdd
// };
// const request = new Request(url, {
//   method: 'POST',
//   body: JSON.stringify(user),
//   headers: new Headers({
//       'Content-Type': 'application/json'
//   })
// });

// var networkDataReceived = false;
// fetch(url)
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     networkDataReceived = true;
//     console.log('From web', data);
//     var dataArray = [];
//     for (var key in data) {
      
//       dataArray.push(data[key]);
//     }
//     updateUI(dataArray);
//   });

// if ('indexedDB' in window) {
//   readAllData('posts')
//     .then(function(data) {
//       if (!networkDataReceived) {
//         console.log('From cache', data);
//         updateUI(data);
//       }
//     });
// }
