import { useEffect, useState } from "react";
import API from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/tasks",
        {
          title,
          description,
          project: "6a346063d330be670fdce72e",
          assignedTo: "6a345c0c64402dd6dc182877",
          dueDate: "2026-12-31",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Created");

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (error) {
      console.log(error);
      alert("Task Creation Failed");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Create Task
        </button>
      </form>

      <hr />

      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{task.title}</h3>

          <p>
            Description: {task.description}
          </p>

          <p>
            Status: {task.status}
          </p>

          <p>
            Assigned To: {task.assignedTo?.name}
          </p>

          <p>
            Project: {task.project?.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;