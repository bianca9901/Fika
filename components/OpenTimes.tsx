import { days } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function OpenTimes() {
  return (
    <section id="open-times" className="scroll-mt-28">
      <div className="bg-blue-300 p-6 rounded-lg shadow-md">
        <div className="md:text-center">
          <SectionHeading headingText1="Open " headingText2="times" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {days.map(({ day, time }) => (
            <div
              key={day}
              className="flex justify-between items-center p-2
           bg-blue-400 rounded-md text-white"
            >
              <span className="text-lg font-semibold">{day}</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenTimes;
