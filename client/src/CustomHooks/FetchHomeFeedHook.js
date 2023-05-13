const FetchHomeFeedHook = (
  apiLink,
  setErrorCheck,
  setDataLoaded,
  setStateForData
) => {
  fetch(apiLink)
    .then((res) => {
      if (res.status >= 400) {
        setErrorCheck(true);
        setDataLoaded(false);
      }
      return res.json();
    })
    .then((data) => {
      setStateForData(data);
      setDataLoaded(true);
    });
};

export default FetchHomeFeedHook;
