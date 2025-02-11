export const GET_SALES_FOR_TABLE = `
    query getSales {
        sales {
            saleId
            totalRevenue
            saleDate
        }
    }
`;