export function sortBy(fn, arr) {
  if (arguments.length === 1) {
    return arrHolder => sortBy(fn, arrHolder)
  }
  const arrClone = arr.concat()

  return arrClone.sort((a, b) => {
    const fnA = fn(a)
    const fnB = fn(b)

    return fnA < fnB ?
      -1 :
      fnA > fnB ?
        1 :
        0
  })
}
