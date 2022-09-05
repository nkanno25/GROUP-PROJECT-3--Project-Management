import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS)
    ;

    if (loading) return <Spinner />;
    if (error) return <p>Something is wrong</p>; 

  return (
    <div className="table-responsive">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </tbody>
        </table>
    </div>
    );
}
