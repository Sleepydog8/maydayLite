export const productQueries = {
  getProducts: ({ Category }) => {
    if (Category === 'All') {
      return `SELECT * FROM Product WHERE ProductStatus = 'A'`
    } else {
      return `SELECT * FROM Product WHERE CATEGORY = '${Category}' AND ProductStatus = 'A'`
    }
  },

  getProductInStock: ({ CitizenID }) => {
    return `SELECT P.*
    FROM product P, stock S
    WHERE S.citizenID = '${CitizenID}' AND S.productID = P.productID`
  },

  deleteProduct: ({ ProductID }) => {
    return `DELETE from Product P where P.ProductId = '${ProductID}'`
  },

  stockProduct: () => {
    const insertToProduct = ({ CitizenID, Brand, Name, Category, Price }) => {
      return `INSERT INTO Product (CitizenID, Brand, Name, Category, Price, ProductStatus ) VALUES
      ('${CitizenID}', '${Brand}', '${Name}',' ${Category}', '${Price}', 'A')`
    }
    const insertToStock = ({ CitizenID, ProductID }) => {
      return `INSERT INTO Stock (CitizenID, ProductID, StockDateTime) VALUES
      ('${CitizenID}', '${ProductID}', NOW())`
    }

    return { insertToProduct, insertToStock }
  },
}
