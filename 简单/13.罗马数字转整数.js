// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 示例 1:
// 输入: s = "III"
// 输出: 3

// 示例 2:
// 输入: s = "IV"
// 输出: 4

// 示例 3:
// 输入: s = "IX"
// 输出: 9

// 示例 4:
// 输入: s = "LVIII"
// 输出: 58
// 解释: L = 50, V= 5, III = 3

// 示例 5:
// 输入: s = "MCMXCIV"
// 输出: 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4

// 提示：
// 1 <= s.length <= 15
// s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
// 题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内
// 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
// IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。
// 关于罗马数字的详尽书写规则，可以参考 https://b2b.partcommunity.com/community/knowledge/zh_CN/detail/10753/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97#knowledge_article

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      res -= map[s[i]]
    } else {
      res += map[s[i]]
    }
  }
  return res
}
console.log(romanToInt('CMXCIX'))
