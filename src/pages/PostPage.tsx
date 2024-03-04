import {FC, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import useFetching from '../hooks/useFetching'
import PostService from '../API/PostService'

type RouteParams = {
  id?: string
}

export const PostPage:FC = () => {
  const {id} = useParams<RouteParams>()
  const [post, setPost] = useState<IPost>()
  const [fetchPost, isPostLoading, postLoadingError] = 
    useFetching<void[], Promise<void>>(async () => {
      const postData: IPost = await PostService.getById(Number(id))
      return setPost(postData)
    })

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <h1 className='heading'>Пост {id}</h1>
      {isPostLoading && !postLoadingError
        ? <h1 className="heading">Загрузка данных поста...</h1>
        : <>
            <h2 className='heading text-2xl'>{post?.title}</h2>
            <p className='text-lg text-center border-2 border-sky-500'>{post?.body}</p>
          </>
      }

      {postLoadingError
        && <h1 className="heading">Возникла ошибка {isPostLoading}</h1>
      }
    </>
  )
}