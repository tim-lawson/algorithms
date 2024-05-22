import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import classnames from "classnames";
import { button, tooltip } from "@/classnames";
import { Icons } from "@/components/icons";
import { useLearned } from "@/page-context";

export function LearnToggle({ id }: { id: string }) {
  const [value, toggle] = useLearned(id);

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {/* https://github.com/radix-ui/primitives/discussions/560#discussioncomment-3477536 */}
          <span className="flex items-center justify-center">
            <TogglePrimitive.Root
              id={id}
              pressed={value}
              onPressedChange={toggle}
              className={classnames(
                ...button,
                "radix-state-on:bg-green5 radix-state-on:text-green11 radix-state-on:ring-green11",
                "radix-state-off:bg-none radix-state-off:text-mauve11 radix-state-off:ring-mauve11",
              )}
            >
              <Icons.Learn value={value} />
            </TogglePrimitive.Root>
          </span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={classnames(
              ...tooltip,
              value ? "bg-green5 text-green11" : "bg-mauve2 text-mauve11",
            )}
            side="left"
            sideOffset={6}
          >
            {value ? "Learned" : "Not learned"}
            <TooltipPrimitive.Arrow
              className={classnames(value ? "fill-green5" : "fill-mauve2")}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
