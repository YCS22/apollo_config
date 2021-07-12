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
