export default (arr,order) => {
  const res = []
  const originMap = new Map()
  for(let n of arr){
    originMap.set(n.short,n)
  }
  for(let i = 0;i<order.length;i++){
    res.push(originMap.get(order[i]))
  }
  return res
}