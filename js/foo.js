const handleData = function () {
  return new Promise((resolve, reject) => {})
}
const bar = 1

let arr = [1, 2, 3, 4, 5, 6]
const res = Math.max.apply(null, arr)
console.log(res)
console.log(Math.max(...arr))
