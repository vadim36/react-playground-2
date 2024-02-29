import { useState } from "react"

export default function useFetching<T extends Function>(callback: T):useFetchingType {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  async function fetching():Promise<void> {
    try {
      setIsLoading(true)
      await callback()
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