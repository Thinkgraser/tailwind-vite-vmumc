import { InputMask } from "@react-input/mask";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

type FloatingInputProps = {
  label: string;
  labelClassName?: string;
} & ComponentProps<"input">;

type InputProps = {
  props: Omit<FloatingInputProps, "label" | "labelClassName">;
};

function InputTest({ props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  return props.type === "tel" ? (
    <InputMask
      mask="(___) ___-____"
      showMask={isFocused}
      onFocus={handleFocus}
      placeholder=""
      replacement={{ _: /\d/ }}
      {...props}
    />
  ) : (
    <input placeholder="" {...props} />
  );
}

export default function FloatingInput({
  label,
  id,
  name,
  className,
  labelClassName,
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative">
      <InputTest
        props={{ id, name, className: twMerge("floating-input peer", className), ...props }}
      />
      <label htmlFor={id} className={twMerge("floating-label", labelClassName)}>
        {label}
      </label>
    </div>
  );
}
