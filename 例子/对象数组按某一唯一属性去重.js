let arr = [
  { id: '123' },
  { id: '456' },
  { id: '123' },
  { id: '777' },
  { id: '456' }
]

function uniqueArr(arr) {
  const map = arr.reduce((map, item) => {
    map[item.id] = item
    return map
  }, {})
  return Object.keys(map).map(id => map[id])
}

console.log(uniqueArr(arr))
