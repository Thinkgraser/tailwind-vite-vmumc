import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TextAreaProps = { label: String; labelClassName?: string } & ComponentProps<"textarea">;

export default function FloatingTextArea({
  label,
  id,
  name,
  className,
  labelClassName,
  ...props
}: TextAreaProps) {
  return (
    <div className="relative">
      <textarea
        {...props}
        id={id}
        name={name}
        className={twMerge(" floating-input peer", className)}
        placeholder=""
      />
      <label htmlFor={id} className={twMerge("floating-label", labelClassName)}>
        {label}
      </label>
    </div>
  );
}
