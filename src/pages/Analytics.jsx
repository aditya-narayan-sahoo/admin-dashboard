import Header from "../components/common/Header";

import RevenueChart from "../components/analytics/RevenueChart";
import OverviewCards from "../components/analytics/OverviewCards";
import UserRetention from "../components/analytics/UserRetention";
import AIPoweredInsights from "../components/analytics/AIPoweredInsights";
import ChannelPerformance from "../components/analytics/ChannelPerformance";
import ProductPerformance from "../components/analytics/ProductPerformance";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
};
export default AnalyticsPage;
