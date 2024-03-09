"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { COLOR } from "~/constants/color";

export const ProgressCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 19px;
  padding-top: 18px;
  padding-bottom: 25px;
  min-height: 123px;
  min-width: 518px;
  border-radius: 20px;
  background-color: ${COLOR.NEWYORK_PINK};
  margin: 0;
`;
