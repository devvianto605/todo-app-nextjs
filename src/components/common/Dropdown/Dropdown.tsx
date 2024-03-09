"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { type FilterDropdownType, useFilterDropdownContext } from "~/contexts/filterDropdownContext";
import { COLOR } from "~/constants/color";
import { Box, Text } from "~/styles/globals.styled";

type DropdownContentProps = {
  isOpen: boolean;
};

type DropdownItemProps = {
  isSelected: boolean;
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
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

const DropdownContent = styled.div<DropdownContentProps>`
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

const DropdownItem = styled.div<DropdownItemProps>`
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

const Dropdown = () => {
  const { setFilter } = useFilterDropdownContext();

  const options = [
    { value: "all", label: "All" },
    { value: "done", label: "Done" },
    { value: "undone", label: "Undone" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: typeof options[0]) => {
    setSelectedOption(option);
    setFilter(option.value as FilterDropdownType)
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        <Box
          w="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="13px">{selectedOption?.label}</Text>
          {/* TODO: Manage svg better! */}
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
            </g>
          </svg>
        </Box>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            isSelected={option.label === selectedOption?.label}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
