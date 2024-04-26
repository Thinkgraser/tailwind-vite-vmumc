import { useEffect } from "react";
import { ChildrensProgramImg1, ChildrensProgramImg2 } from "../assets";

export default function ChildrensChristmasProgram() {
  useEffect(() => {
    document.title = "Calendar - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Children's Christmas Program</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <p>Each year, our children delight us with a musical retelling of the Christmas Story.</p>
        <img
          src={ChildrensProgramImg1}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt="Christmas play features children dressed as mice as well as the usual nativity scenes."
        />
        <img
          src={ChildrensProgramImg2}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt='candle-lit children singing "Silent Night"; party after the show'
        />
      </div>
    </>
  );
}
