const shortenText = text => {
    return text.split(' ').slice(0, 3).join("")
}
const searchProducts = (products, search) => {
    if (!search) return products
    const searchProducts = products.filter(p =>
        p.title.toLowerCase().includes(search)
    )
    return searchProducts
}
const filterProducts = (products, category) => {
    if (!category) return products
    const filteredProducts = products.filter(p =>
        p.category === category
    )
    return filteredProducts
}

const createQueryObject = (currentQuery, newQuery) => {
    console.log({ currentQuery, newQuery });
    if (newQuery.category === "all") {
        const { category, ...rest } = currentQuery
        return rest
    } if (newQuery.search === "") {
        const { search, ...rest } = currentQuery
        return rest

    }
    return { ...currentQuery, ...newQuery }
}
// get query from ulr
const getInitialQuery = searchParams => {
    const query = {}
    const catagory = searchParams.get("catagory")
    const search = searchParams.get("search")
    if (catagory) query.catagory = catagory
    if (search) query.search = search
    return query
}

const sumProducts = (products) => {


    const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0)
    const total = products.reduce((acc, cur) => acc + cur.quantity * cur.price, 0).toFixed(2)
    return { itemsCounter, total }
}

const sumPrice = (products) => {
    return products.reduce((acc, cur) => acc + cur.quantity * cur.price, 0).toFixed(2)
}

const sumQuantity = (products) => {
    return products.reduce((counter, product) => counter + product.quantity, 0)
}

const productQuantity = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id)
    if (index === -1) {
        return 0
    } else {
        return state.selectedItems[index].quantity
    }
}
export { shortenText, searchProducts, filterProducts, createQueryObject, getInitialQuery, sumProducts, productQuantity, sumPrice, sumQuantity }