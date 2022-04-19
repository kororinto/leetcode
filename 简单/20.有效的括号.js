// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true

// 提示：
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  // 一、栈
  const rightBrackets = ['(', '[', '{']
  const leftBrackets = [')', ']', '}']
  let right = [s[0]]
  if (s.length === 1 || !rightBrackets.includes(s[0])) {
    return false
  }
  for (let i = 1; i < s.length; i++) {
    if (rightBrackets.includes(s[i])) {
      right.push(s[i])
    } else {
      const index = leftBrackets.indexOf(s[i])
      if (right[right.length - 1] !== rightBrackets[index]) {
        return false
      } else {
        right.pop()
      }
    }
  }
  return !right.length

  // 二、字符串替换
  // while (1) {
  //   const len = s.length
  //   s = s.replace('()', '')
  //   s = s.replace('[]', '')
  //   s = s.replace('{}', '')
  //   if (s.length === len) {
  //     return !s.length
  //   }
  // }
}
console.log(isValid('([])[]'))
