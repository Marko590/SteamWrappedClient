import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./styles/HoverDropdown.css";

interface Props {
  options: Option[];
}
interface Option {
  text: string;
  value: string;
  link: string;
}
function HoverDropdown({ options }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleItemClick = (event: any) => {
    // Add your code here to handle the click event
    console.log("Item clicked:", event.target.textContent);
  };

  return (
    <Dropdown
      onMouseOver={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      isOpen={dropdownOpen}
      toggle={toggle}
    >
      <DropdownToggle className="my-dropdown-menu" caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu className="my-dropdown-menu-background">
        {options.map((option) => (
          <DropdownItem onClick={handleItemClick} className="my-dropdown-item">
            {option.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default HoverDropdown;
