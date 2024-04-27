import { useEffect } from "react";
import { ChristmasCantataImg, HolyWeekImg } from "../assets";

export default function SpecialServices() {
  useEffect(() => {
    document.title = "Special Services - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Special Services</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <p>
        We celebrate Holy Week with special services on the evening of Good Friday and early Easter
        morning. Between the Easter Sunrise service and the traditional Easter service at 10:45, we
        have breakfast together.
      </p>
      <img
        src={HolyWeekImg}
        className="w-full lg:w-9/12 rounded mx-auto"
        alt="Holy Week:  Palm Sunday, Good Friday, Easter Sunrise (followed by breakfast), and our traditional Easter service"
      />
      <p>
        Each Christmas, Van Meter Chancel Choir and friends from area communities treat us to a
        beautiful and moving Christmas Cantata.
      </p>
      <img
        src={ChristmasCantataImg}
        className="w-full lg:w-9/12 rounded mx-auto"
        alt="Images of choir, soloists, director, and pianist at the cantata performance"
      />
    </div>
  );
}
