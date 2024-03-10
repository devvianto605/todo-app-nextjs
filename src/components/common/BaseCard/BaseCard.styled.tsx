"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { COLOR } from "~/constants/color";

export type BaseCardContainerProps = {
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
};

export const BaseCardContainer = styled(motion.div)<BaseCardContainerProps>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.pl ?? `20px`};
  padding-right: ${(props) => props.pr ?? `20px`};
  padding-top:  ${(props) => props.pt ?? `12px`};
  padding-bottom: ${(props) => props.pb ?? `12px`};
  min-height: 46px;
  width: 518px;
  max-width: 90vw;
  border-radius: 9999px;
  background-color: ${COLOR.SOLID_WHITE};
  margin: 0;
`;
