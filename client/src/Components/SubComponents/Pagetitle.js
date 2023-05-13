import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Constants";
const Pagetitle = ({ title }) => {
  return (
    <>
      <Styledh1>{title}</Styledh1>
    </>
  );
};

export default Pagetitle;

const Styledh1 = styled.h1`
  font-weight: bold;
  font-size: 26px;
  border-bottom: 2px solid lightgray;
  padding: 5px;
  border-left: 2px solid ${COLORS.gray};
  border-right: 2px solid ${COLORS.gray};
`;
