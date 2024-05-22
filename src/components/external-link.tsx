import classnames from "classnames";
import Link from "next/link";

export function ExternalLink({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classnames(
        "focus:outline-none focus-visible:underline focus-visible:underline-offset-2",
        className,
      )}
    >
      {children}
    </Link>
  );
}
