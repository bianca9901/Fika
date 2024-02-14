import { days } from "@/lib/data";

function OpenTimes() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Open Times</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {days.map(({ day, time }) => (
          <div key={day} className="flex justify-between items-center p-2
           bg-blue-200 rounded-md text-gray-800">
            <span className="text-lg font-semibold">{day}</span>
            <span>{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenTimes;
