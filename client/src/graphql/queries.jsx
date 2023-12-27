// client/src/graphql/queries.js

import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query GetMessages($sender: String!, $recipient: String!) {
    messages(sender: $sender, recipient: $recipient) {
      id
      sender
      recipient
      text
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      username
      displayName
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile($username: String!) {
    userProfile(username: $username) {
      username
      displayName
      
    }
  }
`;


