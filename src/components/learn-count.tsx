import classnames from "classnames";
import { Chip } from "@/components/chip";
import { usePageContext } from "@/page-context";
import { AlgorithmGroup } from "@/types";
import { color } from "@/utils";

const learn = [
  {
    value: 0,
    className: "bg-red6 text-red11",
  },
  {
    value: 0.2,
    className: "bg-orange6 text-orange11",
  },
  {
    value: 0.4,
    className: "bg-amber6 text-amber11",
  },
  {
    value: 0.6,
    className: "bg-yellow10 text-yellow11",
  },
  {
    value: 0.8,
    className: "bg-lime6 text-lime11",
  },
  {
    value: 1,
    className: "bg-green6 text-green11",
  },
];

const colorLearn = color(learn);

export function LearnCount({ group }: { group: AlgorithmGroup }) {
  const count = group.cases.length;

  const { learned } = usePageContext();

  const learn = group.cases.reduce((count, algorithm) => {
    return algorithm.algorithms.some(({ id }) => learned.get(id))
      ? count + 1
      : count;
  }, 0);

  const fraction = learn / count;

  return (
    <Chip className={classnames("min-w-11", colorLearn(fraction))}>
      {learn} / {count}
    </Chip>
  );
}
