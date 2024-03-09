"use client";

import React, { useState } from "react";
import EditCard from "../EditCard/EditCard";
import DisplayCard from "../DisplayCard/DisplayCard";

export default function TaskCard({
  isChecked,
  label,
  name,
}: {
  isChecked: boolean;
  label: string;
  name: string;
}) {
  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = () => setIsEdit(true);
  const handleClickSave = () => setIsEdit(false);

  return isEdit ? (
    <EditCard label={label} onClickSave={handleClickSave} name={name} />
  ) : (
    <DisplayCard
      isChecked={isChecked}
      label={label}
      onClickEdit={handleClickEdit}
    />
  );
}
