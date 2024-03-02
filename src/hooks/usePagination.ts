import { useMemo } from "react"

export default function usePagination(pagesCount: number):number[] {
  const pages = useMemo(() => {
    const result: number[] = []
    for (let index = 0; index < pagesCount; index++) {
      result.push(index + 1)
    }
    return result
  }, [pagesCount])

  return pages
}