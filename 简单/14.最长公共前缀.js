// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 提示：
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  // 一、横向扫描法
  // let temp = strs[0]
  // let res = temp
  // for (let i = 1; i < strs.length; i++) {
  //   const str = strs[i]
  //   const len = str.length
  //   res = ''
  //   for (let j = 0; j < len; j++) {
  //     if (temp[j] !== str[j]) {
  //       break
  //     }
  //     res = res.concat(str[j])
  //   }
  //   temp = res
  // }
  // return res

  // 二、纵向扫描法
  // let count = strs.length
  // let len = strs[0].length
  // for (let i = 0; i < len; i++) {
  //   let char = strs[0][i]
  //   for (let j = 1; j < count; j++) {
  //     if (i === strs[j].length || strs[j][i] !== char) {
  //       return strs[0].slice(0, i)
  //     }
  //   }
  // }
  // return strs[0]

  // 三、分治法
  // /**
  //  * 求两个字符串公共前缀的方法
  //  * @param {string} str1
  //  * @param {string} str2
  //  * @return {string}
  //  */
  // const commonPrefix = (str1, str2) => {
  //   const len = Math.min(str1.length, str2.length)
  //   let index = 0
  //   while (index < len && str1[index] === str2[index]) {
  //     index++
  //   }
  //   return str1.slice(0, index)
  // }

  // /**
  //  * 把源字符串数组进行分治求公共前缀
  //  * @param {number} left
  //  * @param {number} right
  //  * @return {string}
  //  */
  // const lcp = (left, right) => {
  //   if (left === right) {
  //     return strs[left]
  //   }
  //   const mid = left + Math.floor((right - left) / 2)
  //   const leftLcp = lcp(left, mid)
  //   const rightLcp = lcp(mid + 1, right)
  //   return commonPrefix(leftLcp, rightLcp)
  // }

  // return lcp(0, strs.length - 1)

  // 四、排序比较头尾
  strs.sort() // 如果不希望改变原数组可拷贝数组再排序
  const first = strs[0]
  const last = strs[strs.length - 1]
  const len = Math.min(first.length, last.length)
  let index = 0
  while (index < len && first[index] === last[index]) {
    index++
  }
  return first.slice(0, index)
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
