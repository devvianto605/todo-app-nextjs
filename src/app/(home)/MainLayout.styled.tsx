"use client";

import styled from "styled-components";
import { COLOR } from "~/constants/color";

export const mainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${COLOR.WILDSAND_GRAY};
`;
