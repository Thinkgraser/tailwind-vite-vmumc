import { useEffect } from "react";
import { Church, Map } from "../assets";
import { HomeSection } from "../components";

export default function Directions() {
  useEffect(() => {
    document.title = "Directions - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Join Us</h1>
      <br />
      <HomeSection
        text={
          <strong>
            Our church is at the west edge of Van Meter, Iowa, just off Interstate 80, which is
            south of the Raccoon River in Dallas County. This small, vibrant community has an
            independent school district and is home to several businesses, the Iowa Veterans
            Cemetery and the Bob Feller Museum.
          </strong>
        }
        image={Church}
        alt="church"
        imageSide="left"
        imageSectionWidth="5"
        textSectionWidth="6"
        imageWidth="8/12"
      />
      <div className="text-center">
        <strong>
          100 Hazel St. Van Meter, IA 50261
          <br />
          Parking: Lot west of the church and along north entrance
        </strong>
      </div>
      <div className="w-9/12 mx-auto">
        <a href="http://maps.google.com/maps?q=100+Hazel+St.+Van+Meter,+IA+50261&amp;hl=en&amp;sll=41.525423,-93.883366&amp;sspn=0.013735,0.033023&amp;gl=us&amp;hnear=100+Hazel+St,+Van+Meter,+Dallas,+Iowa+50261&amp;t=m&amp;z=17">
          <img src={Map} className="rounded w-full"></img>
        </a>
      </div>
    </div>
  );
}
