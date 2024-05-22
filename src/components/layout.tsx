import classnames from "classnames";
import React from "react";
import { Box } from "@/components/box";
import { NavLinks } from "@/components/nav";

export default function Layout({
  title,
  children,
  sidebar = null,
}: {
  title: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <div
      className={classnames(
        "relative h-screen p-4 overflow-y-auto",
        "flex flex-col md:flex-row md:gap-x-4",
      )}
    >
      <header className="grow-0 shrink-0 md:basis-64 flex flex-col">
        <h1 className="px-4 py-2 text-mauve10 text-lg font-medium tracking-widest">
          {title}
        </h1>
        <Box className="px-4 py-4 mb-4">
          <h3 className="mb-2 text-mauve8 font-medium uppercase tracking-widest cursor-default">
            Pages
          </h3>
          <NavLinks />
        </Box>
        {sidebar}
      </header>
      <main className="w-full grow-1 flex flex-col gap-4 md:overflow-y-auto text-mauve11">
        {children}
      </main>
    </div>
  );
}
