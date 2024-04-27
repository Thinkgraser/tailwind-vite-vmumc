import { useEffect } from "react";

export default function ChristmasGiving() {
  useEffect(() => {
    document.title = "Alternative Christmas Giving - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="mx-5 my-10 space-y-7">
        <h1 className="text-4xl font-medium text-center">Helping Others</h1>
        <br />
        <hr className=" border-black opacity-25" />
        <br />
        <p>
          With our economy in a difficult time, Christmas shopping may not be as happy a time as
          usual. The best gifts are those that make you feel warm inside, either giving or
          receiving.
        </p>
        <p className="mx-10">
          ALTERNATIVE CHRISTMAS says that having more "stuff" is not as important as making the
          world a better place. Are you looking for that special gift -- a gift that gives twice?
        </p>
        <p className="mx-10">
          An ALTERNATIVE CHRISTMAS mission project is an easy, convenient and thoughtful way to
          "buy" a gift for anyone.
        </p>
        <p>Alternative Giving is appropriate for:</p>
        <div>
          <ul className="space-y-1 ms-10 list-disc">
            <li>Teachers and Co-Workers</li>
            <li>Grandparents or other family members</li>
            <li>The person who "has everything"</li>
            <li>The "hard to buy for" person</li>
            <li>Everyone else on your gift list</li>
          </ul>
        </div>
        <h4 className="text-center font-medium text-2xl">
          Alternative Christmas Giving Suggestions
        </h4>
        <div className="text-center">
          <strong>
            <a className="link" href="http://www.bidwellriverside.org/">
              Families Forward (formerly Bidwell-Riverside)
            </a>
          </strong>
        </div>
        <div className="text-center">
          <strong>
            <a className="link" href="http://www.selfhelpinternational.org/">
              Self Help International
            </a>
          </strong>
        </div>
        <div className="text-center">
          <strong>
            <a className="link" href="http://www.heifer.org/#">
              Heifer International
            </a>
          </strong>
        </div>
        <div className="text-center">
          <strong>
            <a className="link" href="http://www.nothingbutnets.net">
              United to Beat Malaria (formerly Nothing But Nets)
            </a>
          </strong>
        </div>
      </div>
    </>
  );
}
