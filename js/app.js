window.addEventListener('load', function() {
  var btnTweet = document.getElementById('btn-tweet');
  var inputTweet = document.getElementById('input-tweet');
  var containerTweets = document.getElementById('container-tweets');
  var countLetter = document.getElementById('count-letters');

  btnTweet.addEventListener('click', function(event) {
    if (inputTweet.value) {
      var contentTweet = document.createElement('p');
      contentTweet.className = 'content-tweet';
      contentTweet.innerHTML = inputTweet.value;
      containerTweets.appendChild(contentTweet);
      containerTweets.style.display = 'block';
      inputTweet.value = '';
    } else {
      btnTweet.disabled = true;
    }
  });

  inputTweet.addEventListener('keypress', function(event) {
    var countingLetters = inputTweet.value.length;
    var maxLetters = 139;
    countLetter.style.display = 'inline-block';
    countLetter.innerHTML = maxLetters - countingLetters;
    if (countingLetters >= 0 && countingLetters <= 120) {
      btnTweet.disabled = false;
      document.getElementById('count-letters').setAttribute('class', 'first-color');
    } else if (countingLetters >= 120 && countingLetters <= 130) {
      btnTweet.disabled = false;
      document.getElementById('count-letters').setAttribute('class', 'sec-color');
    } else if (countingLetters >= 130 && countingLetters < 140) {
      btnTweet.disabled = false;
      document.getElementById('count-letters').setAttribute('class', 'third-color');
    } else if (countingLetters >= 140) {
      btnTweet.disabled = true;
      document.getElementById('count-letters').setAttribute('class', 'third-color');
    }
  });
});