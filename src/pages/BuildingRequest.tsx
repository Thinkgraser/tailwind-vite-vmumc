import { useEffect } from "react";
import { Button, FloatingInput, FloatingTextArea, Switch } from "../components";
import { CurrentTime } from "../utils";
import CheckPhone from "../utils/CheckPhone";
import CheckDate from "../utils/CheckDate";

export default function BuildingRequest() {
  useEffect(() => {
    document.title = "Building Use Request Form - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Building Use Request Form</h1>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <form
        className="space-y-4"
        onSubmit={(e) => (CheckPhone("phone") ? true : e.preventDefault())}>
        <FloatingInput label="Name" id="name" name="name" />
        <FloatingInput label="Phone Number" id="phone" name="phone" type="tel" />
        <FloatingInput label="Email Address" id="email" name="email" type="email" />
        <div className="flex gap-x-4">
          <div className="w-6/12">
            <FloatingInput
              label={"Start Time Building Is Needed"}
              type="datetime-local"
              min={CurrentTime()}
              onChange={CheckDate("startDate", "endDate")}
              id="startDate"
            />
          </div>
          <div className="w-6/12">
            <FloatingInput
              label={"End Time Building Is Needed"}
              type="datetime-local"
              min={CurrentTime()}
              id="endDate"
            />
          </div>
        </div>
        <FloatingTextArea label="Reason For Use" id="reason" rows={5} />
        <div>
          <label>What Rooms Will Be Needed</label>
        </div>
        <div className="space-y-1">
          <Switch label="Fellowship Hall"></Switch>
          <Switch label="Bathrooms"></Switch>
          <Switch label="Kitchen"></Switch>
          <Switch label="Sanctuary"></Switch>
          <Switch label="Sanctuary Overflow"></Switch>
          <Switch label="Class Rooms"></Switch>
        </div>
        <Button size={"full"}>Submit Form</Button>
      </form>
    </div>
  );
}
