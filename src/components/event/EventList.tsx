"use client";
import { useEventStore } from "@/lib/eventStore";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function EventList() {
  const { filteredEvents, deleteEvent } = useEventStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // show nothing or a loader until Zustand is ready
    return <p className="text-center text-gray-500">Loading events...</p>;
  }

  const events = filteredEvents();

  if (events.length === 0) {
    return (
      <ul>
        <li className="text-center text-gray-500 font-medium list-none">
          No events found.
        </li>
      </ul>
    );
  }

  return (
    <ul className="space-y-4">
      {events.map((event) => (
        <li key={event.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{event.name}</h3>
            <p className="text-sm text-gray-600">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <Button
            onClick={() => deleteEvent(event.id)}
            className="bg-red-500 hover:bg-red-600"
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
