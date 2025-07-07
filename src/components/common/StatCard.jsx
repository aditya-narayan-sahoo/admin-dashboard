import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      role="region"
      aria-label={name}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
    >
      <div className="p-5 sm:p-6 space-y-2">
        <div className="flex items-center text-sm font-medium text-gray-400">
          <Icon
            size={20}
            className="mr-2"
            style={{ color }}
            aria-hidden="true"
          />
          <span>{name}</span>
        </div>
        <p className="text-3xl font-semibold text-gray-100 leading-tight">
          {value}
        </p>
      </div>
    </motion.div>
  );
};
export default StatCard;
