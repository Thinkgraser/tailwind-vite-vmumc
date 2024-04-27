import { useEffect } from "react";
import { ShroveTuesdayImg } from "../assets";

export default function ShroveTuesday() {
  useEffect(() => {
    document.title = "Fat Tuesday Pancake Supper - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Shrove Tuesday Pancake Supper</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <p>
        Every year we celebrate Shrove Tuesday with a pancake supper, a pancake-flipping contest,
        and fellowship.
      </p>
      <img
        src={ShroveTuesdayImg}
        className="w-full lg:w-9/12 rounded mx-auto"
        alt="Shrove Tuesday fun:  food, pancake-flipping, beads, and fellowship"
      />
    </div>
  );
}
