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
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div>
                    <p className="text-xl">Loading...</p>
                    {/* Add a spinner or skeleton loader */}
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center min-h-screen">
            <Title className="w-full text-center mt-32 mb-10">Projects</Title>
            <div className="w-full max-w-7xl px-4">
                {error && (
                    <div className="text-center">
                        <p className="text-red-500">Error: {error.message}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                            onClick={() => window.location.reload()}
                        >
                            Retry
                        </button>
                    </div>
                )}

                {projects.length > 0 ? (
                    <QueryList
                        items={projects}
                        Component={CozyProject}
                        className="
                            grid 
                            grid-cols-1 
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            gap-10
                            text-center
                            h-max
                            justify-center
                            items-center
                            w-full
                        "
                    />
                ) : (
                    <div className="text-center">
                        <p>No projects found. Please check back later!</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Projects;
