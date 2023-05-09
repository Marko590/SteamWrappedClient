import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./styles/HoverDropdown.css";
import { useNavigate } from "react-router-dom";

interface Props {
  options: Option[];
  containsLinks: boolean;
}
interface Option {
  text: string;
  value: string;
  link?: string;
}
function HoverDropdown({ options, containsLinks }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  function setOnClick(option: Option) {
    if (containsLinks) {
      return navigate(option.link ? option.link.toString() : "error");
    } else {
      return () => {};
    }
  }
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
          <DropdownItem
            onClick={() => {
              setOnClick(option);
            }}
            className="my-dropdown-item"
          >
            {option.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default HoverDropdown;
