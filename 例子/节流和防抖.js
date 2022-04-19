const throttle = (func, time) => {
  let pre = 0
  return (...args) => {
    const now = new Date()
    if (now - pre > time) {
      func(...args)
      pre = now
    }
  }
}

const debounce = (func, delay) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
