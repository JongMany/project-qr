"use client";

import ExpirationCalendar from "@/app/(application)/calendar/_components/ExpirationCalendar";
import { useItemStore } from "@/stores/useItemStore";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";

export default function CalendarContainer() {
  const { items } = useItemStore();
  const expirationItems = items.map((item, idx) => ({
    id: `${item.id}-${idx}`,
    start: new Date(item.expirationDate),
    end: new Date(item.expirationDate),
    title: `${item.name} (${item.category})`,
    name: item.name,
    category: item.category,
  }));
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);
  return (
    <ExpirationCalendar
      expirationItems={expirationItems}
      localizer={localizer}
    />
  );
}
