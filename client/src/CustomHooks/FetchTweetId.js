const FetchTweetId = (tweetId, setErrorCheck, setCurrentTweet) => {
  fetch(`/api/tweet/${tweetId}`)
    .then((res) => {
      if (res.status >= 400) {
        setErrorCheck(true);
      }
      return res.json();
    })
    .then((data) => setCurrentTweet(data.tweet));
};

export default FetchTweetId;
