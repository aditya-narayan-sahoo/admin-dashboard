import {
  Pie,
  Cell,
  Legend,
  Tooltip,
  PieChart,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { salesByCategory, USER_DEMOGRAPHICS_COLORS } from "../../utils";

const SalesByCategoryChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Sales by Category
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={salesByCategory}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {salesByCategory.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    USER_DEMOGRAPHICS_COLORS[
                      index % USER_DEMOGRAPHICS_COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesByCategoryChart;
