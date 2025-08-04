import React from "react";
import { useOrder } from "../model/useOrder";


export const OrderInfo: React.FC<{ orderId: string }> = ({ orderId }) => {
  const { order, loading, error } = useOrder(orderId);
  
  if (loading) return <p>Loading order...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!order) return <p>No order data</p>;

  return (
    <div>
      <h2>Order #{order.id}</h2>

      <hr></hr>
      <h2>Plan</h2>
      <p>Plan ID: {order.object.plan.id}</p>
      <p>Plan Name: {order.object.plan.nickname}</p>
      <p>Amount: {`${order.object.plan.amount / 100} ${order.object.plan.currency}`}</p>
      <p>Product ID: {order.object.plan.product}</p>

      <hr></hr>
      
      <h2>Order Details</h2>
      <p>Created:{new Date(order.object.created* 1000).toLocaleString()}</p>
      <p>Start date:{new Date(order.object.start_date* 1000).toLocaleString()}</p>
      <p>End date: {new Date(order.object.end_date* 1000).toLocaleString()}</p>

      {/* <pre>{JSON.stringify(order, null, 2)}</pre> */}
      
    </div>
  );
};
