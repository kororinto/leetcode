// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 示例 1：
// 输入：x = 121
// 输出：true

// 示例 2：
// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数

// 示例 3：
// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数

// 示例 4：
// 输入：x = -101
// 输出：false

// 提示：-231 <= x <= 231 - 1

// 进阶：能不将整数转为字符串来解决这个问题吗
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  // 法一：转字符串 比对左右两边
  // const str = x.toString()
  // const len = str.length
  // for (let i = 0; i < len / 2; i++) {
  //   if (str[i] !== str[len - 1 - i]) {
  //     return false
  //   }
  // }
  // return true

  // 法二：翻转比对字符串
  // const str = x.toString()
  // const str2 = str.split('').reverse().join('')
  // const len = Math.floor(str.length / 2)
  // return str.slice(0, len) === str2(0, len)

  // 法三：数字翻转
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    // 该数为负数 或 个位数为0但该数不为0时(个位数为0说明开头也为0，只有数字0符合)
    return false
  }
  let reversedNum = 0
  while (x > reversedNum) {
    reversedNum = reversedNum * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return x === Math.floor(reversedNum / 10) || x === reversedNum
}
console.log(isPalindrome(12321))
