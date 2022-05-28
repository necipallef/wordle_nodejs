import * as fs from 'fs'

const wordFilePath = `${__dirname}/../../assets/words_tr.txt`

export function getWordByDate(date: Date): string {
  const words = fs.readFileSync(wordFilePath).toString().split('\n')
  const oneDayMillis = 1000 * 60 * 60 * 24
  const curDate = Math.floor(date.getTime() / oneDayMillis)
  const wordIndex = curDate % words.length
  return words[wordIndex]
}

export function isWordExist(word: string): boolean {
  const words = fs.readFileSync(wordFilePath).toString().split('\n')
  return words.some((w) => w.toLowerCase() === word.toLowerCase())
}
