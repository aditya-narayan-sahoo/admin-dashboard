import {
  Pie,
  Cell,
  Legend,
  Tooltip,
  PieChart,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { USER_DEMOGRAPHICS_COLORS, userDemographicsData } from "../../utils";

const UserDemographicsChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-md rounded-2xl border border-gray-700 p-4 sm:p-6 lg:col-span-2"
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        User Demographics
      </h2>

      <div className="h-[18rem] sm:h-[20rem]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userDemographicsData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
              isAnimationActive={false}
            >
              {userDemographicsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    USER_DEMOGRAPHICS_COLORS[
                      index % USER_DEMOGRAPHICS_COLORS.length
                    ]
                  }
                  stroke="#1F2937"
                  strokeWidth={2}
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
                fontSize: "0.75rem",
                color: "#D1D5DB",
                paddingTop: "4px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserDemographicsChart;
