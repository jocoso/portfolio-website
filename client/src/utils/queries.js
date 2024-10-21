import { gql } from "@apollo/client";

// Define reusable fragments
const USER_FIELDS = gql`
    fragment UserFields on User {
        _id
        name
    }
`;

const PROJECT_FIELDS = gql`
    fragment ProjectFields on Project {
        _id
        title
        images
        content
    }
`;

const ART_FIELDS = gql`
    fragment ArtFields on Art {
        _id
        name
        image
        description
    }
`;

const POST_FIELDS = gql`
    fragment PostFields on Post {
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
`;

const MESSAGE_FIELDS = gql`
    fragment MessageFields on Message {
        _id
        name
        email
        subject
        message
    }
`;

// Queries using fragments
export const QUERY_USER = gql`
    query allUsers {
        users {
            ...UserFields
        }
    }
    ${USER_FIELDS}
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
            ...UserFields
        }
    }
    ${USER_FIELDS}
`;

export const QUERY_PROJECTS = gql`
    query allProjects {
        projects {
            ...ProjectFields
        }
    }
    ${PROJECT_FIELDS}
`;

export const QUERY_SINGLE_PROJECT = gql`
    query singleProject($projectId: ID!) {
        project(_id: $projectId) {
            ...ProjectFields
        }
    }
    ${PROJECT_FIELDS}
`;

export const QUERY_ARTS = gql`
    query allArts {
        arts {
            ...ArtFields
        }
    }
    ${ART_FIELDS}
`;

export const QUERY_SINGLE_ART = gql`
    query singleArt($artId: ID!) {
        art(artId: $artId) {
            ...ArtFields
        }
    }
    ${ART_FIELDS}
`;

export const QUERY_POSTS = gql`
    query allPosts {
        posts {
            ...PostFields
        }
    }
    ${POST_FIELDS}
`;

export const QUERY_SINGLE_POST = gql`
    query singlePost($id: ID!) {
        post(_id: $id) {
            ...PostFields
        }
    }
    ${POST_FIELDS}
`;

export const QUERY_MESSAGES = gql`
    query allMessages {
        messages {
            ...MessageFields
        }
    }
    ${MESSAGE_FIELDS}
`;

export const QUERY_SINGLE_MESSAGE = gql`
    query singleMessage($messageId: ID!) {
        message(messageId: $messageId) {
            ...MessageFields
        }
    }
    ${MESSAGE_FIELDS}
`;
