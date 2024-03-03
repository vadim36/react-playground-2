import {FC, ReactNode} from 'react'
import { Button } from './Button'
import { Sizes } from '../utils/enums'
import usePagination from '../hooks/usePagination'

interface PaginationProps {
  pagesCount: number,
  currentPage: number,
  changePage: (pageNumber: number) => void
}

export const Pagination:FC<PaginationProps> = ({currentPage, pagesCount, changePage}) => {
  const pages = usePagination(pagesCount)
  
  return (
    <ul className='flex justify-center gap-2 p-2'>
      {
        pages.map((pageNumber:number):ReactNode => {
          return <li key={pageNumber}>
            <Button
              className='text-4xl'
              aria-current={pageNumber === currentPage}
              size={Sizes.large}
              data-pagination-button
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </Button>
          </li>
        })
      }
    </ul>
  )
}