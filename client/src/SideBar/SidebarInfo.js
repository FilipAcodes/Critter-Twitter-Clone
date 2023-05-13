import React from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { NavLink } from "react-router-dom";

const SidebarInfo = ({ text, icon, link }) => {
  return (
    <StyledDiv>
      <StyledButton>
        <NavigLink exact to={link}>
          <ButtonDiv>
            <StyledSpanForIcon>{icon}</StyledSpanForIcon>
            <StyledSpanforText>
              <h3>{text}</h3>
            </StyledSpanforText>
          </ButtonDiv>{" "}
        </NavigLink>
      </StyledButton>
    </StyledDiv>
  );
};

export default SidebarInfo;

const StyledDiv = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ButtonDiv = styled.div`
  display: flex;
  padding-top: 1px;
`;

const StyledSpanforText = styled.span`
  padding-left: 10px;
  font-size: 26px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.hover};
    color: ${COLORS.primary};
  }
`;

const StyledSpanForIcon = styled.span`
  font-size: 26px;
`;

const NavigLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: ${COLORS.primary};
  }
`;
