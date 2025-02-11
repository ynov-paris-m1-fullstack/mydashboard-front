export const GET_SALES_FOR_TABLE = `
    query getSales($limit: Int) {
        sales(limit: $limit) {
            saleId
            totalRevenue
            saleDate
        }
    }
`;