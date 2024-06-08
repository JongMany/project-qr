"use client";
import CalendarEvent from "@/app/(application)/calendar/_components/CalendarEvent";
import React, { useMemo, useState } from "react";
import { Calendar, DateLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { differenceInCalendarDays } from "date-fns";

type Props = {
  expirationItems: {
    id: string;
    start: Date;
    end: Date;
    title: string;
    name: string;
    category: string;
  }[];
  localizer: DateLocalizer;
};

export default function ExpirationCalendar({
  expirationItems,
  localizer,
}: Props) {
  console.log(expirationItems);
  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(1972, 0, 1, 8),
    }),
    []
  );
  const [date, setDate] = useState(defaultDate);
  /* 티켓 스타일 지정 */
  const eventStyles = (
    event: any,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    const restDays = differenceInCalendarDays(event.start, new Date());
    return {
      style: {
        backgroundColor: restDays <=3 
        ? "rgba(255, 0, 0, 0.3)"
          : "rgba(0, 255,0,0.6)",
        borderRadius: "4px",
        border: "none",
      },
    };
  };

  const onNavigate = (date: Date) => {
    setDate(new Date(date));
  };

  return (
    <div className="h-[700px] px-4 py-4">
      <Calendar
        localizer={localizer}
        defaultDate={defaultDate}
        date={date}
        defaultView={Views.MONTH}
        views={[Views.MONTH]}
        events={expirationItems}
        scrollToTime={scrollToTime}
        popup
        onNavigate={onNavigate}
        eventPropGetter={eventStyles}
        // titleAccessor={(event: any) => {
        //   if (event.isCompleted) return `✅ ${event.title}`;
        //   return event.title;
        // }}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );
}
