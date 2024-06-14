"use client";

import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import classnames from "classnames";
import Link, { LinkProps } from "next/link";
import React from "react";
import { data as data2x2Ortega } from "@/app/2x2/ortega/data";
import { data as data3x3OLL } from "@/app/3x3/oll/data";
import { data as data3x3PLL } from "@/app/3x3/pll/data";
import { data as data5x5L2C } from "@/app/5x5/l2c/data";
import { data as data5x5L2E } from "@/app/5x5/l2e/data";
import { LearnCount } from "@/components/learn-count";

const ListItemLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps
>(({ className, children, title, href, ...props }, forwardedRef) => (
  <li>
    <NavigationMenuPrimitive.Link asChild>
      <Link
        href={href}
        className={classnames(
          "block select-none rounded p-3",
          "text-mauve11 text-md font-medium leading-none select-none",
          "hover:bg-mauve3 focus:outline-none focus-visible:ring-2 focus:ring-mauve7",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-mauve11 mb-1 font-medium leading-4">{title}</div>
        <p className="text-mauve10 leading-5">{children}</p>
      </Link>
    </NavigationMenuPrimitive.Link>
  </li>
));

ListItemLink.displayName = "ListItemLink";

function ItemLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Link
        className={classnames(
          "group flex items-center justify-between gap-1 rounded px-2 py-2",
          "text-mauve11 text-md font-medium leading-none select-none",
          "hover:bg-mauve3 focus:outline-none focus-visible:ring-2 focus:ring-mauve7",
        )}
        asChild
      >
        <Link href={href}>{children}</Link>
      </NavigationMenuPrimitive.Link>
    </NavigationMenuPrimitive.Item>
  );
}

export function Nav() {
  return (
    <NavigationMenuPrimitive.Root className="relative z-[1] flex justify-start">
      <NavigationMenuPrimitive.List
        className={classnames(
          "m-0 p-1 flex gap-1.5 rounded-md list-none",
          "bg-mauve1 shadow-[0_2px_10px] shadow-black/5",
        )}
      >
        <ItemLink href="/">About</ItemLink>

        <NavigationMenuPrimitive.Item>
          <Trigger>3x3</Trigger>

          <Content>
            <ListItemLink href="/3x3/oll" title="OLL">
              <LearnCount.Page page={data3x3OLL} />
            </ListItemLink>
            <ListItemLink href="/3x3/pll" title="PLL">
              <LearnCount.Page page={data3x3PLL} />
            </ListItemLink>
          </Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <Trigger>2x2</Trigger>

          <Content>
            <ListItemLink href="/2x2/ortega" title="Ortega">
              <LearnCount.Page page={data2x2Ortega} />
            </ListItemLink>
          </Content>
        </NavigationMenuPrimitive.Item>

        {/* TODO: 4x4 and 5x5 pages aren't helpful? */}

        <ItemLink href="/4x4">4x4</ItemLink>

        <NavigationMenuPrimitive.Item>
          <Trigger>5x5</Trigger>

          <Content>
            <ListItemLink href="/5x5/l2c" title="Last two centers">
              <LearnCount.Page page={data5x5L2C} />
            </ListItemLink>
            <ListItemLink href="/5x5/l2e" title="Last two edges">
              <LearnCount.Page page={data5x5L2E} />
            </ListItemLink>
          </Content>
        </NavigationMenuPrimitive.Item>

        <ItemLink href="/nxn">N×N</ItemLink>

        <NavigationMenuPrimitive.Indicator
          className={classnames(
            "top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden",
            "data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut transition-[width,transform_250ms_ease]",
          )}
        >
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-start">
        <NavigationMenuPrimitive.Viewport
          className={classnames(
            "relative mt-[10px] origin-[top_center] overflow-hidden w-full",
            "rounded bg-white shadow-[0_4px_20px] shadow-black/5",
            "transition-[width,_height] duration-300",
            "h-[var(--radix-navigation-menu-viewport-height)] sm:w-[var(--radix-navigation-menu-viewport-width)]",
            "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut",
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
}

function Trigger({ children }: { children: React.ReactNode }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={classnames(
        "group flex items-center justify-between rounded px-2 pr-1 py-2 h-8",
        "text-mauve11 text-md font-medium leading-none select-none",
        "hover:bg-mauve3 focus:outline-none focus-visible:ring-2 focus:ring-mauve7",
      )}
    >
      {children}
      <CaretDownIcon
        className={classnames(
          "h-5 w-5 relative text-mauve10 group-data-[state=open]:-rotate-180",
          "transition-transform duration-[250] ease-in",
        )}
        aria-hidden
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <NavigationMenuPrimitive.Content
      className={classnames(
        "absolute top-0 left-0 w-full sm:w-auto",
        "data-[motion=from-start]:animate-enterFromLeft",
        "data-[motion=from-end]:animate-enterFromRight",
        "data-[motion=to-start]:animate-exitToLeft",
        "data-[motion=to-end]:animate-exitToRight",
      )}
    >
      <ul className="sm:w-96 p-2 list-none">{children}</ul>
    </NavigationMenuPrimitive.Content>
  );
}
