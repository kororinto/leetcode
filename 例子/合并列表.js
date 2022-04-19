const list1 = [
  {
    id: 0,
    name: 'dx',
    age: 24
  },
  {
    id: 1,
    name: 'ez',
    age: 25
  }
]

const list2 = [
  {
    id: 0,
    workingAge: 2,
    property: 2000
  },
  {
    id: 1,
    workingAge: 5,
    property: 30000,
    nickname: 'qdc'
  }
]

// 暴力法 事件复杂度 o(n^2)
const merge = (list1, list2) => {
  return list1.map(item => {
    return {
      ...item,
      ...list2.find(item2 => item2.id === item.id)
    }
  })
}
console.log(merge(list1, list2))

// 哈希表法 事件复杂度 o(n)
const merge2 = (list1, list2) => {
  const map = list2.reduce((map, item) => {
    map[item.id] = item
    return map
  }, {})
  return list1.map(item => {
    return {
      ...item,
      ...map[item.id]
    }
  })
}
console.log(merge2(list1, list2))
