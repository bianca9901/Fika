import Image from "next/image";
import { fika } from "@/lib/data";
import AddToCartBtn from "./AddToCartBtn";

function Menu() {
  return (
    <div
      className="py-4 sm:py-6 px-6 w-full max-w-screen-xl flex flex-wrap
    gap-10 justify-center"
    >
      {fika.map((item) => (
        <div
          key={item.id}
          className="mb-6 border border-gray-300 rounded-lg p-4 bg-blue-50"
        >
          <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <div className="flex mb-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-200 text-gray-700 px-2 py-1 rounded-full
                text-sm mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden
          rounded-full shadow-image">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <AddToCartBtn />
        </div>
      ))}
    </div>
  );
}

export default Menu;
