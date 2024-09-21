import { useQuery } from "@apollo/client";

import QueryList from "../components/QueryList";
import CozyProject from "../components/CozyProject";

import { QUERY_PROJECTS } from "../utils/queries";
import Title from "../components/Title";

const Projects = () => {
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];

    if (loading) {
        return (
            <main className="flex flex-col">
                <div>
                    <p>Loading...</p>
                    {/* You can use a spinner or a skeleton loader here for better UX */}
                </div>
            </main>
        );
    }

    return (
        <main className="flex flex-col">
            <Title className="w-full text-center mt-32 mb-10">Projects</Title>
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
                {projects.length > 0 ? (
                    <div
                        className=" "
                    >
                        <QueryList 
                                items={projects} 
                                Component={CozyProject} 
                                className="
                                    grid 
                                    grid-cols-autofill-400 
                                    grid-rows-auto
                                    text-center
                                    h-max 
                                    gap-10
                                    justify-center
                                    grid-flow-col-dense
                                " 
                        />
                    </div>
                ) : (
                    <div>No projects found. Please check back later!</div>
                )}
            </div>
        </main>
    );
};

export default Projects;
