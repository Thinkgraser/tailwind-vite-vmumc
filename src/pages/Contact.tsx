import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4 text-center">
      <h1 className="text-4xl font-medium text-center">Have A Question? Please Contact Us!</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />

      <p>
        <strong>Van Meter United Methodist Church</strong>
        <br />
        100 Hazel Street
        <br />
        PO Box 149
        <br />
        Van Meter, IA 50261
        <br />
        (515) 996-2572
      </p>

      <p>
        Email us at:{" "}
        <a className="link" href="mailto:office@vmumc.com">
          office@vmumc.com
        </a>
      </p>

      <p>
        Rev. Beth Harbaugh
        <br />
        (319) 540-1644 (cell)
        <br />
        <a className="link" href="mailto:bethmaryharbaugh@gmail.com">
          bethmaryharbaugh@gmail.com
        </a>
      </p>
    </div>
  );
}
