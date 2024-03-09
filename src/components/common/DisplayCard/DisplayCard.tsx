import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { Box, Text } from "~/styles/globals.styled";
import MoreButton from "../MoreButton/MoreButton";
import { COLOR } from "~/constants/color";
import useMutateTask from "~/hooks/task/useMutateTask";

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
        maxH="22px"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
          <Box mr="16px">
            <CustomCheckbox checked={isChecked} onChange={onChecked} />
          </Box>
          <Text {...(isChecked ? checkedCardTextProp : uncheckedCardTextProp)}>
            {label}
          </Text>
        </Box>
        <MoreButton onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
      </Box>
    </BaseCard>
  );
}
