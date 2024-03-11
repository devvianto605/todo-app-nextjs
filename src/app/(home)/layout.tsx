"use client";

import React from "react";
import * as Styled from "./MainLayout.styled";
import { LoadingSpinner } from "~/components";
import useGetTask from "~/hooks/task/useGetTask";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading: isGetTaskLoading } = useGetTask();

  if (isGetTaskLoading) {
    return (
      <Styled.mainSection>
        <LoadingSpinner />
      </Styled.mainSection>
    );
  }

  return <Styled.mainSection>{children}</Styled.mainSection>;
}
