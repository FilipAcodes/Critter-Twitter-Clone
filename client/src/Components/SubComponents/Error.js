import React from "react";
import { FaBomb } from "react-icons/fa";
import styled from "styled-components";
const Error = () => {
  return (
    <>
      <ContainerDiv>
        <BombIcon />
        <StyledErrorh2>An unknown error has occurred.</StyledErrorh2>
        <ErrorMsg>
          Please try refreshing the page, or{" "}
          <a href="https://journeyedu-queue.herokuapp.com/" target="_blank">
            contact support
          </a>{" "}
          if the problem persists.
        </ErrorMsg>
      </ContainerDiv>
    </>
  );
};

export default Error;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-left: 50px;
`;
const BombIcon = styled(FaBomb)`
  height: 150px;
  width: 150px;
`;

const StyledErrorh2 = styled.h2`
  font-weight: bold;
  font-size: 33px;
  margin-top: 50px;
`;

const ErrorMsg = styled.p`
  font-weight: bold;
  margin-top: 50px;
`;
