import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type SwitchProps = { label: String; labelClassName?: string } & ComponentProps<"input">;

export default function Switch({ label, className, labelClassName, ...props }: SwitchProps) {
  return (
    <div>
      <label className={twMerge("inline-flex items-center cursor-pointer", labelClassName)}>
        <input type="checkbox" {...props} className={twMerge("sr-only peer", className)} />
        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0d6efd]/[.25] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-base font-normal text-gray-900 dark:text-gray-300">{label}</span>
      </label>
    </div>
  );
}
