/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { type StyledCheckboxProps } from "./type";
import { COLOR } from "~/constants/color";

export const CheckboxContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const CheckBox = styled.div<StyledCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) =>
    props.checked ? COLOR.BUTTERFLY_VIOLET : COLOR.SOLID_WHITE};
  border: 2px solid ${COLOR.BUTTERFLY_VIOLET};
  border-radius: 6px;
  transition: all 0.3s;

  &:hover {
    background: ${(props) =>
      props.checked ? COLOR.LAVENDER_VIOLET : COLOR.WILDSAND_GRAY};
  }

  &:after {
    content: "";
    display: ${(props) => (props.checked ? "flex" : "none")};
    position: absolute;
    width: 14px; 
    height: 14px; 
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23${(props) => encodeURIComponent("#FFF".replace("#", ""))}"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s;
  }
`;
