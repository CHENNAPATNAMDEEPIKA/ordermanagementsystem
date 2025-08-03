import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between">
      <h1 className="text-xl font-bold">Order Management</h1>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Order</Link>
      </div>
    </nav>
  );
}
