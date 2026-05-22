import type { ItineraryItem } from "./itinerary-data";

export function TimelineItem({ item }: { item: ItineraryItem }) {
  const cardBody = (
    <div className="desc">
      <div className="desc-head">
        <h3>{item.title}</h3>
        {item.mapsUrl && (
          <a
            href={item.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-retro btn-retro-sm"
          >
            📍 導航
          </a>
        )}
      </div>
      {item.internalHtml ? (
        <p dangerouslySetInnerHTML={{ __html: item.internalHtml }} />
      ) : (
        <p>{item.description}</p>
      )}
    </div>
  );

  const cardClass =
    item.variant === "dashed"
      ? "content card dashed"
      : item.variant === "card"
      ? "content card"
      : "content flex-row";

  return (
    <div className="timeline-item">
      <div className="time-badge">{item.time}</div>
      <div className={cardClass}>
        {item.variant === "flex-row" && item.imageSrc && (
          <img src={item.imageSrc} alt={item.imageAlt || item.title} className="retro-img" />
        )}
        {cardBody}
      </div>
    </div>
  );
}
