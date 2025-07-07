import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { userGrowthData } from "../../utils";

const UserGrowthChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-md p-6"
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">User Growth</h2>

      <div className="h-[18rem] sm:h-[20rem]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="month"
              stroke="#D1D5DB"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#D1D5DB"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #4B5563",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#E5E7EB", fontSize: "0.875rem" }}
              cursor={{ stroke: "#6B7280", strokeWidth: 1 }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8B5CF6"
              strokeWidth={2.5}
              dot={{ fill: "#8B5CF6", stroke: "#1F2937", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, strokeWidth: 2, stroke: "#C4B5FD" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;
