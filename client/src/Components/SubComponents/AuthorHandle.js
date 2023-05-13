import React from "react";
import styled from "styled-components";

const AuthorHandle = ({ name }) => {
  return <AuthorNameHandle>@{name}</AuthorNameHandle>;
};

export default AuthorHandle;

const AuthorNameHandle = styled.p`
  color: gray;
  margin-left: 5px;
  margin-right: 5px;
`;
