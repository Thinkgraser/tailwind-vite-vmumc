import { useEffect } from "react";
import { KidsShoppingDayImg } from "../assets";

export default function KidsShoppingDay() {
  useEffect(() => {
    document.title = "Kids Shopping Day - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Kids Shopping Day</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <p>
        On a Saturday morning early in December, we host Kids Shopping Day at Van Meter UMC. Kids
        can shop for Christmas presents for their family members at garage sale prices. Parents stay
        hidden so they don't ruin the surprise, and there are helpers to help the kids shop and wrap
        presents. It is a lot of fun for everyone, and the proceeds go towards providing food
        support for local families in need.
      </p>
      <p>We have the joy of working with the Van Meter Baptist Church on this project.</p>
      <img
        src={KidsShoppingDayImg}
        className="w-full lg:w-9/12 rounded mx-auto"
        alt="Kids' Shopping Day.  Elves help kids shop.  Gifts are wrapped so they stay a surprise. Parents wait outside.  Van Meter Methodists and Baptists partner on this project."
      />
    </div>
  );
}
