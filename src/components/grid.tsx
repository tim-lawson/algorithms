import React from "react";
import { GridItem } from "@/components/grid-item";
import { Hydrated } from "@/hooks/use-hydrated";
import { usePageContext } from "@/page-context";
import { AlgorithmGroup } from "@/types";
import { LearnCount } from "./learn-count";

export function Grid() {
  const { data, groups } = usePageContext();

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
        <LearnCount group={group} />
      </div>
      <ul className="w-full grid grid-flow-row gap-4 grid-cols-1 xl:grid-cols-2">
        {group.cases.map((algorithm) => (
          <GridItem key={algorithm.id} size={size} algorithm={algorithm} />
        ))}
      </ul>
    </li>
  );
}
