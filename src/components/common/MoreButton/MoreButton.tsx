"use client";

import React, { useEffect, useRef, useState } from "react";
import { COLOR } from "~/constants/color";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./MoreButton.styled";

const MoreButton = ({
  onClickEdit,
  onClickDelete,
}: {
  onClickEdit: () => void;
  onClickDelete: () => void;
}) => {
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
      onClick: onClickDelete,
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
        {/* TODO: Improve svg usage method */}
        <svg
          fill="none"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="12"
            fill={COLOR.SANTAS_GRAY}
            r="1.5"
            transform="rotate(90 18 12)"
          />
          <circle
            cx="12"
            cy="12"
            fill={COLOR.SANTAS_GRAY}
            r="1.5"
            transform="rotate(90 12 12)"
          />
          <circle
            cx="6"
            cy="12"
            fill={COLOR.SANTAS_GRAY}
            r="1.5"
            transform="rotate(90 6 12)"
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
