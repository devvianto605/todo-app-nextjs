import styled, { keyframes } from "styled-components";
import { COLOR } from "~/constants/color";

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

export const SpinnerOverlayContainer = styled.div`
  margin: 30px;
  width: 60px;
  height: 60px;
  position: relative;
  text-align: center;
  animation: ${rotate} 2s linear infinite;
  z-index: 99;

  position: fixed;
  bottom: 10px;
  right: 10px;
`;

export const SpinnerOverlayDot = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${COLOR.NEWYORK_PINK};
  border-radius: 100%;
  display: inline-block;
  margin: auto;
  animation: ${scale} 2s ease-in-out infinite alternate;
`;
