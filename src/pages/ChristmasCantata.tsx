import { useEffect } from "react";
import { ChristmasCantataImg } from "../assets";

export default function ChristmasCantata() {
  useEffect(() => {
    document.title = "Christmas Cantata - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Christmas Cantata</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <p>
        The Van Meter UMC Chancel Choir and friends from surrounding communities sing a beautiful
        and moving cantata for us each Christmas season.
      </p>
      <img
        src={ChristmasCantataImg}
        className="w-full lg:w-9/12 rounded mx-auto"
        alt="Images of choir, soloists, and readers"
      />
    </div>
  );
}
