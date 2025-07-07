import {
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { userActivityData } from "../../utils";

const UserActivityHeatmap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-md p-6"
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        User Activity Heatmap
      </h2>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 lg:overflow-visible">
        <div className="min-w-[600px] lg:min-w-0 h-[18rem] sm:h-[20rem]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="name"
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
                cursor={{ fill: "#4B5563", opacity: 0.3 }}
              />
              <Legend
                wrapperStyle={{
                  fontSize: "0.75rem",
                  color: "#D1D5DB",
                  paddingTop: "4px",
                }}
              />
              <Bar dataKey="0-4" stackId="a" fill="#6366F1" />
              <Bar dataKey="4-8" stackId="a" fill="#8B5CF6" />
              <Bar dataKey="8-12" stackId="a" fill="#EC4899" />
              <Bar dataKey="12-16" stackId="a" fill="#10B981" />
              <Bar dataKey="16-20" stackId="a" fill="#F59E0B" />
              <Bar dataKey="20-24" stackId="a" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
