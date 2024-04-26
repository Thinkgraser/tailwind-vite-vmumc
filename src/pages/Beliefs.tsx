import { useEffect } from "react";
import { Button } from "../components";
import { Faith } from "../assets";

export default function Beliefs() {
  useEffect(() => {
    document.title = "Van Meter UMC Beliefs - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl font-medium pt-3 mt-10 mx-3">The Journey with God</h1>
      <div className="mx-5 my-10 space-y-12 text-center">
        <p>
          Nurturing children,
          <br />
          supporting families,
          <br />
          creating community
          <br />
          as we share our faith.
        </p>
        <Button
          variant={"outline-gray"}
          size={"full"}
          href="https://www.umc.org/en/who-we-are/what-we-believe">
          For a deeper discussion of our faith
        </Button>
        <img src={Faith} className="rounded mx-auto w-6/12"></img>
      </div>
    </>
  );
}
