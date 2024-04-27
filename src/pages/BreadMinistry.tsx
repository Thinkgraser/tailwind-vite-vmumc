import { useEffect } from "react";
import { BreadMinistryImage } from "../assets";

export default function BreadMinistry() {
  useEffect(() => {
    document.title = "Bread Ministry - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl font-medium pt-3 mt-10 mx-3">Bread Ministry</h1>

      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <p>
          For over 20 years our congregation, in cooperation with Panera Bread Company, has been
          participating in a Bread Ministry. Twice a week a member of our congregation picks up
          baked goods that have been packaged up at the end of their business day. These items are
          sorted and distributed to Kids Care, individuals in our community, and the Good Samaritan
          Food Pantry in Adel.
        </p>
        <p>
          We invite you to join us in sustaining this ministry. Please consider assisting with
          transporting packages from Panera to the church. Pickups are Sunday and Monday evenings,
          with delivery to the church the following mornings.{" "}
          <a className="link" href="https://www.signupgenius.com/go/4090d4ba4a82ea3fd0-panara">
            <strong>Click here to sign up</strong>
          </a>
          .
        </p>
        <img
          src={BreadMinistryImage}
          className="mx-auto rounded w-full lg:w-9/12"
          alt="Generous donations from the Panera Bread Company are distributed to the Adel Food Pantry, Kids Care, seniors, and other individuals."
        />
      </div>
    </>
  );
}
