"use client";

import React from "react";
import * as Styled from "./CustomCheckbox.styled";

export default function CustomCheckbox({
  checked,
  size = "22px",
  onChange,
}: {
  checked: boolean;
  size?: string;
  onChange: () => void;
}) {
  return (
    <Styled.CheckboxContainer>
      <Styled.HiddenCheckbox checked={checked} onChange={onChange} />
      <Styled.CheckBox checked={checked} size={size} />
    </Styled.CheckboxContainer>
  );
}
