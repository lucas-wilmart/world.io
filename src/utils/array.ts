export function shuffle<T>(array: T[]) {
  let currentIndex = array.length
  let randomIndex: number
  const newArray = [...array]

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]]
  }

  return newArray
}
