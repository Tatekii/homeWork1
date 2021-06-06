export default num => {
  const rule = /\b_?\w/g
  return num.replace(rule,n=>n.toUpperCase())
}