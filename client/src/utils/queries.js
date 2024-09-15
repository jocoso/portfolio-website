import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query allUsers {
        users {
            _id
            name
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            name
        }
    }
`;

export const QUERY_PROJECTS = gql`
    query allProjects {
        projects {
            _id
            title
            images
            content
        }
    }
`;

export const QUERY_SINGLE_PROJECT = gql`
    query singleProject($projectId: ID!) {
        project(projectId: $projectId) {
            _id
            title
            images
            content
        }
    }
`;