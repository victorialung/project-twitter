window.addEventListener('load', function() {
  var btnTweet = document.getElementById('btn-tweet');
  var inputTweet = document.getElementById('input-tweet');
  var containerTweets = document.getElementById('container-tweets');
  
  btnTweet.addEventListener('click', function(event) {
    if (inputTweet.value) {
      var parentDiv = document.createElement('div');
      var contentTweet = document.createElement('p');
      contentTweet.innerHTML = inputTweet.value;
      parentDiv.appendChild(contentTweet);
      containerTweets.appendChild(parentDiv);
      inputTweet.value = '';
    } else {
      btnTweet.disabled = true;
    }
  });
});