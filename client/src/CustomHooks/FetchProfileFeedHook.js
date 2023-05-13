const FetchProfileFeedHook = (apiLink, setState) => {
  fetch(apiLink)
    .then((res) => res.json())
    .then((data) => setState(data));
};

export default FetchProfileFeedHook;
