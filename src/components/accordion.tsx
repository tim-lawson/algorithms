import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import React from "react";

function Root({ children }: { children: React.ReactNode }) {
  return (
    <AccordionPrimitive.Root
      className="bg-mauve6 rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
      collapsible
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

const Item = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionItemProps & React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Item
    className={classNames(
      "mt-px overflow-hidden",
      "first:mt-0 first:rounded-t last:rounded-b",
      "focus-within:shadow-mauve11 focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </AccordionPrimitive.Item>
));

Item.displayName = "AccordionItem";

const Trigger = React.forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps & React.HTMLProps<HTMLButtonElement>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={classNames(
        "group h-12 px-4 flex flex-1 items-center justify-between",
        "bg-mauve1 hover:bg-mauve2 text-mauve11 shadow-mauve6",
        "leading-none shadow-[0_1px_0] outline-none cursor-default",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-mauve10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

Trigger.displayName = "AccordionTrigger";

const Content = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps & React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={classNames(
      "overflow-hidden bg-mauve1 text-mauve11",
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="p-4">{children}</div>
  </AccordionPrimitive.Content>
));

Content.displayName = "AccordionContent";

export const Accordion = { Root, Item, Trigger, Content };
