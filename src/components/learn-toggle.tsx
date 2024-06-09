import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import classnames from "classnames";
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
                "flex shrink-0 h-6 w-6 items-center justify-center rounded-full select-none",
                "hover:bg-mauve3 text-mauve11 ring-mauve7",
                "focus:outline-none focus-visible:ring focus-visible:ring-opacity-75",
                "radix-state-on:bg-green5 radix-state-on:text-green11 radix-state-on:ring-green11",
                "radix-state-off:bg-none radix-state-off:text-mauve11 radix-state-off:ring-mauve7",
              )}
            >
              <Icons.Learn value={value} />
            </TogglePrimitive.Root>
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
