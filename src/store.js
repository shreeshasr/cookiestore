import { configureStore } from "@reduxjs/toolkit"
import cookieReducer from './CookieSlice'
import viewCartReducer from './ViewCartSlice'

const store = configureStore({
    reducer: {
        cookie: cookieReducer,
        viewCart: viewCartReducer
      },
})

export default store