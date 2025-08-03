import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Orders</h2>
      <table className="w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Invoice</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId} className="text-center">
              <td className="border p-2">{order.orderId}</td>
              <td className="border p-2">{order.customerName}</td>
              <td className="border p-2">₹{order.orderAmount}</td>
              <td className="border p-2">{new Date(order.orderDate).toLocaleString()}</td>
              <td className="border p-2">
                <a href={order.invoiceFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
