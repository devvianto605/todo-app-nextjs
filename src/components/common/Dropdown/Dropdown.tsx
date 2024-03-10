"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  type FilterDropdownType,
  useFilterDropdownContext,
} from "~/contexts/filterDropdownContext";
import { Box, Text } from "~/styles/globals.styled";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./Dropdown.styled";

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

  const handleOptionClick = (option: (typeof options)[0]) => {
    setSelectedOption(option);
    setFilter(option.value as FilterDropdownType);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          w="100%"
        >
          <Text fontSize="13px">{selectedOption?.label}</Text>
          {/* TODO: Improve svg usage method */}
          <svg
            height="16px"
            viewBox="0 0 24 24"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M0 0h24v24H0z" fill="none" />
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
