import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BiggerTweet from "./SubComponents/BiggerTweet";
import Pagetitle from "./SubComponents/Pagetitle";
import { COLORS } from "../Constants";
import Loading from "./SubComponents/Loading";
import Error from "./SubComponents/Error";
import FetchTweetId from "../CustomHooks/FetchTweetId";
const TweetDetails = () => {
  const { tweetId } = useParams();
  const [currentTweet, setCurrentTweet] = useState(null);
  const [errorCheck, setErrorCheck] = useState(false);

  useEffect(() => {
    FetchTweetId(tweetId, setErrorCheck, setCurrentTweet);
  }, []);

  if (errorCheck) return <Error />;

  if (!currentTweet)
    return (
      <Loading
        width={`60px`}
        height={`60px`}
        margint={`50px`}
        marginl={`336px`}
      />
    );

  return (
    <div>
      <Pagetitle title="Meow" />
      <TweetContainer>
        <BiggerTweet
          tweetId={currentTweet.id}
          timestamp={currentTweet.timestamp}
          authorHandle={currentTweet.author.handle}
          authorName={currentTweet.author.displayName}
          status={currentTweet.status}
          authorPicture={currentTweet.author.avatarSrc}
          media={currentTweet?.media[0]?.url}
          reTweetFrom={currentTweet.retweetFrom?.handle}
          numLikes={currentTweet.numLikes}
          numRetweets={currentTweet.numRetweets}
          isLiked={currentTweet.isLiked}
        />
      </TweetContainer>
    </div>
  );
};

export default TweetDetails;

const TweetContainer = styled.div`
  border-left: 2px solid ${COLORS.gray};
  border-right: 2px solid ${COLORS.gray};
`;
