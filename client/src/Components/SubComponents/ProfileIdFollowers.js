import React, { useEffect, useState } from "react";
import FetchProfileFeedHook from "../../CustomHooks/FetchProfileFeedHook";
import styled from "styled-components";
import ProfileIdAvatar from "./ProfileIdAvatar";
import ProfileLink from "./ProfileLink";
import { useNavigate } from "react-router-dom";
import AuthorHandle from "./AuthorHandle";
import { COLORS } from "../../Constants";
import FollowButton from "./FollowButton";
import Loading from "./Loading";

const ProfileIdFollowers = ({ apiLink, follow }) => {
  const [userFollowers, setUserFollowers] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    FetchProfileFeedHook(apiLink, setUserFollowers);
  }, []);

  if (!userFollowers)
    return (
      <Loading
        width={`60px`}
        height={`60px`}
        margint={`50px`}
        marginl={`336px`}
      />
    );

  return (
    <StyledContainer>
      {userFollowers[follow].map((e) => {
        return (
          <FollowerContainer>
            <ProfileIdAvatar avatar={e.avatarSrc} />
            <HandleDisplayDiv>
              <ProfileLink
                href={`/${e.handle}`}
                authorName={e.displayName}
                onClick={(e) => {
                  navigate(`/${e.handle}`);
                  e.stopPropagation();
                }}
              />
              <AuthorHandle name={e.handle} />
            </HandleDisplayDiv>
            <BioDiv>
              <BioPara>{e.bio}</BioPara>
            </BioDiv>

            <TestDiv>
              <FollowButton
                text={e.isBeingFollowedByYou ? "Following" : "Follow"}
              />
            </TestDiv>
          </FollowerContainer>
        );
      })}
    </StyledContainer>
  );
};

export default ProfileIdFollowers;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
`;

const FollowerContainer = styled.div`
  border-bottom: 2px solid ${COLORS.gray};
  padding-left: 15px;
`;

const HandleDisplayDiv = styled.div`
  margin-top: 10px;
`;

const TestDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: -45px;
  padding-bottom: 35px;
`;

const BioPara = styled.p`
  margin-top: 5px;
`;

const BioDiv = styled.div`
  max-width: 544px;
  display: flex;
`;
