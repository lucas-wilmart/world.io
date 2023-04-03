const endPoint = 'https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json'

export const getPage = (title: string) => fetch(`${endPoint}$page=${title}`)
