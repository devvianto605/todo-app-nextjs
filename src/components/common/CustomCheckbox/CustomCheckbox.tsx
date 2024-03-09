'use client'

import React, { ReactNode } from "react";
import styled from "styled-components";
import { type CheckboxProps, type StyledCheckboxProps } from "./type";
import * as Styled from "./CustomCheckbox.styled";

export default function CustomCheckbox({
  checked,
  size = '22px',
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <Styled.CheckboxContainer>
      <Styled.HiddenCheckbox checked={checked} onChange={onChange} {...props} />
      <Styled.CheckBox
        checked={checked}
        size={size}
      />
    </Styled.CheckboxContainer>
  );
}
