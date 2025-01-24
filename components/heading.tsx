import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return <h2 className={cn("text-2xl sm:text-4xl", className)}>{children}</h2>;
}
