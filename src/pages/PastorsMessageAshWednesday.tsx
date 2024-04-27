import { useEffect } from "react";
import { HomeSection } from "../components";
import { Beth } from "../assets";

export default function AshWednesday() {
  useEffect(() => {
    document.title = "Pastor's Message - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Learning About the Practices of Our Faith</h1>
      </div>
      <div className="mx-5 my-10 space-y-6">
        <h4 className="text-center font-medium text-2xl">Ash Wednesday</h4>
        <br />
        <hr className=" border-black opacity-25" />
        <div className="lg:grid grid-cols-2">
          <div className="text-center self-center">
            <HomeSection
              text={
                <h2 className=" font-medium text-2xl lg:text-4xl">
                  What is ASH Wednesday and why do we receive an ash cross on our foreheads?
                </h2>
              }
              textSectionWidth="8"
              imageSectionWidth="4"
              image={Beth}
              alt="Glow Logo"
              imageSmallWidth="6/12"
              imageLargeWidth="10/12"
              imageSide="left"
              textUnderImage={<p>Rev. Beth</p>}
            />
          </div>
          <div className="space-y-4">
            <p>
              Ash Wednesday signals the beginning of the Lenten season, a 40-day period (plus
              Sundays) during which Christians worldwide prepare our hearts for Jesus' death on the
              cross and for his resurrection three days later on Easter.
            </p>
            <p>
              Many Christians observe this day with the ancient tradition of marking themselves with
              a cross of ashes on their foreheads. It is an intentional and sacred act of reflecting
              on grief and mortality in this world.
            </p>
            <p>
              <em>For you are dust, and to dust you shall return </em>- Genesis 3:19
            </p>
            <p>
              The cross both marks us and reminds us that the ashes are only the beginning. It
              claims us as not being of this material world and finite time, but of the Kingdom of
              God and eternity. We mourn what there is to lose, and celebrate the hope of all that
              is to come as we embrace the new reality in Christ.
            </p>
            <p>
              In a way, it is much like marking a trailhead before beginning a journey down a long
              path. We pause and acknowledge the known world and its troubles, which are very much
              there but are also about to be behind us. We take a moment to breathe, remove our
              shoes as we walk on sacred ground, say a prayer, and take those first steps into the
              wilderness, the wilderness that sits just before the awakening of mystery and Grace.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
