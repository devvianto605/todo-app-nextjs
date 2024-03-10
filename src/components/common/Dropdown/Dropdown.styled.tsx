/* eslint-disable no-confusing-arrow */
import styled from "styled-components";
import { COLOR } from "~/constants/color";

type DropdownContentProps = {
  isOpen: boolean;
};

type DropdownItemProps = {
  isSelected: boolean;
};

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  min-width: 110px;
  min-height: 29px;
  background-color: ${COLOR.SOLID_WHITE};
  color: ${COLOR.SOLID_BLACK};
  padding: 7px 8px 7px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: ${COLOR.SOLID_WHITE};
  min-width: 110px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1;
  margin-top: 5px;
  padding: 10px 6px;
`;

export const DropdownItem = styled.div<DropdownItemProps>`
  font-size: 14px;
  padding: 5px 6px 6.32px 8.66px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? COLOR.SOLID_WHITE : "")};
  background-color: ${(props) =>
    props.isSelected ? COLOR.BUTTERFLY_VIOLET : ""};
  border-radius: 8px;
  margin: 4px;

  &:hover {
    color: ${COLOR.SOLID_WHITE};
    background-color: ${COLOR.LAVENDER_VIOLET};
    border-radius: 8px;
  }
`;
