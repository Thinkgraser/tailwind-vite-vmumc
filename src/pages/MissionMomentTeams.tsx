import { useEffect } from "react";
import { HomeSection } from "../components";
import { MissionsTeams } from "../assets";

export default function MissionMomentTeams() {
  useEffect(() => {
    document.title = "Ministries - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>A Mission Moment</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <h3 className="text-center text-3xl font-medium">Mission Team</h3>
        <br />
        <p className="text-center">
          Mission projects provide ways of ministering God's love to people in and beyond our
          church.
          <br />
          Van Meter United Methodist currently supports several mission projects.
        </p>
        <HomeSection
          text={
            <div className="space-y-4">
              <strong>Through mission work, team members:</strong>
              <ul className="ms-4 list-disc">
                <li>Learn about the work and witness of local faith communities</li>
                <li>Serve with members of the local community to meet local needs</li>
                <li>Worship with local congregations</li>
                <li>Reflect on the mission team experience in light of the gospel</li>
                <li>Experience another context in which the Christian faith is practiced</li>
                <li>
                  Build relationships with area Christians, other people of faith, and with each
                  other
                </li>
              </ul>
            </div>
          }
          image={MissionsTeams}
          alt="Missions Team"
          imageSectionWidth="5"
          textSectionWidth="7"
          imageWidth="9/12"
        />
        <p>
          Anyone who is interested in helping with mission projects, please contact Mindy Doggett or
          leave your contact info at the church office (515-996-2572).
        </p>
      </div>
    </>
  );
}
