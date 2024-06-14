import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import classnames from "classnames";
import React from "react";
import { LearnCount } from "@/components/learn-count";
import { useGroup } from "@/page-context";
import { AlgorithmGroup } from "@/types";

export function Groups({ groups }: { groups: AlgorithmGroup[] }) {
  return (
    <div>
      <h2 className="pl-4 pr-2 py-2 text-mauve9 text-lg font-medium">Groups</h2>
      <ul className="px-2 flex flex-col gap-1">
        {groups.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </ul>
    </div>
  );
}

function Group({ group }: { group: AlgorithmGroup }) {
  const [checked, onCheckedChange] = useGroup(group.id);

  return (
    <li className="flex items-center justify-between gap-4">
      <span className="flex items-center gap-2 text-mauve11">
        <CheckboxPrimitive.Root
          id={group.id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className={classnames(
            "flex h-4 w-4 items-center justify-center rounded bg-white",
            "focus:outline-none focus-visible:ring focus-visible:ring-mauve7  focus-visible:ring-opacity-75",
          )}
        >
          <CheckboxPrimitive.Indicator>
            <CheckIcon className="h-4 w-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label className="text-mauve11 text-sm" htmlFor={group.id}>
          {group.label}
        </label>
      </span>
      <LearnCount.Group group={group} />
    </li>
  );
}
