import { randomBytes } from 'crypto'

const text = await Bun.file('text.txt').text()
const lines = text.split('\n')

const nums = {
  nine: 9,
  eight: 8,
  seven: 7,
  six: 6,
  five: 5,
  four: 4,
  three: 3,
  two: 2,
  one: 1,
}

const numsRev = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

const placeholder = [
  'two1nine', // t2o1n9e
  'eightwothree', // e8t2o3e
  'abcone2threexyz', // abco1e2t3exyz
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
  'oneight',
]

let result = 0

lines.forEach((line) => {
  result += extractNumber(formatLine(line))
})

function formatLine(line: string) {
  let formattedLine = line

  for (const [key, value] of Object.entries(numsRev)) {
    if (formattedLine.includes(key)) {
      switch (key) {
        case 'one':
          formattedLine = formattedLine.replaceAll(key, 'o1e')
          break
        case 'two':
          formattedLine = formattedLine.replaceAll(key, 't2o')
          break
        case 'three':
          formattedLine = formattedLine.replaceAll(key, 't3e')
          break
        case 'four':
          formattedLine = formattedLine.replaceAll(key, 'f4r')
          break
        case 'five':
          formattedLine = formattedLine.replaceAll(key, 'f5e')
          break
        case 'six':
          formattedLine = formattedLine.replaceAll(key, 's6x')
          break
        case 'seven':
          formattedLine = formattedLine.replaceAll(key, 's7n')
          break
        case 'eight':
          formattedLine = formattedLine.replaceAll(key, 'e8t')
          break
        case 'nine':
          formattedLine = formattedLine.replaceAll(key, 'n9e')
          break
      }
    }
  }

  return formattedLine
}

function extractNumber(line: string): number {
  const numbers = []

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    const charAsNumber = Number(char)
    if (!Number.isNaN(charAsNumber)) {
      numbers.push(charAsNumber)
    }
  }

  return Number(String(numbers[0]) + String(numbers[numbers.length - 1]))
}

console.log(result)
