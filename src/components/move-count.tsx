import classnames from "classnames";

export function MoveCount({
  count,
  metric,
}: {
  count: number;
  metric: string;
}) {
  return (
    <span
      className={classnames(
        "rounded-md px-[4px] min-w-12 text-[11px] font-semibold text-center leading-4 select-none whitespace-nowrap",
        color(count),
      )}
    >
      {count} {metric}
    </span>
  );
}

function color(count: number): string {
  if (count <= 8) {
    return "bg-green6 text-green11";
  }
  if (count <= 10) {
    return "bg-lime6 text-lime11";
  }
  if (count <= 12) {
    return "bg-yellow10 text-yellow11";
  }
  if (count <= 16) {
    return "bg-amber6 text-amber11";
  }
  if (count <= 20) {
    return "bg-orange6 text-orange11";
  }
  return "bg-red6 text-red11";
}
