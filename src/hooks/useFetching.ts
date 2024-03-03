import { useState } from "react"

export default function useFetching<T extends Array<unknown>, A>(callback: (...args: T) => A):useFetchingType {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  async function fetching(...args: T):Promise<void> {
    try {
      setIsLoading(true)
      setError('')
      await callback(...args)
    } catch (errorData: unknown) {
      const errorMessage: string = (errorData as Error)?.message ?? 'Unexpected error'
      setError(errorMessage)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}