import { useEffect } from "react";
import { HomeSection } from "../components";
import {
  ScholarshipImage,
  TT1,
  TT10,
  TT11,
  TT2,
  TT3,
  TT4,
  TT5,
  TT6,
  TT7,
  TT8,
  TT9,
  TTGroup,
} from "../assets";

export default function Scholarships() {
  useEffect(() => {
    document.title = "Kids Care - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="mx-5 my-10 space-y-7">
        <h1 className="text-4xl font-medium text-center">UMC Scholarships</h1>
        <br />
        <hr className=" border-black opacity-25" />
        <br />
        <h3 className="text-3xl font-medium text-center">Scholarships</h3>
        <br />
        <HomeSection
          text={
            <div className="space-y-4">
              <p>
                Graduating high school seniors and current college and trade-school students who are
                active in the Van Meter UM church are encouraged to apply for college or vocational
                scholarships. We consider an active participant as one who regularly attends Sunday
                School and church services, or who participates in church group activities.
              </p>
              <p>
                Scholarships are available from our church, from the Iowa United Methodist
                Foundation, and at the national level from GBHEM, the General Board of Higher
                Education and Ministry.
              </p>
              <p>
                See Stacy Peterson or contact the church office for an application for our church
                scholarship. Stacy can answer your scholarship questions.
              </p>
              <p>
                For Iowa United Methodist Foundation scholarships, please{" "}
                <a className="link" href="https://iumf.org/scholarships/">
                  visit the Iowa United Methodist Foundation website
                </a>
                . There you will find more information as well as application forms.{" "}
                <strong>IUMF applications must be postmarked no later than March 1</strong>.
              </p>
              <p>
                For GBHEM scholarships, please{" "}
                <a className="link" href="https://www.gbhem.org/scholarships/">
                  visit the GBHAM website
                </a>
                .
              </p>
            </div>
          }
          image={ScholarshipImage}
          alt="scholarships"
          imageSectionWidth="6"
          textSectionWidth="6"
          imageWidth="9/12"
        />
      </div>
    </>
  );
}
