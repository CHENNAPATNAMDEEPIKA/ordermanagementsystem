import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`/orders/${id}`).then(res => setOrder(res.data));
  }, [id]);

  if (!order) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      <p><strong>Customer:</strong> {order.customerName}</p>
      <p><strong>Amount:</strong> ₹{order.orderAmount}</p>
      <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>
      <a href={order.invoiceFileUrl} className="text-blue-500 underline" target="_blank">Download Invoice</a>
    </div>
  );
}
