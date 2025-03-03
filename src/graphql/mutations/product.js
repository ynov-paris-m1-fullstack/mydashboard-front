export const CREATE_PRODUCT = `
mutation AddProduct($input: ProductInput) {
    addProduct(input: $input) {
            productId
            name
            category
            price
            brand
            releaseYear
        }
    }
`