export const fetchGraphql = async ({
    resolver,
    variables
}) => {
    try {
        const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    query: resolver,
                    ...(variables && { variables })
                }
            )
        });
        const { data } = await response.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}