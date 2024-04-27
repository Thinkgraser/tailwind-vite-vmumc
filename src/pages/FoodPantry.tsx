import { useEffect } from "react";
import { CollapsingItem, CollapsingTable, HomeSection } from "../components";
import { Food, FoodPantryLogo } from "../assets";

export default function FoodPantry() {
  useEffect(() => {
    document.title = "A Mission Moment - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>A Mission Moment</h1>
      </div>
      <div className="mx-5 my-10 space-y-6">
        <hr className=" border-black opacity-25" />
        <br />
        <h3 className="text-center text-3xl font-medium">Food Pantry Needs Donations</h3>
        <p>
          The Good Samaritan Food Pantry in Adel serves the school districts of Van Meter and ADM
          (Adel, De Soto, and Minburn). The pantry regularly distributes over 4000 cans each month,
          and the need continues to grow.
        </p>
        <p>
          Cash donations are wonderful because the money can be used for purchases at the Food Bank
          of Iowa at 17¢ a pound. Donations of goods are, of course, also welcome.
        </p>
        <p>The pantry is asking for:</p>
        <HomeSection
          textSectionWidth="7"
          text={
            <CollapsingTable header="Foods most needed">
              <CollapsingItem>Peanut butter</CollapsingItem>
              <CollapsingItem>Jelly</CollapsingItem>
              <CollapsingItem>Bottled juice</CollapsingItem>
              <CollapsingItem>Cereal (hot & cold)</CollapsingItem>
              <CollapsingItem>Hamburger Helper</CollapsingItem>
              <CollapsingItem>Fruits</CollapsingItem>
              <CollapsingItem>Flour</CollapsingItem>
              <CollapsingItem>Sugar</CollapsingItem>
              <CollapsingItem>Crackers</CollapsingItem>
              <CollapsingItem>Canned meats (tuna & chicken)</CollapsingItem>
              <CollapsingItem>Spaghetti sauce</CollapsingItem>
              <CollapsingItem>Pasta</CollapsingItem>
            </CollapsingTable>
          }
          imageSectionWidth="5"
          imageWidth="6/12"
          image={FoodPantryLogo}
          alt="Food Pantry"
        />
        <p>
          (Remember to check your expiration dates on canned goods, as the pantry cannot use expired
          foods.)
        </p>
        <HomeSection
          textSectionWidth="7"
          text={
            <CollapsingTable header="Personal Care Items Needed">
              <CollapsingItem>Toothbrushes</CollapsingItem>
              <CollapsingItem>Bar soap</CollapsingItem>
              <CollapsingItem>Toothpaste</CollapsingItem>
              <CollapsingItem>Toilet paper</CollapsingItem>
              <CollapsingItem>Deodorant</CollapsingItem>
              <CollapsingItem>Laundry detergent</CollapsingItem>
              <CollapsingItem>Shampoo</CollapsingItem>
              <CollapsingItem>Conditioner</CollapsingItem>
              <CollapsingItem>Facial tissue</CollapsingItem>
              <CollapsingItem>Dish detergent</CollapsingItem>
            </CollapsingTable>
          }
          imageSectionWidth="5"
          imageWidth="6/12"
          image={Food}
          alt="Food"
        />
        <p>
          For more information on the Good Samaritan Food Pantry,{" "}
          <a className="link" href="http://www.adelfoodpantry.com">
            visit their website
          </a>
        </p>
        <p>
          Contact Suzy Lowman or Rev. Beth if you would like more information about our church's
          involvement, or if would like to help out.
        </p>
        <h3 className="text-center text-3xl font-medium">
          <a className="link" href="/missionmomentteams">
            Learn about Mission Teams
          </a>
        </h3>
      </div>
    </>
  );
}
