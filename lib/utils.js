import React from "react";
import NextLink from "next/link";

export const Link = ({ to, children }) => (
  <NextLink href={to} as={process.env.BACKEND_URL + to}>
    <a>{children}</a>
  </NextLink>
);
