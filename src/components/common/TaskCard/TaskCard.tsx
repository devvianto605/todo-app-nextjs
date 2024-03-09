"use client";

import React, { type HTMLAttributes, useState } from "react";
import EditCard from "../EditCard/EditCard";
import DisplayCard from "../DisplayCard/DisplayCard";

export default function TaskCard({
  isChecked,
  label,
  name,
  onClickDelete,
  onChecked,
  ...other
}: {
  isChecked: boolean;
  label: string;
  name: string;
  onClickDelete: () => void;
  onChecked: () => void;
} & HTMLAttributes<HTMLInputElement>) {
  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = () => setIsEdit(true);
  const handleClickSave = () => setTimeout(() => setIsEdit(false), 500);

  return isEdit ? (
    <EditCard
      label={label}
      onClickSave={handleClickSave}
      name={name}
      {...other}
    />
  ) : (
    <DisplayCard
      isChecked={isChecked}
      label={label}
      onClickEdit={handleClickEdit}
      onClickDelete={onClickDelete}
      onChecked={onChecked}
    />
  );
}
