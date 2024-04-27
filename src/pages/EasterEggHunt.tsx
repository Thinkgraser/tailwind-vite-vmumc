import { useEffect } from "react";
import { EasterEggHuntImg } from "../assets";

export default function EasterEggHunt() {
  useEffect(() => {
    document.title = "Easter Egg Hunt - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Easter Morning Egg Hunt</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <p>Easter delights abound on our annual egg hunt Easter morning.</p>
        <img
          src={EasterEggHuntImg}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt="Easter Sunday egg hunt"
        />
      </div>
    </>
  );
}
