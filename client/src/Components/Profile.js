import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import { COLORS } from "../Constants";
import Tweet from "./SubComponents/Tweet";
import { Link, useParams } from "react-router-dom";
import Loading from "./SubComponents/Loading";
import FetchProfileFeedHook from "../CustomHooks/FetchProfileFeedHook";
import ActionBarButtons from "./SubComponents/ActionBarButtons";
import FollowButton from "./SubComponents/FollowButton";
import { useContext } from "react";
import { TheUserContext } from "../CurrentUserContext";
const Profile = () => {
  const { profileId } = useParams();
  const [userFeed, setUserFeed] = useState(null);
  const [currentlySelectedUser, setCurrentlySelectedUser] = useState(null);
  const [tweetFeed, setTweetFeed] = useState(true);
  const { followingHandler, followerHandler } = useContext(TheUserContext);

  const tweetHandler = () => {
    setTweetFeed(true);
  };

  useEffect(() => {
    FetchProfileFeedHook(`/api/${profileId}/feed`, setUserFeed);
    FetchProfileFeedHook(`/api/${profileId}/profile`, setCurrentlySelectedUser);
  }, []);

  if (!currentlySelectedUser)
    return (
      <Loading
        width={`60px`}
        height={`60px`}
        margint={`50px`}
        marginl={`336px`}
      />
    );

  return (
    <>
      <ContainerDiv>
        <BannerImage src={currentlySelectedUser.profile.bannerSrc} />
        <UserAvatar src={currentlySelectedUser.profile.avatarSrc} />
        <FollowButton
          text={
            currentlySelectedUser.profile.isBeingFollowedByYou
              ? "Following"
              : "Follow"
          }
        />
        <ContainerInfo>
          <UserHandle>{currentlySelectedUser.profile.displayName}</UserHandle>
          <UserAt>
            @{currentlySelectedUser.profile.handle}
            {currentlySelectedUser.profile.isFollowingYou && (
              <StyledSpanFollow>Follows you</StyledSpanFollow>
            )}
          </UserAt>
          <UserBio>{currentlySelectedUser.profile.bio}</UserBio>
          <LocationJoinedDiv>
            {currentlySelectedUser.profile.location && (
              <p>
                <SmallSpaceSpan>
                  <CiLocationOn />
                </SmallSpaceSpan>
                {currentlySelectedUser.profile.location}
              </p>
            )}
            <p>
              <SmallSpaceSpan>
                <AiOutlineCalendar />
              </SmallSpaceSpan>
              <SmallSpaceSpan>Joined</SmallSpaceSpan>
              {format(new Date(currentlySelectedUser.profile.joined), "MMMM y")}
            </p>
          </LocationJoinedDiv>
          <FollowingErsDiv>
            <FollowLink to={`/${profileId}/follow`} onClick={followingHandler}>
              <BoldSpan>{currentlySelectedUser.profile.numFollowing}</BoldSpan>{" "}
              Following
            </FollowLink>
            <FollowLink to={`/${profileId}/follow`} onClick={followerHandler}>
              <BoldSpan>{currentlySelectedUser.profile.numFollowers} </BoldSpan>
              Followers
            </FollowLink>
          </FollowingErsDiv>
        </ContainerInfo>
        <ButtonContainer>
          <ActionBarButtons
            title="Tweets"
            onClick={tweetHandler}
            isActive={tweetFeed}
          />
          <ActionBarButtons title="Media" />
          <ActionBarButtons title="Likes" />
        </ButtonContainer>
        <FeedContainer>
          {userFeed &&
            tweetFeed &&
            userFeed.tweetIds.map((e) => {
              return (
                <Tweet
                  key={e}
                  timestamp={userFeed.tweetsById[e].timestamp}
                  status={userFeed.tweetsById[e].status}
                  authorHandle={userFeed.tweetsById[e].author.handle}
                  authorName={userFeed.tweetsById[e].author.displayName}
                  authorPicture={userFeed.tweetsById[e].author.avatarSrc}
                  media={userFeed.tweetsById[e].media[0]?.url}
                  isRetweeted={userFeed.tweetsById[e].isRetweeted}
                  isLiked={userFeed.tweetsById[e].isLiked}
                  numLikes={userFeed.tweetsById[e].numLikes}
                  numRetweets={userFeed.tweetsById[e].numRetweets}
                  tweetId={userFeed.tweetsById[e].id}
                  reTweetFrom={userFeed.tweetsById[e]?.reTweetFrom}
                />
              );
            })}
        </FeedContainer>
      </ContainerDiv>
    </>
  );
};

export default Profile;

const ContainerDiv = styled.div`
  max-width: 800px;
  border-bottom: 2px solid ${COLORS.gray};
  border-left: 2px solid ${COLORS.gray};
  border-right: 2px solid ${COLORS.gray};
`;

const BannerImage = styled.img`
  width: 800px;
  object-fit: contain;
  z-index: 0;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  z-index: 1;
  border: 2px solid white;
  max-height: 141px;
  margin-top: -70px;
  margin-left: 20px;
`;

const UserHandle = styled.h2`
  font-weight: bolder;
  font-size: 23px;
`;

const ContainerInfo = styled.div`
  margin-left: 20px;
`;

const UserAt = styled.p`
  color: gray;
`;
const UserBio = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 18px;
`;

const FollowingErsDiv = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const LocationJoinedDiv = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SmallSpaceSpan = styled.span`
  margin-right: 3px;
`;

const FeedContainer = styled.div`
  border-top: 2px solid ${COLORS.gray};
`;

const StyledSpanFollow = styled.span`
  margin-left: 5px;
  border-radius: 3px;
  border: transparent;
  background-color: lightgray;
  font-size: 15px;
  color: black;
  padding: 2px;
`;

const FollowLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
