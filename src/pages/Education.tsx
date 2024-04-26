import { useEffect } from "react";
import { JamLogoBlack } from "../assets";
import { HomeSection } from "../components";

export default function Education() {
  useEffect(() => {
    document.title = "Van Meter UMC Sunday School - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        Bringing Us Closer to God
      </h1>
      <div className="mx-5 my-10 space-y-12">
        <h3 className="text-center text-3xl font-medium">Christian Education</h3>
        <HomeSection
          text={
            <div className="space-y-4">
              <p>
                Our <strong>Adult Discussion Group</strong> meets at <strong>9:30 AM</strong> each
                Sunday in the overflow area at the back of the sanctuary. We usually take a break
                for the summer.
              </p>
              <p>
                Our <strong>Wednesday program, J.A.M.</strong> (Jesus and Me), is designed for
                elementary-age children to learn the love of Jesus while having fun. It is held
                (almost) every Wednesday through the school year, a dinner followed by an hour of
                fun learning.{" "}
                <a className="link" href="/jam">
                  Learn more here.
                </a>
              </p>
            </div>
          }
          image={JamLogoBlack}
          alt="Jam Logo Black"
          textSectionWidth="7"
          imageSectionWidth="5"
          imageWidth="8/12"
        />
        <div className="text-center">
          <i>
            <b>~Miss Courtney, Director of Children's Ministries</b>
          </i>
        </div>
      </div>
    </>
  );
}
