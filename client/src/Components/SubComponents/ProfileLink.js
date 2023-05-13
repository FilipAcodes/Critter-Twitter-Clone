import React from "react";
import styled from "styled-components";

const ProfileLink = ({ href, onClick, authorName }) => {
  return (
    <StyledLinkAuthorName href={href} onClick={onClick}>
      <AuthorName>{authorName}</AuthorName>
    </StyledLinkAuthorName>
  );
};

export default ProfileLink;

const StyledLinkAuthorName = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const AuthorName = styled.p`
  font-weight: bold;
`;
