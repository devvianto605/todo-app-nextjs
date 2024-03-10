import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { Box, Text } from "~/styles/globals.styled";
import MoreButton from "../MoreButton/MoreButton";
import { COLOR } from "~/constants/color";

export default function DisplayCard({
  isChecked,
  label,
  onClickEdit,
  onClickDelete,
  onChecked,
}: {
  isChecked: boolean;
  label: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onChecked: () => void;
}) {
  const checkedCardTextProp = {
    textDecor: "line-through",
    color: COLOR.CHALICE_GRAY,
  };

  const uncheckedCardTextProp = {
    textDecor: "none",
    color: COLOR.DARK_GRAY,
  };

  return (
    <BaseCard>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        maxH="22px"
        w="100%"
      >
        <Box alignItems="center" display="flex">
          <Box mr="16px">
            <CustomCheckbox checked={isChecked} onChange={onChecked} />
          </Box>
          <Text {...(isChecked ? checkedCardTextProp : uncheckedCardTextProp)}>
            {label}
          </Text>
        </Box>
        <MoreButton onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
      </Box>
    </BaseCard>
  );
}
