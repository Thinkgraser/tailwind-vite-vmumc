import { useEffect } from "react";
import { HomeSection } from "../components";
import { GlowLogo } from "../assets";

export default function Glow() {
  useEffect(() => {
    document.title = "GLOW - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">G.L.O.W</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <h4 className="text-center font-medium text-2xl">God Lights Our Way</h4>
      <HomeSection
        text={
          <p>
            Our Sunday program, G.L.O.W. (God Lights Our Way), is for children pre-K through 6th
            grade. It runs through the school year.{" "}
            <strong>The program is held during the service.</strong>
          </p>
        }
        textSectionWidth="7"
        imageSectionWidth="5"
        image={GlowLogo}
        alt="Glow Logo"
        imageWidth="8/12"
      />
    </div>
  );
}
