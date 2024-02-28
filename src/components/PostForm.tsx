import {FC, MouseEvent, ChangeEvent, useState } from 'react'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'

interface PostFormProps {
  create: (newPost: IPost) => void
}

interface IPostFormFields {
  title: string,
  body: string
}

export const PostForm:FC<PostFormProps> = ({create}) => {
  const [post, setPost] = useState<IPostFormFields>({
    title: '',
    body: ''
  })
  const [validateError, setValidateError] = useState<string>('')

  function createPost(event: MouseEvent<HTMLButtonElement>):void {
    event.preventDefault()
    if(!validateForm()) return
    create({id: Date.now(), ...post})
    return setPost({title: '', body: ''})
  }

  function validateForm():void | boolean {
    if (post.title.length < 3 || post.body.length < 3) {
      setValidateError('В одном из полей недостаточно символов')
      return false
    }

    if(post.title.length > 15 || post.title.length > 50) {
      setValidateError('В одном из полей слишком много символов')
      return false
    }

    setValidateError('')
    return true
  }

  return (
    <form className="gap-2 flex has-[strong]:outline outline-2 outline-red-500 py-2">
      <Input type="text" placeholder="Название поста..." value={post.title} 
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setPost({...post, title: event.target.value})
        }}/>
      <Input type="text" placeholder="Описание поста..." value={post.body}
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setPost({...post, body: event.target.value})
        }}/>
      <Button onClick={createPost}>Создать пост</Button>
      {
        validateError &&
          <strong aria-label='Validation error' className='text-red-500 text-2xl'>
            {validateError}
          </strong>
      }
    </form>
  )
}