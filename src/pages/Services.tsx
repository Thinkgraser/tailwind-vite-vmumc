import { useEffect } from "react";
import { Congregation, Congregation2 } from "../assets";

export default function Services() {
  useEffect(() => {
    document.title = "Van Meter UMC Services - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4 text-center">
      <h1 className="text-4xl font-medium text-center">Worship with us this Sunday!</h1>
      <br />
      <div>
        <img src={Congregation} className="w-6/12 mx-auto rounded"></img>
      </div>
      <div>
        <strong>Worship Service 10:45 AM</strong>
      </div>
      <div>
        <strong>
          Upcoming special services: Good Friday at 7:00 PM; Easter Sunrise at 6:30 AM
        </strong>
      </div>
      <div>
        <img src={Congregation2} className="w-6/12 mx-auto rounded"></img>
      </div>
    </div>
  );
}
