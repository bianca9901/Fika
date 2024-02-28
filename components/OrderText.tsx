import React from "react";
import { Icon } from "@iconify/react";
import SectionHeading from "./SectionHeading";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatCurrency";
import CartItems from "./CartItems";

function OrderText() {
  const { totalSum } = useCart();

  return (
    <>
      <SectionHeading
        headingText1="Place your order through this"
        headingText2="form:"
      />
      <div className="flex flex-wrap text-white">
        {/* Order Details Section */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-white mt-10 md:pr-5">
          <div className="flex mb-4">
            <Icon icon="ic:round-shopping-cart" className="w-6 h-6 mr-2" />
            <p className="font-semibold text-xl">Order Details:</p>
          </div>
          <div>
            <CartItems />
          </div>
          <p className="flex justify-center mt-20">
            <span className="font-bold">Total Sum: </span>&nbsp;
            <span className="text-black">{formatCurrency(totalSum())}</span>
          </p>
        </div>
        {/* Important Details Section */}
        <div className="w-full md:w-1/2 mt-10 md:pl-5">
          <div className="text-xs">
            <p className="font-semibold mb-4 text-xl">
              Important details concerning your order:
            </p>

            <p className="font-semibold mt-10">
              <span>
                <Icon icon="gg:time" className="w-6 h-6 mr-5" />
              </span>
              Your order will be prepared for pickup within 24 hours.
            </p>
            <p>
              If you prefer a future pickup date, please specify it in the
              message box below. If no instructions are provided, your order
              will be ready within 24 hours.
            </p>

            <p className="font-semibold mt-10">
              <span>
                <Icon icon="bx:bxs-credit-card" className="w-6 h-6 mr-5 " />
              </span>
              Payment Method:
            </p>
            <p>Card transactions are accepted upon arrival.</p>

            <p className="font-semibold mt-10">
              <span>
                <Icon icon="ic:baseline-event-note" className="w-6 h-6 mr-5" />
              </span>{" "}
              Bulk Orders and Special Events:
            </p>
            <p>
              For bulk orders (70 items) or special events, visit our premises
              to discuss directly.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-20 text-center text-yellow-300 text-2xl">
        Please provide your full name and phone number in the textbox so we can
        contact you if necessary.
      </p>
    </>
  );
}

export default OrderText;
