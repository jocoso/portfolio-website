import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($name: String!, $password: String!) {
        addUser(name: $name, password: $password) {
            _id
            name
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation addProject(
        $title: String!
        $images: [String!]!
        $content: String
    ) {
        addProject(title: $title, images: $images, content: $content) {
            _id
            title
            images
            content
        }
    }
`;
