import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import classnames from "classnames";
import React from "react";
import { Icons } from "@/components/icons";
import { Algorithm } from "@/types";

export function CollapseTrigger({
  algorithms,
  isOpen,
}: {
  algorithms: Algorithm[];
  isOpen: boolean;
}) {
  const isOpenable = algorithms.length > 1;

  if (!isOpenable) {
    return null;
  }

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {/* https://github.com/radix-ui/primitives/discussions/560#discussioncomment-3477536 */}
          <span className="flex items-center justify-center">
            <CollapsiblePrimitive.Trigger asChild>
              <button
                className={classnames(
                  "flex shrink-0 h-6 w-6 items-center justify-center rounded-full select-none",
                  "hover:bg-mauve3 text-mauve11 ring-mauve11",
                  "focus:outline-none focus-visible:ring focus-visible:ring-opacity-75",
                )}
              >
                <Icons.Expand value={isOpen} />
              </button>
            </CollapsiblePrimitive.Trigger>
          </span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={classnames(
              "px-3 py-2 rounded text-xs leading-none select-none",
              "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade",
              "data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade",
              "data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade",
              "data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade",
              "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",
              "will-change-[transform,opacity]",
            )}
            side="left"
            sideOffset={6}
          >
            {isOpen ? "Hide" : `Show ${algorithms.length - 1} more`}
            <TooltipPrimitive.Arrow className="fill-mauve2" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
