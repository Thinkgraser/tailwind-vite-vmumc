import { useEffect } from "react";
import { HomeSection } from "../components";
import { Bag1, Bag2, Bag3, FamiliesForwardBidwell, FoodPantryLogo, Toothpaste } from "../assets";

export default function MissionMoment() {
  useEffect(() => {
    document.title = "A Mission Moment - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">A Mission Moment</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <h3 className="text-center text-3xl font-medium">
        Bidwell Pantry (Families Forward); Food Pantry in Adel
      </h3>
      <br />
      <HomeSection
        text={
          <div className="space-y-4">
            <p>
              <strong>Bidwell Pantry (Families Forward)</strong>
              <br />
              This month's mission is in support of Families Forward, a merger of Bidwell Riverside
              Center and Hawthorn Hill. The original four programs -- Bidwell Pantry, Child
              Develop-ment Center, New Directions Shelter, and The Home Connection -- remain,
              work-ing together to provide compassionate, life-changing assistance to families and
              their path to self-sufficiency.
            </p>
            <p>
              The Missons team will be joining with the youth group in their March 10 trip to
              Bidwell Pantry where they will help organize donations. The Bidwell Pantry helps
              families put food on their tables and clothes on their backs, reducing the strain the
              families are experiencing, enabling them to focus on other ways they can help
              themselves.
            </p>
          </div>
        }
        image={FamiliesForwardBidwell}
        alt="families forward -- services + shelter -- Bidwell Pantry"
        imageSectionWidth="6"
        textSectionWidth="6"
        imageWidth="3/12"
      />
      <div className="lg:grid grid-cols-2 space-y-4 lg:space-y-0">
        <p className="self-center">
          <strong>Bags for Bidwell</strong>
          <br />
          The Bidwell Pantry needs used grocery bags to help pantry guests carry their groceries.
          The bags can be paper, cloth, or the usual plastic. Since the pantry serves an average of
          5,000 individuals a month and each shopper uses 2-3 bags, they need a lot of bags. There's
          a tub in the church entryway where you can put your donated bags. We plan to continue
          collecting these throughout the year, so please keep bringing them in.
        </p>
        <div className="lg:grid grid-cols-3 self-center space-y-4 lg:space-y-0">
          <img className="rounded w-6/12 self-center mx-auto" src={Bag1} />
          <img className="rounded w-6/12 self-center mx-auto" src={Bag2} />
          <img className="rounded w-6/12 self-center mx-auto" src={Bag3} />
        </div>
      </div>
      <div className="lg:grid grid-cols-2 space-y-4 lg:space-y-0">
        <p className="self-center">
          <strong>Adel (Good Samaritan) Food Pantry</strong>
          <br />
          This month's personal item is <strong>toothpaste</strong>. <br />
          Please place your donation in the marked tub in the church entryway.
          <br />
          Learn more about the{" "}
          <a className="link" href="/Publications/MissionsFoodPantry.pdf">
            food pantry here
          </a>{" "}
          and{" "}
          <a className="link" href="/missionmomentfoodpantry">
            here
          </a>
          .
        </p>
        <div className="lg:grid grid-cols-2 self-center space-y-4 lg:space-y-0">
          <img
            className="rounded w-6/12 self-center mx-auto lg:mx-5 lg:justify-self-end"
            src={FoodPantryLogo}
          />
          <img
            className="rounded w-6/12 self-center mx-auto lg:mx-5 lg:justify-self-start"
            src={Toothpaste}
          />
        </div>
      </div>
      <h3 className="text-center text-3xl font-medium">
        <a className="link" href="/missionmomentteams">
          Learn about Mission Teams
        </a>
      </h3>
    </div>
  );
}
