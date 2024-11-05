//
import { useMutation, useQuery } from "@apollo/client";
import { useState, memo, useCallback } from "react";

// GraphQL Calls...
import { QUERY_PROJECTS } from "../utils/queries";
import { DELETE_PROJECT } from "../utils/mutation";
import { ADD_PROJECT } from "../utils/mutation";

// Components...
import QueryList from "../components/QueryList";
import CozyProject from "../components/CozyProject";
import Title from "../components/Title";

// Utils...
import { isLoggedIn } from "../utils/util";

const Projects = () => {
    // GraphQL query for fetching projects.
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || []; // Make sure projects variable is never undefined.
    const [newProject, setNewProject] = useState({
        title: "",
        coverUrl: "",
        content: "",
    });

    const [addProject] = useMutation(ADD_PROJECT);

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        update(cache, { data: { removeProject } }) {
            cache.modify({
                fields: {
                    Projects(existingProjects = []) {
                        // Deleted projects will be filter out.
                        return existingProjects.filter(
                            (projectRef) =>
                                projectRef.__ref !=
                                `Project:${removeProject._id}`
                        );
                    },
                },
            });
        },
    }); // GraphQL mutation for deleting a project.

    // This function handles project deletion.
    const handleDelete = async (projectData) => {
        if (!projectData._id) return false; // A valid mongoDB id is required for the function to work.

        try {
            // Execute mutation and pass the project ID.
            const { data } = await deleteProject({
                variables: { id: projectData._id },
            });

            // If mutation execution works...
            if (data?.removeProject) {
                console.log("Project deleted successfully");
                window.location.reload();
                return true;
            } else {
                // mutation calling executes without errors but project data could not be deleted.
                console.error("Project couldn't be deleted.");
                return false;
            }
        } catch (err) {
            console.error("Error deleting project:", err);
            return false;
        }
    };

    // Error message component.
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

    // Loading state component.
    const renderLoading = loading && (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-xl">Loading...</p>
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
    );

    // Manages onChange for newProject form.
    const onNewProjectChange = (e) => {
        setNewProject((prevProject) => ({
            ...prevProject,
            [e.target.name]: e.target.value,
        }));
    };

    const handleAddNewProject = async (e) => {
        e.preventDefault();
        const { title, coverUrl, content } = newProject;

        if (!title || !coverUrl || !content) {
            console.log("No info")
            throw new Error(
                "Unable to submit project. One or multiple information requested is missing."
            );
        }

        // Execute mutation and pass the project ID.
        const { data } = await addProject({
            variables: {
                title: title,
                images: [coverUrl],
                content: content,
            },
        });
    };

    // Updates Inputs containing objects

    // Render a form which triggers the creation of a new Project when submitted.
    // const AddProjectFormComponent = () => (
    //     <form>
    //         {/* Title Input */}
    //         <label htmlFor="project-title">Title</label>
    //         <input
    //             name="title"
    //             type="text"
    //             id="project-title"
    //             value={newProject.title}
    //             onChange={onNewProjectChange}
    //         />
    //         {/* Image Link Input */}
    //         <label htmlFor="project-imgurl-link">URL to Image</label>
    //         <input
    //             name="coverUrl"
    //             type="text"
    //             id="project-imgurl-link"
    //             value={newProject.coverUrl}
    //             onChange={onNewProjectChange}
    //         />
    //         {/* Content Input */}
    //         <label htmlFor="project-content">Content</label>
    //         <textarea
    //             name="content"
    //             id="project-content"
    //             value={newProject.content}
    //             onChange={onNewProjectChange}
    //         ></textarea>

    //         <input type="submit" id="project-submit" value="Add Project" />
    //     </form>
    // );

    // AddProjectFormComponent.displayName = "AddProjectFormComponent";

    // Main return.
    return (
        <main className="flex flex-col items-center min-h-screen">
            <Title className="w-full text-center mt-32 mb-10">Projects</Title>
            <div className="w-full max-w-7xl px-4">
                {renderError || renderLoading || (
                    <>
                        {projects.length > 0 ? ( // If there is any projects.
                            <QueryList
                                items={projects}
                                Component={CozyProject}
                                onDelete={handleDelete}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center h-max justify-center items-center w-full"
                            />
                        ) : (
                            // It will trigger if there aren't any projects in the database.
                            <div className="text-center">
                                <p>
                                    No projects found. Please check back later.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
            {isLoggedIn() && (
                // Displays a form for adding a new project (Only visible by admin).
                <form>
                    {/* Title Input */}
                    <label htmlFor="project-title">Title</label>
                    <input
                        name="title"
                        type="text"
                        id="project-title"
                        value={newProject.title}
                        onChange={onNewProjectChange}
                    />
                    {/* Image Link Input */}
                    <label htmlFor="project-imgurl-link">URL to Image</label>
                    <input
                        name="coverUrl"
                        type="text"
                        id="project-imgurl-link"
                        value={newProject.coverUrl}
                        onChange={onNewProjectChange}
                    />
                    {/* Content Input */}
                    <label htmlFor="project-content">Content</label>
                    <textarea
                        name="content"
                        id="project-content"
                        value={newProject.content}
                        onChange={onNewProjectChange}
                    ></textarea>

                    <input
                        type="submit"
                        id="project-submit"
                        value="Add Project"
                        onClick={handleAddNewProject}
                    />
                </form>
            )}
        </main>
    );
};

export default Projects;
