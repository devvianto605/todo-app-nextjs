"use client";

import styled from "styled-components";
import CustomInput from "~/components/forms/CustomInput/CustomInput";
import { COLOR } from "~/constants/color";

export const AddCard = styled(CustomInput)`
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
  };

  &::-ms-input-placeholder { /* Edge 12 -18 */
    color: ${COLOR.SILVER_GRAY};
  }
`
