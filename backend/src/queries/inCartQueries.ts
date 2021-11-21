export const inCartQueries = {
  getProductInCart: ({ Category }) => {
    if (Category === 'ALL') {
      return `SELECT * FROM Product`
    } else {
      return `SELECT * FROM Product WHERE CATEGORY = ${Category}`
    }
  },

  addToIncart: ({ CitizenId, Brand, Name, Category, Price }) => {
    return `INSERT INTO Product (CitizenId, Brand, Name, Category, Price, ProductStatus ) VALUES
      (${CitizenId}, ${Brand}, ${Name}, ${Category}, ${Price}, 'A')`
  },

  deleteInCart: ({ CitizenId, Brand, Name, Category, Price }) => {
    return `INSERT INTO Product (CitizenId, Brand, Name, Category, Price, ProductStatus ) VALUES
      (${CitizenId}, ${Brand}, ${Name}, ${Category}, ${Price}, 'A')`
  },

  takeToOrder: ({ Category }) => {
    if (Category === 'ALL') {
      return `SELECT * FROM Product`
    } else {
      return `SELECT * FROM Product WHERE CATEGORY = ${Category}`
    }
  },
}
