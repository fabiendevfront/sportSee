import Sidebar from "../layout/Sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard__content">
                <h2>Dashboard</h2>
            </div>
        </div>
    );
};

export default Dashboard;