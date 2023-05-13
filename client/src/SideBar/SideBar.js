import React from "react";
import SidebarInfo from "./SidebarInfo";
import {
  BsFillHouseDoorFill,
  BsFillPersonFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import styled from "styled-components";
import { ReactComponent as CritterLogo } from "../assetslogo/logo.svg";
import { data } from "../data";
import MeowButton from "../Components/SubComponents/MeowButton";
const SideBar = () => {
  return (
    <StyledDiv>
      <StyledSVG />
      {data.map((sidebarInformation, index) => {
        let Icon;
        switch (sidebarInformation.icon) {
          case "BsFillHouseDoorFill":
            Icon = BsFillHouseDoorFill;
            break;
          case "BsFillPersonFill":
            Icon = BsFillPersonFill;
            break;
          case "AiFillBell":
            Icon = AiFillBell;
            break;
          case "BsFillBookmarkFill":
            Icon = BsFillBookmarkFill;
            break;
        }
        return (
          <SidebarInfo
            text={sidebarInformation.name}
            icon={<Icon />}
            link={sidebarInformation.link}
            key={index}
          />
        );
      })}
      <MeowButton />
    </StyledDiv>
  );
};

export default SideBar;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 25px;
  max-width: 238px;
  margin-right: 25px;
`;

const StyledSVG = styled(CritterLogo)`
  height: 56px;
  margin-left: -25px;
`;
