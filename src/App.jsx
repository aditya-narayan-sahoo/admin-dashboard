import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Sales from "./pages/Sales";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden relative">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Sidebar */}
      <aside className="relative z-10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
