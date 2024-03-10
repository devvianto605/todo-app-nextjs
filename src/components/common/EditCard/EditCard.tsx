import React, { type HTMLAttributes } from "react";
import * as Styled from "./EditCard.styled";
import BaseCard from "../BaseCard/BaseCard";

export default function EditCard({
  label,
  name,
  onClickSave,
  ...other
}: {
  label: string;
  name: string;
  onClickSave: () => void;
} & HTMLAttributes<HTMLInputElement>) {
  return (
    <BaseCard pb="5px" pr="6px" pt="5px">
      <Styled.EditCard name={name} placeholder={label} {...other} />
      <Styled.SaveButton type="submit" onClick={onClickSave}>
        Save
      </Styled.SaveButton>
    </BaseCard>
  );
}
