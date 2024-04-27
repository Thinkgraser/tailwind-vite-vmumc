import { useEffect } from "react";
import { Card } from "../components";
import { VBS1, VBS2, VBS3, VBS4, VBS5, VBS6, VBS7, VBS8 } from "../assets";

export default function Vbs() {
  useEffect(() => {
    document.title = "VBS - Vacation Bible School - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>VBS: Vacation Bible School</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <h3 className="text-center text-3xl font-medium">What Is VBS?</h3>
        <br />
        <p>
          VBS!!! It's the acronym for Vacation Bible School. Children ages 3 to 11 gather at church
          each evening for fun with a focus of learning more about God. When we asked our children
          what they liked best about VBS the answers were as varied as the VBS learning stations.
          Some liked songs, some liked snacks, some liked the outdoor games, or crafts, or science,
          or story time. With all that, what's not to like? Come and enjoy the holychaos of Vacation
          Bible School. All kids and stalwart adults are welcome.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 text-center">
          <Card
            title="Storytime"
            image={VBS1}
            alt="storytime in a setting with blankets and colorful wall hangings"
          />
          <Card
            title="Crafts"
            image={VBS2}
            alt="crafts - child connects stars to make a constellation"
          />
          <Card
            title="Imagination Station (Science)"
            image={VBS3}
            alt="a teen guides six children through an experiment"
          />
          <Card title="Singing and Dancing" image={VBS4} alt="children dancing" />
          <Card
            title="Outdoor Games"
            image={VBS5}
            alt="a boy and girl play tug-of-war with a pool noodle"
          />
          <Card title="More Outdoor Games" image={VBS6} alt="children play on the church lawn" />
          <Card title="Snacks" image={VBS7} alt="two girls enjoy ice cream sandwiches" />
          <Card title="VBS!!!" image={VBS8} alt="teen helpers dressed as astronauts" />
        </div>
        <div className="text-center">
          <strong>Vacation Bible School Director:</strong>
        </div>
        <p className="text-center">
          Courtney
          <br />
          <a className="link" href="mailto:childrensministries@vmumc.com">
            childrensministries@vmumc.com
          </a>
        </p>
      </div>
    </>
  );
}
