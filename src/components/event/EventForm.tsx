'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEventStore } from '@/lib/eventStore';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const eventSchema = z.object({
  name: z.string().min(1, 'Event name is required'),
  date: z.string().min(1, 'Date is required'),
});

type EventFormData = z.infer<typeof eventSchema>;

export default function EventForm() {
  const { addEvent } = useEventStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = (data: EventFormData) => {
    addEvent(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 space-y-5">
      <div>
        <Input
          type="text"
          placeholder="Event Name"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-2 font-medium">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Input
          type="date"
          {...register('date')}
          aria-invalid={errors.date ? 'true' : 'false'}
          className={errors.date ? 'border-red-500' : ''}
        />
        {errors.date && (
          <p className="text-red-500 text-sm mt-2 font-medium">{errors.date.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">Add Event</Button>
    </form>
  );
}