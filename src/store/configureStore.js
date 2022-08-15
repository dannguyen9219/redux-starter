// import { createStore } from "redux"; // Deprecated
// import { legacy_createStore as createStore} from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/functions";
import toast from "./middleware/toast";
import api from "./middleware/api";

export default function() {
    return configureStore({
        reducer: reducer,
        middleware: [
            logger({ destination: "console" }),
            func,
            toast,
            api,
        ]
    });
};