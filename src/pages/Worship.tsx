import { useEffect } from "react";
import { Button, HomeSection, Table } from "../components";
import { JamLogo, Worship2 } from "../assets";

export default function Worship() {
  useEffect(() => {
    document.title = "Weekly Worship - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Weekly Worship</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <div className="text-3xl font-medium">
          <h2>Worship Matters</h2>
        </div>

        <HomeSection
          text={
            <p>
              J.A.M. is our Wednesday evening programming and is held through the school year.
              Dinner is served at 6:00 and the program goes from 6:30-7:30.
            </p>
          }
          image={JamLogo}
          imageSmallWidth="3/12"
          imageLargeWidth="4/12"
          alt="toothpaste in and out of the tube"
          sectionWidth="8/12"
        />

        <HomeSection
          text={
            <p>
              The Adult Discussion Group meets at 9:30AM in the overflow area at the back of the
              sanctuary. Come to church early for an interesting discussion and thoughtful study.
              Topics vary; a given topic may be discussed for several weeks.
              <br /> <br />
              Worship services are Sundays at 10:45 AM. There is a fellowship time after the
              service. A staffed nursery is available.
            </p>
          }
          image={Worship2}
          imageSmallWidth="3/12"
          imageLargeWidth="4/12"
          alt="toothpaste in and out of the tube"
          sectionWidth="8/12"
        />

        <strong>We impatiently await that which is already here.</strong>

        <div className="text-center">
          <Button className="bg-black text-3xl uppercase tracking-wide hover:bg-slate-600">
            Pastor's Message
          </Button>
        </div>

        <Table>
          <thead>
            <tr className="divide-x divide-gray-200">
              <th scope="col" className="px-6 py-3 font-medium text-gray-500 uppercase w-6/12">
                Scriptures and Sermons
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-gray-500 uppercase w-6/12">
                Special Celebrations
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <strong>March 3</strong>
                <p>
                  Sermon:
                  <br />
                  "Jesus Wept?"
                </p>
                <p>
                  Scripture:
                  <br />
                  John 11:71-27; 32-44
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <p>Holy Communion</p>
                <p>3rd Sunday of Lent</p>
              </td>
            </tr>

            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <strong>March 10</strong>
                <p>
                  Sermon:
                  <br />
                  "Turning the Tables?"
                </p>
                <p>
                  Scripture:
                  <br />
                  Matthew 21:12-17
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <p>4th Sunday of Lent</p>
              </td>
            </tr>

            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <strong>March 24</strong>
                <p>
                  Sermon:
                  <br />
                  "What is Truth?"
                </p>
                <p>
                  Scripture:
                  <br />
                  John 18:28-40
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <p>Palm Sunday</p>
              </td>
            </tr>

            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <strong>March 29</strong>
                <p>Good Friday</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <p>
                  Good Friday
                  <br />
                  Tenebrae Service
                  <br />
                  7:00 PM
                </p>
              </td>
            </tr>
            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <strong>March 31</strong>
                <p>Easter Sunday</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 space-y-2">
                <p>
                  Easter Sunrise Service
                  <br />
                  6:30 AM
                </p>
                <p>
                  Traditional Easter Service
                  <br />
                  10:45 AM
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
