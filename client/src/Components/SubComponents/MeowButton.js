import React, { useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../Constants";
import InputForTweet from "./InputForTweet";
import { TheUserContext } from "../../CurrentUserContext";

const MeowButton = () => {
  const { modalOpen, setModalOpen } = useContext(TheUserContext);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <MiaoButton onClick={handleOpen}>Meow</MiaoButton>
      {modalOpen && (
        <ModalOverlay>
          <Modal>
            <CloseButton onClick={handleClose}>X</CloseButton>
            <InputForTweet />
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default MeowButton;

const MiaoButton = styled.button`
  font-size: 26px;
  font-weight: bold;
  padding: 5px;
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 16px;
  font-size: 26px;
  &:hover {
    cursor: pointer;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  color: white;
  background-color: red;
  &:hover {
    cursor: pointer;
  }
`;
