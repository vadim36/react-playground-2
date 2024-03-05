import {FC, useEffect, useState, ReactNode} from 'react'
import { useParams } from 'react-router-dom'
import useFetching from '../hooks/useFetching'
import PostService from '../API/PostService'
import { Comment } from '../components/Comment'

type RouteParams = {
  id?: string
}

export const PostPage:FC = () => {
  const {id} = useParams<RouteParams>()
  const [post, setPost] = useState<IPost>()
  const [comments, setComments] = useState<IComment[]>()
  const [fetchPost, isPostLoading, postLoadingError] = 
    useFetching<void[], Promise<void>>(async () => {
      const postData: IPost = await PostService.getById(Number(id))
      return setPost(postData)
    })

  const [fetchComments, isCommentsLoading, commentsLoadingError] = 
    useFetching<void[], void>(async () => {
      const commentsData: IComment[] = await PostService.getComments(Number(id))
      return setComments(commentsData)
    })

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  return (
    <>
      <h1 className='heading'>Пост {id}</h1>
      {isPostLoading && !postLoadingError
        ? <h2 className="heading text-xl">Загрузка данных поста...</h2>
        : <>
            <h2 className='heading text-2xl'>{post?.title}</h2>
            <p className='text-lg text-center border-2 border-sky-500'>{post?.body}</p>
          </>
      }

      {postLoadingError || commentsLoadingError
        && <h2 className="heading text-xl">Возникла ошибка 
          {postLoadingError || commentsLoadingError}
        </h2>
      }

      <hr />

      <h2 className='heading text-3xl'>Комментарии:</h2>
      {isCommentsLoading && !commentsLoadingError
        ? <h2 className="heading text-xl">Загрузка комментариев...</h2>
        : <ul>
          {comments?.map((comment: IComment):ReactNode => {
            return <Comment key={comment.id} comment={comment}/>
          })}
        </ul>
      }
    </>
  )
}