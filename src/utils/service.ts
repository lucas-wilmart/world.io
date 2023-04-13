export interface ServiceError {
  status: string
}

const service = async (endPoint: string) => {
  const result = await fetch(endPoint)

  if (!result.ok) {
    throw new Error(result.statusText)
  }

  return result.json()
}

export default service
