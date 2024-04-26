import { useEffect } from "react";
import { Congregation, Congregation2 } from "../assets";

export default function Services() {
  useEffect(() => {
    document.title = "Van Meter UMC Services - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Worship with us this Sunday!</h1>
      </div>
      <div className="mx-5 my-10 space-y-4 text-center">
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
    </>
  );
}
