import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["py-1 px-2 border rounded text-center"], {
  variants: {
    variant: {
      default: ["bg-primary", "border-transparent", "hover:bg-primary-hover text-white"],
      "outline-gray": [
        "text-[#6c757d]",
        "border-[#6c757d]",
        "hover:bg-[#6c757d]",
        "hover:text-white",
      ],
    },
    size: {
      default: [""],
      full: ["w-full"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"a">;

export default function Button({ variant, size, children, className, ...props }: ButtonProps) {
  return (
    <div>
      <a {...props}>
        <button className={twMerge(buttonStyles({ variant, size }), className)}>{children}</button>
      </a>
    </div>
  );
}
