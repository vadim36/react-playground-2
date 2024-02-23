import {FC, useState, MouseEvent, ChangeEvent } from 'react'

import { Button } from '../UI/Button'
import { Input } from '../UI/Input'
import { ButtonVariants } from '../utils/enums'

interface PostFormProps {
  create: (newPost: IPost) => void
}

export const PostForm:FC<PostFormProps> = ({create}) => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  function createPost(event: MouseEvent<HTMLButtonElement>):void {
    event.preventDefault()
    create({id: Date.now(), ...post})
    return setPost({title: '', body: ''})
  }

  return (
    <form className="gap-2 p-2 flex">
      <Input type="text" placeholder="Название поста..." value={post.title} 
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setPost({...post, title: event.target.value})
        }}/>
      <Input type="text" placeholder="Описание поста..." value={post.body}
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setPost({...post, body: event.target.value})
        }}/>
      <Button variant={ButtonVariants.primary} onClick={createPost}>Создать пост</Button>
    </form>
  )
}