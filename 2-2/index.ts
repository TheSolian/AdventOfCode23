const input = await Bun.file('input.txt').text()
const games = input.split('\n')

let totalPower = 0

games.forEach((game) => {
  totalPower += extractPowerFromGame(game)
})

function extractPowerFromGame(game: string) {
  const sets = game.split(': ')[1].split('; ')

  const maxCubes = {
    blue: 0,
    red: 0,
    green: 0,
  }

  sets.forEach((set) => {
    set.split(', ').forEach((cube) => {
      const amount = Number(cube.split(' ')[0])
      const color = cube.split(' ')[1]

      if (color === 'blue' && maxCubes.blue < amount) maxCubes.blue = amount
      if (color === 'red' && maxCubes.red < amount) maxCubes.red = amount
      if (color === 'green' && maxCubes.green < amount) maxCubes.green = amount
    })
  })

  return maxCubes.blue * maxCubes.red * maxCubes.green
}

console.log(totalPower)
