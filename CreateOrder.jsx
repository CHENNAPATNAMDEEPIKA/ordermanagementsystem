import { useState } from 'react';
import axios from 'axios';

export default function CreateOrder() {
  const [formData, setFormData] = useState({ customerName: '', orderAmount: '', file: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('customerName', formData.customerName);
    data.append('orderAmount', formData.orderAmount);
    data.append('file', formData.file);

    await axios.post('/orders', data);
    alert("Order created!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Order</h2>
      <input type="text" placeholder="Customer Name" className="input" value={formData.customerName}
        onChange={e => setFormData({ ...formData, customerName: e.target.value })} required />
      <input type="number" placeholder="Order Amount" className="input" value={formData.orderAmount}
        onChange={e => setFormData({ ...formData, orderAmount: e.target.value })} required />
      <input type="file" accept="application/pdf" onChange={e => setFormData({ ...formData, file: e.target.files[0] })} required />
      <button type="submit" className="btn mt-4">Submit</button>
    </form>
  );
}
