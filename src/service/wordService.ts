import * as fs from 'fs'

const assetsDirectoryPath = `${__dirname}/../../assets`
const wordFilePath = `${assetsDirectoryPath}/words_tr.txt`

export function getWordByDate(date: Date): string {
  const words = fs.readFileSync(wordFilePath).toString().split('\n')
  const oneDayMillis = 1000 * 60 * 60 * 24
  const curDate = Math.floor(date.getTime() / oneDayMillis)
  const wordIndex = curDate % words.length
  return words[wordIndex]
}

export function isWordExist(word: string): boolean {
  const firstLetter = word.substring(0, 1)
  const fileName = firstLetter === 'ı' ? 'i1' : firstLetter
  const words = fs.readFileSync(`${assetsDirectoryPath}/dictionary/${fileName}.txt`).toString().split('\n')
  return words.some((w) => w.toLocaleLowerCase('tr') === word.toLocaleLowerCase('tr'))
}
