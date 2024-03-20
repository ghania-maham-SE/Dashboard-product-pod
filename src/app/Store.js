import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/users/userSlice'
// import productReducer from '../features/products/productSlice'
// import categoryReducer from '../features/category/categorySlice'
// import brandReducer from '../features/brands/brandSlice'
// import orderReducer from '../features/orders/orderSlice'
// import tagProductReducere from '../features/tagProduct/tagProductSlice'
// import chatReducer from '../features/userChat/userChatSlice'
import changeStateSlice from '../features/changeState/changeStateSlice'
import homeReducere from '../webView/features/homeSlice/homeSlice'
import cartReducer from '../webView/features/addToCart/addtoCartSlice'
export default configureStore({
  reducer: {
    // User: userReducer,
    // Products:productReducer,
    // Categories:categoryReducer,
    // Brands:brandReducer,
    // Orders:orderReducer, 
    // tagProducts: tagProductReducere, 
    // Chat:chatReducer,
    changeState:changeStateSlice,
    HomeAPI:homeReducere,
    cart:cartReducer
},
});