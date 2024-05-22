import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import classnames from "classnames";
import React from "react";
import { Accordion } from "@/components/accordion";
import { useGroup, usePageContext } from "@/page-context";
import { AlgorithmGroup } from "@/types";

export function GroupsAccordion() {
  return (
    <Accordion.Item value="groups">
      <Accordion.Trigger>Groups</Accordion.Trigger>
      <Accordion.Content>
        <Groups />
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function Groups() {
  const { data } = usePageContext();
  return (
    <ul className="space-y-2">
      {data.groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </ul>
  );
}

function Group({ group }: { group: AlgorithmGroup }) {
  const [checked, onCheckedChange] = useGroup(group.id);

  return (
    <li className="flex items-center gap-2 text-mauve11">
      <Checkbox.Root
        id={group.id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={classnames(
          "flex h-4 w-4 items-center justify-center rounded bg-mauve5",
          "focus:outline-none focus-visible:ring focus-visible:ring-mauve11  focus-visible:ring-opacity-75",
        )}
      >
        <Checkbox.Indicator>
          <CheckIcon className="h-4 w-4" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="text-mauve11 text-sm" htmlFor={group.id}>
        {group.label}
      </label>
    </li>
  );
}
