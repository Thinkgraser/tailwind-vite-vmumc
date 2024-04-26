import { useEffect } from "react";
import { HomeSection } from "../components";
import { Jam1, Jam2, Jam3, Jam4, JamLogoBlack } from "../assets";

export default function Jam() {
  useEffect(() => {
    document.title = "Calendar - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>J.A.M</h1>
      </div>
      <div className="mx-5 my-10 space-y-6">
        <hr className=" border-black opacity-25" />
        <br />
        <h4 className="text-center font-medium text-2xl">Jesus and Me</h4>
        <HomeSection
          text={
            <div className="space-y-4">
              <strong>
                Wednesday evenings: Kids' J.A.M. (Jesus and Me)
                <br />
                6:00 PM: dinner
                <br />
                6:30-7:30 PM: J.A.M program
              </strong>
              <p>
                Our Wednesday program, J.A.M. (Jesus and Me), is designed for elementary-age
                children to learn the love of Jesus while having fun. It is held (almost) every
                Wednesday through the school year. Dinner is served at 6:00 and the program goes
                from 6:30-7:30.
              </p>
              <p>Children are welcome to drop in.</p>
            </div>
          }
          textSectionWidth="7"
          imageSectionWidth="5"
          image={JamLogoBlack}
          alt="Glow Logo"
          imageWidth="9/12"
        />
        <div className="lg:grid grid-cols-3 space-y-6 lg:space-y-0">
          <img src={Jam1} className="rounded w-11/12 mx-auto" />

          <img src={Jam2} className="rounded w-11/12 mx-auto" />

          <img src={Jam3} className="rounded w-11/12 mx-auto" />
        </div>
        <img src={Jam4} className="rounded w-11/12 lg:w-6/12 mx-auto" />
      </div>
    </>
  );
}
