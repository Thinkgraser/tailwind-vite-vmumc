import { useEffect } from "react";
import { HomeSection } from "../components";
import { Beth } from "../assets";

export default function Lent() {
  useEffect(() => {
    document.title = "Calendar - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Learning About the Practices of Our Faith</h1>
      </div>
      <div className="mx-5 my-10 space-y-6">
        <h4 className="text-center font-medium text-2xl">Lent</h4>
        <br />
        <hr className=" border-black opacity-25" />
        <div className="lg:grid grid-cols-2">
          <div className="text-center self-center">
            <HomeSection
              text={
                <h2 className=" font-medium text-2xl lg:text-4xl">
                  Why do some people give up something for Lent?
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
              Just as Christ sacrificed Himself for us, giving up something we enjoy helps us be
              mindful of Jesus' suffering. Lent is an intentional time of deepening or growing our
              faith, so rather than "giving up" you might want to commit to "adding to" or beginning
              a new spiritual practice.
            </p>
            <p>
              Examples could include doing an intentional act of kindness for a stranger daily,
              reading your Bible, committing to a specified amount of time spent in daily prayer or
              meditation, or beginning a devotional time. Whether you choose to give up or add to,
              you can be humble and hopeful that your Lenten practice will deepen your faith.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
