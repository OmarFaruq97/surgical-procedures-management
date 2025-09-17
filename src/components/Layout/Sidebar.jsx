import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 fixed">
      <h1 className="text-xl font-bold mb-6">Surgical App</h1>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link></li>
          <li><Link to="/procedures" className="block py-2 px-4 hover:bg-gray-700 rounded">Surgical Procedures</Link></li>
          <li><Link to="/reports" className="block py-2 px-4 hover:bg-gray-700 rounded">Reports</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;