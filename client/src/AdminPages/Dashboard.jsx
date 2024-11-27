import { Users, MessageSquare, Cloud, Sprout } from "lucide-react";
import StatsCard from "../components/StatsCard";
import UsersList from "../components/UsersList";
import { mockUsers } from "./data/mockData";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Total Users"
          value="1,234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Conversations"
          value="856"
          icon={MessageSquare}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Weather Reports"
          value="432"
          icon={Cloud}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Crop Types"
          value="25"
          icon={Sprout}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className="mt-6">
        <UsersList users={mockUsers} />
      </div>
    </div>
  );
};

export default Dashboard;
