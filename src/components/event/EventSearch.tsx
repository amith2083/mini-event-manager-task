'use client';

import { useEventStore } from '@/lib/eventStore';
import Input from '@/components/ui/Input';

export default function EventSearch() {
  const { setSearchQuery } = useEventStore();

  return (
    <div className="mb-6">
      <Input
        type="text"
        placeholder="Search events by name..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
        aria-label="Search events"
      />
    </div>
  );
}