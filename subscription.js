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
