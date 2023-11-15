import { AdminNavbar } from "../../components/dashboardAdmin/AdminNavbar";
import { DashboardList } from "../../components/dashboardAdmin/DashboardList";
import { DashboardPart } from "../../components/dashboardAdmin/DashboardPart";

export const DashboardPage = () => {
  return (
    <div>
      <AdminNavbar />
      <DashboardPart />
      <DashboardList />
    </div>
  );
};
