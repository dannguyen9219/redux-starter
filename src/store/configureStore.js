// import { createStore } from "redux"; // Deprecated
import { legacy_createStore as createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
// import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";


export default function configureStore() {
    const store = createStore(
        reducer,
        devToolsEnhancer({ trace: true })
    );
    return store;
};