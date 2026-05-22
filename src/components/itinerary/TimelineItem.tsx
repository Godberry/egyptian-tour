import type { ItineraryItem } from "./itinerary-data";
import { assetPath } from "@/lib/asset-path";
import { Stamp } from "@/components/decor/Stamp";

export function TimelineItem({ item }: { item: ItineraryItem }) {
  const cardBody = (
    <div className="desc">
      <div className="desc-head">
        <h3>
          {item.highlight && <span className="title-spark" aria-hidden="true">✨</span>}
          {item.title}
        </h3>
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
      ? `content card${item.highlight ? " highlight" : ""}`
      : `content flex-row${item.highlight ? " highlight" : ""}`;

  const isDashed = item.variant === "dashed";

  return (
    <div className="timeline-item">
      <div className="time-badge" aria-label={`時間 ${item.time}`}>{item.time}</div>
      <div
        className={cardClass}
        aria-label={isDashed ? "待安排項目" : undefined}
      >
        {item.highlight && item.stamp && (
          <Stamp text={item.stamp} className="card-stamp" />
        )}
        {item.variant === "flex-row" && item.imageSrc && (
          <img
            src={assetPath(item.imageSrc)}
            alt={item.imageAlt || ""}
            width={200}
            height={200}
            loading="lazy"
            decoding="async"
            className="retro-img"
          />
        )}
        {cardBody}
      </div>
    </div>
  );
}
