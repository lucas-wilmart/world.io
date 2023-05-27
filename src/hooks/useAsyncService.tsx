import { useState } from 'react'

interface UseServiceParameters<Result> {
  onError?: (error: unknown) => void
  onSuccess?: (result: Result) => void
}

type PromiseResult<T extends (...args: any[]) => Promise<any>> = Awaited<ReturnType<T>>

export default function useAsyncService<ServiceCallBack extends (...args: any[]) => Promise<any>>(
  callback: ServiceCallBack,
  params?: UseServiceParameters<PromiseResult<ServiceCallBack>>
) {
  const [pending, setPending] = useState(false)
  const [data, setData] = useState<PromiseResult<ServiceCallBack>>()
  const [error, setError] = useState<unknown | undefined>()

  const request = async (...args: Parameters<ServiceCallBack>) => {
    setPending(true)
    try {
      const result = await callback(...args)
      setData(result)

      if (params?.onSuccess) {
        params.onSuccess(result)
      }
    } catch (error) {
      setError(error)

      if (params?.onError) {
        params.onError(error)
      }
    }
    setPending(false)
  }

  const clearData = () => {
    setData(undefined)
  }

  return {
    request,
    pending,
    data,
    clearData,
    error
  }
}
