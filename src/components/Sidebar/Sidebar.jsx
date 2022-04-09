import React from "react";
import { Gif } from "./Gif";
import { HyperLink } from "./HyperLink";
import { Image } from "./Image";
import { TextStyles } from "./TextStyles";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <TextStyles />
      <HyperLink />
      <Image />
      <Gif />
    </aside>
  );
};
