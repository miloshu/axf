export default {
  host: 'http://localhost:8081/'
}
/*
// 封装排序的方法
    let arr =[
      {'price': 5.8},
      {'price': 12.6},
      {'price': 8.9}
    ]
    function orderBy (arr, type, bol = true) {
      function sortNum (a, b) {
        if(bol){
          if(type) {
            return a[type] - b[type]
          } else {
            return a - b
          }
        } else {
          if(type) {
            return b[type] - a[type]
          } else {
            return b - a
          }
        }
      }
      return arr.sort(sortNum)

      console.log(orderBy(arr, 'price'))
    }  */