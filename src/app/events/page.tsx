'use client';

import EventForm from '@/components/event/EventForm';
import EventList from '@/components/event/EventList';
import EventSearch from '@/components/event/EventSearch';

export default function EventsPage() {
  return (
    <div className="  p-6  min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight">
        Event Manager
      </h1>
      <div className=" bg-white max-w-3xl mx-auto rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
        <EventSearch />
        <EventForm />
        <EventList />
      </div>
    </div>
  );
}