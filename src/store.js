import { createStore } from "redux";
import readCombinedReducers from "./reducers/index";

const store = createStore(readCombinedReducers);

export default store;