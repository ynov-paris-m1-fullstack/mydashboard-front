export const GET_STATS = `
    query Sales {
        getStats {
            totalOrder
            totalSales
            totalQuantity
            averageSaleAmount
        }
    }
`