"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { PageContextProvider } from "@/page-context";

export default function Layout({
  title,
  children,
  groups,
}: {
  title: string;
  children: React.ReactNode;
  groups?: React.ReactNode;
}) {
  return (
    <PageContextProvider>
      <div className="relative h-screen p-4 overflow-y-auto flex flex-col">
        <header className="grow-0 shrink-0 flex flex-col mb-6 gap-4">
          <h1 className="mt-2 px-4 text-mauve10 text-lg font-medium tracking-widest">
            {title}
          </h1>
          <Nav />
          {groups}
        </header>
        <main className="w-full flex flex-col gap-4 text-mauve11">
          {children}
        </main>
      </div>
    </PageContextProvider>
  );
}
