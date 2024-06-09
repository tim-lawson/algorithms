import React from "react";
import { GridItem } from "@/components/grid-item";
import { LearnCount } from "@/components/learn-count";
import { Hydrated } from "@/hooks/use-hydrated";
import { usePageContext } from "@/page-context";
import { AlgorithmGroup, PageData } from "@/types";

export function Grid({ data }: { data: PageData }) {
  const { groups } = usePageContext();

  return (
    <Hydrated>
      <ul className="w-full flex flex-col gap-6">
        {data.groups.map((group) => {
          if (groups.get(group.id)) {
            return <Group key={group.id} group={group} size={data.size} />;
          }
        })}
      </ul>
    </Hydrated>
  );
}

function Group({ group, size }: { group: AlgorithmGroup; size: number }) {
  return (
    <li key={group.id}>
      <div className="flex items-center justify-between pl-4 pr-2 py-2">
        <h2 className="text-mauve9 text-lg font-medium">{group.label}</h2>
        <LearnCount.Group group={group} />
      </div>
      <ul className="w-full grid grid-flow-row lg:auto-rows-fr gap-4 grid-cols-1 lg:grid-cols-2">
        {group.cases.map((algorithm) => (
          <GridItem key={algorithm.id} size={size} algorithm={algorithm} />
        ))}
      </ul>
    </li>
  );
}
