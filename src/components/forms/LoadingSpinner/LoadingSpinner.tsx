import React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR } from "~/constants/color";
import { Text } from "~/styles/globals.styled";

// Keyframe animations
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled components
const SpinnerContainer = styled.div`
  margin: 60px auto;
  width: 60px;
  height: 60px;
  position: relative;
  text-align: center;
  animation: ${rotate} 2s linear infinite;
`;

const SpinnerDot = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${COLOR.BUTTERFLY_VIOLET};
  border-radius: 100%;
  display: inline-block;
  margin: auto;
  animation: ${scale} 2s ease-in-out infinite alternate;
`;

const LoadingSpinner = () => {
  return (
    <React.Fragment>
      <SpinnerContainer>
        <SpinnerDot />
        <SpinnerDot />
        <SpinnerDot />
      </SpinnerContainer>
      <Text>Loading ...</Text>
    </React.Fragment>
  );
};

export default LoadingSpinner;
