export default function objectToArray(object) {
  return Object.keys(object).map(k => object[k]);
}
