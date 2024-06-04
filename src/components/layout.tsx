import classnames from "classnames";
import React from "react";
import { NavAccordion } from "@/components/nav";
import { Accordion } from "./accordion";
import { GroupsAccordion } from "./groups";

export default function Layout({
  title,
  children,
  groups = true,
}: {
  title: string;
  children: React.ReactNode;
  groups?: boolean;
}) {
  return (
    <div
      className={classnames(
        "relative h-screen p-4 overflow-y-auto",
        "flex flex-col lg:flex-row lg:gap-x-4",
      )}
    >
      <header className="grow-0 shrink-0 lg:basis-72 flex flex-col mb-6">
        <h1 className="px-4 py-2 text-mauve10 text-lg font-medium tracking-widest">
          {title}
        </h1>
        <Accordion.Root>
          <NavAccordion />
          {groups && <GroupsAccordion />}
        </Accordion.Root>
      </header>
      <main className="w-full grow-1 flex flex-col gap-4 lg:overflow-y-auto text-mauve11">
        {children}
      </main>
    </div>
  );
}
