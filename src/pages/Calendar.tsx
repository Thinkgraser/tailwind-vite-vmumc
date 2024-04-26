import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    document.title = "Calendar - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Church Calendar</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <hr className=" border-black opacity-25" />
        <br />
        <iframe
          className="overflow-hidden rounded border-none"
          src="//www.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23cccccc&amp;src=9k15r4oj9pihte8nr4s3ra7qag%40group.calendar.google.com&amp;color=%23BE6D00&amp;src=a8so3okd24r3jbjr546tastrg0%40group.calendar.google.com&amp;color=%234A716C&amp;src=5cm43rq8vd82m98u7odb5jjmas%40group.calendar.google.com&amp;color=%23A32929&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FChicago"
          height="600"
          width="100%"></iframe>
      </div>
    </>
  );
}
