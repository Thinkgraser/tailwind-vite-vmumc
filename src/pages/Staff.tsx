import { useEffect } from "react";
import { Beth, Cleaning, JamLogo, Jess, Mel, Mike, Shirlee } from "../assets";
import { StaffCard } from "../components";

export default function Staff() {
  useEffect(() => {
    document.title = "Van Meter UMC Church Staff - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10">
        <h1>Church Staff</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <StaffCard
          name="Rev. Beth Harbaugh"
          image={Beth}
          summary={
            <div>
              Rev. Beth leads the congregation in weekly worship and provides pastoral care and
              administration.
              <br />
              <br />
              Contact her at 319-540-1644 or{" "}
              <a
                className="text-red-500 hover:text-orange-500 visited:text-pink-500"
                href="mailto:bethmaryharbaugh@gmail.com">
                bethmaryharbaugh@gmail.com
              </a>
            </div>
          }></StaffCard>
        <StaffCard
          name="Miss Courtney"
          image={JamLogo}
          summary="Courtney is our Children's Ministries Director."></StaffCard>

        <StaffCard
          name="Jess Jaspers"
          image={Jess}
          summary="Jess is the Kids Care Director."></StaffCard>
        <StaffCard
          name="Shirlee Cagle"
          image={Shirlee}
          summary="Shirlee is our Administrative Assistant."></StaffCard>
        <StaffCard
          name="Mike Cooper"
          image={Mike}
          summary="Mike is our Organist and Choir Director."></StaffCard>
        <StaffCard name="Melody Laake" image={Mel} summary="Melody is our Pianist."></StaffCard>
        <StaffCard
          name="Hoppes family"
          image={Cleaning}
          summary="The Hoppes family handles the janitorial duties for our church."></StaffCard>
      </div>
    </>
  );
}
