import { useEffect } from "react";
import { HomeSection } from "../components";
import { KidsCareFun, KidsCareImage } from "../assets";

export default function KidsCare() {
  useEffect(() => {
    document.title = "Kids Care - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">
        Welcome to Van Meter United Methodist Kids Care
      </h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <div className="grid grid-cols-3 text-center">
        <div>
          <strong>Director: Jess Jaspers</strong>
        </div>
        <div>
          <strong>Kids Care Phone: 491-1198</strong>
        </div>
        <div>
          <strong>
            Email:{" "}
            <a className="link" href="mailto:kidscare@vmumc.com">
              kidscare@vmumc.com
            </a>
          </strong>
        </div>
      </div>
      <br />
      <p>
        <a className="link" href="/Publications/KidsCarePrintable.pdf">
          <strong>Kids Care schedule and fees</strong>
        </a>
      </p>
      <div>
        <strong>Registration forms:</strong>
      </div>
      <HomeSection
        text={
          <div className="space-y-4">
            <p>
              <strong>Summer 2024</strong> enrollment for our summer program is now open. Only
              Monday-Wednesday-Friday slots are currently available.{" "}
              <a className="link" href="/Publications/KidsCare2024SummerRegistration_(MWF).pdf">
                Here is the registration form.
              </a>{" "}
              Places will be filled on a first-come, first-served basis.
            </p>
            <p>
              <strong>Fall 2024</strong> enrollment is now open.{" "}
              <a className="link" href="/Publications/KidsCare2024Preschool(Fall)Registration.pdf">
                Here is the registration form for preschool-age children.
              </a>{" "}
              Places are filled on a first-come, first-served basis.
              <a className="link" href="/Publications/KidsCare2024FallRegistrationForm.pdf">
                <br />
                Here is the registration form for Fall 2024 before- and after-school care.
              </a>
            </p>
            <p>
              <strong>Spring 2024</strong> before- and after-school care is available.{" "}
              <a className="link" href="/Publications/KidsCare2023FallRegistrationForm.pdf">
                Here is the registration form.
              </a>
            </p>
            <p>
              <strong>
                <a className="link" href="/Publications/KidsCare2024ParentHandbook.pdf">
                  Kids Care <em>Parent Handbook</em>
                </a>
              </strong>
            </p>
          </div>
        }
        image={KidsCareImage}
        alt="Kids Care"
        textSectionWidth="6"
        imageSectionWidth="4"
        imageWidth="9/12"
      />
      <hr className=" border-black opacity-25" />
      <div>
        <strong>Statement of Purpose</strong>
      </div>
      <div>
        <ul className="space-y-1 ms-4 list-disc">
          <li>
            Kids Care is a not-for-profit DHS licensed childcare center for elementary-age students.
          </li>
          <li>
            It is an outreach ministry of the Van Meter United Methodist Church to Van Meter and
            surrounding communities.
          </li>
          <li>
            It is our purpose to provide quality before and after school child care to elementary
            children. We will help develop character-building traits such as respect,
            responsibility, and charity to others through organized activities, including Bible
            stories, devotions, and prayer.
          </li>
          <li>
            Our activities will foster an awareness of Christ, such as actions and attitudes in our
            response to others and self. We will strive to create an atmosphere where the
            connections between faith and life can be made.
          </li>
          <li>
            We operate a facility to meet the needs of children in compliance with the law of the
            State of Iowa.
          </li>
        </ul>
      </div>
      <div>
        <strong>Kids Care Schedule</strong>
      </div>
      <div>
        <ul className="ms-4 list-disc">
          <li>
            <strong>School year hours</strong> are
          </li>
        </ul>
      </div>
      <div className="space-y-4 ms-8">
        <p>
          <strong>K-5 children</strong>
          <br />
          Monday-Thursday: 6:30 a.m. - 8:00a.m. and 3:15 p.m. until 5:45 p.m.
          <br />
          Friday: 6:30 a.m. - 8:00a.m. and 1:15 p.m. until 5:45 p.m. (early release)
        </p>
        <p>
          <strong>children ages 4-5 </strong>attending <strong>AM</strong> preschool session at Van
          Meter Elementary
          <br />
          Monday-Thursday: 6:30 a.m. - 7:15 a.m. and 11:15 a.m. until 5:45 p.m.
          <br />
          Friday: 6:30 a.m. - 5:45 p.m.
        </p>
        <p>
          <strong>children ages 4-5 </strong>attending <strong>PM</strong> preschool session at Van
          Meter Elementary
          <br />
          Monday-Thursday: 6:30 a.m. - 12:15 p.m. and 3:15 p.m. until 5:45 p.m.
          <br />
          Friday: 6:30 a.m. - 5:45 p.m.
        </p>
      </div>
      <div>
        <ul className="space-y-1 ms-12 list-disc">
          <li>
            We are closed on all major holidays: part of Christmas break, Memorial Day, July 3-4,
            Labor Day, Thanksgiving &amp; the day after, New Year's Eve, and New Year's Day.
          </li>
          <li>
            Un-scheduled early dismissal / late start days from school: Child care will be provided
            for an additional fee.
          </li>
          <li>In-service days, spring break: Child care will be available.</li>
          <li>If the school is closed due to weather, Kids Care will also be closed.</li>
          <li>
            <strong>Summer Hours:</strong> 7:00 a.m. - 5:45 p.m.
          </li>
          <li>
            Summer Program is tentatively scheduled to begin May 20. This will change if the Van
            Meter School District's schedule changes.
          </li>
          <li>We are closed Memorial Day.</li>
        </ul>
      </div>
      <div>
        <strong>K-5 Transportation to/from School</strong>
      </div>
      <p>
        The school provides bus transportation. Pick Up is at approximately 7:50 a.m. and drop off
        at approximately 3:15 p.m.
      </p>
      <div>
        <strong>
          <a className="link" href="/Publications/KidsCarePrintable.pdf">
            {" "}
            School Year (2023-2024) Fee Schedule{" "}
          </a>
        </strong>
      </div>
      <div>
        <img
          src={KidsCareFun}
          className="mx-auto lg:w-9/12 w-full"
          alt="Kids Care Fun a collage of pictures from activities and field trips"></img>
      </div>
    </div>
  );
}
