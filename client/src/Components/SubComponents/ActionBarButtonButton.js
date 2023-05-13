import React from "react";
import styled from "styled-components";

const ActionBarButtonButton = ({ emoji, onClick, boolean, numLikesReTw }) => {
  return (
    <StyledSpan>
      {numLikesReTw}
      <ButtonsforActions onClick={onClick} true={boolean}>
        {emoji}
      </ButtonsforActions>
    </StyledSpan>
  );
};

export default ActionBarButtonButton;

const ButtonsforActions = styled.button`
  color: ${(props) => (props.true ? "red" : "")};
  border: none;
  background-color: white;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;
