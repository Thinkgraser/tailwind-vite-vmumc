import { useEffect } from "react";
import { ConfirmationImg1, ConfirmationImg2, ConfirmationImg3 } from "../assets";

export default function Confirmation() {
  useEffect(() => {
    document.title = "Calendar - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Confirmation</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <p>
          Every other year, we hold confirmation classes for youth in grades 7 and 8. Each youth
          receives his or her own special study Bible during Bible week in September. Classes are
          held twice a month for the next half year thereafter. Confirmands regularly serve as
          worship helpers and participate in special services such as Good Friday and Ash Wednesday.
          Together they visit other faith communities and take part in mission service projects. The
          confirmation ceremony is held in April.
        </p>
        <img
          src={ConfirmationImg1}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt="Confirmation:  learning our history, exploring our faith, and making friends"
        />
        <img
          src={ConfirmationImg2}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt="images of visits to: monastery; Temple B'nai Eshurun synagogue; Sinsinawa labyrinth, sanctuary, and nunnery; Martin Luther statue at Wartburg seminary"
        />
        <img
          src={ConfirmationImg3}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt='picture collection showing field trip to "Field of Dreams" and images of baptism and confirmation ceremony.'
        />
      </div>
    </>
  );
}
