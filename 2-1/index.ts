const input = await Bun.file('input.txt').text()
const games = input.split('\n')

const config = {
  blue: 14,
  red: 12,
  green: 13,
} as const

let idTotal = 0

games.forEach((game) => {
  const { isValid, id } = isGameValid(game)

  if (isValid) idTotal += id
})

function isGameValid(game: string) {
  const id = Number(game.split(': ')[0].split(' ')[1])
  const sets = game.split(': ')[1].split('; ')

  let isValid = true

  sets.forEach((set) => {
    const cubes = extractNumberFromSet(set)

    if (
      cubes.blue > config.blue ||
      cubes.red > config.red ||
      cubes.green > config.green
    )
      isValid = false
  })

  return { id, isValid }
}

function extractNumberFromSet(set: string) {
  const cubes = set.split(', ')

  let blue = 0
  let red = 0
  let green = 0

  cubes.forEach((cube) => {
    const amount = Number(cube.split(' ')[0])
    const type = cube.split(' ')[1]

    switch (type) {
      case 'blue':
        blue += amount
        break
      case 'red':
        red += amount
        break
      case 'green':
        green += amount
        break
    }
  })

  return { blue, red, green }
}

console.log(idTotal)
