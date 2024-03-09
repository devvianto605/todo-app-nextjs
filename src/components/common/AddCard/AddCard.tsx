import React, { HTMLAttributes } from "react";
import * as Styled from "./AddCard.styled";
import BaseCard from "../BaseCard/BaseCard";

export default function AddCard({
  name,
  placeholder,
  ...other
}: {
  name: string;
  placeholder?: string;
} & HTMLAttributes<HTMLInputElement>) {
  return (
    <BaseCard>
      <Styled.AddCard
        name={name}
        placeholder={placeholder}
        {...other}
      />
    </BaseCard>
  );
}
