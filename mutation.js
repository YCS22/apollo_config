import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation UserMutation($username: String, $password: String) {
    insert_users(objects: { username: $username, password: $password }) {
      affected_rows
      returning {
        id
        username
      }
    }
  }
`;

export const CREATE_CONTENT= gql`
mutation CreateContent($header: String, $description: String, $user: Int) {
  insert_content(objects: {header: $header, description: $description, user: $user}) {
    affected_rows
    returning {
      header
      description
      user
      id
    }
  }
}
`


export const CREATE_COMMENT= gql`
mutation CreateComment($description: String, $user: Int, $content_id: Int) {
  insert_comment(objects: {comment_description: $description, user: $user, content_id: $content_id}) {
    returning {
      content_id
      id
      user
      comment_description
    }
  }
}
`
