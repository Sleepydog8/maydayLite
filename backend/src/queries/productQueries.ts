export const productQueries = {
  getProducts: ({ Category }) => {
    if (Category === 'ALL') {
      return `SELECT * FROM Product`
    } else {
      return `SELECT * FROM Product WHERE CATEGORY = ${Category}`
    }
  },

  stockProduct: ({ CitizenId, Brand, Name, Category, Price }) => {
    return `INSERT INTO Product (CitizenId, Brand, Name, Category, Price, ProductStatus ) VALUES
    (${CitizenId}, ${Brand}, ${Name}, ${Category}, ${Price}, 'A')`
  },
}
