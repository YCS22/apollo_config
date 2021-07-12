import { gql } from "@apollo/client";

export const GET_CONTENT_SUB = gql`
  subscription MySubscription {
    content(order_by: { id: desc }) {
      user
      id
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
`;

export const GET_USER_CONTENT_SUB = gql`
  subscription getUserContentQuery($user: Int) {
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
