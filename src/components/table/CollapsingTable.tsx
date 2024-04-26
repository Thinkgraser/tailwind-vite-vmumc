import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TableProps = {
  header: string;
  headerClassName?: string;
  textClassName?: string;
} & ComponentProps<"ul">;

export default function CollapsingTable({
  header,
  headerClassName,
  textClassName,
  className,
  children,
  ...props
}: TableProps) {
  return (
    <ul
      {...props}
      className={twMerge("grid grid-cols-1 lg:grid-cols-2 justify-center bg-gray-200", className)}>
      <li
        className={twMerge(
          "bg-gray-800 text-white text-center py-2 px-4 border border-gray-900 lg:col-span-2",
          headerClassName
        )}>
        <h3 className={twMerge("text-lg font-bold", textClassName)}>{header}</h3>
      </li>
      {children}
    </ul>
  );
}
