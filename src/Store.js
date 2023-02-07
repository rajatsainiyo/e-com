import  {configureStore} from "@reduxjs/toolkit";
import Reducer from "./E-commrace/Redux/Reducer";
const store=configureStore({

    reducer:{
        Reducer:Reducer
    }
})
export default store;