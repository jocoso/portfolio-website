import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import QueryList from "../components/QueryList";
import CozyProject from "../components/CozyProject";
import { QUERY_PROJECTS } from "../utils/queries";
import { DELETE_PROJECT } from "../utils/mutation";
import Title from "../components/Title";

const Projects = () => {
    // Preparing GraphQL for project query
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || []; // No projects? No problem
    
    const [deleteProject] = useMutation(DELETE_PROJECT);
    
    const navigate = useNavigate();
    const handleDelete = async ( projectData ) => {
        if(!projectData._id) return false;

        try {

            // Execute the mutation and pass ID
            const { data } = await deleteProject({
                variables: { id: projectData._id },
            });

            // Check response
            if(data && data.removeProject) {
                console.log('Project deleted successfully');
                window.location.reload();
                return true;
            } else {
                console.log('Project couldn\'t be deleted.');
                return false;
            }


        } catch(err) {
            console.error('Error deleting project:'. err);
            return false;
        }

    }

    // Reusable error message
    const renderError = error && (
        <div className="text-center">
            <p className="text-red-500">Error: {error.message}</p>
            <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    );

    // Reusable loading state
    const renderLoading = loading && (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div>
                <p className="text-xl">Loading...</p>
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
        </div>
    );

    return (
        <main className="flex flex-col items-center min-h-screen">
            <Title className="w-full text-center mt-32 mb-10">Projects</Title>
            <div className="w-full max-w-7xl px-4">
                {renderError || renderLoading || (
                    <>
                        {projects.length > 0 ? (
                            <QueryList
                                items={projects}
                                Component={CozyProject}
                                onDelete={handleDelete}
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
                                <p>
                                    No projects found. Please check back later!
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default Projects;
