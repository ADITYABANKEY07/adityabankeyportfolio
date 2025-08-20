declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number;
    activeClass?: string;
    className?: string;
    onSetActive?: (to: string) => void;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}
}
