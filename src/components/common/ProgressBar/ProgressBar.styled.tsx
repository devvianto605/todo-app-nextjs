'use client'

import styled from "styled-components";
import { type ProgressBarProps } from "./type";
import { COLOR } from "~/constants/color";

export const ProgressBarContainer = styled.div`
  height: 7.34px;
  width: 100%;
  position: relative;
`;

export const ProgressBarBackground = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 1s ease-in-out;
  background: ${COLOR.MINESHAFT_GRAY};
  width: 100%;
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 1s ease-in-out;
  background: ${COLOR.SOLID_WHITE};
  width: ${(props) => props.percent ?? 0}%;
`;
