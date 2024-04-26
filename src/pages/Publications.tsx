import { useEffect } from "react";
import Card from "../components/Card";
import {
  BibleVerses,
  Devotion365,
  Grapevine,
  UpperRoom,
  VMBulletin,
  VmNewsLetter,
} from "../assets";

export default function Publications() {
  useEffect(() => {
    document.title = "Publications - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Church Publications</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            title="Van Meter Church Bulletin"
            buttonLink="/Publications/vmbulletin.pdf"
            btnText="View"
            image={VMBulletin}
            alt="Van Meter Church Bulletin"
          />
          <Card
            title="Bible Verses for the week"
            buttonLink="/Publications/vmbulletin.pdf"
            btnText="View"
            image={BibleVerses}
            alt="BibleVerses for the Week"
          />
          <Card
            title="The Van Meter Newsletter"
            buttonLink="/Publications/vmbulletin.pdf"
            btnText="View"
            image={VmNewsLetter}
            alt="The Van Meter UMC Newsletter"
          />
          <Card
            title="Our Sunday news bulletin"
            buttonLink="/Publications/vmbulletin.pdf"
            btnText="View"
            image={Grapevine}
            alt="Grapevine tells weekly news"
          />
          <Card
            title="Daily Devotions: The Upper Room"
            buttonLink="/Publications/vmbulletin.pdf"
            btnText="View"
            image={UpperRoom}
            alt="Upper Room Daily Devotional Guide"
          />
          <Card
            title="d365: Devotionals 365 days a year"
            buttonLink="/Publications/vmbulletin.pdf"
            btnText="View"
            image={Devotion365}
            alt="Devotionals 365 days a year: pause, listen, think, pray, go"
          />
        </div>
        <div className="grid sm:grid-cols-4">
          <div className="sm:col-span-2 sm:col-start-2">
            <Card
              title="Online Bible and Study Tools"
              buttonLink="https://www.biblestudytools.com/"
              btnText="View"
              image="http://media.salemwebnetwork.com/biblestudytools3/theme/default//master-banner-logo.png"
              alt="Online Bible and Study Tools"
            />
          </div>
        </div>
      </div>
    </>
  );
}
