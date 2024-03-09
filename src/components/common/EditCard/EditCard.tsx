import React from "react";
import * as Styled from "./EditCard.styled";
import BaseCard from "../BaseCard/BaseCard";

export default function EditCard({
  label,
  onClickSave,
  name,
}: {
  label: string;
  onClickSave: () => void;
  name: string;
}) {
  return (
    <BaseCard pt="5px" pb="5px" pr="6px">
      <Styled.EditCard
        id="example"
        name={name}
        type="text"
        placeholder={label}
        defaultValue={label}
      />
      <Styled.SaveButton onClick={onClickSave}>Save</Styled.SaveButton>
    </BaseCard>
  );
}
