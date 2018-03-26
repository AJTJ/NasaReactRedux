//imported from redux, allows us to pass rootreducer as an arguement
import { createStore, applyMiddleware } from "redux";

import promise from "redux-promise";

// import our reducers that change the state of our Store; all reducers compiled to 1
import rootReducer from "./reducers/index.js";

const Store = createStore(
   rootReducer,
   applyMiddleware(promise)
);

export default Store;

// because our payload is the axios request we are making, we must install middleware (redux-promise) since redux doesnt know how to deal with asynchronous actions

//What we we do with middleware is as follows

//Import applyMiddleware from "redux"

// Import Promise from "redux-promise"

// Pass a second argument inside our createStore() function
//The argument is called applyMiddleware() and it accepts any middleware
// we pass our promise middleware inside the applyMiddleware() function