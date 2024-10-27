//
import { useMutation, useQuery } from "@apollo/client";

// GraphQL Calls.
import { QUERY_PROJECTS } from "../utils/queries";
import { DELETE_PROJECT } from "../utils/mutation";

// Components. 
import QueryList    from "../components/QueryList";
import CozyProject  from "../components/CozyProject";
import Title        from "../components/Title";

const Projects = () => {
    
    // GraphQL query for fetching projects.
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || []; // Make sure projects variable is never undefined.

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        update(cache, { data: { removeProject } }) {
            cache.modify({
                fields: {
                    Projects(existingProjects = []) {
                        // Deleted projects will be filter out.
                        return existingProjects.filter(
                            (projectRef) => projectRef.__ref != `Project:${removeProject._id}`
                        );
                    },
                },
            });
        },
    }); // GraphQL mutation for deleting a project.

    // This function handles project deletion.
    const handleDelete = async (projectData) => {

        if(!projectData._id) return false; // A valid mongoDB id is required for the function to work.

        try {
            
            // Execute mutation and pass the project ID.
            const { data } = await deleteProject({
                variables: { id: projectData._id }
            });

            // If mutation execution works...
            if(data?.removeProject) {
                console.log("Project deleted successfully");
                window.location.reload();
                return true;
            } else { // mutation calling executes without errors but project data could not be deleted.
                console.error("Project couldn't be deleted.");
                return false;
            }
        } catch(err) {
            console.error("Error deleting project:", err);
            return false;

        }
    };

    // Error message component.
    const renderError = error && (
        <div className="text-center">
            <p className="text-red-500">
                Error: {error.message}
            </p>
            <button 
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    );

    // Loading state component.
    const renderLoading = loading && (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-xl">Loading...</p>
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
    );

    // Main return.
    return(
        <main className="flex flex-col items-center min-h-screen">
            <Title className="w-full text-center mt-32 mb-10">Projects</Title>
            <div className="w-full max-w-7xl px-4">
                {renderError || renderLoading || (
                    <>
                        {projects.length > 0 ? (  // If there is any projects.
                            <QueryList 
                                items={projects} 
                                Component={CozyProject} 
                                onDelete={handleDelete} 
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center h-max justify-center items-center w-full"
                            />
                        ) : ( // It will trigger if there aren't any projects in the database.
                            <div className="text-center">
                                <p>No projects found. Please check back later.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default Projects;

