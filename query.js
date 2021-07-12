import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($username: String) {
    users(where: { username: { _eq: $username } }) {
      id
      username
      password
    }
  }
`;

export const GET_USER_CONTENT = gql`
  query getUserContentQuery($user: Int) {
    content(where: { user: { _eq: $user } }) {
      id
      header
      description
      user
      comments {
        content_id
        comment_description
        id
        user
      }
      description
    }
  }
`;

export const GET_ALL_CONTENT = gql`
query getUserContentQuery {
  content {
    id
    user
    header
    description
    comments {
      user
      id
      content_id
      comment_description
    }
  }
}
`
