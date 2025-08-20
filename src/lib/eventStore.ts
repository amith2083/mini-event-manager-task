import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Event {
  id: string;
  name: string;
  date: string;
}

interface EventStore {
  events: Event[];
  searchQuery: string;
  addEvent: (event: Omit<Event, "id">) => void;
  deleteEvent: (id: string) => void;
  setSearchQuery: (query: string) => void;
  filteredEvents: () => Event[];
}

export const useEventStore = create<EventStore>()(
  persist(
    (set, get) => ({
      events: [],
      searchQuery: "",
      addEvent: (event) =>
        set((state) => ({
          events: [...state.events, { ...event, id: crypto.randomUUID() }],
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        })),
      setSearchQuery: (query) => set({ searchQuery: query }),
      filteredEvents: () => {
        const { events, searchQuery } = get();
        if (!searchQuery) return events;
        return events.filter((event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      },
    }),
    {
      name: "event-storage",
    }
  )
);
