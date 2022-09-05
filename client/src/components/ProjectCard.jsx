// ProjectCard inside the Projects jsx

import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function ProjectCard(props) {

    const { loading, error, data } = useQuery(GET_PROJECTS);
    if (loading) return <Spinner />;
    if (error) return <p>Something is wrong</p>;
    const project = data.projects.find(
        (project) => project.id === props.project.id
    );
    return (
        <tr>
        <td>{project.name}</td>
        <td>{project.status}</td>
        <td>
            <Link to={`/projects/${project.id}`} className="btn btn-primary">
                View
            </Link>
        </td>
        </tr>
    );
}