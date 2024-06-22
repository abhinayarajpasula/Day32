import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "products": [
        {
            id: 1,
            title: "iPhone 9",
            price: 549,
            stock: 94,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1fRevaQbVfXS3punDlP0nD_q9LisHctXlg&s",
            quantity: 1
        },
        {
            id: 2,
            title: "iPhone X",
            price: 899,
            stock: 34,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRiE8OpzyqSU54AjcyQ-enzgA0ILBk4AS6Q&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUjH6s2wCX4guH0p3gaSWbuWUcmqAdY7lmw&s",
            quantity: 3
        },
        {
            id: 3,
            title: "iphone 12 pro",
            price: 1249,
            stock: 36,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaVRjp9pB5dI2pdANtX80tdg4zLXz05Ewuw&s",
            quantity: 5
        },
        {
            id: 4,
            title: "OPPOF19",
            price: 280,
            stock: 123,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1A6o8v4G5yu9sux4ZpjLZrUaL3wfy-X6Bw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAVLFPXD9TZxrDLNSoorR4a1sUEubfHUpFg&s",
            quantity: 2
        },
        {
            id: 5,
            title: "Huawei P30",
            price: 499,
            stock: 32,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaoJ1JhQjkCa8QJnMDbuakwbfQemoNBrw5uw&s",
            quantity: 8
        }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementQuantity: (state, action) => {
            console.log("products data: ", state.products);
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity < product.stock) {
                product.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity > 0) {
                product.quantity--;
            }
        }
    }
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;