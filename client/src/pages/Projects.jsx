import { useQuery } from "@apollo/client";
import ProjectList from "../components/ProjectList";
import { QUERY_PROJECTS } from "../utils/queries";
import Title from "../components/Title";

const Projects = () => {
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];

    return (
        <main>
            <div>
                <div>
                    <Title>Projects</Title>
                    {error && <div>Error: {error.message}</div>}
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        projects.length > 0 ? (
                        <ProjectList projects={projects} />
                        ) : (
                            <div>No projects found.</div>
                        )
                    )}
                </div>
            </div>
        </main>
    );
};

export default Projects;
