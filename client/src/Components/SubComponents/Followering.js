import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileIdFollowers from "../SubComponents/ProfileIdFollowers";
import FetchProfileFeedHook from "../../CustomHooks/FetchProfileFeedHook";
import Loading from "./Loading";
import AuthorHandle from "./AuthorHandle";
import ActionBarButtons from "./ActionBarButtons";
import styled from "styled-components";
import { COLORS } from "../../Constants";
import { useContext } from "react";
import { TheUserContext } from "../../CurrentUserContext";
const Followering = () => {
  const { profileId } = useParams();
  const [userHandle, setUserHandle] = useState(null);
  const { followerFeed, followingFeed, followerHandler, followingHandler } =
    useContext(TheUserContext);

  useEffect(() => {
    FetchProfileFeedHook(`/api/${profileId}/profile`, setUserHandle);
  }, []);
  if (!userHandle)
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
      <HeaderDiv>
        <Styledh1>{profileId}</Styledh1>
        <AuthorHandle name={userHandle.profile.handle} />
      </HeaderDiv>
      <StyledMiniContainer>
        <ActionBarButtons
          title={"Followers"}
          onClick={followerHandler}
          isActive={followerFeed}
        />
        <ActionBarButtons
          title={"Following"}
          onClick={followingHandler}
          isActive={followingFeed}
        />
        <ActionBarButtons title={"People u may know"} />
        <ContainerTopBorder>
          {followerFeed && (
            <ProfileIdFollowers
              apiLink={`/api/${profileId}/followers`}
              follow={"followers"}
            />
          )}
          {followingFeed && (
            <ProfileIdFollowers
              apiLink={`/api/${profileId}/following`}
              follow={"following"}
            />
          )}
        </ContainerTopBorder>
      </StyledMiniContainer>
    </StyledContainer>
  );
};

export default Followering;

const StyledContainer = styled.div`
  width: 800px;
`;

const StyledMiniContainer = styled.div`
  border-left: 2px solid ${COLORS.gray};
  border-right: 2px solid ${COLORS.gray};
  border-bottom: 2px solid ${COLORS.gray};
`;

const ContainerTopBorder = styled.div`
  border-top: 2px solid ${COLORS.gray};
`;

const Styledh1 = styled.h1`
  padding: 5px;
  font-weight: bold;
  font-size: 26px;
`;

const HeaderDiv = styled.div`
  border-bottom: 2px solid lightgray;
  border-left: 2px solid ${COLORS.gray};
  border-right: 2px solid ${COLORS.gray};
  padding-bottom: 5px;
`;
