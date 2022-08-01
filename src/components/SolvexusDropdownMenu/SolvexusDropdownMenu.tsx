import React from "react";

import { DropdownMenu } from "reactstrap";
import { DropdownMenuProps } from "reactstrap/lib";

type SolvexusDropdownMenuProps = DropdownMenuProps & {
  isOpen: boolean;
  maxHeight?: number;
};

const SolvexusDropdownMenu = (props: SolvexusDropdownMenuProps) => {
  const { isOpen, maxHeight = 300 } = props;
  return (
    <DropdownMenu
      {...props}
      className={`${props.className ? props.className : ""} ${
        isOpen ? "show" : ""
      }`}
      style={{ maxHeight: `${maxHeight}px`, overflow: "overlay" }}
    >
      {props.children}
    </DropdownMenu>
  );
};
export default SolvexusDropdownMenu;
