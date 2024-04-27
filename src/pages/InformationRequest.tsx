import { useEffect } from "react";
import { Button, FloatingInput, FloatingTextArea } from "../components";
import CheckPhone from "../utils/CheckPhone";

export default function InformationRequest() {
  useEffect(() => {
    document.title = "Information Request Form - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Information Request Form</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <form
        className="space-y-4"
        onSubmit={(e) => (CheckPhone("phone") ? true : e.preventDefault())}>
        <FloatingInput label="Name" id="name" name="name" />
        <FloatingInput label="Address" id="address" name="address" />
        <FloatingInput label="Email Address" id="email" name="email" type="email" />
        <FloatingInput label="Phone Number" id="phone" name="phone" type="tel" />
        <FloatingTextArea label="Information You Need" id="info" name="info" rows={5} />
        <Button size={"full"}>Submit Form</Button>
      </form>
    </div>
  );
}
