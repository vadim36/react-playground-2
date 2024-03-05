import {FC} from 'react'

interface CommentProps {
  comment: IComment
}

export const Comment:FC<CommentProps> = (props) => {
  return (
    <li>
      <strong>{props.comment.id} {props.comment.name}</strong>
      <strong>{props.comment.email}</strong>
      <p>{props.comment.body}</p>
    </li>
  )
}