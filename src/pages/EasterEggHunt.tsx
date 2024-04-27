import { useEffect } from "react";
import { EasterEggHuntImg } from "../assets";

export default function EasterEggHunt() {
  useEffect(() => {
    document.title = "Easter Egg Hunt - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium">Easter Morning Egg Hunt</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <p>Easter delights abound on our annual egg hunt Easter morning.</p>
      <img
        src={EasterEggHuntImg}
        className="w-full lg:w-9/12 rounded mx-auto"
        alt="Easter Sunday egg hunt"
      />
    </div>
  );
}
