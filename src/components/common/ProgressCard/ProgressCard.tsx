import React from "react";
import * as Styled from "./ProgressCard.styled";
import { Text } from "~/styles/globals.styled";
import { COLOR } from "~/constants/color";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function ProgressCard({
  percent,
  completed,
}: {
  percent: number;
  completed: number;
}) {
  return (
    <Styled.ProgressCardContainer
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 20 }}
    >
      <Text color={COLOR.SOLID_WHITE} fontSize="28px" fontWeight={500}>
        Progress
      </Text>
      <ProgressBar percent={percent} />
      <Text color={COLOR.SHILO_PINK}> {`${completed} completed`} </Text>
    </Styled.ProgressCardContainer>
  );
}
