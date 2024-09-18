import { gql } from "@apollo/client";

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

export const QUERY_ARTS = gql`
    query allArts {
        arts {
            _id
            image
            description
        }
    }
`;
export const QUERY_SINGLE_ART = gql`
    query singleArt($artId: ID!) {
        art(artId: $artId) {
            _id
            image
            description
        }
    }
`;

export const QUERY_POSTS = gql`
    query allPosts {
        posts {
            _id
            title
            content
            comments {
                commenterName
            }
            author {
                name
            }
            datePublished
        }
    }
`;
export const QUERY_SINGLE_POST = gql`
    query singlePost($postId: ID!) {
        post(postId: $postId) {
            _id
            title
            content
            comments {
                commenterName
                content
                date
                
            }
            author {
                _id
                name
            }
            datePublished
        }
    }
`;

export const QUERY_MESSAGES = gql`
    query allMessage {
        messages {
            _id
            name
            email
            subject
            message
        }
    }
`;
export const QUERY_SINGLE_MESSAGE = gql`
    query singleMessage($messageId: ID!) {
        message(messageId: $messageId) {
            _id
            name
            email
            subject
            message
        }
    }
`;
