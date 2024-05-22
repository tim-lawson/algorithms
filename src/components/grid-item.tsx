import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React from "react";
import { Alg } from "@/components/alg";
import { Box } from "@/components/box";
import { useOpen } from "@/page-context";
import { AlgorithmCase } from "@/types";

export function GridItem({
  size,
  algorithm,
}: {
  size: number;
  algorithm: AlgorithmCase;
}) {
  const [first, ...rest] = algorithm.algorithms;

  const [open, onOpenChange] = useOpen(algorithm.id);

  return (
    <li key={algorithm.id}>
      <Box className="pl-3 pr-4">
        <CollapsiblePrimitive.Root
          className="flex flex-col gap-4"
          open={open}
          onOpenChange={onOpenChange}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Alg.SVG algorithm={algorithm} size={size} />
              <div className="min-h-[72px] py-1 flex flex-col justify-center gap-1">
                <Alg.Label value={algorithm.label} />
                <div className="flex flex-wrap items-center gap-2">
                  <Alg.HTM value={first.case} />
                  <Alg.CaseLabel value={first.label} />
                </div>
                <Alg.Case value={first.case} />
              </div>
            </div>

            <div className="pl-2 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <Alg.CollapseTrigger
                algorithms={algorithm.algorithms}
                isOpen={open}
              />
              <Alg.LearnToggle id={first.id} />
            </div>
          </div>

          <CollapsiblePrimitive.Content className="pl-[80px]">
            <div className="flex flex-col gap-4">
              {rest.map((algorithm) => (
                <div key={algorithm.case} className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Alg.HTM value={algorithm.case} />
                      <Alg.CaseLabel value={algorithm.label} />
                    </div>
                    <Alg.Case value={algorithm.case} />
                  </div>
                  <Alg.LearnToggle id={algorithm.id} />
                </div>
              ))}
            </div>
          </CollapsiblePrimitive.Content>
        </CollapsiblePrimitive.Root>
      </Box>
    </li>
  );
}
