import React from "react";
import styled from "styled-components";

const ProfileIdAvatar = ({ avatar }) => {
  return <StyledAuthorImg src={avatar} />;
};

export default ProfileIdAvatar;

const StyledAuthorImg = styled.img`
  border-radius: 50%;
  height: 50px;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 5px;
`;
