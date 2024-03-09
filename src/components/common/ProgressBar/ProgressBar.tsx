import React from "react";
import * as Styled from "./ProgressBar.styled";

export default function ProgressBar({ percent }: { percent: number }) {
  return (
    <Styled.ProgressBarContainer>
      <Styled.ProgressBarBackground />
      <Styled.ProgressBar percent={percent} />
    </Styled.ProgressBarContainer>
  );
}
