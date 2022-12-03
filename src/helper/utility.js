/**
 * First character of string in uppercase
 * @param text
 * @returns {string}
 */
export const ucFirst = text => text.charAt(0).toUpperCase() + text.slice(1)

/**
 * Prepare all gadgets for store
 * @param prods
 * @returns {{}}
 */
export const getProducts = (prods) => {
  const items = {}
  prods.map(item => items[item.category] = [])
  prods.map(item => items[item.category].push([item.brand, item.rating]))
  return items;
}

/**
 * Random float number
 * @returns {number}
 */
export const randFloat = () => Number((Math.random() * (9 - 4) + 4).toFixed(2))

/**
 * Random label
 * @returns {string}
 */
export const randLabel = () => new Date().getTime().toString().slice(10)

/**
 * Random column label
 * @returns {string}
 */
export const randColLabel = () => 'column' + randLabel()