import { useQuery } from "@apollo/client";

import QueryList from "../components/QueryList";
import CozyProject from "../components/CozyProject";

import { QUERY_PROJECTS } from "../utils/queries";
import Title from "../components/Title";

const Projects = () => {
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];

    return (
        <main>
            <Title>Projects</Title>
            {error && (
                <div>
                    <p>Error: {error.message}</p>
                    {/* Optionally provide more helpful messaging */}
                    <button onClick={() => window.location.reload()}>
                        Retry
                    </button>
                </div>
            )}
            {loading ? (
                <div>
                    <p>Loading...</p>
                    {/* You can use a spinner or a skeleton loader here for better UX */}
                </div>
            ) : projects.length > 0 ? (
                <QueryList items={projects} Component={CozyProject} />
            ) : (
                <div>No projects found. Please check back later!</div>
            )}
        </main>
    );
};

export default Projects;
