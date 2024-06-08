"use client";

import { useModal } from "@/libs/useModal";
import { differenceInCalendarDays } from "date-fns";
import { useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

type Props = {
  event: any;
};
export default function CalendarEvent({ event }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { openModal, isOpen, closeModal } = useModal();
  const restDays = differenceInCalendarDays(event.start, new Date());
  const background = restDays > 3
    ? "bg-[rgba(0,255,0,0.6)]"
    : "bg-[rgba(255,0,0,0.3)]";

  return (
    <div ref={ref} onMouseLeave={closeModal}>
      <p onMouseOver={openModal}>
        <span className="mr-2">{event.name}</span>
        <span>- {event.category}</span>
      </p>
      <Overlay
        rootClose={true}
        target={ref.current}
        show={isOpen}
        placement="top"
        onHide={closeModal}
      >
        <Tooltip id="test">
          <div
            className={`px-2 py-1 rounded-lg ${background} relative flex flex-col items-center bottom-5 text-white`}
          >
            <p>{event.title}</p>
            <span>남은 일수: {restDays}</span>
          </div>
        </Tooltip>
      </Overlay>
    </div>
  );
}
