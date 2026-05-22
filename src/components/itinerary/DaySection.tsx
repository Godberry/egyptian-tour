import { TimelineItem } from "./TimelineItem";
import type { ItineraryDay, ItineraryItem } from "./itinerary-data";

export function DaySection({
  day,
  items,
  isFirst,
}: {
  day: ItineraryDay;
  items: ItineraryItem[];
  isFirst?: boolean;
}) {
  return (
    <section className="day-section" id={isFirst ? day.id : undefined}>
      <div className="day-title-wrapper">
        {day.chars.map((c, i) => (
          <div key={i} className="circle-text">{c}</div>
        ))}
        <span className="date-text">{day.date}</span>
      </div>
      <div className="timeline">
        {items.map((it, idx) => (
          <TimelineItem key={`${day.id}-${idx}`} item={it} />
        ))}
      </div>
    </section>
  );
}
