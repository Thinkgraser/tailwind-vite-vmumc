import { useEffect } from "react";
import { ChancelChoirImg, ChoirImg, PraiseImg1, PraiseImg2 } from "../assets";

export default function Vbs() {
  useEffect(() => {
    document.title = "Ministries - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="mx-5 my-10 space-y-4 text-center">
        <h1 className="text-4xl font-medium">Chancel Choir and Praise Team</h1>
        <br />
        <hr className=" border-black opacity-25 my-10" />
        <br />
        <h3 className="text-3xl font-medium">Join us this Choir Season!</h3>
        <br />
        <p>
          PHYSICAL QUALIFICATIONS: Applicants must be able to carry light musical notes part way
          across the church.
        </p>
        <p>
          EXPERIENCE: Applicants must have sung, hummed, or whistled in the tub or shower at some
          time.
        </p>
        <p>BEGINNING WAGES: Guaranteed satisfaction and joy in the Lord's service.</p>
        <p>
          ADVANCEMENT OPPORTUNITIES: Members who demonstrate unusual ability and courage might be
          asked to sing a solo at some time.
        </p>
        <p>
          FRINGE BENEFITS: Social security included. We promise you the security of fellowship with
          other fine members of the choir.
        </p>
        <p>HOURS: An hour or so of rehearsal Wednesday evenings and one hour on Sundays.</p>
        <img
          className="w-full lg:w-9/12 rounded mx-auto"
          src={ChoirImg}
          alt="Chancel Choir sings praise during our worship service."
        />
        <h3 className="text-3xl font-medium">Chancel Choir</h3>
        <p>
          Chancel Choir rehearses and performs almost every week, but takes off during the summer.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 text-center">
          <img className="w-full rounded mx-auto" src={PraiseImg1} alt="Praise Team singers" />
          <img className="w-full rounded mx-auto" src={PraiseImg2} alt="Praise Team musicians" />
        </div>
        <h3 className="text-3xl font-medium">Praise Team</h3>
        <p>Praise Team (singers with a Praise Band) rehearses and performs once a month.</p>
        <img
          className="w-full lg:w-9/12 rounded mx-auto"
          src={ChancelChoirImg}
          alt="Choir sings at Easter"
        />
        <p>Choir director Mike also plays organ for us; Mel accompanies on piano.</p>
      </div>
    </>
  );
}
