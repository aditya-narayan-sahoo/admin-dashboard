import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import { categoryData, COLORS } from "../../utils";

const CategoryDistributionChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 180 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-md p-6"
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        Category Distribution
      </h2>

      <div className="h-[20rem] sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={window.innerWidth < 640 ? 60 : 85}
              labelLine={false}
              dataKey="value"
              stroke="#1F2937"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #4B5563",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#E5E7EB", fontSize: "0.875rem" }}
            />
            <Legend
              wrapperStyle={{
                color: "#D1D5DB",
                fontSize: "0.875rem",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
