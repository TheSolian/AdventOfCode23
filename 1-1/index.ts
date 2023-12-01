const text = await Bun.file('text.txt').text()
const lines = text.split('\n')

let result = 0

lines.forEach((line) => {
  result += extractNumber(line)
})

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

console.log(result) // 54450
