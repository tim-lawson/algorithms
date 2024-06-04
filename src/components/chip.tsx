import classnames from "classnames";

export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={classnames(
        "rounded-md px-[4px] select-none whitespace-nowrap",
        "text-[11px] leading-4 font-semibold text-center",
        className,
      )}
    >
      {children}
    </span>
  );
}
