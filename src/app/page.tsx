import { Hero } from "@/components/hero/Hero";
import { DaySection } from "@/components/itinerary/DaySection";
import { days, day1Items, day2Items, day3Items } from "@/components/itinerary/itinerary-data";

export default function Home() {
  const itemsList = [day1Items, day2Items, day3Items];
  return (
    <>
      <Hero />
      <main className="container">
        {days.map((d, i) => (
          <DaySection key={d.id} day={d} items={itemsList[i]} isFirst={i === 0} />
        ))}
      </main>
    </>
  );
}
