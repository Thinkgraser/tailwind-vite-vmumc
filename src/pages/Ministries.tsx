import { useEffect } from "react";
import { Button, Card } from "../components";

export default function Publications() {
  useEffect(() => {
    document.title = "Ministries - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Making a Difference in the Community Through Faith</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <Button variant="outline-gray" size="full" href="/missionmoment">
          View The Latest Mission Moment
        </Button>
        <h2 className="text-center text-3xl font-medium pt-4">Church Outreach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <Card title="Camp Sunday/Campership" buttonLink="https://www.iaumc.org/camps" />
          <Card title="Vacation Bible School" buttonLink="/vbs" />
          <Card title="Christmas food gift card distribution" />
          <Card
            title="Assistance Fund"
            buttonLink="/Publications/Adel_Ministerial_Assn_Emergency_Fund.pdf"
          />
          <Card title="Kids Care" buttonLink="/kidscare" />
          <Card title="Kids Shopping Day" buttonLink="/ministrykidsshoppingday" />
          <Card
            title="Scholarship (Memorial) grants to college and trade school students"
            buttonLink="/scholarships"
          />
          <Card title="Easter Egg Hunt" buttonLink="/ministryeasteregghunt" />
          <Card title="Trunk or Treat" buttonLink="/trunkortreat" />
        </div>
        <h2 className="text-center text-3xl font-medium pt-4">Missions of the Church</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <Card title="Alternative Christmas Giving" buttonLink="/alternativechristmasgiving" />
          <Card title="In Mission Together" buttonLink="https://www.iaumc.org/inmissiontogether" />
          <Card title="Mission of the Month" buttonLink="/missionmoment" />
          <Card
            title="Women at the Well United Methodist Church at Mitchellville"
            buttonLink="https://www.iaumc.org/churchdetail/461997"
          />
          <Card
            title="Continuing support of Luke DeBoer (missionary in Puerto Rico)"
            buttonLink="/Publications/LukeDeBoerUpdate.pdf"
          />
          <Card
            title="UMCOR: United Methodist Committee on Relief"
            buttonLink="https://umcmission.org/umcor/"
          />
          <Card title="Support for Pastor Jude at PCMP in Haiti" />
          <Card
            title="Support of Good Samaritan Food Pantry in Adel"
            buttonLink="/Publications/MissionsFoodPantry.pdf"
          />
          <Card
            title="Participation in Ingathering"
            buttonLink="https://www.iaumc.org/historyofthethanksgivingingathering"
          />
        </div>
        <h2 className="text-center text-3xl font-medium pt-4">Church Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <Card title="Adult Discussion Group" />
          <Card title="Chancel Choir & Praise Team" buttonLink="/choir" />
          <Card title="S.W.A.G. Youth Group" buttonLink="/ciayouth" />
          <Card title="Confirmation Classes" buttonLink="/ministryconfirmation" />
          <Card
            title="Exercise Your Faith Small Group Study"
            buttonLink="/Publications/ExerciseYourFaith.pdf"
          />
          <Card title='J.A.M. "Jesus and Me" Wednesday evenings (children)' buttonLink="/jam" />
        </div>
        <h2 className="text-center text-3xl font-medium pt-4">Activities/Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <Card title="Bible Presentation" buttonLink="/3rdgradebibleclass" />
          <Card title="Recycling Aluminum Cans" />
          <Card title="Annual Conference Report to Congregation" />
          <Card title="High School Senior Graduation Sunday" />
          <Card title="Special Services" buttonLink="/specialservices" />
          <Card title="Casual Worship Service (3rd Sunday of the month)" />
          <Card
            title="Children's Christmas Program"
            buttonLink="/ministrychildrenschristmasprogram"
          />
          <Card title="Bread Ministry" buttonLink="/ministrybread" />
          <Card title="Raccoon River Days participation" />
          <Card title="Choir Christmas Cantata" buttonLink="/ministrychristmascantata" />
          <Card title="Easter Breakfast" buttonLink="/ministryeasterbreakfast" />
          <Card title="Cards Recycled by SAM" buttonLink="/Publications/SAM_card_ministry.pdf" />
          <Card
            title="Christmas Eve Candlelight Services"
            buttonLink="/ministrychristmasevecandlelight"
          />
          <Card title="Coop’s Troup (Summer Music Event)" />
          <Card title="Shrove Tuesday Pancake Supper" buttonLink="/ministryshrovetuesday" />
        </div>
      </div>
    </>
  );
}
