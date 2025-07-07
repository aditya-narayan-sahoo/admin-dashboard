import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../../utils";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  return (
    <motion.div
      animate={{ width: isOpen ? 256 : 80 }}
      className="transition-all duration-300 ease-in-out h-full bg-gray-800 bg-opacity-60 backdrop-blur-md border-r border-gray-700 flex flex-col p-4 overflow-hidden"
    >
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors w-fit"
      >
        <Menu size={22} />
      </motion.button>

      {/* Nav Items */}
      <nav className="mt-6 flex flex-col gap-2">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} to={item.href} className="group">
              <motion.div
                layout
                className={`flex items-center p-3 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 text-gray-300"
                }`}
              >
                <item.icon
                  size={20}
                  style={{ color: item.color }}
                  className="shrink-0"
                />
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.span
                      className="ml-3 whitespace-nowrap overflow-hidden"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.15 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
