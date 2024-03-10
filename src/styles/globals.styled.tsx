"use client";

import styled, { createGlobalStyle } from "styled-components";
import { type TextProps, type BoxProps } from "./type";
import { COLOR } from "~/constants/color";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
 html,
body {
  background-color: ${COLOR.WILDSAND_GRAY};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;

export const Box = styled(motion.div)<BoxProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  max-width: ${(props) => props.maxW};
  max-height: ${(props) => props.maxH};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDir};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const Text = styled.p<TextProps>`
  text-decoration: ${(props) => props.textDecor};
  font-family: var(--font-roboto);
  font-size: ${(props) => props.fontSize ?? "16px"};
  font-weight: ${(props) => props.fontWeight ?? 400};
  color: ${(props) => props.color ?? COLOR.DARK_GRAY};
  margin: 0;
`;
