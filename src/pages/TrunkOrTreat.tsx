import { useEffect } from "react";
import { HomeSection } from "../components";
import { TT1, TT10, TT11, TT2, TT3, TT4, TT5, TT6, TT7, TT8, TT9, TTGroup } from "../assets";

export default function ChristmasGiving() {
  useEffect(() => {
    document.title = "Trunk or Treat Celebration - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="mx-5 my-10 space-y-7">
        <h1 className="text-4xl font-medium text-center">Trunk or Treat Fall Celebration</h1>
        <br />
        <hr className=" border-black opacity-25" />
        <br />
        <HomeSection
          text={
            <div className="space-y-4">
              <div>
                <strong>
                  Trunk or Treat is held near the end of October in the Van Meter UMC Parking Lot
                  from 6-8 PM.
                </strong>
              </div>
              <div>
                <ul className="space-y-1 ms-4 list-disc">
                  <li>Adults decorate the trunks &amp; hand out treats</li>
                  <li>Kids go from trunk to trunk</li>
                  <li>Everyone enjoys our traditional fresh donuts, cider, and popcorn.</li>
                  <li>Play in the bounce houses</li>
                  <li>Win silly prizes</li>
                  <li>It's an extra chance to wear your Halloween costume</li>
                  <li>No admission fee (Donations accepted)</li>
                  <li>Lots of fun!</li>
                </ul>
              </div>
              <div>
                <strong>Volunteer information will be made available in October.</strong>
              </div>
            </div>
          }
          image={TTGroup}
          alt="harvest trunk with scarecrows"
          imageSectionWidth="6"
          textSectionWidth="6"
          imageWidth="11/12"
        />
        <h5 className="text-center text-xl font-medium">
          Here are some scenes from Trunk or Treat
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4">
          <img className="rounded w-11/12 mx-auto" src={TT1} />
          <img className="rounded w-11/12 mx-auto" src={TT2} />
          <img className="rounded w-11/12 mx-auto" src={TT3} />
          <img className="rounded w-11/12 mx-auto" src={TT4} />
          <img className="rounded w-11/12 mx-auto" src={TT5} />
          <img className="rounded w-11/12 mx-auto" src={TT6} />
          <img className="rounded w-11/12 mx-auto" src={TT7} />
          <img className="rounded w-11/12 mx-auto" src={TT8} />
          <img className="rounded w-11/12 mx-auto" src={TT9} />

          <img className="rounded lg:col-span-2 self-center mx-auto w-11/12" src={TT10} />

          <img className="rounded w-11/12 mx-auto" src={TT11} />
        </div>
      </div>
    </>
  );
}
