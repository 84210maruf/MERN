
export const initialState = {

    basket: [],
    user: null,
    count: 1
};
// Selector
export const getBasketTotal = (basket) => (basket?.reduce((amount, item) => (item.price + amount) - item.discount, 0));
export const getBasketDiscountTotal = (basket) => (basket?.reduce((amount, item) => item.discount + amount, 0));
export const getBasketPriceTotal = (basket) => (basket?.reduce((amount, item) => item.price + amount, 0));


const reducer = (state, action) => {

    console.log('action in reducer : ', state);
    // eslint-disable-next-line default-case
    switch (action.type) {

        case 'ADD_TO_BASKET':
            // const index_ = state.basket.findIndex((basketItem) =>
            //     basketItem.id === action.item.id);
            // let newBasket_ = [...state.basket];

            // if (index_ !== action.item.id) {
            //     // at the position [index] remove 1 item
            //     newBasket_= [...state.basket, action.item]
            // }

            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            // remove all the same item
            /*return {
                ...state,
                basket: state.basket.filter(item => 
                    item.id !== action['item'].id)
            }*/
            // remove single item
            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.item.id);

            let newBasket = [...state.basket];

            if (index >= 0) {
                // at the position [index] remove 1 item
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Cant remove product (id: ${action.item.id}) as in not in basket`)
            }

            return {
                ...state,
                basket: newBasket
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            };

        case 'increment':
            return { ...state, count: state.count + 1 };

        case 'decrement':
            return { ...state, count: state.count - 1 };

        default:
            return state;
    }

};
export default reducer;