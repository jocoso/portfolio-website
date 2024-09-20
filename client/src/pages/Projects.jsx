import { useQuery } from "@apollo/client";

import QueryList from "../components/QueryList";
import CozyProject from "../components/CozyProject";

import { QUERY_PROJECTS } from "../utils/queries";
import Title from "../components/Title";

const Projects = () => {
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];

    return (
        <main className="flex flex-col">
            <Title className="w-full text-center mt-36">Projects</Title>
            <div>
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
                    <div
                        className=" grid 
                                    grid-cols-1 
                                    sm:grid-cols-2 
                                    md:grid-cols-3 
                                    justify-items-center 
                                    text-center 
                                    w-full 
                                    h-max 
                                    gap-1
                                    grid-flow-col-dense"
                    >
                        <QueryList items={projects} Component={CozyProject} />
                    </div>
                ) : (
                    <div>No projects found. Please check back later!</div>
                )}
            </div>
        </main>
    );
};

export default Projects;
