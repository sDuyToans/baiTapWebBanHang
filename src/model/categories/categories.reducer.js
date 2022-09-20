import { CATEGORIES_ACTION_TYPES } from "./categories.type";

const initialState = {
    productCategories: [
        {
            id: 1,
            name: 'Unisex T-shirt Black',
            imageUrl: 'http://dotilo.com/image/catalog/coupon/aotron/den.jpg',
            price: 100000,
            tax: 5000
        },
        {
            id: 2,
            name: 'Unisex T-Shirt  Blue',
            imageUrl: 'https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/15639005611xomn-ao-thun-nam-uniqlo-co-tron-xanh-duong-413485.jpg',
            price: 100000,
            tax: 5000
        }, {
            id: 3,
            name: 'Unisex T-Shirt DOTILO',
            imageUrl: 'http://dotilo.com/image/catalog/coupon/aotron/vang.jpg',
            price: 120000,
            tax: 6000
        },
    ],
    lastID: 4,
}

export const categoriesReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.UPDATE_ADD_PRODUCT_SUCCESS: 
            return { ...state, productCategories: payload}
        case CATEGORIES_ACTION_TYPES.UPDATE_ID:
            return { ...state, lastID: payload}
        default:
            return state;
    }
}