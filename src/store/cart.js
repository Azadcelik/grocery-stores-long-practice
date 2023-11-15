const ADD_CART = 'cart/ADD_CART';
export const addToCart = (id) => ({
    type: ADD_CART,
    payload: {
        id,
        count: 1
    }
})

export function cartReducer(state = {}, action) {

    switch (action.type) {
        // case POPULATE: {
        //    const normalizedByForEach= {}
        //    action.produce.forEach((pro) => normalizedByForEach[pro.id] = pro)
        //    return normalizedByForEach
        // }
        default:
            return state;
    }
}
