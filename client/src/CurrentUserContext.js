import { createContext, useState, useEffect } from "react";

export const TheUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setCurrentStatus] = useState("loading");
  const [dataStoring, setDataStoring] = useState(null);
  const [errorChecker, setErrorChecker] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [followerFeed, setFollowerFeed] = useState(false);
  const [followingFeed, setFollowingFeed] = useState(false);
  const [isInitialLoadingDone, setInitialLoadingDone] = useState(false);

  const followerHandler = () => {
    setFollowerFeed(true);
    setFollowingFeed(false);
  };
  const followingHandler = () => {
    setFollowerFeed(false);
    setFollowingFeed(true);
  };
  useEffect(() => {
    fetch("/api/me/profile")
      .then((response) => {
        if (response.status >= 400) {
          setInitialLoadingDone(false);
        }
        return response.json();
      })
      .then((data) => {
        setInitialLoadingDone(true);
        setCurrentUser(data.profile);
        setCurrentStatus("idle");
      });
  }, []);

  return (
    <TheUserContext.Provider
      value={{
        currentUser,
        status,
        dataStoring,
        setDataStoring,
        errorChecker,
        setErrorChecker,
        modalOpen,
        setModalOpen,
        followerFeed,
        setFollowerFeed,
        followingFeed,
        setFollowingFeed,
        followerHandler,
        followingHandler,
        isInitialLoadingDone,
      }}
    >
      {children}
    </TheUserContext.Provider>
  );
};

export default CurrentUserProvider;
