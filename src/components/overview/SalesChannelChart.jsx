import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { SALES_CHANNEL_DATA, COLORS } from "../../utils";

const SalesChannelChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 shadow-md rounded-2xl p-6 lg:col-span-2"
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        Sales by Channel
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SALES_CHANNEL_DATA}>
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
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />
            <Legend wrapperStyle={{ color: "#D1D5DB", fontSize: "0.875rem" }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
