import React from "react";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ActionBar from "./ActionBar";
import { COLORS } from "../../Constants";
import { BiRefresh } from "react-icons/bi";
const BiggerTweet = ({
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
  const formattedDate = format(new Date(timestamp), "H:mm aa ∙ LLL d y ∙");
  return (
    <>
      <BigContainer>
        <div>
          {reTweetFrom && (
            <RetweetPara>
              <BiRefresh /> Retweet from {reTweetFrom}
            </RetweetPara>
          )}
          <StyledPictureHandle>
            <StyledAuthorImg src={authorPicture} />
            <div>
              <StyledLinkAuthorName
                href={`/${authorHandle}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  navigate(`/${authorHandle}`);
                }}
              >
                <AuthorName>{authorName}</AuthorName>
              </StyledLinkAuthorName>
              <AuthorHandle> @{authorHandle}</AuthorHandle>
            </div>
          </StyledPictureHandle>
          <StatusMessage>{status}</StatusMessage>
          <StyledMediaContainer>
            {media && <StyledMedia src={media} />}
          </StyledMediaContainer>
        </div>
      </BigContainer>
      <StyledTimeDiv> {formattedDate} Critter Web App</StyledTimeDiv>
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

export default BiggerTweet;

const StyledTweetContainer = styled.div`
  border-bottom: 2px solid ${COLORS.gray};
`;

const StyledMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const StyledAuthorImg = styled.img`
  border-radius: 50%;
  height: 50px;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 5px;
`;

const StyledMedia = styled.img`
  border-radius: 15px;
  max-height: 700px;
  max-width: 950px;
  object-fit: cover;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const StyledPictureHandle = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorName = styled.p`
  font-weight: bold;
`;

const StatusMessage = styled.p`
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 25px;
  margin-right: 10px;
`;

const AuthorHandle = styled.p`
  color: gray;
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledLinkAuthorName = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const BigContainer = styled.div`
  width: 1000px;
  max-width: 1000px;
`;

const StyledTimeDiv = styled.div`
  margin-left: 10px;
  margin-bottom: 15px;
  font-size: 15px;
`;

const RetweetPara = styled.p`
  padding-top: 12px;
  margin-left: 40px;
  font-size: 13px;
  color: #696969;
`;
