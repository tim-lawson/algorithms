import { CollapseTrigger } from "@/components/collapse-trigger";
import { LearnToggle } from "@/components/learn-toggle";
import { MoveCount } from "@/components/move-count";
import { useSVG } from "@/hooks/use-svg";
import { AlgorithmCase } from "@/types";
import { countHtm, replaceInnerSlices, replaceUDMoves } from "@/utils";

function SVG({ size, algorithm }: { size: number; algorithm: AlgorithmCase }) {
  useSVG(size, algorithm);

  return (
    <div className="h-[72px] w-[72px] flex justify-center" id={algorithm.id} />
  );
}

function Label({ value }: { value: string | string[] | undefined }) {
  if (value === undefined) {
    return null;
  }

  const values = Array.isArray(value) ? value : [value];

  return (
    <span className="text-mauve9 text-sm font-medium tracking-widest">
      {values.join(", ")}
    </span>
  );
}

function HTM({ value }: { value: string }) {
  return <MoveCount count={countHtm(value)} metric="HTM" />;
}

function CaseLabel({ value }: { value: string | undefined }) {
  if (value === undefined) {
    return null;
  }

  return (
    <span className="text-mauve9 text-xs font-medium tracking-wider">
      {value}
    </span>
  );
}

function Case({ value }: { value: string }) {
  return (
    <span className="text-mauve12 text-sm font-medium lg:text-md min-h-5">
      {replaceUDMoves(replaceInnerSlices(value))}
    </span>
  );
}

export const Alg = {
  SVG,
  Label,
  HTM,
  CaseLabel,
  Case,
  CollapseTrigger,
  LearnToggle,
};
