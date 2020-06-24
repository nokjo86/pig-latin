const pigLatin = (text) => {
  const arrayOfWords = text.split(" ")
  const pigArray = arrayOfWords.map((word) => {
    const letter = word[0]
    console.log(letter)
    const arrayOfLetters = word.split("")
    arrayOfLetters.shift()
    const newWord = arrayOfLetters.join("")
    return `${newWord}${letter}ay`
  })
  return pigArray.join(" ")
}