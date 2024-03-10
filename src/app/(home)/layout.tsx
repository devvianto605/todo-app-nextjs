import React from "react";
import * as Styled from "./MainLayout.styled";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styled.mainSection>{children}</Styled.mainSection>;
}
