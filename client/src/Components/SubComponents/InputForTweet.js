import React, { useState, useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../Constants";
import { TheUserContext } from "../../CurrentUserContext";
import Loading from "../SubComponents/Loading";
const InputForTweet = () => {
  const { setDataStoring, setErrorChecker, setModalOpen } =
    useContext(TheUserContext);
  const [userInput, setUserInput] = useState("");
  const [charCount, setCharCount] = useState(280);
  const [loadingStatus, setLoadingStatus] = useState("idle");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: userInput }),
  };
  const manageSubmit = (e) => {
    e.preventDefault();
    setLoadingStatus("loading");
    fetch("/api/tweet", options)
      .then((response) => {
        if (response.status >= 400) {
          setErrorChecker(true);
        }
        return response.json();
      })
      .then(() => {
        setModalOpen(false);
        setUserInput("");
        setLoadingStatus("done");
        fetch("/api/me/home-feed")
          .then((res) => res.json())
          .then((data) => {
            setDataStoring(data);
          });
      });
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
    setCharCount(280 - e.target.value.length);
  };
  return (
    <form onSubmit={manageSubmit}>
      <StyledTxtArea
        placeholder="What's Meowing?"
        onChange={handleChange}
        value={userInput}
      ></StyledTxtArea>
      <SubmitDiv>
        <StyledButton
          type="submit"
          disabled={charCount < 0 || loadingStatus === "loading"}
        >
          {loadingStatus === "loading" ? <Loading /> : "Meow"}
        </StyledButton>{" "}
        <StyledMaxCharacters charCount={charCount}>
          {charCount}
        </StyledMaxCharacters>
      </SubmitDiv>
    </form>
  );
};

export default InputForTweet;

const StyledTxtArea = styled.textarea`
  border: none;
  margin-top: 15px;
  width: calc(100vw - 529px);
  max-width: 695px;
  min-width: 150px;
  font-size: 26px;
  padding-bottom: 50px;
  min-height: 100px;
  max-height: 250px;
  resize: none;
`;

const SubmitDiv = styled.div`
  margin-top: 2px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const StyledButton = styled.button`
  color: white;
  background-color: ${COLORS.primary};
  border-radius: 8px;
  padding: 15px;
  font-weight: bold;
  max-width: 67px;
  max-height: 45px;
  border: none;
  margin-right: 5px;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const StyledMaxCharacters = styled.p`
  color: ${(props) => {
    if (props.charCount <= 40) {
      return "red";
    }
    if (props.charCount <= 55) {
      return "#FFD700";
    }
    return "black";
  }};
`;
