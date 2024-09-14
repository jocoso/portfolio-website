import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query allUsers {
        users {
            _id
            name
            password
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            name
            password
        }
    }
`