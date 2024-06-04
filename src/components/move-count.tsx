import classnames from "classnames";
import { Chip } from "@/components/chip";
import { color } from "@/utils";

const htm = [
  {
    value: 8,
    className: "bg-green6 text-green11",
  },
  {
    value: 10,
    className: "bg-lime6 text-lime11",
  },
  {
    value: 12,
    className: "bg-yellow10 text-yellow11",
  },
  {
    value: 16,
    className: "bg-amber6 text-amber11",
  },
  {
    value: 20,
    className: "bg-orange6 text-orange11",
  },
  {
    value: Infinity,
    className: "bg-red6 text-red11",
  },
];

const colorHtm = color(htm);

export function MoveCount({
  count,
  metric,
}: {
  count: number;
  metric: string;
}) {
  return (
    <Chip className={classnames("min-w-12", colorHtm(count))}>
      {count} {metric}
    </Chip>
  );
}
