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
export const CREATE_USER = gql`
