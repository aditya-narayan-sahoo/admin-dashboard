import Sales from "./pages/Sales";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

import Sidebar from "./components/common/Sidebar";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <section className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </section>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
