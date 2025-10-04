import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCards";
import CookingCard from "./cards/CookingCard";
import { toast } from "react-toastify";
import ReadyCart from "./cards/ReadyCart";

const OrderContainer = ({ ordersPromise }) => {

  const data = use(ordersPromise);
  const [orders, setOrders]  =useState(data)
  const [cookingItems, setCookingItems] = useState([]);
  const [readyItems, setReadyItems] = useState([]);

  const handleOrder = (order) => {
    const isExist = cookingItems.find((item) => item.id == order.id);
    if (isExist) {
      toast.info("Order is Cooking");
      return;
    }
    const newCookingItems = [...cookingItems, order];

    setCookingItems(newCookingItems);
  };

  const handleCooking = (order) => {
    order.cooked_At = new Date().toLocaleTimeString();
    const newReadyItems = [...readyItems, order];
    setReadyItems(newReadyItems);

    const remaining = cookingItems.filter((item) => item.id !== order.id);
    setCookingItems(remaining);

    const remainingOrders = orders.filter((item) => item.id !== order.id)
    setOrders(remainingOrders)
  };

  return (
    <div>
      <States
        cookingTotal={cookingItems.length}
        orderTotal={orders.length}
        readyTotal={readyItems.length}
      ></States>
      <section className="w-11/12 mx-auto py-10 grid lg:grid-cols-12 grid-cols-1 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Current Order</h2>
        </div>
        <div className="lg:col-span-7">
          <div className="space-y-5">
            {orders.map((item) => (
              <OrderCard
                key={item.id}
                handleOrder={handleOrder}
                order={item}
              ></OrderCard>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5 ">
          <h2 className="font-bold text-4xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard
                handleCooking={handleCooking}
                key={order.id}
                order={order}
              ></CookingCard>
            ))}
          </div>
          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10 space-y-5">
            {readyItems.map((item) => (
              <ReadyCart key={item.id} order={item}></ReadyCart>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
