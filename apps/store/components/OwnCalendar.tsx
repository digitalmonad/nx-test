'use client';
import React from 'react';
import { Calendar } from './calendar';

export const OwnCalendar = () => {
  return (
    <div>
      <Calendar
        onDayClick={() => {
          console.log('Click');
        }}
      />
    </div>
  );
};
