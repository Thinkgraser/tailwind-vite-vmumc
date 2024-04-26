import { useEffect } from "react";
import { YouthLogo, YouthWeb } from "../assets";

export default function YouthGroup() {
  useEffect(() => {
    document.title = "Calendar - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        S.W.A.G: Van Meter UMC Youth Group
      </h1>

      <div className="mx-5 my-10 space-y-4 text-center">
        <hr className=" border-black opacity-25" />
        <br />
        <img className="mx-auto w-6/12 lg:w-2/12 rounded" src={YouthLogo} />
        <h4 className="font-medium text-2xl">Youth Group</h4>
        <p>
          Area youth are invited to participate in both mission projects and fellowship fun.
          <br />
          <strong>You need not be a church member to join us</strong>, <br />
          and we welcome youth who wish to participate in a specific event even if they do not
          regularly attend our meetings.
          <br />
          We do need to know in advance if you want to join us for a project or outing.
        </p>
        <p>
          <strong>Summer Bible Series: "Believe It or Not"</strong>
          <br />
          <strong>
            for middle-school students, grades 6-9
            <br />
            Wednesdays, June5-July 31
            <br />
            1:00-2:30 PM{" "}
          </strong>
          <br />
          We'll have Bible study, prayer, games, hands-on science, and loads of fun.{" "}
        </p>
        <p>
          <strong>Regular meetings </strong>will begin in the fall.
          <br />
          We plan to meet <strong>Sundays</strong> from <strong>6:30-7:30 PM</strong> (alternating
          middle- and high-school youth groups)
          <br />
          in the church sanctuary throughout the school year.{" "}
        </p>
        <p>
          We will have at least one mission activity and one social activity each month. <br />
          Please come and join us, and bring a friend!{" "}
        </p>
        <p>
          <strong>
            Service Project: Furry Friends Rescue
            <br />
            Sunday, April 21, 2024
            <br />
            (time not yet set)
          </strong>
          <br />
          We will be helping care for and cuddle the cats and other critters at Furry Friends
          Rescue, <br />
          as well as doing general cleaning around the building.
          <br />
          Meet at the church; transportation will be provided.
          <br />
        </p>
        <p>
          <strong>
            "Spare Time"
            <br />
            Tuesday, March 26
          </strong>
          <br />
          <strong>4:30-7:30 PM </strong>
          <br />
          Join us for a night of fun and fellowship, bowling, and pizza.
          <br />
          <strong></strong>Meet at the church; transportation to the bowling alley will be provided.
          <br />
        </p>
        <p>
          <strong>
            Photo Scavenger Hunt
            <br />
            Sunday, April 14
          </strong>
          <br />
          <strong>(time not yet set)</strong>
          <br />
          Teams will compete against each other to take pictures around Van Meter. <br />
          When we're done, we will celebrate the day with ice cream sundaes.
        </p>
        <p>
          If you are interested in any of these outings,
          <strong> text Courtney at 515-619-3968.</strong>
        </p>
        <h4 className="font-medium text-2xl">
          <strong>What We Do at the Van Meter UMC Youth Group </strong>
        </h4>
        <p>
          This is a time of thoughtful discussion, fellowship, service, and fun for youth in grades
          6-12.
          <br />
          Our past activities included missions work, outdoor adventures, twice-monthly meetings,
          lock-ins, <br />
          Christian concerts, fund-raising, and church potlucks. In years past, our missions work
          included collecting <br />
          items for women's shelters, gathering donations for an animal shelter, and serving supper
          for the homeless.
        </p>
        <img
          src={YouthWeb}
          className="rounded lg:w-9/12 w-full mx-auto"
          alt="Youth Group:  service, fellowship, fun"
        />
      </div>
    </>
  );
}
