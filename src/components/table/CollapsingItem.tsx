import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TableProps = ComponentProps<"li">;

export default function CollapsingItem({ className, ...props }: TableProps) {
  return (
    <li
      {...props}
      className={twMerge(" text-center py-2 px-4 border border-gray-400", className)}></li>
  );
}
