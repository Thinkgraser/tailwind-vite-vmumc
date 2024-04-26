import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TableProps = ComponentProps<"table">;

export default function Table({ className, ...props }: TableProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden">
            <table
              {...props}
              className={twMerge(
                "min-w-full divide-y divide-gray-200 bg-white text-center",
                className
              )}></table>
          </div>
        </div>
      </div>
    </div>
  );
}
