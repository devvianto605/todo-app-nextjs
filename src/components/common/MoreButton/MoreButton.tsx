"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { COLOR } from "~/constants/color";

type DropdownContentProps = {
  isOpen: boolean;
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: flex;
  background-color: ${COLOR.SOLID_WHITE};
  color: ${COLOR.SOLID_BLACK};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  right: 0;
  background-color: ${COLOR.SOLID_WHITE};
  min-width: 110px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1;
  padding: 10px 6px;
`;

const DropdownItem = styled.div`
  font-size: 14px;
  padding: 5px 6px 6.32px 8.66px;
  cursor: pointer;
  border-radius: 8px;
  margin: 4px;
  color: ${(props) => props.color};

  &:hover {
    color: ${COLOR.SOLID_WHITE};
    background-color: ${COLOR.LAVENDER_VIOLET};
    border-radius: 8px;
  }
`;

const MoreButton = ({ onClickEdit }: { onClickEdit: () => void }) => {
  // Mock options
  const options = [
    {
      value: "edit",
      label: "Edit",
      color: COLOR.DARK_GRAY,
      onClick: onClickEdit,
    },
    {
      value: "delete",
      label: "Delete",
      color: COLOR.NEWYORK_PINK,
      onClick: onClickEdit,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="12"
            r="1.5"
            transform="rotate(90 18 12)"
            fill={COLOR.SANTAS_GRAY}
          />
          <circle
            cx="12"
            cy="12"
            r="1.5"
            transform="rotate(90 12 12)"
            fill={COLOR.SANTAS_GRAY}
          />
          <circle
            cx="6"
            cy="12"
            r="1.5"
            transform="rotate(90 6 12)"
            fill={COLOR.SANTAS_GRAY}
          />
        </svg>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            color={option.color}
            onClick={() => {
              handleOptionClick();
              option?.onClick();
            }}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default MoreButton;
