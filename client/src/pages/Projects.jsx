import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");

    const token = localStorage.getItem("token");

    const fetchProjects = async () => {
        try {
            const res = await API.get("/projects", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setProjects(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createProject = async (e) => {
        e.preventDefault();

        try {
            await API.post(
                "/projects",
                {
                    name,
                    description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Project Created");

            setName("");
            setDescription("");

            fetchProjects();
        } catch (error) {
            console.log(error);
            alert("Failed");
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Projects</h1>

            <form onSubmit={createProject}>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />

                <br /><br />

                <button type="submit">
                    Create Project
                </button>
            </form>

            <hr />

            <h2>All Projects</h2>

            {projects.map((project) => (
                <div
                    key={project._id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <input
                        type="email"
                        placeholder="Member Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <button
                        onClick={async () => {
                            try {
                                await API.put(
                                    `/projects/${project._id}/add-member`,
                                    { email },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    }
                                );

                                alert("Member Added");
                            } catch (error) {
                                console.log(error);
                                alert("Failed");
                            }
                        }}
                    >
                        Add Member
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Projects;