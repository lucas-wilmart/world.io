const service = async (endPoint: string) => {
  const result = await fetch(endPoint)

  return result.json()
}
