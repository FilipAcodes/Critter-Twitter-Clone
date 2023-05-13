import React from "react";
import styled, { keyframes } from "styled-components";
import { VscLoading } from "react-icons/vsc";

const Loading = ({ width, height, marginl, margint }) => {
  return (
    <>
      <RotatingLoad
        width={width}
        height={height}
        marginl={marginl}
        margint={margint}
      />
    </>
  );
};

export default Loading;

const rotation = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;
const RotatingLoad = styled(VscLoading)`
  animation: ${rotation} 1s linear infinite;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-left: ${(props) => (props.marginl ? props.marginl : "auto")};
  margin-top: ${(props) => (props.margint ? props.margint : "auto")};
`;
