import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Constants";

const FollowButton = ({ text }) => {
  return <StyledFollowButton>{text}</StyledFollowButton>;
};

export default FollowButton;

const StyledFollowButton = styled.button`
  background-color: ${COLORS.primary};
  margin-left: 430px;
  color: white;
  border-radius: 14px;
  padding: 10px;
  font-weight: bold;
  left: 50%;
  border: transparent;
  margin-top: 15px;
  width: 120px;
`;
