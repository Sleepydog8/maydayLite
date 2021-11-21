export const orderQueries = {
  checkout: ({ CitizenId, Brand, Name, Category, Price }) => {
    return `INSERT INTO Product (CitizenId, Brand, Name, Category, Price, ProductStatus ) VALUES
        (${CitizenId}, ${Brand}, ${Name}, ${Category}, ${Price}, 'A')`
  },
}
