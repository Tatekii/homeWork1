export default num => {
    return num > 10000 ? Math.floor(num / 1000) + 'k' : num
}