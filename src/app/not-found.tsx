"use client";

import { redirect } from "next/navigation";
import React from "react";
import styled, { keyframes } from "styled-components";
import { COLOR } from "~/constants/color";
import { Box, Text } from "~/styles/globals.styled";

const scale = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${COLOR.WILDSAND_GRAY};
`;

const SpinnerContainer = styled.div`
  margin: 30px auto;
  height: 60px;
  position: relative;
  text-align: center;
`;

const SpinnerDot = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${COLOR.NEWYORK_PINK};
  border-radius: 100%;
  display: inline-block;
  margin: 12px;
  animation: ${scale} 2s ease-in-out infinite alternate;
`;

const LoadingSpinner = () => {
  return (
    <ErrorPageContainer>
      <SpinnerContainer>
        <SpinnerDot />
        <SpinnerDot />
        <SpinnerDot />
      </SpinnerContainer>
      <Text fontSize="20px" fontWeight={500}>
        404 PAGE NOT FOUND
      </Text>
      <a href="/">
        <Box mt="16px">
          <Text fontSize="16px" fontWeight={500} textDecor="underline">
            Go to homepage
          </Text>
        </Box>
      </a>
    </ErrorPageContainer>
  );
};

export default LoadingSpinner;
