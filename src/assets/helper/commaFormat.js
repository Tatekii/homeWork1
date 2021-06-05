export default (num) => {
  const rule = /\d{1,3}(?=(\d{3})+$)/g;
  num = num.toString();
  return num.replace(rule, (match) => match + ",");
};
