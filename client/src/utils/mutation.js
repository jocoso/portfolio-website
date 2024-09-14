import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($name: String!, $password: String!) {
        addUser(name: $name, password: $password) {
            _id
            name
            password
        }
    }
`;