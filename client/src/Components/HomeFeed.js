import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { TheUserContext } from "../CurrentUserContext";
import { COLORS } from "../Constants";
import Tweet from "./SubComponents/Tweet";
import InputForTweet from "./SubComponents/InputForTweet";
import Pagetitle from "./SubComponents/Pagetitle";
import Loading from "./SubComponents/Loading";
import Error from "./SubComponents/Error";
import FetchHomeFeedHook from "../CustomHooks/FetchHomeFeedHook";

const HomeFeed = () => {
  const {
    status,
    currentUser,
    dataStoring,
    setDataStoring,
    errorChecker,
    isInitialLoadingDone,
  } = useContext(TheUserContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [errorCheck, setErrorCheck] = useState(false);

  useEffect(() => {
    FetchHomeFeedHook(
      "/api/me/home-feed",
      setErrorCheck,
      setDataLoaded,
      setDataStoring
    );
  }, []);

  if (errorCheck || errorChecker || !isInitialLoadingDone) return <Error />;

  if (status === "loading")
    return (
      <Loading
        width={`60px`}
        height={`60px`}
        margint={`50px`}
        marginl={`336px`}
      />
    );

  return (
    <ContainerDiv>
      <Pagetitle title="Home" />
      <ContentDiv>
        <StyledInputDiv>
          <StyledImage src={currentUser.avatarSrc} />
          <InputForTweet />
        </StyledInputDiv>
        {errorCheck && !dataLoaded && <Error />}
        {!dataLoaded && (
          <Loading
            width={`60px`}
            height={`60px`}
            margint={`50px`}
            marginl={`336px`}
          />
        )}
        {dataStoring &&
          dataStoring.tweetIds.map((e) => {
            return (
              <Tweet
                key={e}
                tweetId={dataStoring.tweetsById[e].id}
                authorName={dataStoring.tweetsById[e].author.displayName}
                authorHandle={dataStoring.tweetsById[e].author.handle}
                authorPicture={dataStoring.tweetsById[e].author.avatarSrc}
                status={dataStoring.tweetsById[e].status}
                media={dataStoring.tweetsById[e].media[0]?.url}
                isLiked={dataStoring.tweetsById[e].isLiked}
                isRetweeted={dataStoring.tweetsById[e].isRetweeted}
                timestamp={dataStoring.tweetsById[e].timestamp}
                numLikes={dataStoring.tweetsById[e].numLikes}
                numRetweets={dataStoring.tweetsById[e].numRetweets}
                reTweetFrom={dataStoring.tweetsById[e].retweetFrom?.handle}
              />
            );
          })}
      </ContentDiv>
    </ContainerDiv>
  );
};

export default HomeFeed;

const ContainerDiv = styled.div`
  width: 800px;
  max-width: 800px;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  height: 60px;
  margin-top: -150px;
  padding: 5px;
`;
const StyledInputDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 15px solid ${COLORS.gray};
`;

const ContentDiv = styled.div`
  border-left: 2px solid ${COLORS.gray};
  border-right: 2px solid ${COLORS.gray};
`;
