import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
    const [data, setData] = useState({
        totalTasks: 0,
        pendingTasks: 0,
        completedTasks: 0,
        inProgressTasks: 0,
        overdueTasks: 0,
    });
    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await API.get("/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setData(res.data);
            } catch (error) {
                console.log(
                    "Dashboard Error:",
                    error.response?.data || error
                );
            }
        };

        fetchDashboard();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>

            <div>
                <Link to="/projects">
                    Projects
                </Link>

                {" | "}

                <Link to="/tasks">
                    Tasks
                </Link>
            </div>

            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                }}
            >
                Logout
            </button>

            <br />

            <h3>Total Tasks: {data.totalTasks}</h3>

            <h3>Pending Tasks: {data.pendingTasks}</h3>

            <h3>Completed Tasks: {data.completedTasks}</h3>

            <h3>In Progress Tasks: {data.inProgressTasks}</h3>

            <h3>
                Overdue Tasks: {data.overdueTasks}
            </h3>
        </div>
    );
}

export default Dashboard;