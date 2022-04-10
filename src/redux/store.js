import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "./reducers/authReducer";
import topicReducer from "./reducers/topicReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
  authReducer,
  topicReducer,
  searchReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(Store);

export { Store, persistor };
