//
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

// GraphQL Calls...
import { QUERY_PROJECTS } from "../utils/queries";
import { DELETE_PROJECT } from "../utils/mutation";
import { ADD_PROJECT } from "../utils/mutation";

// Components...
import QueryList from "../components/QueryList";
import CozyProject from "../components/CozyProject";
import Title from "../components/Title";

// TODO: Create a utility tool that converts `title` into `Title`, and `coverUrl` to `Cover Url`
// Utils...
import { isLoggedIn } from "../utils/util";

const formTitle = "Add a Project";
const projectInputs = [
    {
        name: "title",
        type: "text",
        id: "project-title",
        placeholder: "Enter project title",
    },
    {
        name: "coverUrl",
        type: "text",
        id: "project-imgurl-link",
        placeholder: "Enter cover image URL",
    },
    {
        name: "content",
        type: "textarea",
        id: "project-content",
        placeholder: "Enter project content",
    },
    {
        type: "text",
        name: "githubLink",
        id: "project-githuburl-link",
        placeholder: "Enter GitHub URL",
    },
    {
        type: "text",
        name: "websiteLink",
        placeholder: "Enter website URL",
        id: "project-website-link",
    },
];

// Given an array of objects `input`, render a form.
const FormComponent = ({ formTitle, inputs, onSubmit }) => {
    formTitle = formTitle || "Form";

    // Loop through each item in the array.
    const stateInput = {};
    inputs.forEach((input) => {
        stateInput[input.name] = "";
    });

    const [newForm, setNewForm] = useState({ ...stateInput });

    const onFormChange = (e) => {
        setNewForm((prevProject) => ({
            ...prevProject,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <Title tier={4}>{formTitle}</Title>
            <form className="flex flex-col my-10">
                {inputs.map((input) => {
                    return input.type !== "textarea" ? (
                        <>
                            <label htmlFor={input.name}>{input.name}</label>
                            <input
                                {...input}
                                value={newForm[input.name]}
                                onChange={onFormChange}
                            />
                        </>
                    ) : (
                        <>
                            <label htmlFor={input.name}>{input.name}</label>
                            <textarea
                                {...input}
                                value={newForm[input.name]}
                                onChange={onFormChange}
                            />
                        </>
                    );
                })}
                <input type="submit" id="project-submit" onClick={(e) => onSubmit(e, newForm)} />
            </form>
        </>
    );
};

const Projects = () => {
    // GraphQL query for fetching projects.
    const { loading, error, data, refetch } = useQuery(QUERY_PROJECTS);
    const [addProject] = useMutation(ADD_PROJECT);

    const projects = data?.projects || []; // Make sure projects variable is never undefined.

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        update(cache, { data: { removeProject } }) {
            cache.modify({
                fields: {
                    projects(existingProjects = []) {
                        // Deleted projects will be filter out.
                        return existingProjects.filter(
                            (projectRef) =>
                                projectRef.__ref !==
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
                refetchQueries: [{ query: QUERY_PROJECTS }],
            });

            // If mutation execution works...
            if (data?.removeProject) {
                console.log("Project deleted successfully");
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
    const ErrorComponent = ({ message, retry }) => (
        <div className="text-center">
            <p className="text-red-500">Error: {message}</p>
            <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                onClick={retry}
            >
                Retry
            </button>
        </div>
    );

    const handleAddNewProject = async (e, data) => {
        e.preventDefault();
        console.log(data)
        const { title, coverUrl, content, websiteLink, githubLink } = data;

        if (!title || !coverUrl || !content || !githubLink) {
            alert(
                "Unable to submit project. One or multiple information requested is missing."
            );
            return;
        }

        try {
            // Execute mutation and pass the project ID.
            await addProject({
                variables: {
                    input: {
                        title,
                        images: [coverUrl],
                        content,
                        websiteLink,
                        githubLink,
                    },
                },
                optimisticResponse: {
                    addProject: {
                        __typename: "Project",
                        _id: `temp-id-${Date.now()}`, // Temporary ID
                        title,
                        images: [coverUrl],
                        content,
                        websiteLink,
                        githubLink,
                    },
                },
                update(cache, { data: { addProject } }) {
                    cache.modify({
                        fields: {
                            projects(existingProjects = []) {
                                const newProjectRef = cache.writeFragment({
                                    data: addProject,
                                    fragment: gql`
                                        fragment NewProject on Project {
                                            _id
                                            title
                                            images
                                            content
                                            websiteLink
                                            githubLink
                                        }
                                    `,
                                });
                                return [...existingProjects, newProjectRef];
                            },
                        },
                    });
                },
            });

            // Clear form after successful add
        } catch (error) {
            alert("Error adding project: " + error.message);
        }
    };


    // Retrieve data from mongoose and display the Projects.
    const ProjectDisplayerComponent = () => (
        <div className="w-full max-w-7xl px-4">
            {error ? (
                <ErrorComponent
                    message={error.message}
                    retry={() => refetch()}
                />
            ) : loading ? (
                <LoadingComponent />
            ) : (
                <>
                    {projects.length > 0 ? (
                        <QueryList
                            items={projects}
                            Component={CozyProject}
                            onDelete={handleDelete}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center h-max justify-center items-center w-full"
                            keyExtractor={(project) => project._id}
                        />
                    ) : (
                        <div className="text-center">
                            <p>No projects found. Please check back later.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );

    const LoadingComponent = () => (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-xl">Loading...</p>
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
    );

    // Main return.
    return (
        <main className="flex flex-col items-center min-h-screen">
            <Title className="w-full text-center mt-32 mb-10">Projects</Title>
            <ProjectDisplayerComponent />
            {isLoggedIn() && (
                <FormComponent
                    inputs={projectInputs}
                    formTitle={formTitle}
                    onSubmit={handleAddNewProject}
                />
            )}
        </main>
    );
};

export default Projects;
