import { useEffect } from "react";
import { BibleGivingImg } from "../assets";

export default function BibleGiving() {
  useEffect(() => {
    document.title = "Third Grade Bible Class - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Bible Giving</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <p>
          Each fall, our church celebrates the giving of Bibles in our worship by giving a Bible
          story book to our kindergartners, an age-appropriate Bible to our third graders, and
          (during confirmation years) a study Bible to our confirmands.
        </p>
        <p>
          By the third grade, students are developing the reading skills to benefit from having a
          Bible of their very own. By providing age appropriate Bibles, we are trying to encourage
          more interest and understanding of the spiritual presence of the Living Word that can be
          found there. During J.A.M. (Jesus and Me) and the lessons sent home, church families can
          develop reading time together from the timeless stories and life lessons to be found here.
        </p>
        <p>
          Your support and partnering with the Holy in forming your child's growing faith can arise
          through simply reading these good books. The giving of Bibles also provides an opportunity
          for the church to witness our faith in the sharing of the Word of our God.
        </p>
        <img
          src={BibleGivingImg}
          className="w-full lg:w-9/12 rounded mx-auto"
          alt='montage of children receiving Bibles and looking at them. "Giving Bibles Celebrating the foundation of our faith by presenting age-appropriate Bibles to our kindergartners, third-graders, and confirmands."'
        />
      </div>
    </>
  );
}
