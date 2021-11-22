export const inCartQueries = {
  getProductInCart: ({ CitizenID }) => {
    return `SELECT P.* FROM product P, IN_CART I WHERE I.citizenid = '${CitizenID}' and I.productid = P.productid`
  },

  addToIncart: ({ CitizenID, ProductID, Price }) => {
    return `INSERT INTO in_cart (CitizenID, ProductID, Price, DateTime) VALUES ('${CitizenID}', '${ProductID}', '${Price}', NOW())`
  },

  deleteInCart: ({ CitizenID, ProductID }) => {
    return `delete from in_cart I where I.productid = '${ProductID}' and I.citizenid = ${CitizenID}`
  },

  takeToOrder: () => {
    const insertToOrder = ({ CitizenID }) => {
      return `INSERT INTO ordert (BuyerID, SysAccountNo, DAddressID, Price, OrderStatus, OrderDateTime ) VALUES 
      ( '${CitizenID}', '9999999990', '1', (select SUM(IC.price) from IN_CART IC Where IC.citizenID = '${CitizenID}') , "I", NOW())`
    }

    const updateProductSoldPrice = ({ CitizenID }) => {
      return `update product P, in_cart IC
    set P.soldprice = IC.price
    where P.productID = IC.productID and IC.citizenID = '${CitizenID}'`
    }

    const updateProductOrderID = ({ OrderID, CitizenID }) => {
      return `
    update product P, in_cart IC
    set P.orderID = '${OrderID}'
    where P.productID = IC.productID and IC.citizenID = '${CitizenID}'`
    }

    return { insertToOrder, updateProductSoldPrice, updateProductOrderID }
  },
}
