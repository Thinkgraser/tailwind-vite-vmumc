import { useEffect } from "react";
import { EasterBreakfastImg1, EasterBreakfastImg2 } from "../assets";

export default function ChristmasCantata() {
  useEffect(() => {
    document.title = "Easter Breakfast - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Easter Sunrise Breakfast</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <p>
          Early risers who attend the Easter Sunrise service at 6:30 AM are invited to stay after
          for Easter breakfast.
        </p>
        <img
          src={EasterBreakfastImg1}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt="Easter Sunrise service is followed by breakfast."
        />
        <img
          src={EasterBreakfastImg2}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt="people gathered to eat, some wearing rabbit ears"
        />
      </div>
    </>
  );
}
