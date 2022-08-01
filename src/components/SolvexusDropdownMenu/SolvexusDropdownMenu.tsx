import React from "react";

import { DropdownMenu } from "reactstrap";
import { DropdownMenuProps } from "reactstrap/lib";

export const BcDropdownMenu = (props: DropdownMenuProps) => {
  return (
    <DropdownMenu
      {...props}
      modifiers={{
        setMaxHeight: {
          enabled: true,
          order: 890,
          fn: (data) => {
            return {
              ...data,
              styles: {
                ...data.styles,
                overflow: "overlay",
                maxHeight: 300,
              },
            };
          },
        },
      }}
    >
      {props.children}
    </DropdownMenu>
  );
};
