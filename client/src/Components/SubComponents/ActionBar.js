import React, { useState } from "react";
import { BiMessageRounded, BiRefresh, BiHeart, BiUpload } from "react-icons/bi";
import styled from "styled-components";
import ActionBarButtonButton from "./ActionBarButtonButton";
const ActionBar = ({ numLikes, numRetweets, tweetId, isLiked }) => {
  const [like, setLike] = useState(isLiked);
  const [numberLikes, setNumberLikes] = useState(numLikes);

  const likeButtonHandler = () => {
    fetch(`/api/tweet/${tweetId}/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: !like }),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        if (like) {
          setNumberLikes((prev) => prev - 1);
        }
        if (!like) {
          setNumberLikes((prev) => prev + 1);
        }
      });
    setLike((prev) => {
      return !prev;
    });
  };

  return (
    <StyledDivForActions>
      <ActionBarButtonButton emoji={<BiMessageRounded />} />
      <ActionBarButtonButton numLikesReTw={numRetweets} emoji={<BiRefresh />} />
      <ActionBarButtonButton
        numLikesReTw={numberLikes}
        onClick={likeButtonHandler}
        boolean={like}
        emoji={<BiHeart />}
      />
      <ActionBarButtonButton emoji={<BiUpload />} />
    </StyledDivForActions>
  );
};

export default ActionBar;

const StyledDivForActions = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
`;
