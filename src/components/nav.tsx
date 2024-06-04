"use client";

import classnames from "classnames";
import Link from "next/link";
import React from "react";
import { Accordion } from "@/components/accordion";

interface NavLink {
  href: string;
  children: React.ReactNode;
}

const links: NavLink[] = [
  { href: "/", children: "About" },
  { href: "/2x2/ortega", children: "2x2 Ortega" },
  { href: "/3x3/oll", children: "3x3 OLL" },
  { href: "/3x3/pll", children: "3x3 PLL" },
  { href: "/4x4", children: "4x4" },
];

export function NavAccordion() {
  return (
    <Accordion.Item key="pages" value="pages">
      <Accordion.Trigger>Pages</Accordion.Trigger>
      <Accordion.Content>
        <NavLinks />
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function NavLinks() {
  return (
    <ul className="flex flex-col">
      {links.map((link, index) => (
        <NavLink key={index} link={link} />
      ))}
    </ul>
  );
}

function NavLink({ link }: { link: NavLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className={classnames(
          "text-mauve9 text-sm font-medium tracking-wider",
          "focus:outline-none focus-visible:underline focus-visible:underline-offset-2",
        )}
      >
        {link.children}
      </Link>
    </li>
  );
}
