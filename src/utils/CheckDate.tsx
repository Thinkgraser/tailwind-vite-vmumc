import { ChangeEventHandler } from "react";

export default function CheckDate(
  startId: string,
  endId: string
): ChangeEventHandler<HTMLInputElement> {
  return () => {
    const startDateInput = document.getElementById(startId) as HTMLInputElement;
    const startDate = new Date(startDateInput.value);
    const endDateInput = document.getElementById(endId) as HTMLInputElement;
    const endDate = new Date(endDateInput.value);
    endDateInput.setAttribute(
      "min",
      new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16)
    );
    // Check if end time is not set or if it's set to a date before start time
    if (!endDateInput.value || endDate < startDate) {
      // Set end time to start time
      endDateInput.value = startDateInput.value;
    }
  };
}
