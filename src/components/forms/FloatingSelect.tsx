import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type SelectProps = { label: String; labelClassName?: string } & ComponentProps<"select">;

export default function FloatingSelect({
  label,
  id,
  name,
  className,
  labelClassName,
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        id={id}
        className={twMerge("floating-input text-base peer", className)}></select>
      <label htmlFor={id} className={twMerge("floating-label", labelClassName)}>
        {label}
      </label>
    </div>
  );
}
