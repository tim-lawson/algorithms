import classnames from "classnames";
import { Chip } from "@/components/chip";
import { usePageContext } from "@/page-context";
import { AlgorithmGroup, PageData } from "@/types";
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

function cases(group: AlgorithmGroup, get: (id: string) => boolean) {
  return group.cases.reduce((count, algorithm) => {
    return algorithm.algorithms.some(({ id }) => get(id)) ? count + 1 : count;
  }, 0);
}

function Group({ group }: { group: AlgorithmGroup }) {
  const count = group.cases.length;

  const { learned } = usePageContext();

  const learn = cases(group, (id) => learned.get(id));

  const fraction = learn / count;

  return (
    <Chip className={classnames("min-w-11", colorLearn(fraction))}>
      {learn} / {count}
    </Chip>
  );
}

function Page({ page }: { page: PageData }) {
  const count = page.groups.reduce(
    (count, group) => count + group.cases.length,
    0,
  );

  const { learned } = usePageContext();

  const learn = page.groups.reduce(
    (count, group) => count + cases(group, (id) => learned.get(id)),
    0,
  );

  const fraction = learn / count;

  return (
    <Chip className={classnames("text-xs py-0.5", colorLearn(fraction))}>
      {learn} / {count}
    </Chip>
  );
}

export const LearnCount = {
  Group,
  Page,
};
