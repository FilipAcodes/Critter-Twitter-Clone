import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Constants";
import ActionBar from "./ActionBar";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { BiRefresh } from "react-icons/bi";
import ProfileIdAvatar from "./ProfileIdAvatar";
import ProfileLink from "./ProfileLink";
import AuthorHandle from "./AuthorHandle";
const Tweet = ({
  authorName,
  authorHandle,
  authorPicture,
  status,
  media,
  isLiked,
  timestamp,
  numLikes,
  numRetweets,
  tweetId,
  reTweetFrom,
}) => {
  const navigate = useNavigate();
  const formattedDate = format(new Date(timestamp), "MMM do");
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          navigate(`/tweet/${tweetId}`);
        }}
      >
        {reTweetFrom && (
          <RetweetPara>
            <BiRefresh /> Retweet from {reTweetFrom}
          </RetweetPara>
        )}
        <StyledPictureHandle>
          <ProfileIdAvatar avatar={authorPicture} />
          <ProfileLink
            href={`/${authorHandle}`}
            onClick={(e) => {
              navigate(`/${authorHandle}`);
              e.stopPropagation();
            }}
            authorName={authorName}
          />
          <AuthorHandle name={authorHandle} />
          <span> • {formattedDate} </span>
        </StyledPictureHandle>
        <StatusMessage>{status}</StatusMessage>
        <StyledMediaContainer>
          <StyledMedia src={media} />
        </StyledMediaContainer>
      </div>
      <StyledTweetContainer>
        <ActionBar
          numLikes={numLikes}
          numRetweets={numRetweets}
          tweetId={tweetId}
          isLiked={isLiked}
        />
      </StyledTweetContainer>
    </>
  );
};

export default Tweet;

const StyledTweetContainer = styled.div`
  border-bottom: 2px solid ${COLORS.gray};
`;

const StyledMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const StyledMedia = styled.img`
  border-radius: 15px;
  max-height: 350px;
  max-width: 772px;
  object-fit: cover;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const StyledPictureHandle = styled.div`
  display: flex;
  align-items: center;
`;

const StatusMessage = styled.p`
  margin-left: 86px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const RetweetPara = styled.p`
  margin-top: 12px;
  margin-left: 40px;
  font-size: 13px;
  color: #696969;
`;
