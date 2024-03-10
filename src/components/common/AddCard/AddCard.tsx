import React, { type HTMLAttributes, type RefObject } from "react";
import * as Styled from "./AddCard.styled";
import BaseCard from "../BaseCard/BaseCard";
import { type UseFormReturn } from "react-hook-form";

export default function AddCard({
  name,
  placeholder,
  onClickCard,
  ...other
}: {
  name: string;
  placeholder?: string;
  addFormRef?: RefObject<UseFormReturn>;
  onClickCard?: () => void;
} & HTMLAttributes<HTMLInputElement>) {
  return (
    <BaseCard onClick={onClickCard}>
      <Styled.AddCard name={name} placeholder={placeholder} {...other} />
    </BaseCard>
  );
}
