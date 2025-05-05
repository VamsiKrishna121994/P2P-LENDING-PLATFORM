import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../components/Layout'; // Ensure the Layout component exists in the specified path

// Define the correct local Value type for react-calendar
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const handleDateChange = (value: Value, event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(value);
  };

  const renderSelectedDate = () => {
    if (!selectedDate) {
      return <p className="mt-4 text-lg text-red-600">No date selected.</p>;
    }

    if (selectedDate instanceof Date) {
      return (
        <p className="mt-4 text-lg">
          Selected Date: <span className="font-semibold">{selectedDate.toDateString()}</span>
        </p>
      );
    }

    if (Array.isArray(selectedDate)) {
      const [start, end] = selectedDate;
      return (
        <p className="mt-4 text-lg">
          Selected Range:{' '}
          <span className="font-semibold">
            {start?.toDateString()} – {end?.toDateString()}
          </span>
        </p>
      );
    }

    return null;
  };

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <div className="flex flex-col items-center">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="shadow-lg rounded-lg"
            selectRange={true}
          />
          {renderSelectedDate()}
        </div>
      </div>
    </Layout>
  );
}
