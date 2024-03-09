import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { Box, Text } from "~/styles/globals.styled";
import MoreButton from "../MoreButton/MoreButton";
import EditCard from "../EditCard/EditCard";
import { COLOR } from "~/constants/color";

export default function DisplayCard({
  isChecked,
  label,
  onClickEdit,
}: {
  isChecked: boolean;
  label: string;
  onClickEdit: () => void;
}) {

    const checkedCardTextProp = {
        textDecor: "line-through",
        color: COLOR.CHALICE_GRAY

    }

    const uncheckedCardTextProp = {
        textDecor: "none",
        color: COLOR.DARK_GRAY

    }
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
            <CustomCheckbox checked={isChecked} />
          </Box>
          <Text {...isChecked ? checkedCardTextProp : uncheckedCardTextProp}>{label}</Text>
        </Box>
        <MoreButton onClickEdit={onClickEdit} />
      </Box>
    </BaseCard>
  );
}
