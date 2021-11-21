export const orderQueries = {
  checkout: ({ CitizenID }) => {
    return `select P.*
    from ordert O, product P
    where BuyerID = '${CitizenID}' AND O.orderID = P.orderID`
  },
}
