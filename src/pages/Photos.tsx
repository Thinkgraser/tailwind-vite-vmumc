import { useEffect } from "react";
import { Highlight1, Highlight2, Highlight3 } from "../assets";

export default function Photos() {
  useEffect(() => {
    document.title = "Photos - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Days in the Life of the Church</h1>
      </div>
      <div className="mx-5 my-10 flex flex-col space-y-4 items-center">
        <hr className=" border-black opacity-25" />
        <br />
        <img className="w-full lg:w-9/12" src={Highlight1} />
        <img className="w-full lg:w-9/12" src={Highlight2} />
        <img className="w-full lg:w-9/12" src={Highlight3} />
      </div>
    </>
  );
}
