import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import classnames from "classnames";
import React from "react";
import { button, tooltip } from "@/classnames";
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
              <button className={classnames(button)}>
                <Icons.Expand value={isOpen} />
              </button>
            </CollapsiblePrimitive.Trigger>
          </span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={classnames(tooltip)}
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
