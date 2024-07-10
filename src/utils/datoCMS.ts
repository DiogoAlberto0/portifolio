

export const getData = async <ResponseDataType>(query: string) => {

    const token = `${process.env.DATO_READ_ONLY_KEY}`

    const response = await fetch(
        'https://graphql.datocms.com/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query
            }),
        }
    )

    const { data } = await response.json()


    return data as ResponseDataType
}

export const createMessage = async (email: string, phone: string, message: string) => {

    const response = await fetch(
        'https://site-api.datocms.com/items',
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.DATO_FULL_ACCESS_KEY}`,
                Accept: 'application/json',
                'X-Api-Version': '3',
                'Content-Type': 'application/vnd.api+json'
            },
            body: JSON.stringify({
                data: {
                    type: 'item',
                    attributes: {
                        email,
                        phone,
                        message
                    },
                    relationships: {
                      item_type: {
                        data: {
                          type: 'item_type',
                          id: 'CmwnQ5jQQwCGKlXdf_kXgg'
                        }
                      }
                    }
                }
            })
        }
    )

    


    return response
}