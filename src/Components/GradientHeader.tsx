export default function GradientHeader({
  children,
  from = "from-blue-900",
  to = "to-blue-500",
  fontSize = "text-4xl",
  paddingBottom = "pb-10",
  className,
}: {
  children: string | JSX.Element | JSX.Element[];
  from?: string;
  to?: string;
  fontSize?: string;
  paddingBottom?: string;
  className?: string;
}) {
  return (
    <h2
      className={`${fontSize} font-bold ${paddingBottom} text-transparent bg-clip-text hyphens-manual bg-gradient-to-br ${from} ${to} ${className}`}
    >
      {children}
    </h2>
  );
}
