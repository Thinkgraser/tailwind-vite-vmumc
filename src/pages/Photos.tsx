import { useEffect } from "react";
import { Highlight1, Highlight2, Highlight3 } from "../assets";

export default function Photos() {
  useEffect(() => {
    document.title = "Photos - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 flex flex-col space-y-4 items-center">
      <h1 className="text-4xl font-medium text-center">Days in the Life of the Church</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <img className="w-full lg:w-9/12" src={Highlight1} />
      <img className="w-full lg:w-9/12" src={Highlight2} />
      <img className="w-full lg:w-9/12" src={Highlight3} />
    </div>
  );
}
