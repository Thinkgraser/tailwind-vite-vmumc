import { useEffect } from "react";
import { Button, FloatingInput, FloatingSelect, FloatingTextArea } from "../components";

export default function PrayerRequest() {
  useEffect(() => {
    document.title = "Prayer Request - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Prayer Request Form</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <form className="space-y-4">
          <FloatingInput label="Requestor's Name" id="name" name="name"></FloatingInput>
          <FloatingInput label="Prayer Needed For Whom" id="whom" name="whom"></FloatingInput>
          <FloatingSelect label="Length Of Request" id="length" name="length">
            <option disabled selected value="">
              Please Select a length
            </option>
            <option id="1" value="1 - 2 Weeks">
              1 - 2 Weeks
            </option>
            <option id="2" value="3 - 4 Weeks">
              3 - 4 Weeks
            </option>
            <option id="3" value="Indefinite">
              Indefinite
            </option>
            <option id="4" value="Unknown">
              Unknown
            </option>
          </FloatingSelect>
          <FloatingTextArea label="Reason For Prayer" rows={5}></FloatingTextArea>
          <Button size={"full"}>Submit Form</Button>
        </form>
      </div>
    </>
  );
}
