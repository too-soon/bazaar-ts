import { Theme } from "@radix-ui/themes";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const location = useLocation();
  return (
    <Theme
      accentColor="indigo"
      panelBackground="translucent"
      data-pathname={location.pathname}
    >
      {children}
    </Theme>
  );
}
