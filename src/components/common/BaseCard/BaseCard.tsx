import React, { type ReactNode } from "react";
import * as Styled from "./BaseCard.styled";

export default function BaseCard({
  children,
  ...props
}: { children: ReactNode } & Styled.BaseCardContainerProps) {
  return (
    <Styled.BaseCardContainer
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 20 }}
      {...props}
    >
      {children}
    </Styled.BaseCardContainer>
  );
}
