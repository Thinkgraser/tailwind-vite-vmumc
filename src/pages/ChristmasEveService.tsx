import { useEffect } from "react";
import { ChristmasEveImg } from "../assets";

export default function ChristmasEveService() {
  useEffect(() => {
    document.title = "Christmas Eve Candlelight - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Candlelight Service Christmas Eve</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <p>
        The children help prepare the manger each Christmas Eve as we celebrate His birth with
        scripture, songs, and candle lighting. These special services are at 4 PM and 7 PM.
      </p>
      <img
        src={ChristmasEveImg}
        className="w-full lg:w-9/12 rounded mx-auto"
        alt="Christmas Eve candlelight service"
      />
    </div>
  );
}
