import React from "react";
import { GridItem } from "@/components/grid-item";
import { Hydrated } from "@/hooks/use-hydrated";
import { usePageContext } from "@/page-context";
import { AlgorithmGroup } from "@/types";

export function Grid() {
  const { data, groups } = usePageContext();

  return (
    <Hydrated>
      <ul className="w-full flex flex-col gap-4">
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
      <h2 className="px-4 py-2 text-mauve9 text-lg font-medium">
        {group.label}
      </h2>
      <ul className="w-full grid grid-flow-row gap-4 grid-cols-1 xl:grid-cols-2">
        {group.cases.map((algorithm) => (
          <GridItem key={algorithm.id} size={size} algorithm={algorithm} />
        ))}
      </ul>
    </li>
  );
}
