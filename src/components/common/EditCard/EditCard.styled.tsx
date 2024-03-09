"use client";

import styled from "styled-components";
import { COLOR } from "~/constants/color";

export const EditCard = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 16px;
  border: 0px solid;
  outline: none;
  color: ${COLOR.DARK_GRAY};

  &::placeholder {
    color: ${COLOR.SILVER_GRAY};
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: ${COLOR.SILVER_GRAY};
  }
`;

export const SaveButton = styled.button`
width: 64px;
height: 36px;
border-radius: 999px;
border: 2px solid ${COLOR.BUTTERFLY_VIOLET};
color: ${COLOR.SOLID_WHITE};
background-color: ${COLOR.BUTTERFLY_VIOLET};

&:hover {
  background-color: ${COLOR.LAVENDER_VIOLET};
}
`;
