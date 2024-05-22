import classnames from "classnames";

export function Box({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classnames(
        "w-full p-2 rounded-md bg-mauve1 shadow-[0_1px_5px] shadow-black/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
