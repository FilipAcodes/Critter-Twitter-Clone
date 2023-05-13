import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Constants";

const ActionBarButtons = ({ title, onClick, isActive }) => {
  return (
    <StyledButton onClick={onClick} isActive={isActive}>
      {title}
    </StyledButton>
  );
};

export default ActionBarButtons;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  font-size: 21px;
  padding: 15px;
  width: 33%;
  padding-bottom: 25px;
  /* background-color: ${(props) => (props.isActive ? "red" : "none")}; */
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${COLORS.primary}` : "none"};
  &:hover {
    cursor: pointer;
  }
`;
