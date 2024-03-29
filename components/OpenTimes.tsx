import { days } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function OpenTimes() {
  return (
    <section id="open-times" className="scroll-mt-28">
      <div className="bg-sky-500 dark:bg-black p-6 rounded-lg shadow-md">
        <div>
          <SectionHeading headingText1="Open " headingText2="times" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {days.map(({ day, time }) => (
            <div
              key={day}
              className="flex justify-between items-center p-2
           bg-sky-400 dark:bg-sky-900 rounded-md text-white"
            >
              <span className="text-lg">{day}</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenTimes;
