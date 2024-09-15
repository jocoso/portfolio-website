import CozyProject from '../CozyProject';

const ProjectList = ({ projects = [] }) => {

    if(!projects.length) {
        return <h3>No Projects Yet</h3>;
    }

    return(
        <>
            <div>
                {projects &&
                    projects.map((project) => {
                        return <CozyProject key={project._id} projectData={project} />
                    })
                }
            </div>
        </>
    );
};

export default ProjectList;