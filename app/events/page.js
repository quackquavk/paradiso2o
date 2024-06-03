'use client';
import React from 'react';
import Header from '@/components/Header';
import { eventDetails } from '@/constants';
import EventCard from '@/components/Card';

const Events = () => {
  return (
    <>
      <Header />
      <section className="pb-[10vh] min-h-[100vh] pt-[10vh] bg-black relative w-full events">
        <h1 className="h1-bold text-white text-center">Upcoming Events</h1>
        <p className="text-white text-center">****(Events are yet to be listed for production)****</p>
        <div className="grid grid-cols-3 gap-4 mx-auto">
          {eventDetails.map((events, index) => (
            <EventCard
              key={events.event_name}
              events={events}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Events;
